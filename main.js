const day = document.querySelector(".date-day");
const date = document.querySelector(".date");
const month = document.querySelector(".date-month");
const year = document.querySelector(".date-year");
const digitalClock = document.querySelector(".digital-clock")
const arrowSeconds = document.querySelector(".clock-seconds-arrow")
const arrowSMinutes = document.querySelector(".clock-minutes-arrow")
const arrowHours = document.querySelector(".clock-hours-arrow")

const namesOfmonth = [
    "січень",
    "лютий",
    "березень",
    "квітень",
    "Травень",
    "Червень",
    "Липень",
    "Серпень",
    "Вересень",
    "Жовтень",
    "Листопад",
    "Грудень"
];
const namesOftheday = [
    "Неділя",
    "Понеділок",
    "Вівторок",
    "Середа",
    "Четверг",
    "П'ятниця",
    "субота"
]


setInterval(()=>{
    const currentTime = new Date();
    const currentDay = namesOftheday[currentTime.getDay()];
    const currentDate = currentTime.getDate();
    const currentMonth = namesOfmonth[currentTime.getMonth()];
    const currentYear = currentTime.getFullYear();
    const currentHours = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();
    const currentSeconds = currentTime.getSeconds();


    const changeSeconds = 360 / 60 * currentSeconds;
    const changeMinutes = 360 / 60 * currentMinutes; 
    const changeHours = (360 / 12) * currentHours + (360/12/60) * currentMinutes; 

    const formatTime = `${currentHours.toString().padStart(2,'0')}:
    ${currentMinutes.toString().padStart(2,'0')}:
    ${currentSeconds.toString().padStart(2,'0')}`

    day.textContent = currentDay;
    date.textContent = currentDate;
    month.textContent = currentMonth;
    year.textContent = currentYear;
    digitalClock.textContent = `Поточний час: ${formatTime}`;

    arrowSeconds.style.transform = `rotate(${changeSeconds}deg)`;
    arrowSMinutes.style.transform = `rotate(${changeMinutes}deg)`;
    arrowHours.style.transform = `rotate(${changeHours}deg)`;

},1000);

