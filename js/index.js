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
//update nav with HTML
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
const toptext1 = document.querySelectorAll('.top-content .text-content')[0];

//main content second div
const toptext2 = document.querySelectorAll('.top-content .text-content')[1];

//middle image 

const middleimage = document.getElementById('middle-img')

//bottomcontent selectors 

//bottom content first div
const bottomext1 = document.querySelectorAll('.bottom-content .text-content')[0];

//bottom content second div
const bottomext2 = document.querySelectorAll('.bottom-content .text-content')[1];


//bottom content third  div
const bottomext3 = document.querySelectorAll('.bottom-content .text-content')[2];


//contact selectors 
//header 
const contactheader = document.querySelector('.contact');


//paragraphs

const contacttext1 = document.querySelectorAll('.contact p')[0];


const contacttext2 = document.querySelectorAll('.contact p')[1];

const contacttext3 = document.querySelectorAll('.contact p')[2];

//footer selector 

const footerselector = document.querySelector('footer p')
