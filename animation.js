const productItems = document.getElementsByClassName('product-item');
const logo = document.getElementById('logo');
const menuContainer = document.getElementById('menu-container');
const menuButton = document.getElementById('menu-button');
const closeButton = document.getElementById('close-button');

for (const item of productItems) {
  const image = item.children[0];
  if (!image) continue;

  item.addEventListener('mouseenter', () => {
    image.style.width = '105%';
  });

  item.addEventListener('mouseleave', () => {
    image.style.width = '100%';
  });
}

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    logo.style.opacity = '0';
  } else {
    logo.style.opacity = '1';
  }
});

menuButton.onclick = () => {
  menuContainer.style.right = '0';
};

closeButton.onclick = () => {
  menuContainer.style.right = '100%';
};
