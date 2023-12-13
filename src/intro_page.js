
const wrppper = document.createElement('div');
wrppper.classList.add('intro-page')

function createHero(){
   
    const header = document.createElement('div');
    const ulList = document.createElement('ul')
    const logo = document.createElement('div')
    logo.classList.add('logo')
    logo.textContent = 'G-Vibe'

    const fragment = document.createDocumentFragment();
    const navs = ['Home','Menu','Contact Us'];
  
    
    navs.forEach((nav)=>{
       
       const lists = document.createElement('li');
       const links = document.createElement('a');
       links.textContent = nav;
       lists.classList.add('nav-items')
       links.dataset.index = navs.indexOf(nav)
       
       lists.appendChild(links)
       fragment.appendChild(lists)
       
      
       ulList.appendChild(fragment)
       
      
    })
   
   

     header.classList.add('header');
  header.appendChild(logo)
    header.appendChild(ulList)
    return header

}


function story(){
    const holder = document.createElement('div');
    holder.classList.add('section-two')

    const imgHolder = document.createElement('div')
    imgHolder.classList.add('intro-img')

    const title = document.createElement('h2');
    title.classList.add('title');
    title.textContent = "Hi, We're G-vibe.";

    const texts = document.createElement('div')
    texts.classList.add('story')
   
 
   

    const aboutUs = document.createElement('p');
    aboutUs.classList.add('about')
    aboutUs.textContent = 
    `${"We are inspired by Ethiopian food and we believe being generous and humble.just like you we  know the value of shared good meal between friends."} `
    texts.appendChild(title)
    texts.appendChild(aboutUs)
    holder.appendChild(imgHolder)
    holder.appendChild(texts)

    return holder
}

function footer(){
    const footer = document.createElement('footer');
    const par = document.createElement('p')
    const knife = document.createElement('div')
    
    knife.classList.add('knife');
    par.textContent = "@2023 made for the Odin project "
    footer.appendChild(par)
    footer.appendChild(knife)
    return footer
}
 function firstPage(){
    const content = document.querySelector('#content')
        wrppper.appendChild(story());
        wrppper.appendChild(footer())
        content.appendChild(wrppper)
    
 }
 export{firstPage,createHero}


