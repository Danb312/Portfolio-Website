const toggleMenu = () => {
    const menu = document.querySelector('.menu-links')
    const icon = document.querySelector('.icon')
    menu.classList.toggle('open')
    icon.classList.toggle('open')
}