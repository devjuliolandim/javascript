const LABEL = document.getElementById('time')

setInterval(update, 1000)

function update(){

    let date = new Date()
    LABEL.innerHTML = formatTime(date)

    function formatTime(date){

        let hours = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()
        let amOrPm = hours >= 12 ? "PM" : "AM"

        hours = (hours%12) || 12

        seconds = formatZero(seconds)
        minutes = formatZero(minutes)
        hours = formatZero(hours)


        return `${hours}:${minutes}:${seconds} ${amOrPm}`
    }

    function formatZero(seconds){
        
        seconds = seconds.toString()
        
       return seconds.length <2 ? "0"+ seconds : seconds
    }
}