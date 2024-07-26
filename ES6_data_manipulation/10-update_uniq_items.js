export default function updateUniqueItems(map) {
    if (typeof map !== Map) {
        throw new Error("Cannot process")
    }
    for (let x in map) {
        if (map[x] === 1) {
            map[x] = 100;
        }
    }
}