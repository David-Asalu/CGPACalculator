function setTheme() {
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }
 
 
  window.onload = setTheme;
  function toggleNavbar() {
    var navbarIcon = document.querySelector('.navbar-icon');
    navbarIcon.classList.toggle('close');
    for(y=0; y<document.querySelectorAll(".none").length; y++){
    document.querySelectorAll(".none")[y].classList.toggle('show');
  
  }
  for(y=0; y<document.querySelectorAll(".guide-p").length; y++){
    document.querySelectorAll(".guide-p")[y].classList.toggle('show')
  }
  }
