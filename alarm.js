console.log('alarm');

function doubleDigit(unit){
    return unit<10?"0"+unit:unit;

}

function currentTime(){
    let date = new Date();
    let hour= date.getHours();
    hour = doubleDigit(hour);

    const ampm = hour > 12 ?"PM":"Am";
    hour = hour>12?hour-12:hour;
    
    
    let minute = date.getMinutes();
    minute = doubleDigit(minute);
    

    let seconds = date.getSeconds();
    seconds = doubleDigit(seconds);
    

    document.getElementById("clock").innerHTML = `${hour}:${minute}:${seconds} ${ampm}`
    }

    setInterval(currentTime, 1000);

    let alarmTime = null;
    let alarmTimeOut = null;

    function setAlarm(){
        let inputAlarmTime = document.getElementById("alarmTime").value;
        if(!inputAlarmTime){
            alert("Please enter a valid time.");
            return;
        }

        // Convert the alarm time to a date object
        let current = new Date();
        let [alarmHours,alarmMinutes] = inputAlarmTime.split(':');

        let alarmDate = new Date(current.getFullYear(),current.getMonth(), current.getDate(), alarmHours, alarmMinutes, 0);

        if(alarmDate < current){
            // If the alarm time has already passed for today, set it for tomorrow

            alarmDate.setDate(alarmDate.getDate() + 1);
        }
        let timeToAlarm = alarmDate.getTime() - current.getTime();
        alarmTimeOut = setTimeout(triggerAlarm, timeToAlarm);

        document.getElementById("message").innerText = `Alarm is set for ${inputAlarmTime}`;
    }

    function triggerAlarm(){
        let alarmSound = document.getElementById('alarmSound');
        alarmSound.play();  // Play the alarm sound
        alert('Alarm is ringing! ');
        document.getElementById("message").innerText = '';
        // Clear the alarm message after it rings
    }

    document.getElementById("setAlarm").addEventListener("click",setAlarm)
// document.getElementById('setAlarm').addEventListener("click",()=>{
//     let alarmtime = document.getElementById("alarmTime").value;

//     alert("you have set alarm for "+alarmtime)
//     console.log(alarmtime);
   
// })
