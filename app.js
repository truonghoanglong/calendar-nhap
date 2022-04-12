const date = new Date();

const renderCalendar = () => {

    const monthsDays = document.querySelector(".days")

    const lastDay = new Date(date.getFullYear(),date.getMonth()+1,0).getDate(); //so ngay cua thang
    
    const preLastDay = new Date(date.getFullYear(),date.getMonth()+1,0).getDate(); //so ngay cua thang
    
    const firstDayIndex = date.getDate() //ngay hien tai
    
    const lastDayIndex = new Date(date.getFullYear(),date.getMonth()+1,0).getDay(); ///so ngay cua thang
    
    const nextDay = 7 -lastDayIndex -1;
    
    
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    
    document.querySelector(".date h1").innerHTML = months[date.getMonth()]
    document.querySelector(".date p").innerHTML = new Date().toDateString()
    
    let days = "";
    
    for(let x = firstDayIndex; x > 0 ; x --){
        days = days + `<div class="prev-date">${preLastDay-x}</div>`
    }
    
    for(let i =1; i<=lastDay; i++){
        if (i === new Date().getDate() &&date.getMonth() === new Date().getMonth()) {
            days += `<div class="today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
            monthsDays.innerHTML = days;
        } 
    }
    
    for(let j = 1; j<=nextDay;j++){
        days+= `<div class="next-date">${j}</div>`;
        monthsDays.innerHTML =days;
    }
    
    
}



document.querySelector(".bxs-left-arrow").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

document.querySelector(".bxs-right-arrow").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

renderCalendar();
