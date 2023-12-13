import './style.css';
import { firstPage } from './intro_page';
import {menu} from './menu'
import { createHero } from './intro_page';
import { contact } from './contact';

const content = document.querySelector('#content')
//load intro page by default
content.appendChild(createHero())
firstPage()

//function to check the node is present and return true to whip it and remove it that help to append another module or page(tab)
function isInPage(node){
  if(document.body.contains(node) == true){
      node.textContent = "";
      node.remove()
      return true
    }
  }
//add eventlidtener on the ancors
const anchor = document.querySelector('ul');


  anchor.addEventListener("click",(e)=>{
    const intro  = document.querySelector('.intro-page');
    const wraps = document.querySelector('.wraps')
    const contacts = document.querySelector('.section-three')
    if(e.target.matches("[data-index='0']")){
     
        if(isInPage(wraps)  || isInPage(contacts) == true){
            firstPage();
         }
     }
     else if(e.target.matches("[data-index='1']")){
             if(isInPage(intro)  || isInPage(contacts) == true){
                 menu();
             }
            
      }
      else if(e.target.matches("[data-index='2']")){
            if(isInPage(intro)  || isInPage(wraps) == true){
              contact();
            }
      }

  });
 







