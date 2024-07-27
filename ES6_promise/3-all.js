/* eslint-disable */
import { uploadPhoto } from "./utils";
import { createUser } from "./utils";

export default function handleProfileSignup() {
    const p3 = Promise.resolve(uploadPhoto)
    p3.then(() => {
        console.log(uploadPhoto.body)
        console.log(Object.values(createUser))
    })
    p3.catch(() => {
        console.log("Signup system offline")
    })
}
