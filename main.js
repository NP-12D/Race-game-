// function add(x, y) {
//   return x + y;
// }
// console.log(add(5, 7));
// console.log(add(8, 9));

// let fortabs=[
//     {
//         id:1,
//         name:"Tab1",
//         description:"  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo animi consequuntur repudiandae. Ipsa, quis amet. Repudiandae placeat, doloribus culpa minima aliquid molestiae consequatur doloremque, suscipit inventore quis error est aut?"

//     },
//     {
//         id:2,
//         name:"Tab2",
//         description:"  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo animi consequuntur repudiandae. Ipsa, quis amet. Repudiandae placeat, doloribus culpa minima aliquid molestiae consequatur doloremque, suscipit inventore quis error est aut?"

//     },
//     {
//         id:3,
//         name:"Tab3",
//         description:"  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo animi consequuntur repudiandae. Ipsa, quis amet. Repudiandae placeat, doloribus culpa minima aliquid molestiae consequatur doloremque, suscipit inventore quis error est aut?"

//     },
//     {
//         id:4,
//         name:"Tab4",
//         description:"  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo animi consequuntur repudiandae. Ipsa, quis amet. Repudiandae placeat, doloribus culpa minima aliquid molestiae consequatur doloremque, suscipit inventore quis error est aut?"

//     }
// ]

// function reset() {
//   document.querySelectorAll(".btns_row button").forEach((btn) => {
//     btn.style.color = "";
//     btn.style.backgroundColor = "";
//    document.querySelector(".des").innerHTML="";

//   });
// }

// document.querySelectorAll(".btns_row button").forEach((btn,i) => {
//   btn.addEventListener("click", () => {
//     reset();
//     btn.style.color = "rgb(3, 62, 96)";
//     btn.style.backgroundColor = "white";
//     let id = parseInt(btn.dataset.id);
//     let div=document.querySelector(".des");
//     let tab=fortabs.find((t) => t.id === id);
//     div.innerHTML=`<h2>${tab.name}</h2>
//     <p>${tab.description}</p>`

//   });
// });
let jery = document.querySelector(".jerry");
let grey = document.querySelector(".grey");
let mouse = document.querySelector(".mouse");
let speed = [
  10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 5, 23, 33, 43, 53, 12, 22, 32, 42, 52,
];
let move;
let cut;
function reset() {
  if (move) {
    clearInterval(move);
  }

  selectedBet = 0;
  selectedCharacter = null;
  document.querySelectorAll(".amount button").forEach((btn) => {
    btn.style.backgroundColor = "";
    btn.style.color = "";
  });
  document
    .querySelectorAll(".choose img")
    .forEach((img) => (img.style.border = ""));
  jery.style.transform = `translateX(${0}px)`;
  grey.style.transform = `translateX(${0}px)`;
  mouse.style.transform = `translateX(0px)`;
  jery.src =
    "103-1030973_download-free-printable-clipart-and-coloring-pages-pikachu-removebg-preview.png";
  grey.src = "2a.png";
  mouse.src = "pengun-removebg-preview.png";
  document.querySelectorAll(".cheese div img").forEach((img) => {
    img.style.display = "none";
  });
  document.querySelector(".start").disabled = false;
}

let balance = 100;
let selectedBet = 0;
let selectedCharacter = null;
let modal = document.querySelector(".modal");
let resultMessage = document.querySelector(".resultMessage");

modal.addEventListener("click", () => {
  modal.style.display = "none";
});
function updateBalance() {
  document.querySelector(".balnce").textContent = balance + "$";
}

updateBalance();
document.querySelector(".end").addEventListener("click", () => {
  reset();
});
document.querySelector(".start").addEventListener("click", () => {
  if (selectedBet === 0 || selectedCharacter === null) {
    resultMessage.textContent =
      "Please select a bet amount and choose a character";
    modal.style.display = "block";
    setTimeout(() => {
      modal.style.display = "none";
    }, 2000);
    return;
  }

  if (balance < selectedBet) {
    resultMessage.textContent =
      "Insufficient balance! Please select a lower bet amount.";
      modal.style.display = "block";
    setTimeout(() => {
      modal.style.display = "none";
    }, 2000);
    return;
  }

  document.querySelector(".start").disabled = true;

  if (move) {
    clearInterval(move);
  }
  let cutdown = [3, 2, 1, "Go"];
  let index = 0;
  cut = setInterval(() => {
    document.querySelector(".cutdown").textContent = cutdown[index];
    index++;
    if (index > cutdown.length) {
      clearInterval(cut);
      document.querySelector(".cutdown").textContent = "";
      race();
    }
  }, 1000);
});

