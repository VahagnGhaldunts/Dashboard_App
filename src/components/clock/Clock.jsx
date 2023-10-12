import React, { useEffect, useState } from "react";
import { NumZero } from "../../utils/NumZero";
import { weekDay } from "../../utils/weekDay";
import { monthName } from "../../utils/monthName";
import "./Clock.modules.css";
function Clock() {
  const [Clock, setClock] = useState({ h: "00", m: "00", s: "00" });
  const [appDate, setDate] = useState({ d: "00", m: "Month", y: "0000" });
  const [week, setWeek] = useState("WeekDay");
  useEffect(() => {
    setInterval(() => {
      let time = new Date();

      setClock({
        h: NumZero(time.getHours()),
        m: NumZero(time.getMinutes()),
        s: NumZero(time.getSeconds()),
      });
      setWeek(weekDay(time.getDay()));
      setDate({
        d: NumZero(time.getDate()),
        m: monthName(time.getMonth()),
        y: time.getFullYear(),
      });
    }, 1000);
  }, []);
  return (
    <div className="position-fixed w-100 h-100 d-flex justify-content-center align-items-center bg-black-900  ">
      <div className="text-center">
        <div className="clock">
          {`${Clock.h}:${Clock.m} `}
          <span className="seconds">{Clock.s}</span>
        </div>
      </div>
    </div>
  );
}

export default Clock;
