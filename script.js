function removeplaying(e){
    if(e.propertyName !== 'transform'){return}
      e.target.classList.remove("playing")
  }

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
    if(!audio){return;}


    key.classList.add("playing")
    audio.currentTime = 0 ;
    audio.play()
  }
  const allKey = Array.from(document.querySelectorAll(".key"));
  allKey.forEach(k => {k.addEventListener("transitionend",removeplaying)})

  window.addEventListener("keydown",playSound);