export default function splitNumber(numStr) {
  const tempArr = numStr.split(',');
  const numArr = [];
  let message = '';

  for (let i = 0; i < tempArr.length; i++) {
    let sign = 1;
    let number = tempArr[i];
    let answer = 0;
    if (number.length === 0) {
      message = 'comma가 연속으로 있습니다.';
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
