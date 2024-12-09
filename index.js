const menuBtn = document.getElementById('menu-btn');
const menu = document.querySelector('.menu');

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active'); 
    });

// JavaScript pour gérer l'ouverture et la fermeture du sous-menu

    window.onscroll = () => {
        if (menu) {
            menu.classList.remove('active');
        }
    
        
    }

    
      