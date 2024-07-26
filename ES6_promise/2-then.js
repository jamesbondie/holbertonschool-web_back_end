export default function handleResponseFromAPI(promise) {
    const promise1 = new Promise((resolve, reject) => {
        promise1.then(() => {
            console.log("Got a response from the API")
            return {
                status : 200,
                body : 'success'
            }
        })
        promise1.catch(() => {
            console.log("Got a response from the API")
            return new Error()
        })
    })
}