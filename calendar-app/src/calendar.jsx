import React, { useEffect, useState } from "react";
import "./calendar.css";

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [calendarData, setCalendarData] = useState({
        month: "",
        year: "",
        daysHTML: "",
        dayName: ""
    });

    const months = [
        "Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie",
        "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"
    ];

    useEffect(() => {
        updateCalendar();
    }, [currentDate]);

    const updateCalendar = () => {
        const now = currentDate;
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth();
        const currentDay = now.getDate();
        
        let firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
        firstDayOfMonth = (firstDayOfMonth === 0) ? 6 : firstDayOfMonth - 1;

        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        const dayName = now.toLocaleString("ro-RO", { weekday: "long" });
        const monthYear = `${currentDay} ${months[currentMonth]} ${currentYear}`;

        let daysHTML = "";
        let dayCounter = 1;

        for (let i = 0; i < 6; i++) {
            let weekHTML = "<div>";
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < firstDayOfMonth) {
                    weekHTML += `<span class="last-month"></span>`;
                } else if (dayCounter > daysInMonth) {
                    weekHTML += `<span class="last-month"></span>`;
                } else {
                    const activeClass = dayCounter === currentDay ? "active" : "";
                    weekHTML += `<span class="${activeClass}">${dayCounter}</span>`;
                    dayCounter++;
                }
            }
            weekHTML += "</div>";
            daysHTML += weekHTML;
        }

        setCalendarData({
            month: monthYear,
            year: currentYear,
            daysHTML,
            dayName
        });
    };

    return (
        <div className="container">
            <div className="calendar">
                <div className="front">
                    <div className="current-date">
                        <h1>{calendarData.dayName}</h1>
                        <h1>{calendarData.month}</h1>
                    </div>
                    <div className="current-month">
                        <ul className="week-days">
                            <li>LUNI</li>
                            <li>MARȚI</li>
                            <li>MIERCURI</li>
                            <li>JOI</li>
                            <li>VINERI</li>
                            <li>SÂMBĂTĂ</li>
                            <li>DUMINICĂ</li>
                        </ul>
                        <div
                            className="weeks"
                            dangerouslySetInnerHTML={{ __html: calendarData.daysHTML }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calendar;
