import { useState } from "react";

export const useCountDownTimer = (endDate: string) => {
  const [countDownTime, setCountDownTime] = useState("");

  let end: any = new Date(endDate);
  const _second = 1000;
  const _minute = _second * 60;
  const _hour = _minute * 60;
  const _day = _hour * 24;
  let timer: any;

  const showRemaining = () => {
    let now: any = new Date();
    let distance = end - now;

    if (distance < 0) {
      clearInterval(timer);
      setCountDownTime("");
      return;
    }
    let days = Math.floor(distance / _day);
    let hours = Math.floor((distance % _day) / _hour);
    let minutes = Math.floor((distance % _hour) / _minute);
    let seconds = Math.floor((distance % _minute) / _second);
    setCountDownTime(`${hours + days * 60}:${minutes}:${seconds} 남음`);
  };

  timer = setInterval(showRemaining, 1000);

  return countDownTime;
};