function race() {
  jery.src = "Pokemon Running Sticker.gif";
  grey.src = "2.gif";
  mouse.src = "Coffee Running Sticker by Cat's Cafe Comics.gif";

  if (move) {
    clearInterval(move);
  }

  let speed1 = speed[Math.floor(Math.random() * speed.length)];
  let speed2 = speed[Math.floor(Math.random() * speed.length)];
  let speed3 = speed[Math.floor(Math.random() * speed.length)];

  let pos1 = 0;
  let pos2 = 0;
  let pos3 = 0;
  move = setInterval(() => {
    pos1 += speed1;
    pos2 += speed2;
    pos3 += speed3;
    jery.style.transform = `translateX(${pos1}px)`;
    grey.style.transform = `translateX(${pos2}px)`;
    mouse.style.transform = `translateX(${pos3}px)  `;

    let limit = document.querySelector(".game_row").offsetWidth - 50;
    console.log(`${limit}`);
    if (pos1 >= limit) {
      jery.src =
        "103-1030973_download-free-printable-clipart-and-coloring-pages-pikachu-removebg-preview.png";
      clearInterval(move);

      document.querySelector(".cheese1").style.display = "flex";
      checkBet("Pokemon");

      setTimeout(reset, 1000);
    } else if (pos2 >= limit) {
      grey.src = "2a.png";
      clearInterval(move);

      document.querySelector(".cheese2").style.display = "flex";
      checkBet("Mouse");
      setTimeout(reset, 1000);
    } else if (pos3 >= limit) {
      mouse.src = "pengun-removebg-preview.png";
      clearInterval(move);

      document.querySelector(".cheese3").style.display = "flex";
      checkBet("Pengun");
      setTimeout(reset, 1000);
    }
  }, 200);
}

function checkBet(winner) {
  if (selectedCharacter === winner) {
    balance += selectedBet * 2;
    resultMessage.textContent = `${winner.toUpperCase()} wins! You won $${selectedBet * 2}!`;
  } else {
    balance -= selectedBet;
    resultMessage.textContent = `${winner.toUpperCase()} wins! You lost $${selectedBet}!`;
  }
  updateBalance();

  modal.style.display = "block";
  setTimeout(() => {
    modal.style.display = "none";
  }, 1000);
}

document.querySelectorAll(".amount button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".amount button").forEach((btn) => {
      btn.style.backgroundColor = "";
      btn.style.color = "";
    });

    button.style.backgroundColor = "#F7F6E5";
    button.style.color = "#5E0006";

    selectedBet = parseInt(button.textContent);
  });
});

document.querySelectorAll(".choose img").forEach((img, index) => {
  img.addEventListener("click", () => {
    document
      .querySelectorAll(".choose img")
      .forEach((i) => (i.style.border = ""));

    img.style.border = "2px solid white";

    const characters = ["jerry", "grey", "mouse"];
    selectedCharacter = characters[index];
  });
});

document.querySelector(".light p").addEventListener("click", () => {
  document.querySelector(".light p").textContent =
    document.querySelector(".light p").textContent === "Light Mode"
      ? "Dark Mode"
      : "Light Mode";
  document.body.classList.toggle("light_body");
  document.querySelector(".bet").classList.toggle("light_bet");
  document
    .querySelectorAll(".strt button")
    .forEach((btn) => btn.classList.toggle("light_btn"));
  document
    .querySelectorAll(".amount button")
    .forEach((btn) => btn.classList.toggle("light_btn"));
  document.querySelector(".game_row").classList.toggle("light_game_row");
});
