const endDate  =  "04 May 2023 10:23 AM";

document.getElementById("end-date").innerText = endDate;

const inputs = document.querySelectorAll("input")

function clock(){
    const end  = new Date(endDate);
    const now = new Date();
    // const difference = end-now; milliseconds
    const difference = (end-now)/1000;
    // it tells in seconds cuz /1000
    console.log(difference);

    if(difference<0) return;
    //convert into days (quotient)
    inputs[0].value = Math.floor(difference/3600/24)
    //convert into Hours(remainder)
    inputs[1].value = Math.floor(difference/3600)%24;
    //convert into Minutes
    inputs[2].value = Math.floor(difference/60)%60;
    //convert into Seconds
    inputs[3].value = Math.floor(difference)%60;


}

//initial call
clock();

//call for every 1sec
setInterval(()=>{

    clock()
},1000)

/*  
   1 day - 24 hr
   1 hr - 60 min
   60 min - 3600 sec 
*/