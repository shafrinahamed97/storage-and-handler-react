// use local-storage to manage cart data
const addToDb = _id => {
    let shoppingCart;


    // get the shopping cart
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    else {
        shoppingCart = {};

    }


    // add quantity
    const quantity = shoppingCart[_id];
    if (quantity) {

        const newQuantity = quantity + 1;
        shoppingCart[_id] = newQuantity;

    }
    else {
        shoppingCart[_id] = 1;

    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

}

export { addToDb }