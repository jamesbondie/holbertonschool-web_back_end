/* eslint-disable */
export default function getListStudentIds(arr) {
    if (typeof arr !== 'Array') {
        return []
    }
    return arr.map(function returner(x){return x.id})
}
