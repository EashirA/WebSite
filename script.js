
/* Time to LIA */
function updateTimer(deadline) {
    var time = deadline - new Date();
    return {
        'days': Math.floor(time / (1000 * 60 * 60 * 24)),
        'hours': Math.floor((time / (1000 * 60 * 60)) % 24),
        'minutes': Math.floor((time / 1000 / 60) % 60),
        'seconds': Math.floor((time / 1000) % 60),
        'total': time
    };
}

function startTimer(id, deadline) {
    var timerInterval = setInterval(function () {
        var clock = document.getElementById(id);
        var timer = updateTimer(deadline);

        clock.innerHTML = '<span>' + timer.days + '</span>'
            + '<span>' + timer.hours + '</span>'
            + '<span>' + timer.minutes + '</span>'
            + '<span>' + timer.seconds + '</span>';

        if (timer.total < 1) {
            clearInterval(timerInterval);
            clock.innerHTML = '<span>0</span><span>0</span><span>0</span><span>0</span>';
        }
    }, 1000);
}


window.onload = function () {
    var deadline = new Date("April 08, 2019 00:00:00");
    startTimer("clock", deadline);
};


// a function for send message.

function sendInfo(event) {

    alert("Hej "+ document.getElementById("names").value+"! Ditt meddelande har skickats")
            
}