window.onload = function() {
    setTimeout(function(){
        const element = document.querySelector(".first-loading-contener")
        element.remove()
        const mainElement = document.querySelector(".fh")
        mainElement.style.opacity = 1
        const video = document.querySelector("#video")
        video.src = "./video/douga.mp4"
    },3000)
}