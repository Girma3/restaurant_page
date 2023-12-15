
const content = document.querySelector('.content')
//function to creat location mapp on left  side and openhours on the right side
function contacts(){
    const section = document.createElement('div');
    section.classList.add('section-three');

    const contact = document.createElement('div');
    contact.classList.add('contact')

    const titleContact = document.createElement('h2')
    titleContact.classList.add('contact-title');
    titleContact.textContent = "Find Us"

    const place = document.createElement('p')
    place.textContent = "📍 Addis Ababa,meskel aquare"

    const phone = document.createElement('p');
    phone.textContent = "☎️ +251 9 29 04  02 27";

    contact.appendChild(titleContact);
    contact.appendChild(phone);
    contact.appendChild(place);

    const openHrs = document.createElement('div');
    openHrs.classList.add('open-time');

    const titleHrs = document.createElement('h2');
    titleHrs.textContent = "Open Hours";

    const openTime  = document.createElement('p');
    openTime.classList.add('open-hrs');
    openTime.textContent = `${'open 7 days a week'} 
        ${"11:30 AM - 9 PM OR UNTIL WE SELL OUT"}`

    contact.appendChild(titleHrs);
    openHrs.appendChild(openTime);

    const mapImg = document.createElement('div');
    mapImg.classList.add('map-img');

    contact.appendChild(openTime)
    section.appendChild(contact);
    section.appendChild(mapImg)
 return section
    
}
function contact(){
    content.appendChild(contacts())
    return content
}
export{contact}