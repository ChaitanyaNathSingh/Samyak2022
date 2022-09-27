import { useEffect } from "react";
import './CountDown.css';

const CountDown = () => {
    useEffect(() => {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
    
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();
    let nextYear = yyyy + 1;
    let dayMonth = "10/17/";
    let birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
        birthday = dayMonth + nextYear;
    }
    //end

    const countDown = new Date(birthday).getTime();
    let x = setInterval(() => {
        const now = new Date().getTime();
        let distance = countDown - now;
        document.getElementById("countdown__days").innerText = Math.floor(distance / day);
        document.getElementById("countdown__hours").innerText = Math.floor((distance % day) / hour);
        document.getElementById("countdown__minutes").innerText = Math.floor((distance % hour) / minute);
        document.getElementById("countdown__seconds").innerText = Math.floor((distance % minute) / second);

        if(distance < 0) {
            document.getElementById("countdown__headline").innerText = "It's my birthday!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("countdown__content").style.display = "block";
            clearInterval(x);
        }
    }, 1000);
    }, []);
    return(
        <>
            <div class="countdown__container">
                <h1 id="countdown__headline">Countdown to Samyak</h1>
                <div id="countdown">
                    <ul>
                    <li><span id="countdown__days"></span>days</li>
                    <li><span id="countdown__hours"></span>Hours</li>
                    <li><span id="countdown__minutes"></span>Minutes</li>
                    <li><span id="countdown__seconds"></span>Seconds</li>
                    </ul>
                </div>
                <div id="countdown__content" class="countdown__emoji">
                    <span>🥳</span>
                    <span>🎉</span>
                    <span>🎂</span>
                </div>
            </div>
        </>
    );
}

export default CountDown;