const progressBar = document.querySelector("#progress");
const ctrlIcon = document.querySelector(".play i");
const song  = document.querySelector("audio");

song.onloadedmetadata = function(){
    progressBar.max = song.duration;
    progressBar.value = song.currentTime;
}

ctrlIcon.addEventListener("click", (event)=>{
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else{
        song.play();ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    }
});

if(song.play()){
    setInterval(()=>{
        progressBar.value = song.currentTime;
    }, 500);
}

progressBar.addEventListener("change",()=>{
    song.currentTime = progressBar.value;
    song.play();
    song.play();ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
})