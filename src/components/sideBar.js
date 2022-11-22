import '../styles/style.css';

export default function createSidebar() {
  // Divs and navbar containers
  const header = document.createElement('header');
  const brandDiv = document.createElement('div');
  const navBarEl = document.createElement('nav');
  const navLabel = document.createElement('label');

  // Buttons
  const homeBtn = document.createElement('button');
  const menuBtn = document.createElement('button');
  const contactBtn = document.createElement('button');
  const brand = document.createElement('button');
  brand.setAttribute('class', 'brand-btn');

  // Button labels

  // Append to brand class container
  brandDiv.appendChild(navBarEl);
  brandDiv.appendChild(brand);

  // Append to navbar container
  navBarEl.appendChild(navLabel);

  // Append all to header container
  header.appendChild(brandDiv);
  header.appendChild(navBarEl);

  return header;
}
