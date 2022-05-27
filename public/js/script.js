$(document).ready(function(){
    $(window).scroll(function(){
//navbar
        if(this.scrollY > 20){
            $('.navbarss').addClass("sticky");
        }else{
            $('.navbarss').removeClass("sticky");
        }
        
        // scroll-up button show/hide tepaga knopka
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

const modal = document.querySelector('.modalka')  

$('.coming').click(()=>{
  modal.style.display="block"

})
$('#modal_close').click(() =>{
  
        modal.style.display="none"

 

})
    // toggle menu bo'limi
    $('.menu-btn').click(function(){
        $('.navbarss .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //TYpescipt bo'limi
   setTimeout(() => {
    var typed = new Typed(".typing", {
        strings: ["SardorDev"],
        typeSpeed: 100,
        backSpeed: 60,

    }); 
   }, 2800);

setTimeout(() => {
    var typed = new Typed(".typing-2", {
        strings: ["Front-end Devoluper","Back-end Devoluper"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
}, 4500);

setTimeout(() => {
    var typed = new Typed(".typing-3", {
        strings: ["Front-end Devoluper","Back-end Devoluper"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
}, 4500);
    // owl carousel script
  
//loader & gerascale
    let header = document.querySelector('.home');
    let loader = document.querySelector('.preloader') ;
  let body = document.querySelector('body')
    setTimeout(() => {
    
        setTimeout(() => {
            loader.style.display=`none`;
        }, 1000)
        loader.style.opacity=`0`;
    body.style.overflow="auto"
    }, 2000);

    setTimeout(() => {
        header.style.filter=` grayscale(0)`;
    }, 4500);
   
  
});
const soundCloud = document.querySelector('.sound-cloud');
const off = document.querySelector('#off');
const on = document.querySelector('#on');
const myAudio = document.querySelector('#myAudio');

setTimeout(() => {
    off.addEventListener('click', () => soundTrack('off'));
    on.addEventListener('click', () => soundTrack('on'));
    
    const soundTrack = (soundState) => {
        if(soundState === 'off'){
            on.style.display = 'block';
            off.style.display = 'none';
            soundCloud.style.color = "#08fdd8";
            myAudio.play();
        }
        else if(soundState === 'on'){
            on.style.display = 'none';
            off.style.display = 'block';
            soundCloud.style.color = "#f50057";
            myAudio.pause();
        }
    }
     
}, 5000);



    let mixer = mixitup('.cards', {
    selectors: {
        target: '.card_mix'
    },
    animation: {
        duration: 500
    }
});

new Vivus(
  "my-svg1",
  { type:"sync",
    duration: 160,
   
    }
);
new Vivus(
    "my-svg2",
    {
        type:"sync",
      duration:160,
 
    }
  
  );
  new Vivus(
    "my-svg3",
    {type:"sync",
        duration: 160,
      
            }
  ); 
new Vivus(
    "my-svg-4",
    {
        type:"sync",
      duration: 160,
         }
   
  );
 

 
  const contacts = document.querySelector('.form');
 let names = document.getElementById('name');
 let email = document.getElementById('email');
let phone = document.getElementById('phone');
let message = document.getElementById('message');


contacts.addEventListener('submit', (e) =>{
e.preventDefault();
let formData = {
    names:names.value,
    email:email.value,
    phone:phone.value,
    message:message.value
}


let xhr = new XMLHttpRequest();
xhr.open('POST','/');
xhr.setRequestHeader('content-type','application/json');
xhr.onload = function(){
console.log(xhr.responseText);
if(xhr.responseText == 'success'){
alert('Message Send');
names.value ='';
email.value= '';
phone.value= '';
message.value= '';
}else{
    alert('Something went wrong!!!')
}
}
xhr.send(JSON.stringify(formData));
}) ;















