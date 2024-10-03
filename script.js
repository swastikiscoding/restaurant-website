const startersList = [
    {
        name: 'Paneer Tikka',
        description: 'Grilled cottage cheese marinated in spices, served with mint chutney.',
        price: '₹250',
        image: 'img/paneertikka.jpg' 
    },
    {
        name: 'Chicken Wings',
        description: 'Spicy and crispy wings tossed in a tangy sauce, perfect for sharing.',
        price: '₹350',
        image: 'img/wings.jpg' 
    },
    {
        name: 'Samosa',
        description: 'Deep-fried pastry filled with spiced potatoes and peas, a classic Indian snack.',
        price: '₹50',
        image: 'img/samosa.jpg' 
    },
    {
        name: 'Veg Spring Rolls',
        description: 'Crispy rolls stuffed with fresh vegetables and served with sweet chili sauce.',
        price: '₹120',
        image: 'img/springroll.jpg' 
    },
    {
        name: 'Hakka Noodles',
        description: 'Stir-fried noodles with vegetables and a hint of soy sauce for flavor.',
        price: '₹180',
        image: 'img/hakkanoodles.jpg' 
    },
    {
        name: 'Onion Bhaji',
        description: 'Crispy fried onion fritters seasoned with spices, served with chutney.',
        price: '₹80',
        image: 'img/bhaji.jpg' 
    },
    {
        name: 'Chili Paneer',
        description: 'Spicy paneer cubes stir-fried with bell peppers and chili sauce.',
        price: '₹300',
        image: 'img/chillipaneer.jpeg' 
    },
    {
        name: 'Aloo Tikki',
        description: 'Spiced potato patties served with tamarind and mint chutneys.',
        price: '₹70',
        image: 'img/alootikki.webp' 
    },
    

    {
        name: 'Pani Puri',
        description: 'Crispy puris filled with spiced water and potatoes, a popular street snack.',
        price: '₹100',
        image: 'img/panipuri.jpg' 
    },
    
];


const mainCourseList = [
    {
        name: 'Biryani',
        description: 'A fragrant rice dish layered with marinated meat or vegetables, flavored with spices and herbs.',
        price: '₹500',
        image: 'img/biryani.webp' 
    },
    {
        name: 'Butter Chicken',
        description: 'Tender chicken pieces cooked in a creamy tomato sauce with a blend of spices.',
        price: '₹450',
        image: 'img/butterchicken.jpg' 
    },
    {
        name: 'Paneer Butter Masala',
        description: 'Cubes of paneer cooked in a rich and creamy tomato gravy, perfect with naan or rice.',
        price: '₹400',
        image: 'img/paneerbuttermasala.jpg' 
    },
    {
        name: 'Dal Makhani',
        description: 'Slow-cooked black lentils in a creamy sauce, seasoned with spices and butter.',
        price: '₹250',
        image: 'img/daalmakhni.jpg' 
    },
    {
        name: 'Rogan Josh',
        description: 'A flavorful lamb curry cooked with aromatic spices, yogurt, and a hint of saffron.',
        price: '₹600',
        image: 'img/roganjosh.webp' 
    },
    {
        name: 'Chole Bhature',
        description: 'Spicy chickpeas served with deep-fried bread, a classic North Indian dish.',
        price: '₹200',
        image: 'img/cholebhature.webp' 
    },
    {
        name: 'Prawn Curry',
        description: 'Prawns cooked in a coconut milk-based curry with spices and herbs, perfect with rice.',
        price: '₹550',
        image: 'img/prawncurry.webp' 
    },
    {
        name: 'Vegetable Pulao',
        description: 'A fragrant rice dish cooked with mixed vegetables and aromatic spices.',
        price: '₹300',
        image: 'img/vegetablepulao.jpg' 
    },
    {
        name: 'Aloo Gobi',
        description: 'A dry curry made with potatoes and cauliflower, seasoned with turmeric and spices.',
        price: '₹180',
        image: 'img/aloogobi.jpg' 
    }
];

const beveragesList = [
    {
        name: 'Masala Chai',
        description: 'Traditional Indian spiced tea brewed with milk and aromatic spices.',
        price: '₹50',
        image: 'img/masalachai.jpg' 
    },
    {
        name: 'Lassi',
        description: 'A refreshing yogurt-based drink, perfect for cooling down.',
        price: '₹100',
        image: 'img/lassi.webp' 
    },
    {
        name: 'Sweet Lime Soda',
        description: 'A refreshing fizzy drink made with fresh sweet lime and soda.',
        price: '₹80',
        image: 'img/sweetlimesoda.jpg' 
    },
    {
        name: 'Nimbu Pani',
        description: 'A tangy and refreshing lemonade with a hint of spices.',
        price: '₹40',
        image: 'img/nimbupani.jpg' 
    },
    {
        name: 'Fruit Punch',
        description: 'A vibrant mix of fruits with a splash of juice, served chilled.',
        price: '₹120',
        image: 'img/fruitpunch.jpg' 
    },
    {
        name: 'Coconut Water',
        description: 'Fresh and hydrating coconut water straight from the coconut.',
        price: '₹60',
        image: 'img/coconutwater.avif' 
    },
    {
        name: 'Iced Tea',
        description: 'Chilled black tea brewed with lemon and mint for a refreshing taste.',
        price: '₹70',
        image: 'img/icedtea.jpg' 
    },
    {
        name: 'Ginger Ale',
        description: 'A sparkling drink with a spicy kick of ginger, great for digestion.',
        price: '₹90',
        image: 'img/gingerale.jpg' 
    },
    {
        name: 'Cold Coffee',
        description: 'Iced coffee blended with milk and sugar, perfect for a refreshing break.',
        price: '₹80',
        image: 'img/coldcoffee.jpg' 
    }
];

