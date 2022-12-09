const div = document.getElementById('smiles');
const main = document.getElementById('main');
for (let i = 1536; i < 1592; i++) {
  // div.append(i + '=' + String.fromCodePoint(0x1f000 + i) + '\n');
}

setInterval(() => {
  main.innerHTML = String.fromCodePoint(
    0x1f000 + 1536 + Math.floor(Math.random() * 56)
  );
}, 20);
