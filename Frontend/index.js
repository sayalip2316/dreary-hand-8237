function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

const plansEl=document.getElementById("see-all-plans")

plansEl.addEventListener("click",()=>{
    window.location.href="productpage.html"
})