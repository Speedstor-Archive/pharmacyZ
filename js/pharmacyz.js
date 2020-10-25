function loginPatient(){
    //logo
    document.getElementById("logo-card").style.paddingTop = "0px";
    document.getElementById("logo-card").style.paddingBottom = "0px";

    //patient info
    document.getElementById("patientInfo").style.opacity = "0";
    document.getElementById("patientInfo").style.transition = "100ms ease-in-out all";
    document.getElementById("patientInfo").style.display = "block";

    document.getElementById("scanPrompt").style.opacity = "0";
    document.getElementById("scanPrompt").style.transition = "100ms ease-in-out all";
    setTimeout(() => {
        document.getElementById("patientInfo").style.opacity = "1";
        document.getElementById("scanPrompt").style.display = "none";
        document.getElementById("exitButton").style.display = "inline-block";
    }, 500)

}

function exitPatient(){
    //logo
    document.getElementById("logo-card").style.paddingTop = "20px";
    document.getElementById("logo-card").style.paddingBottom = "20px";

    //patient info
    document.getElementById("scanPrompt").style.opacity = "0";
    document.getElementById("scanPrompt").style.transition = "100ms ease-in-out all";
    document.getElementById("scanPrompt").style.display = "block";

    document.getElementById("patientInfo").style.opacity = "0";
    document.getElementById("patientInfo").style.transition = "100ms ease-in-out all";
    setTimeout(() => {
        document.getElementById("scanPrompt").style.opacity = "1";
        document.getElementById("patientInfo").style.display = "none";
        document.getElementById("exitButton").style.display = "none";
    }, 500)

}

function toggleBackground(){ 
    if(document.getElementById("appWrap").style.background == "radial-gradient(circle, rgb(255, 255, 251) 0%, rgb(239, 250, 239) 100%)"){
        document.getElementById("appWrap").style.background = "url(./img/background1.jpg)";
    }else{
        document.getElementById("appWrap").style.background = "radial-gradient(circle, rgb(255, 255, 251) 0%, rgb(239, 250, 239) 100%)"
    }
}