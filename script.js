// // to do list code starts here

document.addEventListener("DOMContentLoaded", function () {
  const textInput = document.getElementById("text");
  const addButton = document.getElementById("addtask");
  const displayArea = document.getElementById("displaytask");

  addButton.addEventListener("click", function () {
    const taskText = textInput.value.trim();
    if (taskText !== "") {
      textInput.value = "";
      createTaskElement(taskText);
    }
  });

  function createTaskElement(taskText) {
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("list-tag");
    displayArea.appendChild(taskContainer);

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    taskContainer.appendChild(taskSpan);

    const newDiv = document.createElement("div");
    newDiv.classList.add("second-div");
    taskContainer.appendChild(newDiv);

    const editButton = document.createElement("button");
    editButton.classList = "delbtn";
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function () {
      editTask(taskContainer);
    });
    newDiv.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.classList = "delbtn";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      deleteTask(taskContainer);
    });
    newDiv.appendChild(deleteButton);
  }

  function deleteTask(taskElement) {
    taskElement.remove();
  }

  function editTask(taskElement) {
    const newText = prompt(
      "Change Your Task :",
      ` Hello change your task here `
    );
    if (newText !== null) {
      const taskSpan = taskElement.querySelector("span");
      taskSpan.textContent = newText;
    }
  }
});
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
  intervalId = setInterval(function () {
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

// image preview code starts here

const fileFunc = document.getElementById("file");
const previewFunc = document.getElementById("imgid");

fileFunc.onchange = function (event) {
  const imgUrl = URL.createObjectURL(event.target.files[0]);
  previewFunc.src = imgUrl;
};

// image preview another example code

// function imagePre() {
//   const selectImg = fileFunc.files[0];

//   if (selectImg && selectImg.type.startsWith("image/")) {
//     confirm(`Profile photo has been changed`);

//     const read = new FileReader();
//     read.onload = function (x) {
//       previewFunc.src = x.target.result;
//     };
//     read.readAsDataURL(selectImg);
//     previewFunc.style.display = "block";
//   } else {
//     previewFunc.style.display = "none";
//   }
// }

// user form get data code

const formFunc = document.getElementById("form");
const fInput = document.getElementById("ftext");
const disName = document.getElementById("fullnamedis");

const cityFunc = document.getElementById("ctext");
const disCity = document.getElementById("citydis");

const couText = document.getElementById("ntext");
const disCountry = document.getElementById("coundis");

const numFunc = document.getElementById("num");
const disNum = document.getElementById("numdis");

const dateFunc = document.getElementById("date");
const disDate = document.getElementById("datedis");

formFunc.addEventListener("submit", function (x) {
  x.preventDefault();
  const fullStore1 = fInput.value;
  disName.innerHTML = `${fullStore1}`;

  const fullStore2 = cityFunc.value;
  disCity.innerHTML = `${fullStore2}`;

  const fullStore3 = couText.value;
  disCountry.innerHTML = `${fullStore3}`;

  const fullStore4 = numFunc.value;
  disNum.innerHTML = `${fullStore4}`;

  const fullStore5 = dateFunc.value;
  disDate.innerHTML = `${fullStore5}`;

  formFunc.reset();
});

// changetext into upppercase

function changeText() {
  const upperFunc = document.getElementById("uppertxt").value;
  const upperTxtS = upperFunc.toUpperCase();
  document.getElementById(
    "resulttxt"
  ).innerHTML = `Here Is The Text In UpperCase : ${upperTxtS}`;
}

// text printing code starts here
const textColor = document.getElementById("textcolor");
const copyBtn = document.getElementById("copybtn");
const countBtn = document.getElementById("countbtn");
const selectFunc = document.getElementById("selectcount");
const outputDiv = document.getElementById("dispcount");
const textValue = document.getElementById("counttext");
countBtn.addEventListener("click", function () {
  const storeTxtData = textValue.value;
  const countValue = selectFunc.value;

  for (let i = 0; i < countValue; i++) {
    outputDiv.innerHTML += ` ${storeTxtData}`;
  }
});
// clear text function
function cleartext() {
  outputDiv.innerHTML = "";
}

//copy text clipboard API function code

copyBtn.addEventListener("click", function () {
  const outputContent = document.getElementById("dispcount").innerText;

  navigator.clipboard.writeText(outputContent);
  alert("Content copied to clipboard!");
});

// textcolor code

textColor.addEventListener("change", function () {
  const textCol = textColor.value;
  outputDiv.style.color = textCol;
});

// share websit Code

function shareFunc() {
  navigator.share({
    text: "Hii I am venu you can have lot of fun, check this website : ",
    url: "https://goduguvenugopal.github.io/javascript.projects/",
  });
}

// try catch and finaly

function myFunction() {
  const message1 = document.getElementById("err");
  const message = document.getElementById("p01");

  let pass = document.getElementById("pass2").value;
  let x = document.getElementById("demo").value;

  try {
    if (x.trim() === "") throw "Please enter Email";
    if (!isValidEmail(x)) throw "Email is not valid";
  } catch (err) {
    message.innerHTML = err;
  }

  try {
    if (pass.trim() === "") throw "Please enter password";
    if (pass.length < 4) throw "Password is too small";
    if (pass.length > 8) throw "Password should be between 4 and 8 characters";
  } catch (err1) {
    message1.innerHTML = err1;
  } finally {
    document.getElementById("pass2").value = "";
    document.getElementById("demo").value = "";
  }
}

function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

// password Toggle
function toggleFunc() {
  const togglePass = document.getElementById("togglepass");
  const toggleClose = document.getElementById("lockclose");
  const toggleOpen = document.getElementById("lockopen");

  if (togglePass.type === "password") {
    togglePass.type = "text";
    toggleClose.style.display = "none";
    toggleOpen.style.display = "block";
  } else {
    togglePass.type = "password";
    toggleClose.style.display = "block";
    toggleOpen.style.display = "none";
  }
}


//  time function 
const set = setInterval(setDate, 1000);

function setDate() {
  let date = new Date();
  document.getElementById("da-te").innerHTML = `Date : ${ date.toDateString()} `  ;
   document.getElementById('time').textContent = `Time : ${date.toLocaleTimeString()}`

}
const time = document.getElementById('time');
time.addEventListener('click',function(){
    clearInterval(set)
})

 

 
