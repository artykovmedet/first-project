document.querySelector('.menu_btn').addEventListener('click',() => {
    document.querySelector('.menu_btn').classList.toggle('active')
    document.querySelector('.header_menu').classList.toggle('active')
})
//.header-menu-item это класс который в сслыках меню.Нужен для закрытия при клике на них


document.querySelectorAll('.header_menu_item').forEach((oneLink) =>{
    //oneLink это имя одной ссылки меню.Придумываем сами название
    oneLink.addEventListener('click',() => {
        document.querySelector('.menu_btn').classList.toggle('active')
        document.querySelector('.header_menu').classList.toggle('active')
    })
})