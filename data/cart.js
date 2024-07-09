export let cart = JSON.parse(localStorage.getItem('cart')); // This means that we will be exporting this variable for use in another certain file which is what we call modules in javascript.

if (!cart) {
    cart = [{
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2
    }, 
    {
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 1
    }];
}

// This function enables us that whenever we update the cart, we need to save it to localStorage
function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart))
}
// For each Product's element, I am adding a functionality to add to cart.
export function addToCart(productId) {
    // This below code helps check if the item is already in the cart to increase the quantity
    let matchingItem;
    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });

    if (matchingItem) { // If the item is already in the cart array.
        matchingItem.quantity += 1;
    } else {
        cart.push({
            productId: productId,
            quantity: 1
        });
    } // when the "Add to Cart button" is clicked, the item is added to the cart based on the HTML's "data-" attribute information that it has

    saveToStorage(); // update our localStorage's cart
}

// This function takes a productId of a product and removes it from the cart.
export function removeFromCart(productId) {
    const newCart = [];

    cart.forEach((cartItem) => {
        if(cartItem.productId !== productId){
            newCart.push(cartItem);
        };
    });
    cart = newCart;
    saveToStorage(); // update our localStorage's cart
}
