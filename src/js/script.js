//import "purecss/build/grids-min.css"; // подключение готовых стилей grid от purecss
//import "purecss/build/grids-responsive-min.css"; // адаптивный грид purecss
//закоментриловали импорт потому что добавили их в проект локально и подключили в style.scss

// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import JustValidate from 'just-validate';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const burger = document.querySelector(".burger"),
	close = document.querySelector(".header__menu-close"),
	menu = document.querySelector(".header__menu");

burger.addEventListener("click", () => {
	menu.classList.add("header__menu_active");
	document.body.style.overflow = "hidden";
});

close.addEventListener("click", () => {
	menu.classList.remove("header__menu_active");
	document.body.style.overflow = "";
});




try{
// init Swiper:
new Swiper('.swiper', {
  // configure Swiper to use modules
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".icon-right-open",
        prevEl: ".icon-left-open",
    },
    breakpoints: {
    // when window width is >= 1200px
        1200: {
            slidesPerView: 3,
            spaceBetween: 5,
        },
        1920: {
            slidesPerView: 3,
            spaceBetween: 35,
        },
    },
    modules: [Navigation, Pagination],
});
} catch(e) {}


try {
	const tabs = document.querySelectorAll(".catalog__tab");
	const contents = document.querySelectorAll(".catalog__content-item");

	tabs.forEach((tab, index) => {
		tab.addEventListener("click", () => {
			// Удаляем активный класс у всех табов и контента
			tabs.forEach((t) => t.classList.remove("catalog__tab_active"));
			contents.forEach((c) => (c.style.display = "none"));

			// Добавляем активный класс к нажатому табу и показываем соответствующий контент
			tab.classList.add("catalog__tab_active");
			contents[index].style.display = "flex";
		});
	});

	// Показываем первый контент при загрузке
	contents.forEach((c, i) => (c.style.display = i === 0 ? "flex" : "none"));
} catch (e) {}


try{
    const validator = new JustValidate('form');
    validator
        .addField('#name', [
            {
                rule: 'required',
                errorMessage: 'Write your Name',
            },
            {
                rule: 'minLength',
                value: 3,
                errorMessage: 'Write your Name min 3 char',
            },
        ])
        .addField('#email', [
            {
                rule: 'required',
                errorMessage: 'Write your email',
            },
            {
                rule: 'email',
                errorMessage: 'Write your email address @.com',
            },
        ])
        .addField('#question', [
            {
                rule: 'required',
                errorMessage: 'Write the text',
            },
            {
                rule: 'minLength',
                value: 10,
                errorMessage: 'Write min 10 char',
            },
        ], {
            errorsContainer: document.querySelector('#question').parentElement.querySelector('.error__textarea'),
        })
        .addField('#checkbox', [
            {
                rule: 'required',
                errorMessage: 'Click checkbox',
            },
        ], {
            errorsContainer: document.querySelector('#checkbox').parentElement.parentElement.querySelector('.error__textarea'),
        })
} catch (e) {}

try{
    const validatorFooter = new JustValidate('#footer__form');
    validatorFooter
        .addField('#footer-email', [
            {
                rule: 'required',
                errorMessage: 'Write your email',
            },
            {
                rule: 'email',
                errorMessage: 'Write your email address @.com',
            },
        ], {
            errorsContainer: document.querySelector('#footer-email').parentElement.querySelector('.footer__email-error'),
        })
        .addField('#footer-checkbox', [
            {
                rule: 'required',
                errorMessage: 'Click checkbox',
            },
        ], {
            errorsContainer: document.querySelector('#footer-checkbox').parentElement.parentElement.querySelector('.footer__checkbox-error'),
        })
} catch (e) {}

import "/src/sass/style.scss"; // подключение sass в проект






