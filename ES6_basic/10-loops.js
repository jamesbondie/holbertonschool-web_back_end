/* eslint-disable */
export default function appendToEachArrayValue(array, appendString) {
  let resultArray = [];

  for (let value of array) {
    resultArray.push(appendString + value);
  }

  return resultArray;
}
