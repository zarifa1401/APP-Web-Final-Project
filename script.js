// document.addEventListener("DOMContentLoaded", function () {
//   const btnNavEl = document.querySelector(".btn-mobile-nav");
//   const headerEl = document.querySelector(".header");
//   const nav = document.querySelector(".fill");
//   console.log(nav);

//   btnNavEl.addEventListener("click", function () {
//     console.log("hello");
//     nav.classList.toggle("nav-open");
//   });
// });
// first
// const btnNavEl = document.querySelector(".btn-mobile-nav");
// const headerEl = document.querySelector(".header");

// btnNavEl.addEventListener("click", function () {
//   headerEl.classList.toggle("nav-open");
// });
// random user btn
let text = document.getElementById("text1");
let personName = document.getElementById("text2");
let namebtn = document.getElementById("name");
let photo = document.getElementById("img");
let userbtn = document.getElementById("randomUserBtn");
let index = 0;
let users = [
  {
    id: 1,
    name: "Leanne Graham",
    job: "Web Developer",
    email: "Sincere@april.biz",
    image: "images/zarifa.jpg",
  },
  {
    id: 2,
    name: "Ervin Howell",
    job: "Web Developer",
    email: "Shanna@melissa.tv",
    image: "images/masooma.jpg",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    image: "images/masuma.jpg",
    job: "Software Developer",
    email: "Nathan@yesenia.net",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    job: "Web Developer",
    email: "Julianne.OConner@kory.org",
    image: "images/zarifa.jpg",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    job: "Web design",
    email: "Lucio_Hettinger@annie.ca",
    image: "images/masooma.jpg",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    job: "Web design",
    email: "Karley_Dach@jasper.info",
    image: "images/masuma.jpg",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    job: "Web design",
    email: "Telly.Hoeger@billy.biz",
    image: "images/zarifa.jpg",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    job: "Figma Designer",
    email: "Sherwood@rosamond.me",
    image: "images/masuma.jpg",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    job: "Manager",
    email: "Chaim_McDermott@dana.io",
    image: "images/masooma.jpg",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    job: "Web design",
    email: "Rey.Padberg@karina.biz",
    image: "images/zarifa.jpg",
  },
];
window.addEventListener("load", () => {
  let user = users[index];
  console.log(user);
  text.innerHTML = user.job;
  personName.innerHTML = user.name;
});
function randomIndex() {
  return Math.floor(Math.random() * users.length);
}
userbtn.addEventListener("click", () => {
  index = randomIndex();
  let user = users[index];
  text.innerHTML = user.job;
  photo.src = user.image;
  personName.innerHTML = user.name;
});
