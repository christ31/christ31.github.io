// Navbar fixed
window.onscroll = function(){
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  
  // To-Top
  const toTop = document.querySelector('#to-top');

  if(window.pageYOffset > fixedNav){
    header.classList.add('navbar-fixed');
    toTop.classList.remove('-bottom-10');
    toTop.classList.add('bottom-4');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.remove('bottom-4');
    toTop.classList.add('-bottom-10');
  }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
})

// klik di luar hamburger
window.addEventListener('click', function(e){
  if(e.target != hamburger && e.target != navMenu){
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

// Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const darkToggleBG = document.querySelector('#dark-toggle-bg');

const html = document.querySelector('html');

darkToggle.addEventListener('click', function(){
  if(darkToggle.checked){
    toggleButton();
  } else {
    unToggleButton();
  }
});

function toggleButton(){
  html.classList.add('dark');
  darkToggleBG.classList.remove('bg-slate-500');
  darkToggleBG.classList.add('bg-primary');
  localStorage.theme = 'dark';
};

function unToggleButton(){
  html.classList.remove('dark');
    darkToggleBG.classList.add('bg-slate-500');
    darkToggleBG.classList.remove('bg-primary');
    localStorage.theme = 'light';
}

// Pindah posisi toggle sesuai state dari 'theme' di local storage
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
  toggleButton();
} else {
  darkToggle.checked = false;
  unToggleButton();
}