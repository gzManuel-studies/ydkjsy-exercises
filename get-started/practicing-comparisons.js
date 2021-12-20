// const dayStart = "07:30";
// const dayEnd = "17:45";

// function scheduleMeeting(startTime,durationMinutes) {
//     // ..TODO..
// }

// scheduleMeeting("7:00",15);     // false
// scheduleMeeting("07:15",30);    // false
// scheduleMeeting("7:30",30);     // true
// scheduleMeeting("11:30",60);    // true
// scheduleMeeting("17:00",45);    // true
// scheduleMeeting("17:30",30);    // false
// scheduleMeeting("18:00",15);    // false
"use strict";
const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime, durationMinutes) {
    // ..TODO..
    let [hourStart, minutesStart] = startTime.split(':');
    let minutesEnd = parseInt(minutesStart) + durationMinutes;
    let hourEnd = hourStart;
    if (minutesEnd >= 60) {
        hourEnd = parseInt(hourStart) + 1;
        minutesEnd = minutesEnd - 60;
    }

    const endTime = (typeof hourEnd === 'number' && hourEnd < 10) ? '0'+hourEnd + ':' + minutesEnd : hourEnd + ':' + minutesEnd;

    // console.log(endTime);
    const r = (dayStart <= startTime && dayEnd >= endTime);
    console.log(r);
    return r
}

scheduleMeeting("7:00", 15);     // false
scheduleMeeting("07:15", 30);    // false
scheduleMeeting("7:30", 30);     // true
scheduleMeeting("11:30", 60);    // true
scheduleMeeting("17:00", 45);    // true
scheduleMeeting("17:30", 30);    // false
scheduleMeeting("18:00", 15);    // false