let menu = document.querySelector('.container');
let botao = document.querySelector(".menu-hamburguer__logo");

botao.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo');

    if(menu.classList.contains('menu-lateral--ativo')) 
        botao.classList.add('grudar');
     
    else 
        botao.classList.remove('grudar');
});
