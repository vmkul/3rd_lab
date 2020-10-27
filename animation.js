const productItems = document.getElementsByClassName('product-item');
const menuContainer = document.getElementById('menu-container');
const menuButton = document.getElementById('menu-button');
const closeButton = document.getElementById('close-button');
const scrollButton = document.getElementById('scroll-top-button');

scrollButton.onclick = () => {
  scrollTo(0, 0);
};

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

menuButton.onclick = () => {
  menuContainer.style.right = '0';
};

closeButton.onclick = () => {
  menuContainer.style.right = '100%';
};

let topY = window.scrollY;

window.onscroll = () => {
  if (window.scrollY > topY) {
    scrollButton.style.opacity = '1';
  } else {
    scrollButton.style.opacity = '0';
  }
  topY = window.scrollY;
};
