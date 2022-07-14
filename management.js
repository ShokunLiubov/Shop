function deleteProductFromCart(event) {
    const PRODUCT_ID = event.target.dataset.id

    event.target.parentNode.parentNode.remove()

    CART.products.forEach(function(el,i){
        if(el.productId == PRODUCT_ID)  CART.products.splice(i,1)
    })
    calculateTotal()
    document.querySelector('.modal-result').innerHTML = `Total : ${CART.total}$`

    
}

function calculateTotal() {
    CART.total = 0
    CART.products.forEach(function(el){
        const PRODUCT_PRICE = getProduct(el.productId).price*el.count
        CART.total += PRODUCT_PRICE
    })

}

function getProduct(id) {
    var i = products.length;
    while (i--) {
        if (products[i].id == id) {
           return products[i];
        }
    }
}






document.addEventListener('DOMContentLoaded', function(){ 

    //likes
    document.querySelectorAll('.favorites').forEach((like) => {
        like.addEventListener('click', function(event){
            event.preventDefault();
            event.target.classList.toggle("active")
        })      
    })
    //likes


    

        // TZ

        // 1.Удалить продукт из объекта CART и пересчитать total
        // 2. Пересчитанное новое число добавить в текущее окно кjрзины и в объект CART total
        // 3





    // Убрать наличие товара
    document.onclick = event => {
        if(event.target.classList.contains('add_basket')) {
            const PRODUCT_ID = event.target.dataset.id
           const PRODUCT_STOKE = stokeFunction(PRODUCT_ID)
           if (PRODUCT_STOKE === 0) {
            event.target.classList.add('disable')
           }
        }    
    }

    let stokeFunction = id => {

        const PRODUCT = products.find( (pr) => pr.id==id )
          if(PRODUCT.stock > 0) {
            PRODUCT.stock--;
          }
          return PRODUCT.stock
    }

    // CART


    function addToCart(productId)
    {

        const PRODUCT = getProduct(productId)
        if(PRODUCT.stock == 0) return 
      
       if(CART.products[productId]){
        CART.products[productId].count += 1
       }else{
        CART.products[productId] = {productId: productId, count: 1}
       }
       

       CART.total += PRODUCT.price


       console.log(getProduct(productId));

    }


   document.addEventListener('click', function(event) {
     if(event.target.hasAttribute('data-addCart')) {
        event.preventDefault();
         const PRODUCT_ID = event.target.dataset.id
        addToCart(PRODUCT_ID)
        openCartModal()

        
     }
   })

    document.querySelector('.icon__cart').addEventListener('click', function (e) {
        openCartModal()
        
   })

   function openCartModal() {
    let cartContent = ''
        
        CART.products.forEach( (cartProduct) => {
            
            const PRODUCT = getProduct(cartProduct.productId)
            cartContent += `
                <div class="product">
                    <div class="product__content">
                        <div class="part__left">
                            <div class="product__img"><img  src="${PRODUCT.img}" class="card-img-top" alt="${PRODUCT.title}"></div>
                        </div>
                        <div class="part__right">
                            <div class="product__title">${PRODUCT.title}</div>
                            <div class="product__amount">Amount : ${cartProduct.count}</div>
                            <div class="product__price">${PRODUCT.price}$</div>
                        </div>
                        <div class="product__del close" data-price=${PRODUCT.price} data-id="${PRODUCT.id}" onclick="deleteProductFromCart(event)" >&times;</div>
                    </div>
                    
                    <hr class="product__hr">
                </div>
            `
        })

        cartContent+=`
            <span class="modal-result">Total : ${CART.total}$</span>
        `

        CART_MODAL.setContent(cartContent)
        CART_MODAL.open()
   }


   
//    document.addEventListener('click', function(e) {
//         if(event.target.classList.contains('product__del')){
//             console.log('loh');
//         } 
//    })






    // function removeCART(id) {
    //     let product = CART.find(it => it.id == parseInt(id));
    //     let index = CART.indexOf(product);
    //     CART.splice(index, 1);
    //     renderCART();
    //     console.log(cart);
    // };
    



});