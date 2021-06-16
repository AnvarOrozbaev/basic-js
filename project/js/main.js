const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// let getRequest = (url, cb) => {
//     let xhr = new XMLHttpRequest();
//     // window.ActiveXObject -> xhr = new ActiveXObject()
//     xhr.open("GET", url, true);
//     xhr.onreadystatechange = () => {
//         if(xhr.readyState === 4){
//             if(xhr.status !== 200){
//                 console.log('Error');
//             } else {
//                 cb(xhr.responseText);
//             }
//         }
//     };
//     xhr.send();
// };

class ProductsList {
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];//массив товаров из JSON документа
        this.basket = [];
        this._getProducts()
            .then(data => { //data - объект js
                 this.goods = [...data];
                 this.render(this.container)
            });
        
    }
    // _fetchProducts(cb){
    //     getRequest(`${API}/catalogData.json`, (data) => {
    //         this.goods = JSON.parse(data);
    //         console.log(this.goods);
    //         cb();
    //     })
    // }
    _getProducts(){
      
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }
    _getBasket(){
        return fetch(`${API}/getBasket.json`)
        .then(result => result.json())
        .catch(error => {
            console.log(error);
        })
    }
    
    calcSum(){
        return this.allProducts.reduce((accum, item) => accum += item.price, 0);
    }
    render(box){
        const block = document.querySelector(box);
        for (let product of this.goods){
            const productObj = new ProductItem(product);
//            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
            
        }
       
    }
    renderBasket(box){
        const block = document.querySelector(box);
        for (let product of this.goods){
            const productObj = new ProductItem(product);
//            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.renderBasket());
            
        }
       
    }
}


class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150'){
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }
    render(){
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
    }
    renderBasket(){
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <p>кол-во: ${this.quantity} </p>
                    <button class="del-btn">Удалить</button>
                </div>
            </div>`
    }
}


let list = new ProductsList();
var isBasketShow = false;
//console.log(list.allProducts);
document.getElementById("check").addEventListener('click', () => {
    
    if (!isBasketShow ){
    list._getBasket()
    .then(data => { //data - объект js
        list.basket = [...data.contents];
        list.renderBasket('.basket__inner')

   });
   isBasketShow = true;
}
else {
	var elem = document.querySelector('.basket__inner');
   elem.remove();
   isBasketShow = false;
   document.querySelector('.basket').insertAdjacentHTML("afterbegin", '<div class = "basket__inner"></div>');
}
});





