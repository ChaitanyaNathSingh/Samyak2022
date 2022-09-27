let colors = {
    mobile: [
        // gold theme
        {
            id: 0,
            primaryColor: '#cf9a2e',
            backgroundColor: '#28282B',
        },
        {
            id: 1,
            primaryColor: '#cf9a2e',
            backgroundColor: '#28282B',
        },
        {
            id: 2,
            primaryColor: '#cf9a2e',
            backgroundColor: '#28282B',
        },
    ],
    desktop: [
        // night theme (blue)
        {
            id: 3,
            primaryColor: '#cf9a2e',
            backgroundColor: 'rgba(0,2,11,255)'
        },
        // art theme (purple)
        {
            id: 4,
            primaryColor: '#ef4339',
            backgroundColor: '#2d112b'
        }
    ]
}

const getColorObj = (num) => {
    if (window.innerWidth <= 1150) {
        return colors.mobile[num];
    } else {
        return colors.desktop[num];
    }
}

export { getColorObj }