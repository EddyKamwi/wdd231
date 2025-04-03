const params = window.location.search
const data = new URLSearchParams(params)
const element = document.getElementById("f-results")

/**
 * thank you page loads upon successful form submission. The thank you 
 * page displays the first name, last name, email address, phone number, 
 * business/organization name, and the date from the hidden input. The design 
 * follows the site pattern.
 */
element.innerText=`
First Name:     ${data.get("firstname")}
Last Name:      ${data.get("lastname")}
Email:          ${data.get("email")}
Phone Number:   ${data.get("phone")}
Business Name:  ${data.get("businessname")}
Date:           ${new Date(parseInt(data.get("timestamp")))}
`