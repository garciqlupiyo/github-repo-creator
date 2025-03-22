// Node.js program to generate a random key

function getRandomKey() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let key = "";
  for (let i = 0; i < 16; i++) {
    key += characters[Math.floor(Math.random() * characters.length)];
  }
  return key;
}

console.log(getRandomKey());
