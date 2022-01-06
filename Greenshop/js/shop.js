const amountCounterMinus = document.querySelector('.amount__counter-minus'),
   amountCounterPlus = document.querySelector('.amount__counter-plus'),
   amountcounterNumber = document.querySelector('.amount__counter-number');
let i = 1;
amountCounterMinus.addEventListener('click', (e) => {
   if (i > 0) {
      i = i - 1;
      amountcounterNumber.innerHTML = i;
   }
});
amountCounterPlus.addEventListener('click', (e) => {
   if (amountCounterPlus) {
      i = i + 1;
      amountcounterNumber.innerHTML = i;
   }
});

const shopMainTabs = document.getElementById('shop-main__tabs');
const shopMainContent = document.querySelectorAll('.shop-main__content-item');
const clearActive = el => {
   for (let i = 0; i < shopMainTabs.children.length; i++) {
      shopMainTabs.children[i].classList.remove('active');
   }
   el.classList.add('active');
};
shopMainTabs.addEventListener('click', (e) => {
   const curTab = e.target.dataset.tbi;
   if (!(e.target == shopMainTabs)) {
      clearActive(e.target);   
   for (let i = 0; i < shopMainContent.length; i++) {
      shopMainContent[i].classList.remove('active');
      if (shopMainContent[i].dataset.cnt === curTab) {
         shopMainContent[i].classList.add('active');
      }
   }
}});


