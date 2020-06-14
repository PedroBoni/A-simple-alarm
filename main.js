const time = document.getElementById("time");
function timeF(){
    let secounds = 60;
    let minutes = 30;
    let hours = 8;
    let indexM = 0;
    setInterval(() => {
        secounds--;
        if(secounds == 59)
            minutes--;
        if(indexM == 0)
            if(minutes == 59){
                hours--;
                indexM = 1
            }
        if(secounds == 0)
            secounds = 60;
        if(minutes == 0){
            minutes = 60;
            indexM = 0;
        }
        if(hours == 0)
            document.querySelector("audio").play();
        time.innerHTML = `${hours}:${minutes}:${secounds}`
    }, 1000);
}
timeF();