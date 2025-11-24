document.querySelector('#color-code').addEventListener('click', () => {
  const colorCode = document.querySelector('#color-code').textContent;
  navigator.clipboard.writeText(colorCode);
  document.querySelector('#notification').style.display = 'block';
  setTimeout(() => {
    document.querySelector('#notification').style.display = 'none';
  }, 2000);
});