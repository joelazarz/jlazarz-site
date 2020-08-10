
const navDisplay = function(e) {
  const nav = document.getElementById('nav')
  if (e.clientY <= 40) {
    nav.setAttribute("style", "z-index: 100;");
  } else {
    nav.setAttribute("style", "z-index: 0;");
  }
};

document.addEventListener('mousemove', navDisplay);