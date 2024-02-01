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
