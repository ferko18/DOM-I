const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

/* Task 1 :Create selectors to point your data into  elements: Firealem *****************************************/

//select navigation items 

const navigation = document.querySelectorAll('nav a');
//update nav with JSON
navigation[0].innerHTML =siteContent.nav["nav-item-1"]
navigation[1].innerHTML =siteContent.nav["nav-item-2"]
navigation[2].innerHTML =siteContent.nav["nav-item-3"]
navigation[3].innerHTML =siteContent.nav["nav-item-4"]
navigation[4].innerHTML =siteContent.nav["nav-item-5"]
navigation[5].innerHTML =siteContent.nav["nav-item-6"]

//cta selectors

const ctahead = document.querySelector('.cta-text h1');

ctahead.textContent =siteContent.cta.h1;

const ctabutton = document.querySelector('.cta-text button');

ctabutton.textContent =siteContent.cta.button;

const ctaimg = document.getElementById('cta-img');

ctaimg.setAttribute('src', siteContent.cta["img-src"])

//maincontent selectors 

//main content first div
const toptext1 = document.querySelectorAll('.top-content .text-content h4')[0];
toptext1.textContent =siteContent["main-content"]["features-h4"];

const topcontent1 = document.querySelectorAll('.top-content .text-content p')[0]
topcontent1.textContent = siteContent["main-content"]["features-content"]

//main content second div
const toptext2 = document.querySelectorAll('.top-content .text-content h4')[1];
toptext2.textContent =siteContent["main-content"]["about-h4"]

const topcontent2 = document.querySelectorAll('.top-content .text-content p')[1]
topcontent2.textContent = siteContent["main-content"]["about-content"]
//middle image 

const middleimage = document.getElementById('middle-img');
middleimage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
//bottomcontent selectors 

//bottom content first div
const bottomext1 = document.querySelectorAll('.bottom-content .text-content h4')[0];
bottomext1.textContent = siteContent["main-content"]["services-h4"]
const bottomcnt1 = document.querySelectorAll('.bottom-content .text-content p')[0];
bottomcnt1.textContent = siteContent["main-content"]["services-content"]

//bottom content second div
const bottomext2 = document.querySelectorAll('.bottom-content .text-content h4')[1];
bottomext2.textContent = siteContent["main-content"]["product-h4"]

const bottocnt2 = document.querySelectorAll('.bottom-content .text-content p')[1];
bottocnt2.textContent = siteContent["main-content"]["product-content"]


//bottom content third  div
const bottomext3 = document.querySelectorAll('.bottom-content .text-content h4')[2];
bottomext3.textContent = siteContent["main-content"]["vision-h4"]

const bottocnt3 = document.querySelectorAll('.bottom-content .text-content p')[2];
bottocnt3.textContent = siteContent["main-content"]["vision-content"]

//contact selectors 
//contact header 
const contactheader = document.querySelector('.contact');


//contact
const contacttext1 = document.querySelectorAll('.contact h4')[0];
contacttext1.textContent =siteContent.contact["contact-h4"]

const contacttext2 = document.querySelectorAll('.contact p')[0];
contacttext2.textContent=siteContent.contact.address;

const contacttext3 = document.querySelectorAll('.contact p')[1];
contacttext3.textContent=siteContent.contact.phone;

const contacttext4 = document.querySelectorAll('.contact p')[2];
contacttext4.textContent=siteContent.contact.email;

//footer selector 

const footerselector = document.querySelector('footer p')
footerselector.textContent=siteContent.footer.copyright;

//Task 3 
const navtab = document.querySelector('nav')
navtab.style.backgroundColor ='lightgray'

navtaba= document.querySelectorAll('nav a')
//
//change color to green/can also use .forEach
for ( var i=0; i<navtaba.length;i++){
  navtaba[i].style.color = 'green'
}
//added a see also tab
var newnavitem = document.createElement('a')
newnavitem.textContent ='See Also'
navtab.appendChild(newnavitem)

//added icon at the begining
var newnavitem2 = document.createElement('img')
newnavitem2.style.height= '25px';
newnavitem2.style.margin ='5px';
newnavitem2.style.marginBottom='1px'
newnavitem2.setAttribute('src', 'img/address-card-regular.svg')

navtab.prepend(newnavitem2)