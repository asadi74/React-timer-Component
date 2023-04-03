import react, { useEffect, useState } from "react";
import './timer-component.css'

const TimerComponent = ({ callBackFinishtimer = {}, contStyle = "", initialMinute = 0, initialSeconds = 5, ...props }) => {

    const [minutes, setMinutes] = useState(initialMinute);
    const [seconds, setSeconds] = useState(initialSeconds);
    const [finishTimer, setFinishTimer] = useState(false);
    useEffect(() => {

        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000)
        return () => {
            clearInterval(myInterval);
        };
    });

    const HandleMin = () => {
        if (minutes < 10) {

            return (
                <div className="cont-min-handle">
                    <div className=" number-Main-style">0</div>
                    <div className=" number-Main-style"> {minutes}</div>
                </div>
            )
        } else {
            let min = minutes.toString();
            return (
                <div className="cont-min-handle">
                    <div className=" number-Main-style">{min.charAt(0)}</div>
                    <div className=" number-Main-style"> {min.charAt(1)}</div>
                </div>
            )
        }
    }
    const HandleSec = () => {

        if (seconds < 10) {

            return (
                <div className="cont-min-handle">
                    <div className=" number-Main-style">0</div>
                    <div className=" number-Main-style"> {seconds}</div>
                </div>
            )
        } else {

            let sec = seconds.toString()
            return (
                <div className="cont-min-handle">
                    <div className=" number-Main-style">{sec.charAt(0)}</div>
                    <div className=" number-Main-style"> {sec.charAt(1)}</div>
                </div>
            )
        }
    }




    const Timer = () => {
        if (minutes === 0 && seconds === 0) {
            callBackFinishtimer(true)
            return (
                null
            )
        } else {

            return (
                <div className={`${contStyle} cont-div`}>
                    {HandleMin()}
                    :
                    {HandleSec()}
                </div>
            )
        }

    }

    return (
        Timer()
    )
}

export { TimerComponent };


// EX
{/* <TimerComponent
initialSeconds={4}
initialMinute = {0}
callBackFinishtimer={(e)=>console.log('eeeeeee',e)}
contStyle={"aaaaaa"}
/> */}
