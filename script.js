let x = setInterval(function() {

    let now = new Date();
    let currentYear = now.getFullYear();
    
    // FIX: Use numeric arguments to guarantee local timezone evaluation
    let christmasDay = new Date(currentYear, 11, 25, 0, 0, 0).getTime();

    // If today is past Christmas, set target to next year's Christmas
    if (now.getTime() > christmasDay) {
        christmasDay = new Date(currentYear + 1, 11, 25, 0, 0, 0).getTime();
    }

    let distance = christmasDay - now.getTime();

    // Time calculations
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Optimized "Leading Zero" display logic
    document.getElementById("days").innerHTML = String(days).padStart(2, '0') + ":";
    document.getElementById("hours").innerHTML = String(hours).padStart(2, '0') + ":";
    document.getElementById("mins").innerHTML = String(minutes).padStart(2, '0') + ":";
    document.getElementById("seconds").innerHTML = String(seconds).padStart(2, '0');

}, 1000);
