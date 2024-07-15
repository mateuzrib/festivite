const toggle = document.querySelector('#toggle');
const toggleText = document.querySelector('#toggle-text');

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    toggleText.textContent = "Light"
  }
  else {
    toggleText.textContent = "Dark"
  }
})