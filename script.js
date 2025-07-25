const btn = document.getElementById('clickBtn');
const output = document.getElementById('output');

btn.addEventListener('click', () => {
  output.textContent = '你點了按鈕！';
});
