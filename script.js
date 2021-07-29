let nav = document.querySelector('nav')
let lastKnownScrollPosition

document.addEventListener('scroll', function(e) {
    lastKnownScrollPosition = window.scrollY
    if (lastKnownScrollPosition == 0) {
        nav.style.backgroundColor = 'transparent'
    } else {
        nav.style.backgroundColor = '#282434'
        nav.style.transition = 'background-color 200ms linear'
    }
})