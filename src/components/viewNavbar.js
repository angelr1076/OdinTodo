import '../styles/style.css';

const createNavbar = () => {
  // Divs and navbar containers
  const navContainer = document.createElement('div');
  navContainer.setAttribute('class', 'nav-container font-outline');

  const brandDiv = document.createElement('div');
  brandDiv.setAttribute('class', 'brand');

  const navBarEl = document.createElement('nav');
  navBarEl.setAttribute('class', 'hamnav');

  const navLabel = document.createElement('label');
  navLabel.setAttribute('for', 'hamburger');
  navLabel.innerHTML = '&#9776';

  const navCheckbox = document.createElement('input');
  navCheckbox.setAttribute('id', 'hamburger');
  navCheckbox.setAttribute('type', 'checkbox');

  const hamItems = document.createElement('div');
  hamItems.setAttribute('class', 'hamitems');

  // Buttons
  const brand = document.createElement('button');
  brand.setAttribute('class', 'brand-btn');
  brand.innerText = 'Todo List';

  // Append to brand class container
  brandDiv.appendChild(navBarEl);
  brandDiv.appendChild(brand);
  navBarEl.appendChild(navLabel);
  navBarEl.appendChild(navCheckbox);
  navBarEl.appendChild(hamItems);
  navContainer.appendChild(brandDiv);
  navContainer.appendChild(navBarEl);

  return navContainer;
};

export { createNavbar };
