// filepath: c:\Users\anurag\Documents\Projects\cipherGen\javascript\index.js

const characters = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+[]{}|;:,.<>?'
};

const passwordInput = document.getElementById('passwordInput');
const rangeInput = document.getElementById('range');
const sliderNumber = document.getElementById('slider-number');
const generateButton = document.getElementById('generate-button');
const copyButton = document.getElementById('copy-btn');

sliderNumber.textContent = rangeInput.value;

rangeInput.addEventListener('input', (e) => {
  sliderNumber.textContent = e.target.value;
});

generateButton.addEventListener('click', () => {
  const passwordLength = rangeInput.value;
  passwordInput.value = generatePassword(passwordLength);
});

copyButton.addEventListener('click', () => {
  passwordInput.select();
  document.execCommand('copy');
  alert('Password copied to clipboard!');
});

function generatePassword(length) {
  const allCharacters = characters.lowercase + characters.uppercase + characters.numbers + characters.symbols;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters[randomIndex];
  }
  return password;
}