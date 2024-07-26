export default function hasValuesFromArray(set, array) {
    
    for (const value of array) {
        if (set.includes(value)) {
            return true
        }
        else {
            return false
        }
    } 
}
