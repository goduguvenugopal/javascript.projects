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



// image preview code starts here 

const fileFunc = document.getElementById('file');
const previewFunc = document.getElementById('imgid');

fileFunc.onchange = function(event){
  const imgUrl = URL.createObjectURL(event.target.files[0]);
  previewFunc.src = imgUrl;
}




// user form get data code 


const formFunc = document.getElementById('form');
const fInput = document.getElementById('ftext');
const disName = document.getElementById('fullnamedis');

const cityFunc = document.getElementById('ctext');
const disCity = document.getElementById('citydis');

const couText = document.getElementById('ntext');
const disCountry = document.getElementById('coundis');

const numFunc = document.getElementById('num');
const disNum = document.getElementById('numdis');

const dateFunc = document.getElementById('date');
const disDate = document.getElementById('datedis');

formFunc.addEventListener('submit',function(x){
  x.preventDefault();
  const fullStore1 = fInput.value;
  disName.innerHTML = `Full Name : ${fullStore1}`;
   

  const fullStore2 = cityFunc.value;
  disCity.innerHTML = `City Name : ${fullStore2}`;
  

  const fullStore3 = couText.value;
  disCountry.innerHTML = `Country Name : ${fullStore3}`;
  


  const fullStore4 = numFunc.value;
  disNum.innerHTML = `Mobile Number : ${fullStore4}`;
  


  const fullStore5 = dateFunc.value;
  disDate.innerHTML = `Date of Birth : ${fullStore5}`;
   

  formFunc.reset()
})