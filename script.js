//navegação por tabs
function tabNavigation(){
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if(tabMenu.length && tabContent.length){
    tabContent[0].classList.add("ativo");

    tabMenu.forEach((item, index) => {
      item.addEventListener("click", ()=> {
        activeTab(index);
      });
    });
  
    function activeTab(index){
      clear();
      tabContent[index].classList.add("ativo");
    }
  
    function clear(){
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
    }
  }
}
tabNavigation();

//accordion list
function accordion(){
  const accordionList = document.querySelectorAll(".js-accordion dt");

  if(accordionList.length){

    accordionList.forEach((item) => {
      item.addEventListener("click", openAccordion);
    });
  
    accordionList[0].classList.add("ativo");
    accordionList[0].nextElementSibling.classList.add("ativo");

    function openAccordion(){
      this.classList.toggle("ativo");
      this.nextElementSibling.classList.toggle("ativo");
    } 

  }
}
accordion();


//scroll menu
function scrollMenu(){
  const menu = document.querySelectorAll(".js-menu a[href^='#']");

  menu.forEach((link)=>{
    link.addEventListener("click", scrollToSection);
  });

  function scrollToSection(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}
scrollMenu();


//scroll animation
function scrollAnimation(){
  const sections = document.querySelectorAll(".js-scroll");
  if(sections.length){

    const windowMetade = window.innerHeight * 0.6;

    function fadeAnimation(){
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        if(isSectionVisible){
          section.classList.add("ativo");
        }
      });
    }
  
    fadeAnimation();
    window.addEventListener("scroll", fadeAnimation);

  }
}
scrollAnimation();