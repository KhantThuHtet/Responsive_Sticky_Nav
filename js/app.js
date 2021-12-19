let container = document.getElementsByClassName('container')[0];
// container offsetTop ka scroll event htl mr so state kwar twar naing dl
// scroll event htl mr so if condition true p twr yin offset ka 0 pyit twr b
// dr so scrollY 0 ka nay pyan scroll swal yin sticky add htr tr ma lo offsetTOp 0
// event a pyin mr declare lote htr ma containerTOP 267px anytime pyit nay ml
let containerTop = container.offsetTop;

window.onscroll = ()=>{
    if (scrollY >= containerTop) {
      container.classList.add("sticky");
    } else {
      container.classList.remove("sticky");
    }
}

let menu = document.getElementsByClassName('menu')[0];
let navItem = document.querySelectorAll('.nav-item');
let navTab = document.getElementsByClassName('nav-tab')[0];
menu.addEventListener('click', ()=> {
  navItem.forEach(nav => {
    console.log('a');
    nav.classList.toggle("show");
    nav.classList.toggle("animate__fadeInDown");
  });
  menu.classList.toggle('open');
});
