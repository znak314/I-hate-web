function addHorizontalMenu() {
  const dropdownContainer = document.getElementById("container");
  const dropdownName = document.getElementById("horizontal-input").value.trim();
  
  if (dropdownName && !document.getElementById(dropdownName)) {
    const newDropdown = document.createElement("div");
    newDropdown.innerHTML = `
      <div>
        <button onclick="toggleDropdown('${dropdownName}')" class="dropbtn">${dropdownName}</button>
        <div id="${dropdownName}" class="dropdown-content"></div>
      </div>
    `;
    dropdownContainer.appendChild(newDropdown);
  }
}


function toogleDropdown(name) {
  const dropdowns = document.getElementsByClassName("dropdown-content");
  for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
  }
  document.getElementById(name).classList.toggle("show");
} 

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

document.getElementById("horizontal-button").onclick = addHorizontalMenu;



function addVerticalItem() {
  const dropdownName = document.getElementById("horizontal-input").value;
  const horizontalMenu = document.getElementById(dropdownName);

  if (horizontalMenu !== null) {
      const verticalItemName = document.getElementById("vertical-input-name").value;
      const verticalItemLink = document.getElementById("vertical-input-link").value;

      const newVerticalItem = document.createElement('a');
      newVerticalItem.href = verticalItemLink;
      newVerticalItem.textContent = verticalItemName;

      horizontalMenu.appendChild(newVerticalItem);
  }
}


document.getElementById("vertical-button").onclick = addVerticalItem;
async function sendObject() {
  const objectName = document.getElementById("form-input-name").value;

  if (objectName !== "") {
    const objectValue = document.getElementById("container").innerHTML;

    let formData = new FormData();
    formData.append("object", objectValue);
    formData.append("objectname", objectName);

    try {
      const response = await fetch("writefile.php", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json(); // Parse the response as JSON
        console.log(data); // Log the parsed data
      } else {
        console.error('Server error:', response.status);
      }
    } catch (error) {
      console.error('Fetch failed:', error);
    }
  }
}


document.getElementById("submit-object").onclick = sendObject;