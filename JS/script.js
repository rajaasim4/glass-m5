//*Change Hamburger Style

const changeHamburgerStyle = () => {
  document.querySelector("#Hamburger_bar1").classList.toggle("Hamburger_bar_1");
  document.querySelector("#Hamburger_bar2").classList.toggle("Hamburger_bar_2");
  document.querySelector("#Hamburger_bar3").classList.toggle("Hamburger_bar_3");
  document.querySelector(".Main-nav").classList.toggle("Main-nav-show");
};

//*Change FAq Style
let faqs = document.querySelectorAll(".Faq-heading");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    let faqtext = faq.nextElementSibling;
    let icon = faq.children[1];
    icon.classList.toggle("Faq-close-icon");

    faqtext.classList.toggle("Faq-show");
  });
});
