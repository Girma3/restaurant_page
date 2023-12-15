//import images from src
import Shiro from './asset/shiro.jpeg'
import Firfir from './asset/ferfer.jpeg'
import Tibs from './asset/shekla-tibs.jpg'
import Beyaynt from './asset/beyaynt1.jpg'
import Genfo from './asset/genfo1.jpg'
import  Doro from './asset/doro.jpg'
import  Ketfo from './asset/special-kitfo-ethiopian.jpg'
import Mesob from './asset/mesob.jpg'


//wraps hold the menu
const wraps = document.createElement('div');
     wraps.classList.add('wraps');

     //we append menu on the content later
 const content = document.querySelector('.content');

//put the menu info in the array  to create indivdual elemnt with img and price
const menuDetail = [

    {
        foodName: "Firfir",
        foodImage: `${Firfir}`,
        aboutTheFood : "Great for breakfast and made with injera,egg and spices.",
        price : "3$"
    },
    {
        foodName: "Shiro",
        foodImage: `${Shiro}`,
        aboutTheFood : "Check out our spicy shiro.",
        price : "2$"
    },
    {
        foodName: "Shekla Tibs",
        foodImage: `${Tibs}`,
        aboutTheFood : "Tasty and hot food for meat lovers the coal beneath it  even makes it hot 🔥 ",
        price : "10$"  
    },
    {
        foodName: "Beyaynet",
        foodImage: `${Beyaynt}`,
        aboutTheFood : "Packed with delicious tests great choice for vegeterians.",
        price : "5$"
    },
    {
        foodName: "Genfo",
        foodImage: `${Genfo}`,
        aboutTheFood : "Great food for the special occasions  made from barley flour butter  and spices.",
        price : "8$"
    },
    {
        foodName: "Doro wot",
        foodImage: `${Doro}`,
        aboutTheFood : "Our main cousre made form chicken and special  choice for anyone want to taste Ethiopian food.",
        price : "15$"
    },
    {
        foodName: "Ketfo",
        foodImage: `${Ketfo}`,
        aboutTheFood : "Minced meat with chesse,kocho(special bread) and spices.",
        price : "12$"
    },
    {
        foodName: "Agelgel",
        foodImage: `${Mesob}`,
        aboutTheFood : "Our combo good for someone who want to try for the first time.",
        price : "15$"
    }

]

 
//function to create image of the food on the left side and food info on the right side
//for the food info we use the objects that stored in the array.


function menu(){
    
    menuDetail.map((food)=>{

    const holder = document.createElement('div');
    holder.classList.add('menu')

    const rightSide= document.createElement('div');
    rightSide.classList.add('food-img');
    const img = document.createElement('img');
    img.classList.add('menu-img');
    img.src = `${food.foodImage}`
    rightSide.appendChild(img)


    const aboutFood = document.createElement('div');
    aboutFood.classList.add('about-food')

    const menuName = document.createElement('h2');
    menuName.classList.add('food-name');
    menuName.textContent = `${food.foodName}`

    const price = document.createElement('h3');
    price.classList.add('price')
    price.textContent = `${food.price}`


    const info = document.createElement('p');
    info.classList.add('food-info');
    info.textContent = `${food.aboutTheFood}`

    aboutFood.appendChild(menuName);
    aboutFood.appendChild(info);
    aboutFood.appendChild(price);

    holder.appendChild(rightSide);
    holder.appendChild(aboutFood);

    wraps.style.display = "grid";
    wraps.style.gridTemplateColumns = "repeat(auto-fill,minmax(400px,500px))"
    wraps.style.backgroundColor = "rgb(220 178 4)"
    wraps.appendChild(holder)
    
});
content.appendChild(wraps)

}
export {menu}
