const controlList = document.querySelector('.offers__control-list');
const controlButtons = controlList.querySelectorAll('.offers__control-item');
const offersSection = document.querySelector('.offers');
const offersList = offersSection.querySelectorAll('.offers__list');


const setOffersList = (element) => {
  const period = element.getAttribute('data-period');
  controlButtons.forEach((item) => {
    item.classList.remove('offers__control-item--current');
    if (item.getAttribute('data-period') === period) {
      item.classList.add('offers__control-item--current');
    }
  });
  offersList.forEach((item) => {
    item.classList.add('visually-hidden');
    if (item.getAttribute('data-period') === period) {
      item.classList.remove('visually-hidden');
    }
  });
};


export { controlList, setOffersList }
