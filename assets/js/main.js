const image = document.getElementById("profile-image");
if (image) {
  image.addEventListener("click", () => {
    const images = [
      "./assets/imagens/avatar/avatar1.png",
      "./assets/imagens/avatar/avatar2.png",
      "./assets/imagens/avatar/avatar3.png",
      "./assets/imagens/avatar/avatar4.png",
      "./assets/imagens/avatar/avatar5.png",
      "./assets/imagens/avatar/avatar6.png",
      "./assets/imagens/avatar/avatar7.png",
      "./assets/imagens/avatar/avatar8.png",
    ];

    const randomImage = images[Math.floor(Math.random() * images.length)];
    image.setAttribute("href", randomImage);
  });
}

const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills(){
  let itemClass = this.parentNode.className

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skills__content skills__close'
  }
  if (itemClass === 'skills__content skills__close') {
    this.parentNode.className = 'skills__content skills__open'
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener('click', toggleSkills)
})

const tabs = document.querySelectorAll('[data-target]'), 
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach(tabContent => {
      tabContent.classList.remove('qualification__active')
    })

    target.classList.add('qualification__active')

    tabs.forEach(tab => {
      tab.classList.remove('qualification__active')
    })
    tab.classList.add('qualification__active')
  })
})

const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
  modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click', () => {
    modal(i)
  })
})

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener('click', () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove('active-modal')
    })
  })
})

if (typeof Swiper !== 'undefined' && document.querySelector('.portfolio__container')) {
  var swiperPortfolio = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
  const scrollY = window.pageYOffset
  
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
    }else{
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive)

function scrollHeader(){
  const nav = document.getElementById('header');

  if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');

  if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Verificar se o themeButton existe antes de prosseguir
if (themeButton) {
  const selectedTheme = localStorage.getItem('selected-theme')
  const selectedIcon = localStorage.getItem('selected-icon')
  let selectedImage = localStorage.getItem('selected-image')

  const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
  const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

  if(selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-sun' ? 'add' : 'remove'](iconTheme)
  }

  // Verificar se o elemento imagemLogo existe antes de tentar acessá-lo
  const imagemLogo = document.getElementById('imagemLogo')
  if(imagemLogo) {
    if(!selectedImage) {
      selectedImage = getCurrentTheme() === 'dark' ? '/assets/imagens/logo/logo-semfundo-branco.png' : '/assets/imagens/logo/logo-semfundo.png'
      localStorage.setItem('selected-image', selectedImage)
    }
    imagemLogo.src = selectedImage
  }

  function changeLogoImage() {
    var image = document.getElementById('imagemLogo');
    if (image && image.src.match("/assets/imagens/logo/logo-semfundo.png")) {
      image.src = "/assets/imagens/logo/logo-semfundo-branco.png";
    } else if (image) {
      image.src = "/assets/imagens/logo/logo-semfundo.png";
    }
  }

  themeButton.addEventListener('click', () => {
    changeLogoImage()
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
    
    // Atualizar a imagem do logo apenas se o elemento existir
    const imagemLogo = document.getElementById('imagemLogo')
    if(imagemLogo) {
      localStorage.setItem('selected-image', imagemLogo.src)
    }
  })
}
