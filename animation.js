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

let offset = 0;

const logoCb = () => {
  if (offset < 8) {
    logo.style.bottom = `${offset++}px`;
  } else {
    offset = 0;
    logo.style.bottom = `${offset--}px`;
  }
};

setInterval(logoCb, 100);

menuButton.onclick = () => {
  menuContainer.style.right = '0';
};

closeButton.onclick = () => {
  menuContainer.style.right = '100%';
};
