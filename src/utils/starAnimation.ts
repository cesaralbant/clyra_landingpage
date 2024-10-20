export const createStar = () => {
  const starContainer = document.getElementById('star-container');
  if (starContainer) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.width = `${Math.random() * 2 + 1}px`;
    star.style.height = star.style.width;
    starContainer.appendChild(star);

    setTimeout(() => {
      star.remove();
    }, 3000);
  }
};