let menu = [
    {
        id: 0,
        category: "pizza",
        title: "Chicken Alfredo Pizza",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, earum autem laudantium nostrum sapiente eligendi at incidunt vitae tenetur suscipit recusandae sequi quod animi dolorum illo, similique voluptatem facilis sed!",
        img: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2021-07-Chicken-Alfredo-Pizza%2FChicken-Alfredo-Pizza-KitchnKitchn2970-1_01"
    },
    {
        id: 1,
        category: "pizza",
        title: "Italian Margarita",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, earum autem laudantium nostrum sapiente eligendi at incidunt vitae tenetur suscipit recusandae sequi quod animi dolorum illo, similique voluptatem facilis sed!",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg"
    },
    {
        id: 2,
        category: "tacos",
        title: "Spicy Tacos",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, earum autem laudantium nostrum sapiente eligendi at incidunt vitae tenetur suscipit recusandae sequi quod animi dolorum illo, similique voluptatem facilis sed!",
        img: "https://images.immediate.co.uk/production/volatile/sites/30/2021/02/Next-level-tacos-e163429.jpg?resize=768,574"
    },
    {
        id: 3,
        category: "tacos",
        title: "Carne Asada Street Tacos ",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, earum autem laudantium nostrum sapiente eligendi at incidunt vitae tenetur suscipit recusandae sequi quod animi dolorum illo, similique voluptatem facilis sed!",
        img: "https://www.eatingonadime.com/wp-content/uploads/2020/10/carne-asada-1-square.jpg"
    },
    {
        id: 4,
        category: "tacos",
        title: "Perfect Porterhouse Steak",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, earum autem laudantium nostrum sapiente eligendi at incidunt vitae tenetur suscipit recusandae sequi quod animi dolorum illo, similique voluptatem facilis sed!",
        img: "https://assets.bonappetit.com/photos/57ad5452f1c801a1038bcb97/master/pass/perfect-porterhouse-steak.jpg"
    },
    {
        id: 5,
        category: "tacos",
        title: "Spicy Tacos",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, earum autem laudantium nostrum sapiente eligendi at incidunt vitae tenetur suscipit recusandae sequi quod animi dolorum illo, similique voluptatem facilis sed!",
        img: "https://img.taste.com.au/w_-0kcUJ/taste/2016/11/aussie-style-beef-and-salad-tacos-86525-1.jpeg"
    },
    {
        id: 6,
        category: "pasta",
        title: "Fettuccine Alfredo Pasta Recipe",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, earum autem laudantium nostrum sapiente eligendi at incidunt vitae tenetur suscipit recusandae sequi quod animi dolorum illo, similique voluptatem facilis sed!",
        img: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/fettuccine-alfredo-1.jpg"
    },
    {
        id: 7,
        category: "steak",
        title: "LA Steak",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, earum autem laudantium nostrum sapiente eligendi at incidunt vitae tenetur suscipit recusandae sequi quod animi dolorum illo, similique voluptatem facilis sed!",
        img: "https://www.eatthis.com/wp-content/uploads/sites/4/2022/07/Grilled-Prime-NY-Strip-Steak.jpg?quality=82&strip=1"
    },
    {
        id: 8,
        category: "pasta",
        title: "Creamy Tomato and Spinach Pasta",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, earum autem laudantium nostrum sapiente eligendi at incidunt vitae tenetur suscipit recusandae sequi quod animi dolorum illo, similique voluptatem facilis sed!",
        img: "https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Spinach-Tomato-Pasta-bowl.jpg"
    },
    {
        id: 9,
        category: "pizza",
        title: "Pepperoni Pizza",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, earum autem laudantium nostrum sapiente eligendi at incidunt vitae tenetur suscipit recusandae sequi quod animi dolorum illo, similique voluptatem facilis sed!",
        img: "https://foodhub.scene7.com/is/image/woolworthsltdprod/2004-easy-pepperoni-pizza:Mobile-1300x1150"
    },
]

let items = document.querySelector(".items")
let buttons = document.querySelectorAll(".btn")

document.addEventListener("DOMContentLoaded", () => {
    displayItems(menu)
})

function displayItems(menuArr) {

    let displayMenus = menuArr.map(x => {
        return `<div class="item max-w-sm bg-emerald-100 m-4">
        <div>
            <img src="${x.img}"
                alt="" class="h-64 w-full object-cover">
        </div>
        <div class="m-4 text-center">
            <h1 class="uppercase font-bold m-4">${x.title}</h1>
            <span>${x.desc}</span>
        </div>
    </div>`
    })
    items.innerHTML = displayMenus
}

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        let cItem = e.target.dataset.id
        let menuCategory = menu.filter(i => {
            if (i.category === cItem) {
                return i
            }
        })
        if (cItem === "all") {
            displayItems(menu)
        } else {
            displayItems(menuCategory)
        }
        
        console.log(cItem)
        console.log(menuCategory)
    })
})

