const data=[
    {
        id:1,
        name:"realme watch pro",
        img:"items/1.png",
        price:47,
        cat:"Dress"
    },
    {
        id:2,
        name:"ultra watch A1",
        img:"items/4.png",
        price:199,
        cat:"luxury"
    },
    {
        id:3,
        name:"fire boult",
        img:"items/2.png",
        price:89,
        cat:"sports"
    },
    {
        id:4,
        name:"Noise calibar 4",
        img:"items/3.png",
        price:39,
        cat:"Dress"
    },
    {
        id:5,
        name:"Boat watch X series",
        img:"items/2.png",
        price:49,
        cat:"Dress"
    },
    {
        id:6,
        name:"realme watch pro",
        img:"items/1.png",
        price:47,
        cat:"sports"
    },
    {
        id:7,
        name:"realme watch proX",
        img:"items/1.png",
        price:47,
        cat:"sports"
    },
    {
        id:8,
        name:"fire boult",
        img:"items/2.png",
        price:47,
        cat:"casual"
    },
    {
        id:7,
        name:"fire boult",
        img:"items/2.png",
        price:47,
        cat:"casual"
    },
    {
        id:10,
        name:"apple watch series",
        img:"items/6.png",
        price:159,
        cat:"casual"
    },
    {
        id:11,
        name:"apple watch series",
        img:"items/5.png",
        price:189,
        cat:"luxury"
    },
];
const productContainer=document.querySelector(".products");
const searchInput=document.querySelector(".search");
const categoriesContainer=document.querySelector(".cats");
const priceRange=document.querySelector(".priceRange");
const priceValue=document.querySelector(".priceValue");

const displayProducts=(filteredProducts)=>{
    productContainer.innerHTML=filteredProducts.map((product)=>
    `<div class="product">
    <img src="${product.img}" alt="">
    <span class="name">${product.name}</span>
    <span class="priceText">$${product.price}</span>
</div>`).join(""); 
};

displayProducts(data);
searchInput.addEventListener("keyup",(e)=>{
    const value = e.target.value.toLowerCase();

    if(value){

        displayProducts(data.filter(item=>item.name.toLowerCase().indexOf(value)!==-1))
    }
    else{
        displayProducts(data);
    }
})
const setCategories=()=>{
    const allCats=data.map(item=>item.cat);
    const category=["All",...allCats.filter((item,i)=>{
        return allCats.indexOf(item)===i;
    })];
    categoriesContainer.innerHTML=category.map(cat=>
        `
        <span class="cat">${cat}</span>

        `
        ).join("");

    categoriesContainer.addEventListener("click",(e)=>{

        const selectedCat =  e.target.textContent;
        selectedCat==="All"
        ?displayProducts(data)
        :displayProducts(data.filter((item)=>item.cat===selectedCat));

    })
}
const setPrices=()=>{
    const priceList=data.map((item)=>item.price);
    const minPrice=Math.min(...priceList);
    const maxPrice=Math.max(...priceList);
    priceRange.min=minPrice;
    priceRange.max=maxPrice;
    priceRange.value=maxPrice;
    priceValue.textContent="$" + maxPrice;
    priceRange.addEventListener("input",(e)=>{
        priceValue.textContent="$" + e.target.value;
        displayProducts(data.filter((item)=>item.price <= e.target.value))
    })

};
setCategories();
setPrices();
