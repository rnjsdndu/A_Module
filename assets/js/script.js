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


const controlor = [...document.querySelectorAll('.control li')]

controlor.forEach(e=>{
  controlor[0].addEventListener('click' , ()=>{
    
  })
})





