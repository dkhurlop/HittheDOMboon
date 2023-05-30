function makeSound(id){

    var audio = document.getElementById(id);
    audio.play();

  }

  toggle.onclick = () =>{
    items.classList.toggle("open");
    toggle.classList.toggle("close");
  }

  const sonidos = document.querySelector(".big-pad")
  let mysound;
  sonidos.addEventListener("click", () => {
    mysound = new Audio('/sound/bombo.wav');
    mysound.play()
  })
