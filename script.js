const faqs = document.querySelectorAll(".faq");

function deActivate() {
  const acts = document.querySelectorAll(".faq.active");

  acts.forEach((faq) => {
    faq.classList.toggle("active");
  });
}

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    const isOpen = faq.classList.value.includes('active')
    deActivate();
    !isOpen && faq.classList.toggle("active");
  });
});
