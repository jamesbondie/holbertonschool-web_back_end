export default function getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
    
    
    if (success) {
        resolve("Success")
    }
    else {
        reject(new Error("The fake API is not working currently"))
    }
    })
}
