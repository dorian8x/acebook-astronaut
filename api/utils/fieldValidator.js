export const notEmpty = (inputtedText) => {
    if (inputtedText === "") {
        throw new Error("All fields must be filled out")
    }
}

// executes on submission
export const passwordValidator = (password) => {
    const regexLength = /^.{8,}$/;
    const regexCase = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
    const regexNumber = /^(?=.*\d).+$/;
    if (regexLength.test(password) === false) {
        throw new Error("Password must be 8+ characters")
    } else if (regexCase.test(password) === false) {
        throw new Error("Password must contain upper and lowercase")
    } else if (regexNumber.test(password) === false) {
        throw new Error("Password must contain at least one number")
    }
}

// export const regexLengthValidator = (password) => {
//     const regexLength = /^.{7,}$/;
//     return regexLength.test(password);
// }