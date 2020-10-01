import {getData} from './getData.js'

const wishList = ['idd009', 'idd098', 'idd037', 'idd045', 'idd012'];

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

    if(location.search){
        const search =decodeURI(location.search);
        const prop = search.split('=')[0].slice(1);
        const value = search.split('=')[1];

        if (prop === 's'){
            getData.search(value,(data) => {
                console.log(data)})
        } else if (prop ==='wishlist'){
           getData.wishList(wishList, (data) => {
               console.log(data)})
        } else if (prop ==='cat' || prop==='subcat') {
            getData.category(prop,value,(data)=> {
                console.log(data)})
        }
    }
    if(location.hash){
       getData.item(location.hash.slice(1), (data) => {
           console.log(data)})
    }

    if (location.pathname.includes('cart')){
        getData.cart(cartList, (data) => {
            console.log(data)})
    }

    getData.catalog((data)=> {
        console.log(data)});

    getData.subCatalog(
        (data)=> {
            console.log(data)}
    )
};