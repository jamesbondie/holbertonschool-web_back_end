/* eslint-disable */
export default function cleanSet(set, startString) {
    if (typeof startString !== 'string' || startString === '') {
        return '';
      }
    let result = [];
    for (const value of set) {
        if (value.startsWith(startString)) {
            let substring = value.substr(startString.length);
            result.push(substring);
        }
    }
    return result.join("-");
}