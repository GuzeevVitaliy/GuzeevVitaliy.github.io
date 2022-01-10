const menuItem = document.querySelectorAll('a[href*="#"]');
const overlay = document.querySelector('.menu__overlay');
const nav = document.querySelector('.header__menu');
const burger = document.querySelector('.burger');
for (let item of menuItem) {
   item.addEventListener('click', function (e) {
      e.preventDefault();
      const blockID = item.getAttribute("href");
      document.querySelector('' + blockID).scrollIntoView({
         behavior: "smooth",
         block: "start"
      })
      burger.classList.remove('active');
      nav.classList.remove('active');
      overlay.classList.remove('active');
      document.body.classList.remove('lock');
   }
   );
}
if (burger) {
   burger.addEventListener('click', () => {
      document.body.classList.toggle('lock');
      burger.classList.toggle('active');
      nav.classList.toggle('active');
      overlay.classList.toggle('active');
   });
   overlay.addEventListener('click', (e) => {
      const target = e.target;
      const Itsnav = target == nav || nav.contains(target);
      if (nav.classList.contains('active') && !Itsnav) {
         burger.classList.remove('active');
         nav.classList.remove('active');
         overlay.classList.remove('active');
         document.body.classList.remove('lock');
      }
   });

}


