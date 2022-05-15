import { iosVhFix } from './utils/ios-vh-fix';
import { initModals } from './modules/modals/init-modals';
import { playButton, onPlayButtonHendler } from './video';
import { controlList, setOffersList, initOffersList } from './modules/offers';
import { feedbackSwiper } from './modules/feedback';
import { phoneField, pageForm, onPhoneFieldInput, onPhoneFieldFocus } from './modules/form';
// ---------------------------------

const PHONE_LENGTH = 12;

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  playButton.addEventListener('click', () => {
    onPlayButtonHendler();
  });

  controlList.addEventListener('click', (evt) => {
    const element = evt.target;
    setOffersList(element);
  });

  phoneField.addEventListener('input', () => {
    onPhoneFieldInput(phoneField.value);
    if (phoneField.value.length < PHONE_LENGTH) {
      phoneField.setCustomValidity('Ввести 10 цифр.');
    } else {
      phoneField.setCustomValidity('');
    };

    phoneField.reportValidity();
  });

  phoneField.addEventListener('focus', onPhoneFieldFocus);


  pageForm.addEventListener('submit', (evt) => {
    if (phoneField.value.split('').length < PHONE_LENGTH) {
      evt.preventDefault();
    }
  })


  const swiper = new Swiper('.coaches__swiper', {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    grabCursor: true,
    speed: 800,

    navigation: {
      nextEl: '.coaches__next',
      prevEl: '.coaches__prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });

  swiper.slideNext();
  feedbackSwiper.slideNext();




  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    initOffersList();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
