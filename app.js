//Email.js: service_9v2ka1m
//Template ID: template_uz64x25
//Public Key: pKMeIcAk7JK7c9LZn
let isModalOpen = false;
let contrastToggle = false;

//anonymous arrow function with event listeners inside

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX /20
    const y = event.clientY /20

    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.overlay__modal--loading')
    const success = document.querySelector('.overlay__modal--success')

    emailjs
        .sendForm(
            'service_9v2ka1m',
            'template_uz64x25',
            event.target,
            'pKMeIcAk7JK7c9LZn'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible")
            success.classList += ' modal__overlay--visible'
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible")
            alert('The email service is unavailable. Please contact me directly at pwredman@outlook.com. I apologize for the inconvenience.')
        })
    
    loading.classList += " modal__overlay--visible"
}

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal__open")
    }
    isModalOpen = true;
    document.body.classList += " modal__open"
    

}

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " alt-theme"
    }
    else {
        document.body.classList.remove("alt-theme")
    }
}
