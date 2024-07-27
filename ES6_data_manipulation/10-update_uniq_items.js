/* eslint-disable */
export default function updateUniqueItems(map) {
    if (!map instanceof Map) {
        throw new Error("Cannot process")
    }
    for (let x in map) {
        if (map[x] === 1) {
            map[x] = 100;
        }
    }
}