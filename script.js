const menuButton=document.querySelector(".menu-button");
const navigation=document.querySelector("nav");
menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("active");
    navigation.classList.toggle("active");
});
//video slider
const sliderButtons=document.querySelectorAll(".slider-btn");
const sliderVideo=document.querySelectorAll(".video-slide");
const contents=document.querySelectorAll(".content");
var sliderNav=function(manual){

    sliderButtons.forEach((btn)=>{
        btn.classList.remove("active");
    });
    sliderVideo.forEach((slide)=>{
        slide.classList.remove("active");
    });
    contents.forEach((content)=>{
        content.classList.remove("active");
    });
    
    sliderButtons[manual].classList.add("active");
    sliderVideo[manual].classList.add("active");
    contents[manual].classList.add("active");

}
sliderButtons.forEach((btn, i)=>{
    btn.addEventListener("click", ()=>{
        sliderNav(i);
    });
});



function handleVideo(card, action) {
    const video = card.querySelector('video');
    if (action === 'hover') {
        video.classList.add('autoplay');
        video.play();
    } else if (action === 'unhover') {
        video.classList.remove('autoplay');
        video.pause();
        video.currentTime = 0;
    }
}

