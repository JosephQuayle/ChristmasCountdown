let x = setInterval(function() {

    let now = new Date();
    let currentYear = now.getFullYear();
    
    // Target Christmas in local timezone
    let christmasTarget = new Date(currentYear, 11, 25, 0, 0, 0);

    // If today is past Christmas, set target to next year's Christmas
    if (now.getTime() > christmasTarget.getTime()) {
        christmasTarget = new Date(currentYear + 1, 11, 25, 0, 0, 0);
    }

    // FIX: Calculate the timezone offset difference between NOW and CHRISTMAS
    // This removes the 1-hour ghost discrepancy caused by summer vs winter time
    let dstOffset = (now.getTimezoneOffset() - christmasTarget.getTimezoneOffset()) * 60 * 1000;

    // Apply the offset modification to the countdown distance
    let distance = (christmasTarget.getTime() - now.getTime()) + dstOffset;

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
