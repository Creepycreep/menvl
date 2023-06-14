document.addEventListener('DOMContentLoaded', () => {

  // MENU SUBMENU
  let clothes = document.querySelector('.clothes-click'),
    clothesMenu = document.querySelector('.clothes'),
    menu = document.querySelector('.menu'),
    menuBtn = document.querySelector('.btn_menu');

  function showClothes() {
    clothesMenu.classList.remove('clothes_hide');
  }

  function hideClothes() {
    clothesMenu.classList.add('clothes_hide');
  }

  function toggleClothes(e) {
    let a = clothes.querySelector('a');

    if (a == e.target) {
      clothesMenu.classList.toggle('clothes_hide');
    }
  }

  function toggleMenu() {
    menuBtn.classList.toggle('btn_menu-active');
    menu.classList.toggle('menu_hidden');
  }

  function outOfMenu(event) {
    let main = document.querySelector('.main');

    if (!menu.classList.contains('menu_hidden')) {
      if (main == event.target.closest('main')) {
        menuBtn.classList.remove('btn_menu-active');
        menu.classList.add('menu_hidden');
      }
    }
  }

  function menuSize() {
    if (window.innerWidth > 961) {
      clothes.addEventListener('mouseover', showClothes);
      clothes.addEventListener('mouseout', hideClothes);

      clothes.removeEventListener('click', toggleClothes);

      document.removeEventListener('click', outOfMenu);

    } else if (window.innerWidth < 961) {
      clothes.removeEventListener('mouseover', showClothes);
      clothes.removeEventListener('mouseout', hideClothes);

      clothes.addEventListener('click', toggleClothes);

      document.addEventListener('click', outOfMenu);

      document.documentElement.style.setProperty('--height-mobile', `${window.innerHeight}px`);
    }
  }

  menuSize();

  menuBtn.addEventListener('click', toggleMenu)

  window.addEventListener('resize', () => {
    menuSize()
  });

  //UP
  let up = document.querySelector('.btn_up')

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    scrollY > 150 ? up.classList.remove('btn_up-hide') : up.classList.add('btn_up-hide')
  });

  // Slider
  $('.multiply-items-main').slick({
    infinite: true,
    nextArrow: '<div class="slick-next"></div>',
    prevArrow: '<div class="slick-prev"></div>',
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1
        }
      },
    ]
  });

  $('.multiply-items-clothes').slick({
    infinite: true,
    nextArrow: '<div class="slick-next slick-next-clothes"></div>',
    prevArrow: '<div class="slick-prev slick-prev-clothes"></div>',
    dots: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6
        }
      },
      {
        breakpoint: 641,
        settings: {
          arrows: false,
          slidesToShow: 5
        }
      },

      {
        breakpoint: 451,
        settings: {
          arrows: false,
          slidesToShow: 4
        }
      },
      {
        breakpoint: 376,
        settings: {
          arrows: false,
          slidesToShow: 3
        }
      }
    ]
  });
});