function randomNumer() {
  return Math.floor(Math.random() * 1000);
}

function calculations(x) {
  return x * 33 + 3;
}

const postsData = [
  { user: 1, name: "Hosein" },
  { user: 2, name: "Ali" },
];

const posts = () => postsData;

export { posts };
// module.exports = { randomNumer, calculations };
