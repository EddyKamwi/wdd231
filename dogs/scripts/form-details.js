
const details = new URLSearchParams(window.location.search)
const div = document.querySelector(".form-details")
const data = `  <p>First Name: ${details.get("firstname")}</p>
                <p>Last Name: ${details.get("lastname")}</p>
                <p>Email: ${details.get("email")}</p>
                <p>Cell Number: ${details.get("cell")}</p>
                <p>Address: ${details.get("address")}</p>
                <p>Country: ${details.get("country")}</p>
                <p>Gender: ${details.get("gender")}</p>
                <p>Date of Birth: ${details.get("dob")}</p>`;
div.innerHTML = data;