const dessertsList = [
    {
        name: 'Gulab Jamun',
        description: 'Deep-fried dough balls soaked in sweet syrup, a classic Indian dessert.',
        price: '₹100',
        image: 'img/gulabjamun.jpg' 
    },
    {
        name: 'Rasgulla',
        description: 'Soft and spongy cheese balls soaked in sugar syrup, a delightful treat.',
        price: '₹90',
        image: 'img/rasgulla.cms' 
    },
    {
        name: 'Kheer',
        description: 'A creamy rice pudding flavored with cardamom and garnished with nuts.',
        price: '₹120',
        image: 'img/kheer.jpg' 
    },
    {
        name: 'Jalebi',
        description: 'Crispy spirals of fried batter soaked in sugar syrup, a sweet delight.',
        price: '₹80',
        image: 'img/jalebi.jpg' 
    },
    {
        name: 'Barfi',
        description: 'A sweet made from condensed milk and flavored with cardamom or fruits.',
        price: '₹150',
        image: 'img/barfi.jpg' 
    },
    {
        name: 'Cheesecake',
        description: 'A creamy dessert made with cream cheese and a buttery crust.',
        price: '₹200',
        image: 'img/cheesecake.jpg' 
    },
    {
        name: 'Chocolate Mousse',
        description: 'A rich and airy dessert made with chocolate and whipped cream.',
        price: '₹180',
        image: 'img/chocolatemousse.jpg' 
    },
    {
        name: 'Tiramisu',
        description: 'An Italian coffee-flavored dessert made with layers of mascarpone and coffee-soaked biscuits.',
        price: '₹220',
        image: 'img/tiramisu.jpg' 
    },
    {
        name: 'Fruit Salad',
        description: 'A refreshing mix of seasonal fruits, perfect for a light dessert.',
        price: '₹90',
        image: 'img/fruitsalad.jpg' 
    }
];




const starters = document.querySelector('.starters');
const mainCourse = document.querySelector('.main-course');
const descriptionLimit = 70; // Set the character limit for visible text

const menu = [
    {
        class: document.querySelector('.starters'),
        list: startersList
    },
    {
        class: document.querySelector('.main-course'),
        list: mainCourseList
    },
    {
        class: document.querySelector('.beverages'),
        list: beveragesList
    },
    {
        class: document.querySelector('.desserts'),
        list: dessertsList
    }
]



function createMenuItemHTML(item) {
    const truncatedDescription = item.description.length > descriptionLimit
        ? item.description.substring(0, descriptionLimit) + '...'
        : item.description;

    return `
        <div class="card max-w-80 my-10 mx-5">
            <img src="${item.image}" alt="${item.name}" class="h-[200px] w-full object-cover object-center">
            <div>
                <h2 class="text-slate-800 font-bold text-2xl my-1">${item.name}</h2>
                <p class="text-lg text-slate-700">${truncatedDescription}</p>
                <div class="flex justify-between my-3">
                    <p class="text-lg font-semibold">${item.price}</p>
                    <button class="bg-yellow-500 hover:bg-yellow-400 text-white text-lg font-bold px-2 py-1">Order</button>
                </div>
            </div>
        </div>
    `;
}

let showingAll = false;

// Function to show limited cards
function showLess(categoryName) {
    const category = menu.find((cat) => cat.class.classList.contains(categoryName));
    category.class.innerHTML = '';

    // Show only the first three items
    category.list.slice(0, 3).forEach((card) => {
        category.class.innerHTML += createMenuItemHTML(card);
    });
    showingAll = false
}

// Function to show all cards
function showCards(categoryName) {
    const category = menu.find((cat) => cat.class.classList.contains(categoryName));
    category.class.innerHTML = '';

    // Show all items
    category.list.forEach((card) => {
        category.class.innerHTML += createMenuItemHTML(card);
    });

   showingAll = true
   
}

function toggleCards(categoryName) {
    if (showingAll) {
        showLess(categoryName);
    } else {
        showCards(categoryName);
    }
}

function toggleMenu() {
    const hamburger = document.getElementById('mobile-menu');
    hamburger.classList.toggle('hidden');
}

// Initial load of the first three items
menu.forEach((item) => showLess(item.class.classList[0])); // Ensure the initial state is with See Less
const loader = document.querySelector('.preloader');
window.addEventListener('load', () =>{
    loader.style.display = 'none'
})