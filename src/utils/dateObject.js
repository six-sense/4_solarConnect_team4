import { dayArrayKO, dayArrayEN, monthArrayEN } from './constants';

export const dateObject = {
  'ko-KR': convertKR(),
  'en-US': convertUS(),
};

function convertKR() {
  const today = new Date();
  return `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일 ${dayArrayKO[today.getDay()]}요일`;
}

function convertUS() {
  const today = new Date();
  return `${dayArrayEN[today.getDay()]} ${
    monthArrayEN[today.getMonth()]
  } ${today.getDate()}, ${today.getFullYear()}`;
}
