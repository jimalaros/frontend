const API = 'https://back-store-jimmy-arango.herokuapp.com/categories';

const item = document.getElementById('itemSearch');
const buttonToSearch = document.getElementById('buttonSearch');
const cards = document.getElementById('cards');
const items = document.getElementById('items');
const templateCards = document.getElementById('template-cards').content;
const footer = document.getElementById('footer');
const templateFooter = document.getElementById('template-footer').content
const templateCart = document.getElementById('template-cart').content
const fragment = document.createDocumentFragment();

let cart = {}

document.addEventListener('DOMContentLoaded', () => {
    fetchData() 
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'))
        printCart()
    }
});

cards.addEventListener('click', e => { addCart(e) });

items.addEventListener('click', e => { buttons (e) });

const fetchData = async () => {
    try {
        const response = await fetch(API);
        const data = await response.json();
        const array = Object.values(data);
        const products = array.flat();
        printCards(products);
        //printCard(products);
    } catch (error) {
        console.log('Fetch error', error);
    }
}

const printCards = products => {
    
    products.map(product => {
        templateCards.querySelector('span').textContent = product.nameCategory;
        templateCards.querySelector('h5').textContent = product.nameProduct;
        templateCards.querySelector('p').textContent = product.price; 
        templateCards.querySelector('img').setAttribute("src", product.image)
        templateCards.querySelector('button').dataset.id = product.id;

        const clone = templateCards.cloneNode(true);
        fragment.appendChild(clone);
    });
    localStorage.setItem('products', JSON.stringify(products))
    cards.appendChild(fragment);
}

const printCard = () => {
    
    const text = item.value;
    console.log(text)

    localStorage.getItem('products')
    let allProducts = JSON.parse(localStorage.getItem('products'));
    
    const product = allProducts.filter(product => product.nameProduct === text)
    localStorage.setItem('product', JSON.stringify(product))
    //console.log(product)
    alert(product[0].nameProduct)
}

buttonToSearch.addEventListener('click', printCard);

const addCart = e => {
    if (e.target.classList.contains('btn-outline-success')) {
        setCart(e.target.parentElement);
    }
    e.stopPropagation()
}

const setCart = item => {
    console.log(item)
    const product = {
        id: item.querySelector('button').dataset.id,
        title: item.querySelector('h5').textContent,
        price: item.querySelector('p').textContent,
        quantity: 1
    }
    if (cart.hasOwnProperty(product.id)) {
        product.quantity = cart[product.id].quantity + 1
    }

    cart[product.id] = { ...product }
    
    printCart();
}

const printCart = () => {
    items.innerHTML = ''

    Object.values(cart).forEach(product => {
        templateCart.querySelector('th').textContent = product.id
        templateCart.querySelectorAll('td')[0].textContent = product.title
        templateCart.querySelectorAll('td')[1].textContent = product.quantity
        templateCart.querySelector('.btn-info').dataset.id = product.id
        templateCart.querySelector('.btn-danger').dataset.id = product.id
        templateCart.querySelector('span').textContent = product.price * product.quantity
        const clone = templateCart.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)

    printFooter()
    localStorage.setItem('cart', JSON.stringify(cart))
}

const printFooter = () => {
    footer.innerHTML = ''
    
    if (Object.keys(cart).length === 0) {
        footer.innerHTML = `
        <th scope="row" colspan="5">cart vacío con innerHTML</th>
        `
        return
    }
    
    const nQuantity = Object.values(cart).reduce((acc, { quantity }) => acc + quantity, 0)
    const nPrice = Object.values(cart).reduce((acc, {quantity, price}) => acc + quantity * price ,0)

    templateFooter.querySelectorAll('td')[0].textContent = nQuantity
    templateFooter.querySelector('span').textContent = nPrice

    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)

    footer.appendChild(fragment)

    const boton = document.querySelector('#drop-cart')
    boton.addEventListener('click', () => {
        cart = {}
        printCart()
    })
}

const buttons = e => {
    // console.log(e.target.classList.contains('btn-info'))
    if (e.target.classList.contains('btn-info')) {
        const product = cart[e.target.dataset.id]
        product.quantity++
        cart[e.target.dataset.id] = { ...product }
        printCart()
    }

    if (e.target.classList.contains('btn-danger')) {
        const product = cart[e.target.dataset.id]
        product.quantity--
        if (product.quantity === 0) {
            delete cart[e.target.dataset.id]
        } else {
            cart[e.target.dataset.id] = {...product}
        }
        printCart()
    }
    e.stopPropagation()
}

