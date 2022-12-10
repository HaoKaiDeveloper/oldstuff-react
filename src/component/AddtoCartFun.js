const AddToCart = (product) => {
    const localCart = JSON.parse(localStorage.getItem('cart'))
    const sameItem = localCart.find((item) => item.id === product.id)
    let newArr
    if (sameItem === undefined) {
        newArr = [...localCart, product]
        localStorage.setItem('cart', JSON.stringify(newArr))
    }
}


export default AddToCart