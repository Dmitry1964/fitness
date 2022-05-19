const controlList = document.querySelector('.offers__control-list');
const controlButtons = controlList.querySelectorAll('.offers__control-item');
const offersSection = document.querySelector('.offers');
const offersList = offersSection.querySelectorAll('.offers__list');

const PERIOD_SIX = '6 months';
const PERIOD_TWELVE = '12 months';

const initOffersList = () => {
  offersList.forEach((elem) => {
    const period = elem.getAttribute('data-period');
    if (period === PERIOD_SIX || period === PERIOD_TWELVE) {
      elem.classList.add('offers__list--hidden');
    };
  });
}

const setOffersList = (element) => {
  if (element.classList.contains('offers__control-list')) {
    return;
  } else {
    const period = element.getAttribute('data-period');
    controlButtons.forEach((item) => {
      item.classList.remove('offers__control-item--current');
      if (item.getAttribute('data-period') === period) {
        item.classList.add('offers__control-item--current');
      }
    });
    offersList.forEach((item) => {
      item.classList.add('offers__list--hidden');
      if (item.getAttribute('data-period') === period) {
        item.classList.remove('offers__list--hidden');
      }
    });
  }
};


export { controlList, setOffersList, initOffersList }
