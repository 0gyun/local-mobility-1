const scenario1 = document.querySelector("#scn1");
const scenario2 = document.querySelector("#scn2");
const func = document.querySelector("#func");

const scn1_bar = scenario1.querySelector("img");
const scn2_bar = scenario2.querySelector("img");
const func_bar = func.querySelector("img");

const video = document.querySelector("#main_video");

var barImage = ['./images/black_line.png', './images/gray_line.png'];
var colorList = ["#000000", "#989898"];
var scenarioList = [scenario1, scenario2, func];
var barList = [scn1_bar, scn2_bar, func_bar];

function changeScenraio(num){   
    let i, j; 
    for(i = 0; i < 3; i++){
        for(j = 1; j <= 3; j++){
            if(i == num){
                barList[i].src = barImage[0];
                scenarioList[i].children[j].style.color = colorList[0];
            }else{
                barList[i].src = barImage[1];
                scenarioList[i].children[j].style.color = colorList[1];
            }
        }
    }
}

function timeHandler(){
    const t = parseFloat(video.currentTime).toFixed(2);
    if(t < 47.19 && t >= 0){
        changeScenraio(0);
    }
    else if(t<84.09 && t >= 47.19){
        changeScenraio(1);
    }
    else{
        changeScenraio(2);
    }
    
}

function scnClickEvent(){
    switch (this) {
        case scenario1:
            video.currentTime = 0;
            changeScenraio(0);
            break;
        
        case scenario2:
            video.currentTime = 47.19;
            changeScenraio(1);
            break;

        case func:
            video.currentTime = 84.09;
            changeScenraio(2);
            break;

        default:
            break;
    }
}

video.addEventListener("timeupdate", timeHandler);

scenario1.addEventListener("click", scnClickEvent);
scenario2.addEventListener("click", scnClickEvent);
func.addEventListener("click", scnClickEvent);




