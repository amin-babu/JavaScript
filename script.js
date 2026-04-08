const input = document.querySelector('input[type="text"]');
input.addEventListener('input', function (e) {
  console.log(e.key);
});
