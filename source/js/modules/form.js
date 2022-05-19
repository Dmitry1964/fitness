const pageForm = document.querySelector('.contact__form');
const phoneField = pageForm.querySelector('input[type="tel"]');

const CODE_COUNTRY = '+7'

const onPhoneFieldFocus = () => {
  if (phoneField.value.length === 0) {
    phoneField.value = CODE_COUNTRY;
  }
}

const onPhoneFieldInput = (phone) => {
  const arr = phone.split('');
  const newArr = phone.split('');
  phoneFieldChange(arr, newArr);
  phoneField.value = arr.join('');
}

const phoneFieldChange = (arr, newArr) => {
  if (isNaN(newArr.pop())) {
    arr.pop();
  }
  return arr;
};

export { phoneField, pageForm, onPhoneFieldInput, onPhoneFieldFocus }
