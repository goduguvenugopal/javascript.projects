// to do list code starts here
document.addEventListener("DOMContentLoaded", function () {
  const textfunc = document.getElementById("text");
  const addbtnfunc = document.getElementById("addtask");
  const displayfunc = document.getElementById("displaytask");

  addbtnfunc.addEventListener("click", function () {
    const txtFromT = textfunc.value.trim();

    if (txtFromT !== "") {
      const newList = document.createElement("li");
      newList.className = "list-tag";
      newList.innerHTML = `<span>${txtFromT}</span>
                                  <button class="delbtn" onclick="delfunc(this)">Delete</button>`;

      displayfunc.appendChild(newList);
      textfunc.value = "";
    }
  });
});

function delfunc(button) {
  const newList = button.parentElement;
  newList.remove();
}

// reverse name code starts here

function addTask() {
  const textFunc1 = document.getElementById("text1").value;
  const reverse = textFunc1.split("").reverse("").join("");
  document.getElementById("displaytask1").innerHTML = reverse;
  document.getElementById("text1").value = "";
}

//name printing function code

let intervalId;
function startPrinting() {
  const priText = document.getElementById("text2").value;
  intervalId = setInterval(function (index) {
    document.getElementById("printtxt").innerHTML += `Hello, ${priText} `;
  }, 1000);
}

function stopPrinting() {
  clearInterval(intervalId);
}

// bg-color change code starts here

const bodyFunc = document.getElementById("bodyid");
const selectColor = document.getElementById("bgchange");

selectColor.addEventListener("change", function () {
  const getColor = selectColor.value;
  bodyFunc.style.backgroundColor = getColor;
});
