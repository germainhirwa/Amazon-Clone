"""
***              The Steps to follow with Javascript is 

#1 Saving Data
#2 Generating the HTML using the saved data
# Making the page interactive.


*** Modules are really helpful when working with javascript



***  Always when you create a constant, constants gets reset to their initial values. 

So, to combat this, we have to store the variables that we want to prevent from switching to their initial values when a page is refreshed or when a link to another page is clicked to a localStorage variable. Forinstance our cart variable.

so we use 
    localStorage.setItem(): This takes in two parameters. The name of how you want to save the thing and the thing that you want to save. The thing should be saved as a string.
                 e.g: localStorage.setItem('cart', JSON.stringify(cart)).       This will convert the cart to a string using JSON.stringify() and then save it in the localStorage named as a variable 'cart'. !Remember, cart was initially let cart = [{
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2
}, 
{
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1
}];             but was converted into a json which is string before being saved in the local storage.

So, to get our cart back again from the storage, we do;

        let cart = localStorage.getItem('cart')
    however, since the cart was stored as a string to get it back in the way it was as an array, we do;

        let cart = JSON.parse(localStorage.getItem('cart'))

Since for the first time when we try loading our cart when it is not yet stored in the localStorage, we get back "null". so we have to use an if statement maybe and give the cart default values incase it was null or empty before.

"""

"""
When you are only exporting one thing fromt a file, you can use a default export and hence import without using  a {}.

            e.g: export default formatCurrency   # One in the money.js
            then importing it with:  import formatCurrency from './utils/money.js';
"""


