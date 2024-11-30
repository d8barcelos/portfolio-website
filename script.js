function scrollToElement(elementSelector, instance = 0) {
  const elements = document.querySelectorAll(elementSelector);
  if(elements.length > instance) {
    elements[instance].scrollIntoView({behavior : 'smooth'});
  }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");

link1.addEventListener('click', () => {
  scrollToElement('.header');
});

link2.addEventListener('click', () => {
  scrollToElement('#projetos');
});

link4.addEventListener('click', () => {
  scrollToElement('#experiencias');
});

let isMouseDown = false;
let startX, startY;
let rotationX = 0;
let rotationY = 0;

const cube = document.getElementById('cube');

cube.addEventListener('mousedown', (e) => {
  isMouseDown = true;
  startX = e.clientX;
  startY = e.clientY;
  cube.style.animation = 'none';
});

document.addEventListener('mousemove', (e) => {
  if (!isMouseDown) return;
  
  const deltaX = e.clientX - startX;
  const deltaY = e.clientY - startY;
  
  rotationY += deltaX * 0.5;
  rotationX -= deltaY * 0.5;
  
  cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
  
  startX = e.clientX;
  startY = e.clientY;
});

document.addEventListener('mouseup', () => {
  isMouseDown = false;
});

document.querySelector('.cube-wrapper').addEventListener('mouseleave', () => {
  isMouseDown = false;
  cube.style.animation = 'initialRotation 2s ease-in-out infinite';
});