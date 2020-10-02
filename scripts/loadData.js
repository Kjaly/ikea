import {getData} from './getData.js'



const cartList = [
    {
        id: 'idd092',
        count: 2
    },
    {
        id: 'idd001',
        count: 1
    },
    {
        id: 'idd012',
        count: 3
    }
]


export const loadData = () => {


    if(location.hash){
       getData.item(location.hash.slice(1), (data) => {
           console.log(data)})
    }

    if (location.pathname.includes('cart')){
        getData.cart(cartList, (data) => {
            console.log(data)})
    }

    // getData.catalog((data)=> {
    //     console.log(data)});
    //
    // getData.subCatalog('Мебель',(data)=> {
    //         console.log(data)})

};