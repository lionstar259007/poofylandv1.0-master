"use client";
import React from "react";
import { TimerContainer } from "./TimerContainer";
import { useEffect, useState } from "react";

export default function Header() {
  const [time, setTime] = useState<number>(18);
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  const timeToDays = time * 60 * 60 * 24 * 1000;

  let countDownDate = new Date().getTime() + timeToDays;
  useEffect(() => {
    var updateTime = setInterval(() => {
      var now = new Date().getTime();

      var difference = countDownDate - now;

      var newDays = Math.floor(difference / (1000 * 60 * 60 * 24));
      var newHours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var newMinutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      var newSeconds = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(newDays);
      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);

      if (difference <= 0) {
        clearInterval(updateTime);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    });

    return () => {
      clearInterval(updateTime);
    };
  }, [time]);

  return (
    <header id="home" className="section viewport-header centered content">
      <div className="main-event">
        <div
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-easing="ease-in"
        >
          <div className="centered">
            <img src="/imgs/logo.png" className="event-logo" alt="" />
          </div>
          <br></br>

          <a
            href="https://poofyland.shop/register"
            target="_blank"
            className="centered"
          >
            <img src="/imgs/join-beta.png" className="event-img" alt="" />
          </a>
          <TimerContainer
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
          />
        </div>
        <div className="centered" style={{marginTop:30}}>
          <a
            href="https://poofyland.shop/register"
            target="_blank"
            style={{ width: 170, height: 20 }}
          >
            <img src="/imgs/sign-up.png" className="signup-img" alt="" />
          </a>
        </div>
      </div>
    </header>
  );
}
