setTimeout(function(){
  document.getElementById("transition-second").style.left = 0
  setTimeout(function(){
    document.getElementById("transition-three").style.left = 0
  }, 250)
}, 1500)