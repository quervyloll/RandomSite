document.addEventListener('DOMContentLoaded', function () {
    const lengthSlider = document.getElementById('lengthSlider')
    const lengthValue = document.getElementById('lengthValue')
    const resultField = document.getElementById('resultField')
    const generateButton = document.getElementById('generateButton')

    lengthSlider.addEventListener('input', function () {
        lengthValue.textContent = lengthSlider.value
    })


    function generatePassword(length) {
        const characters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()`
        let password = ''
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length)
            password += characters[randomIndex]
        }
        return password
    }


    generateButton.addEventListener('click', function () {
        const passwordLength = parseInt(lengthSlider.value, 10)
        const password = generatePassword(passwordLength)
        resultField.textContent = password
    })
})
