const scenario1 = document.querySelector("#scn1");
const scenario2 = document.querySelector("#scn2");
const scenario3 = document.querySelector("#scn3");
const func = document.querySelector("#func");

const scn1_bar = scenario1.querySelector("img");
const scn2_bar = scenario2.querySelector("img");
const scn3_bar = scenario3.querySelector("img");
const func_bar = func.querySelector("img");

const video = document.querySelector("#main_video");

function timeHandler(){
    const t = parseFloat(video.currentTime/video.duration).toFixed(2);
    if(t < 0.25){
        scn1_bar.src = "./images/black_line.png";
        scn2_bar.src = "./images/gray_line.png";
        scn3_bar.src = "./images/gray_line.png";
        func_bar.src = "./images/gray_line.png";
    }
    else if(t<0.5){
        scn1_bar.src = "./images/gray_line.png";
        scn2_bar.src = "./images/black_line.png";
        scn3_bar.src = "./images/gray_line.png";
        func_bar.src = "./images/gray_line.png";
    }
    else if(t<0.75){
        scn1_bar.src = "./images/gray_line.png";
        scn2_bar.src = "./images/gray_line.png";
        scn3_bar.src = "./images/black_line.png";
        func_bar.src = "./images/gray_line.png";
    }
    else{
        scn1_bar.src = "./images/gray_line.png";
        scn2_bar.src = "./images/gray_line.png";
        scn3_bar.src = "./images/gray_line.png";
        func_bar.src = "./images/black_line.png";
    }
    
}

function scnClickEvent(){
    switch (this) {
        case scenario1:
            video.currentTime = 0;
            scn1_bar.src = "./images/black_line.png";
            scn2_bar.src = "./images/gray_line.png";
            scn3_bar.src = "./images/gray_line.png";
            func_bar.src = "./images/gray_line.png";
            break;
        
        case scenario2:
            video.currentTime = video.duration * 0.25;
            scn1_bar.src = "./images/gray_line.png";
            scn2_bar.src = "./images/black_line.png";
            scn3_bar.src = "./images/gray_line.png";
            func_bar.src = "./images/gray_line.png";
            break;

        case scenario3:
            video.currentTime = video.duration * 0.5;
            scn1_bar.src = "./images/gray_line.png";
            scn2_bar.src = "./images/gray_line.png";
            scn3_bar.src = "./images/black_line.png";
            func_bar.src = "./images/gray_line.png";
            break;

        case func:
            video.currentTime = video.duration * 0.75;
            scn1_bar.src = "./images/gray_line.png";
            scn2_bar.src = "./images/gray_line.png";
            scn3_bar.src = "./images/gray_line.png";
            func_bar.src = "./images/black_line.png";
            break;

        default:
            break;
    }
}

video.addEventListener("timeupdate", timeHandler);

scenario1.addEventListener("click", scnClickEvent);
scenario2.addEventListener("click", scnClickEvent);
scenario3.addEventListener("click", scnClickEvent);
func.addEventListener("click", scnClickEvent);




