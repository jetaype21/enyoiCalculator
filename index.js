const numUser = document.querySelector("#numUser");
const btnCalc = document.querySelector("#btnCalc");
const btnAdd = document.querySelector("#btnAdd");
const alertMss = document.querySelector(".form-label");
const alertNums = document.querySelector("#numsUser");
const media = document.querySelector("#median");
const prome = document.querySelector("#prom");

const numsCollection = [];

btnAdd.addEventListener("click", () => {
  if (!isNaN(numUser.value) && numUser.value.trim().length !== 0) {
    numsCollection.push(numUser.value);
    numUser.value = "";
    alertNums.textContent = numsCollection.join();
    alertMss.textContent = "Siga ingresando numeros";
  } else {
    numUser.value = "";
    alertMss.textContent = "Asegurate de ingresar un numero";
  }
});

btnCalc.addEventListener("click", () => {
  if (numsCollection.length != 0) {
    numsCollection.sort(function (a, b) {
      return a - b;
    });

    let prom = 0;

    numsCollection.forEach((item) => {
      prom = prom + parseInt(item);
    });

    prom = prom / numsCollection.length;

    let mediano;
    if (numsCollection.length % 2 === 0) {
      mediano =
        (parseInt(numsCollection[numsCollection.length / 2 - 1]) +
          parseInt(numsCollection[numsCollection.length / 2])) /
        2;
    } else {
      mediano = numsCollection[numsCollection.length / 2 - 0.5];
    }

    prome.textContent = prom;
    media.textContent = mediano;

    // numsCollection = [];
  }
});
