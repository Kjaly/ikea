import generateSubcatalog from "./generateSubcatalog.js";
import {getData} from './getData.js'


export const catalog = () => {
    const updateSubCatalog = generateSubcatalog()
    const btnBurger = document.querySelector('.btn-burger'),
        catalog = document.querySelector('.catalog'),
        btnClose = document.querySelector('.btn-close'),
        btnReturn = document.querySelector('.btn-return'),
        catalogList = document.querySelector('.catalog-list'),
        subcatalog = document.querySelector('.subcatalog'),
        subcatalogHeader = document.querySelector('.subcatalog-header')


    const overlay = document.createElement('div')
    overlay.classList.add('overlay')
    document.body.insertAdjacentElement('beforeend', overlay)


    const toggleMenu = () => {
        if (catalog.classList.contains('open')) {
            catalog.classList.remove('open')
            overlay.classList.remove('active')
            closeSubMenu()
        } else {
            catalog.classList.add('open')
            overlay.classList.add('active')
        }
    };

    const openSubMenu = (e) => {
        e.preventDefault();
        const target = e.target
        const itemList = target.closest('.catalog-list__item>a');
        if (itemList) {
            getData.subCatalog(itemList.textContent,(data)=>{
                updateSubCatalog(itemList.textContent, data)
                subcatalog.classList.add('subopen');
            })
        }
    }
    const closeSubMenu = () => {
        subcatalog.classList.remove('subopen');
    }
    btnBurger.addEventListener('click', toggleMenu)
    btnClose.addEventListener('click', toggleMenu)
    overlay.addEventListener('click', toggleMenu)
    subcatalog.addEventListener('click',(e)=>{
        const btnReturn = e.target.closest('.btn-return')
        if(btnReturn) closeSubMenu()
    })
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') {
            toggleMenu()
        }
    })
    catalog.addEventListener('click', openSubMenu)
}
