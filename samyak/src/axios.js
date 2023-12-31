import axios from 'axios';

// const baseURL = 'http://localhost:8000/api/';

const baseURL = process.env.REACT_APP_API_URL + '/api/';

export { baseURL };
// console.log(baseURL);

let storage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
let access_token = storage ? storage.user[0].tokens.access_token : null;
let csrftoken = localStorage.getItem('csrftoken') ? localStorage.getItem('csrftoken') : null;

const axiosInstance = axios.create({
	withCredentials: true,
	baseURL: baseURL,
	timeout: 120000,
	headers: {
		Authorization: access_token
			? 'JWT ' + access_token
			: null,
		'X-CSRFToken': csrftoken,
		'Content-Type': 'application/json',
		accept: 'application/json',
	}, 
});

axiosInstance.interceptors.response.use(
	(response) => {
		return response;
	},
	async function (error) {
		const originalRequest = error.config;

		if (typeof error.response === 'undefined') {
			alert(
				'A server/network error occurred. Please try again later.'
			);
			return Promise.reject(error);
		}

		if (
			error.response.status === 401 &&
			originalRequest.url === baseURL + 'token/refresh/'
		) {
			window.location.href = '/login/';
			return Promise.reject(error);
		}

		if (
			error.response.data.code === 'token_not_valid' &&
			error.response.status === 401 &&
			error.response.statusText === 'Unauthorized'
		) {
			let user = localStorage.getItem('user');
			user = JSON.parse(user);
			const refreshToken = user.user[0].tokens.refresh_token;

			if (refreshToken) {
				const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));

				// exp date in token is expressed in seconds, while now() returns milliseconds:
				const now = Math.ceil(Date.now() / 1000);
				console.log(tokenParts.exp);

				if (tokenParts.exp > now) {
					return axiosInstance
						.post('/token/refresh/', { refresh: refreshToken })
						.then((response) => {
							user.user[0].tokens.access_token = response.data.access;
							localStorage.setItem('user', JSON.stringify(user));
							// localStorage.setItem('access_token', response.data.access);
							// localStorage.setItem('refresh_token', response.data.refresh);

							axiosInstance.defaults.headers['Authorization'] =
								'JWT ' + response.data.access;
							originalRequest.headers['Authorization'] =
								'JWT ' + response.data.access;

							return axiosInstance(originalRequest);
						})
						.catch((err) => {
							console.log(err);
						});
				} else {
					console.log('Refresh token is expired', tokenParts.exp, now);
					localStorage.setItem('user', null);
					window.location.href = '/login';
				}
			} else {
				console.log('Refresh token not available.');
				localStorage.setItem('user', null);
				window.location.href = '/login';
			}
		}

		// specific error handling done elsewhere
		return Promise.reject(error);
	}
);

export default axiosInstance;