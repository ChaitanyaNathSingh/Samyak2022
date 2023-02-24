// import axios from "axios";
import axiosInstance from "../axios";
import { baseURL } from "../axios";
import emailjs from '@emailjs/browser';

class Validations {
    constructor(flash) {
        this.flash = flash;
        this.register = document.getElementById('register');
    }
    async serverValidations(data, navigate, setWaiting, serverUrl) {

        await axiosInstance
            .post(`${baseURL}/../../home/${serverUrl}`, data)
            .then(response => {
                if(response.data.status) {
                    // console.log(response.data)
                    // localStorage.setItem('csrftoken', response.data.csrftoken);
                    localStorage.setItem('user', JSON.stringify(response.data.user));
                    // setIsAuth(true);
                    // this.flash(response.data.message+', please wait...', 'success');
                    setWaiting(true);
                    let form = {
                        from_name: 'samyak',
                        to_name: data.first_name+' '+data.last_name,
                        message: `Your OTP is ${response.data.otp}`,
                        to_email: data.email
                    }
                    // emailjs.sendForm('service_a5xt44n', 'template_w7x148g', form.current, 'SRbHPun0G_wQLdZu_') // emailjs official account
                    emailjs.send('service_hnlp0jp', 'template_c7ujukg', form, 'Kx2XUnBQJ2ciSewte')
                        .then((result) => {
                            window.location.href = '/'+(serverUrl==='register'?'otp':'sport-otp');
                        }, (error) => {
                            console.log(error.text);
                            navigate('/profile');
                        });
                    // response.data.otp going to hold the otp, got it from server
                    // we will send the otp to the user email
                    // sending user to other page to enter otp

                    // navigate('/profile');
                    
                }
                else {
                    setWaiting(false);
                    this.flash(response.data.message, 'error');
                    this.register.disabled = false;
                    this.register.value = "Register";
                }
            })
            .catch(error => {
                setWaiting(false);
                this.flash(error.message, 'error');
                this.register.disabled = false;
                this.register.value = "Register";
                console.log(error); 
            });
        // await axios
        //     .post(baseURL+"users/", data)
        //     .then((res) => {
        //         // console.log(res.data);
        //         if(!res.data.status) {
        //             this.flash(res.data.message, 'error');
        //             this.register.disabled = false;
        //         }
        //         else {
        //             this.flash('Registration Successful', 'success');
        //         }
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //         this.register.disabled = false;
        //     });
    }

    clientValidations(data) {
        let password = data.password;
        let phoneno = data.phone;

        let year = data.year;
        let college = data.college;
        let gender = data.gender;
        let branch = data.branch;

        let game = data.game;
        // let teamsize = data.teamsize;

        let isValid = true;
        if(password && password.length < 8) {
            this.flash('Password must be at least 8 characters long', 'error');
            this.register.disabled = false;
            isValid = false;
        }
        if(phoneno && phoneno.length !== 10) {
            this.flash('Phone number must be exactly 10 digits', 'error');
            this.register.disabled = false;
            isValid = false;
        }
        if(year && year === 'Select Year') {
            this.flash('Please select year', 'error');
            this.register.disabled = false;
            isValid = false;
        }
        if(college === 'Select College') {
            this.flash('Please select college', 'error');
            this.register.disabled = false;
            isValid = false;
        }
        if(gender === 'Select Gender') {
            this.flash('Please select gender', 'error');
            this.register.disabled = false;
            isValid = false;
        }
        if(branch && branch === 'Select Department') {
            this.flash('Plese select department', 'error');
            this.register.disabled = false;
            isValid = false;
        }
        if(game && game === 'Select Game') {
            this.flash('Please select game', 'error');
            this.register.disabled = false;
            isValid = false;
        }
        // check if phoneno is numeric
        // if phoneno length is greater then 0
        if(phoneno && phoneno.length > 0) 
        for(let i = 0; i < phoneno.length; i++) {
            if(isNaN(parseInt(phoneno[i]))) {
                this.flash('Phone number must be numeric', 'error');
                isValid = false;
                break;
            }
        }
        if(this.register)
        this.register.disabled = false;
        return isValid;
    }

}

export default Validations;