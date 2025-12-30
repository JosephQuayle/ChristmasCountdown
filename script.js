let x = setInterval(function() {

    let now = new Date();
    let currentYear = now.getFullYear();
    
    // 1. Define Christmas for the current year
    let christmasDay = new Date("December 25, " + currentYear + " 00:00:00").getTime();

    // 2. If today is past Christmas 2025, set target to Christmas 2026
    if (now.getTime() > christmasDay) {
        christmasDay = new Date("December 25, " + (currentYear + 1) + " 00:00:00").getTime();
    }

    let distance = christmasDay - now.getTime();

    // Time calculations
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // 3. Optimized "Leading Zero" display logic
    // String().padStart(2, '0') is the modern way to ensure 2 digits
    document.getElementById("days").innerHTML = String(days).padStart(2, '0') + ":";
    document.getElementById("hours").innerHTML = String(hours).padStart(2, '0') + ":";
    document.getElementById("mins").innerHTML = String(minutes).padStart(2, '0') + ":";
    document.getElementById("seconds").innerHTML = String(seconds).padStart(2, '0');

}, 1000);
