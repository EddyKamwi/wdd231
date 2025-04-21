const params = window.location.search;
const data = new URLSearchParams(params);
const element = document.getElementById("f-results");

/**
 * thank you page loads upon successful form submission. The thank you
 * page displays the first name, last name, email address, phone number,
 * business/organization name, and the date from the hidden input. The design
 * follows the site pattern.
 */
element.innerHTML = `
    <h2>Your Details</h2><br><hr><br>
    <div>
        <p>First Name:     ${data.get("firstname")}</p>
        <p>Last Name:      ${data.get("lastname")}</p>
        <p>Email:          ${data.get("email")}</p>
        <p>Phone Number:   ${data.get("phone")}</p>
        <p>Business Name:  ${data.get("businessname")}</p>
        <p>Date:           ${new Date(parseInt(data.get("timestamp")))}</p>
    </div>
`;
