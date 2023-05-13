//date we are counting to
const christmasDay = new Date("December 25, 2023 00:00:00").getTime();

//update every second
let x = setInterval(function(){

    //get todays date and time
    let now = new Date().getTime();

    //Find distance between christmas and now
    let distance = christmasDay - now;

    //Time calculations for days, hours, mins, secs
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //display result in the correct element
    document.getElementById("days").innerHTML = days + ":";
    document.getElementById("hours").innerHTML = hours + ":";
    document.getElementById("mins").innerHTML = minutes + ":";
    document.getElementById("seconds").innerHTML = seconds;

    //When unit becomes less than 10, a 0 is added infront.
    if (days < 10) {
        document.getElementById("days").innerHTML = "0" + days + ":";
    }else if (hours < 10) {
        document.getElementById("hours").innerHTML = "0" + hours + ":";
    }else if (minutes  < 10) {
        document.getElementById("mins").innerHTML = "0" + minutes + ":";
    }else if (seconds < 10) {
        document.getElementById("seconds").innerHTML = "0" + seconds;
    }
})
