


export function PhoneValidator(params) {
    const re = /^[\d\+][\d\(\)\ -]{4,14}\d$/
    return re.test(params)
}

export function EmailValidator(params) {
    const re = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i
    return re.test(params)
}