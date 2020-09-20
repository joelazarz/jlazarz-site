window.addEventListener('DOMContentLoaded', () => {

  // Nav vis toggle //
  const navDisplay = function(e) {
    const nav = document.getElementById('nav')
    if (e.clientY <= 40) {
      nav.setAttribute("style", "z-index: 100;");
    } else {
      nav.setAttribute("style", "z-index: 0;");
    }
  };

  document.addEventListener('mousemove', navDisplay);


  // Nav Line Animation //
  const nameLink = document.querySelector("#nav > a:nth-child(1)");
  const aboutLink = document.querySelector("#nav > a:nth-child(3)");
  const projectsLink = document.querySelector("#nav > a:nth-child(5)");
  const contactLink = document.querySelector("#nav > a:nth-child(7)");
  
  const navLineOne = document.querySelector("#nav > div:nth-child(2)");
  const navLineTwo = document.querySelector("#nav > div:nth-child(4)");
  const navLineThree = document.querySelector("#nav > div:nth-child(6)");

  // Nav line animation / Home 
  const clickName = () => {
    navLineOne.setAttribute('style', 'flex-grow: 20');
    navLineTwo.setAttribute('style', 'flex-grow: 1');
    navLineThree.setAttribute('style', 'flex-grow: 1');
  };

  nameLink.addEventListener('click', clickName);

  
  // Nav line animation / About 
  const clickAbout = () => {
    navLineOne.setAttribute('style', 'flex-grow: 1');
    navLineTwo.setAttribute('style', 'flex-grow: 20');
    navLineThree.setAttribute('style', 'flex-grow: 1');
  };

  aboutLink.addEventListener('click', clickAbout);

  // Nav line animation / Projects 
  const clickProjects = () => {
    navLineOne.setAttribute('style', 'flex-grow: 1');
    navLineTwo.setAttribute('style', 'flex-grow: 1');
    navLineThree.setAttribute('style', 'flex-grow: 20');
  };

  projectsLink.addEventListener('click', clickProjects);

  // Nav line animation / Contact
  contactLink.addEventListener('click', clickProjects)


});
