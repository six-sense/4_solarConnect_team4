export default function splitNumber(numStr) {
  if (!numStr.length) {
    return {
      message: '값을 입력해주세요.',
      numArr: [],
    };
  }
  const tempArr = numStr.split(',');
  const numArr = [];
  let message = '';

  for (let i = 0; i < tempArr.length; i++) {
    let sign = 1;
    let number = tempArr[i];
    let answer = 0;
    if (number.length === 0) {
      message = '올바르지 않은 양식입니다.';
      break;
    }
    if (number[0] === '-') {
      sign = -1;
      number = number.slice(1);
    }
    for (let j = 0; j < number.length; j++) {
      const temp = number[j];
      if (temp === '-') {
        message = '"-"가 2개 이상 들어있습니다.';
        break;
      }
      answer = answer * 10 + parseInt(temp);
    }
    if (message) {
      break;
    }
    numArr.push(answer * sign);
  }
  return {
    message: message,
    numArr: numArr,
  };
}
