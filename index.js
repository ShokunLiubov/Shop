let products = [
    {id: 1, title: 'Sweater', price: 200, img: 'img/1.png', stock: 10},
    {id: 2, title: 'Sweater', price: 300, img: 'img/2.jfif', stock: 7},
    {id: 3, title: 'Sweater', price: 400, img: 'img/3.jfif', stock: 9},

    {id: 4, title: 'Dress', price: 200, img: 'img/4.png', stock: 16},
    {id: 5, title: 'Costume', price: 300, img: 'img/5.jfif', stock: 4},
    {id: 6, title: 'Costume', price: 400, img: 'img/6.jfif', stock: 6},

    {id: 7, title: 'Costume', price: 200, img: 'img/7.jfif', stock: 10},
    {id: 8, title: 'Dress', price: 300, img: 'img/8.jfif', stock: 10},
    {id: 9, title: 'Sweater', price: 400, img: 'img/9.jfif', stock: 26},

    {id: 10, title: 'Costume', price: 200, img: 'img/10.jfif', stock: 7},
    {id: 11, title: 'Costume', price: 300, img: 'img/11.jfif', stock: 5},
    {id: 12, title: 'Costume', price: 400, img: 'img/12.jfif', stock: 14},
]


const CART = {
    // {productId: productId, count: 1} структура products
    products: [],
    total: 0
}






const toHTML = product => `
<div class="col-sm-4">
<div class="card">
    <img  src="${product.img}" class="card-img-top" style="height: 300px;" alt="${product.title}">
    <div class="card-body">
        <div class="card__ln">
            <h5 class="card-title">${product.title}</h5>
            <a href="#" class="favorites" data-id="${product.id}"></a>
        </div>
      
      <h6 class="card-price">${product.price}$</h6>
      
        <a href="#" class="btn__st add_basket" data-addCart="addCart" data-id="${product.id}" data-stock="${product.stock}">Add to Cart</a>

    </div>
  </div>
</div>
`

function render() {
    const html = products.map(toHTML).join('')
    document.querySelector('#products').innerHTML = html
}

render()



// Cart
const CART_MODAL = $.modal({
    title: 'My order :',
    closable: true,
    width: '800px',   
    footerButtons: [
        {text: 'Checkout', type: 'btn__st', handler() {
            CART_MODAL.close()
        }},
        {text: 'Close', type: 'btn__st', handler() {
            CART_MODAL.close()
        }}
    ]
})



// const priceModal = $.modal({
//     title: 'Product',
//     closable: true,
//     width: '400px',
//     footerButtons: [
//         {text: 'Close', type: 'primary', handler() {
//             priceModal.close()
//         }}
//     ]
// })

// document.addEventListener('click', event => {
//     event.preventDefault()
//     // cart
//     const cartType = event.target.dataset.crt


    // const btnType = event.target.dataset.btn
    // const id = +event.target.dataset.id
    // const product = products.find(f => f.id === id)

    
   
    // if(cartType === 'cart') {
    //     console.log(cartType);
        // modal.setTitle(`
        // <p>Product ${product.title} added to cart!</p>
        // `),
        // modal.setContent(`
        // <div class="order">
        //     <div class="part__left">
        //         <div class="orfer__img"><img  src="${product.img}" class="card-img-top" alt="${product.title}"></div>
        //     </div>
        //     <div class="part__right">
        //         <div class="order__title">${product.title}</div>
        //         <div class="amount">Amount : ${product.stock}</div>
        //         <div class="order__price">${product.price}$</div>
        //     </div>
        //     <div class="order__close close">&times;</div>
        // </div>
        // `)
   //     modal.open()
   // }
    // if(btnType === 'price') {
    //     priceModal.setTitle(`
    //     <p>Product ${product.title} added to cart!</p>
    //     `),
    //     priceModal.setContent(`
    //     <p>Thank you for choosing Nude Clothes</p>
    //     `)
    //     priceModal.open()
    // } else 
    // if (btnType === 'remove'){
    //     $.confirm({
    //         title: `<p>Nude Clothes</p>`,
    //         content: `<p>Do you want to add the ${product.title } to your favourites?</p>`
    //     }).then(() => {
    //         products = products.filter(f => f.id !== id)
    //         render()
    //     }).catch(() => {
    //         console.log('Cansel');
    //     })
    // }
//})

// Favorite