const scrollBtn = document.querySelector('.btn')
const height = window.clientHeight
scrollBtn.addEventListener('click', function() {
    window.scrollTo(0, -(height))
})