function addAnimation() {
  let text1 = document.querySelector('.title');

  text1.innerHTML = text1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
  anime.timeline({loop: true})
    .add({
      targets: '.title .letter',
      opacity: [0,1],
      easing: "easeInOutQuad",
      duration: 200,
      delay: (el, i) => 150 * (i+1)
    }).add({
      targets: '.title',
      opacity: 0,
      duration: 750,
      easing: "easeOutExpo",
      delay: 0
    });
}

addAnimation()