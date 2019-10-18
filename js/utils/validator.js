import { declOfNum } from './decl';


const russianPhoneValid = (cleanValue) => {
  if (cleanValue.length === 12) {
    return cleanValue.startsWith('87');
  }

  if (cleanValue.length === 11) {
    return cleanValue.startsWith('7') || cleanValue.startsWith('8');
  }

  return cleanValue.length === 10;
};

export const validator = {
  string(value, isRequired = false, minLength = 0, maxLength = 999) {
    if (!value && isRequired) {
      return 'Поле обязательно для заполнения';
    }
    if (value.length <= minLength) {
      return `Поле должно содержать минимум ${minLength} ${declOfNum(minLength, [ 'символ', 'символa', 'символов' ])}`;
    }
    if (value.length >= maxLength) {
      return `Поле может содержать максимум ${minLength} ${declOfNum(minLength, [ 'символ', 'символa', 'символов' ])}`;
    }
    return true;
  },

  phone(value, isRequired = false) {
    let phone = value ? value.match(/[0-9]/g) : '';

    if (!phone) {
      if (isRequired) {
        return 'Пожалуйста, укажите номер телефона';
      }

      return true;
    }
    phone = phone.join('');

    if ((phone.startsWith('7') || phone.startsWith('8') || phone.startsWith('9')) && russianPhoneValid(phone)) {
      return true;
    }

    if (phone.length < 7) {
      return 'Пожалуйста, введите номер телефона в формате +Х (ХХХ) ХХХ-ХХ-ХХ';
    }

    return true;
  },

  email(value, isRequired) {
    if (value && value !== '') {
      const reg = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i; // eslint-disable-line max-len

      if (!reg.test(value)) {
        return 'Пожалуйста, введите корректный адрес эл. почты';
      }
    } else if (isRequired) {
      return 'Пожалуйста, укажите адрес эл. почты';
    }

    return true;
  },
};

export { validator as default };
