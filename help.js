function toggleDropdown(name) {
  const dropdowns = document.querySelectorAll(".dropdown-content");
  dropdowns.forEach((dropdown) => {
    if (dropdown.classList.contains('show')) {
      dropdown.classList.remove('show');
    }
  });
  
  const selectedDropdown = document.getElementById(name);
  if (selectedDropdown) {
    selectedDropdown.classList.toggle("show");
  } else {
    console.error(`Dropdown with ID '${name}' not found.`);
  }
}

window.addEventListener('click', function(event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.querySelectorAll('.dropdown-content.show');
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove('show');
    });
  }
});


let activeFile = "";

async function fetchObject() {
  try {
    const objectName = document.getElementById("input-object-name").value;
    let url = `/readfile.php?objectname=${objectName}`;
    
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const object = await response.text();
    document.getElementById("container").innerHTML = object;

    activeFile = objectName;
  } catch (error) {
    console.error("Fetch error:", error);
    // You might want to handle the error here, e.g., display an error message to the user
  }
}


document.getElementById("input-button-object").onclick = fetchObject;


async function checkUpdates() {
    const objectName = document.getElementById("input-object-name").value;
    if (objectName !== "") {
        let url = `/readfile.php?objectname=${activeFile}`;
        const response = await fetch(url);
        console.log(response);

        const object = await response.text()

        if(object !== document.getElementById("container").innerHTML) {
            document.getElementById("container").innerHTML = object;
        }
    }
}

setInterval(checkUpdates, 10 * 1000);