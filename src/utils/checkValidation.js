export default function checkValidation(inputData) {
  const regex = /[^-\d,]+/;
  if (regex.test(inputData)) {
    return false;
  } else {
    return true;
  }
}
