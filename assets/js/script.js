const mottos = [...document.querySelectorAll(".motto ul li")];
const dess = [...document.querySelectorAll(".dess div")];

mottos.forEach((motto, index) => {

  motto.addEventListener("mouseover", (e1) => {

    dess[index].style.display = "block";

    e1.currentTarget.querySelector('p').style.display = "block";

    const currentBgImage = `url(./assets/images/${motto.classList[0]}.png)`;
    mottos.forEach(item => {
      item.style.backgroundImage = currentBgImage;
    });
  });

  motto.addEventListener("mouseleave", (e1) => {

    dess[index].style.display = "none";

    e1.currentTarget.querySelector('p').style.display = "none";

    mottos.forEach(item => {
      item.style.backgroundImage = `url(./assets/images/${item.classList[0]}.png)`;
    })
  })
});


function video() {
  const video = document.querySelector("video") 

  const videoAction = {
    play: ()=> video.play(),
    pause: ()=> video.pause(),
    stop: ()=> video.pause(),
    back: ()=> video.currentTime -= 10,
    fast: ()=> video.video.currentTime += 10,
    speedDown: ()=> video.playbackRate -= .1,
    speedUp: ()=> video.playbackRate += .1,
    reset: ()=> video.playbackRate = 1,
    re: ()=> video.loop = !video.loop
  }
  
  for (const i in videoAction) {
    document.getElementById(i).addEventListener("click", videoAction[i])
  }

}

video();