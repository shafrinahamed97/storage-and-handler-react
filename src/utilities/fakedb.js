// use local-storage to manage cart data
const addToDb = _id => {
    const quantity = localStorage.getItem(_id);
    if (quantity) {
        console.log('already Exist')
        const newQuantity = parseInt(quantity) + 1;
        localStorage.setItem(_id, newQuantity);
    }
    else {
        console.log('new item added')
        localStorage.setItem(_id, 1)
    }

}

export { addToDb }