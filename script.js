window.addEventListener('DOMContentLoaded', () => {
  // Greeting animation 
  let i = 0;
  const txt = `Hi, I'm Joe Lazarz`;

  function typeWriter() {
    if (i < txt.length) {
      document.querySelector(".greeting").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    };
  };

  window.onload = function(){
    setTimeout(typeWriter, 1000);
  };

  // Nav Line color & font size //
  const navLineScroll = () => {
    const line = document.querySelectorAll('.line');
    const navLinks = document.querySelectorAll("#nav > a");
    if (window.scrollY <= 200) {
      line.forEach(el => el.style.borderColor = "black");
      navLinks.forEach(el => el.style.fontSize = "80%");
    } else {
      line.forEach(el => el.style.borderColor = "white");
      navLinks.forEach(el => el.style.fontSize = "70%");
    };
  };

  document.addEventListener('scroll', navLineScroll);

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
  contactLink.addEventListener('click', clickProjects);

  // Form Submission //
  const contactForm = document.getElementById('contact-form');
  const submit = document.getElementById('submit');
  const success = document.getElementById('success');

  contactForm.addEventListener('submit', e => {
    e.preventDefault();
  
    const formData = new FormData(contactForm);

    fetch(contactForm.getAttribute('action'), {
      method: 'POST',
      headers: {
        'Accept': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: new URLSearchParams(formData).toString()
    })
    .then(res => {
      if (res) {
        contactForm.reset();
        submit.style.display='none';
        success.style.display='inline';
        setTimeout(() => {
          success.style.display='none';
          submit.style.display='inline';
        }, 3000);
      };
    });
  });

  // Year for footer
  document.getElementById("year").innerHTML = new Date().getFullYear();

});
