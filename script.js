function scrollCheck(){

    let nav=document.getElementsByTagName('nav')[0]
    let scroll=window.scrollY;
    console.log(scroll);
    if(scroll<100){
nav.style.backgroundColor="rgb(61, 135, 179";
    }else{
        nav.style.backgroundColor="brown";

    }
}

window.addEventListener("scroll",scrollCheck)











function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

