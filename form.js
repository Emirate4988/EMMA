// Get the form element
const customerForm = document.getElementById('customerForm');

// Listen for form submission
customerForm.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent default form submission
    

    // Capture form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    // Create an object to store customer data
    const customerData = {
        name: name,
        email: email,
        phone: phone,
        address: address
    };

    // Retrieve existing customers from localStorage
    let customers = JSON.parse(localStorage.getItem('customers')) || [];

    // Add new customer data to the array
    customers.push(customerData);

    // Store the updated customer array back in localStorage
    localStorage.setItem('customers', JSON.stringify(customers));

    // Reset the form
    customerForm.reset();

    // Update the displayed data
    displayStoredData();
});

// Function to display stored customer data
function displayStoredData() {
    const storedDataDiv = document.getElementById('storedData');
    storedDataDiv.innerHTML = '';  // Clear existing content

    // Retrieve customers from localStorage
    const customers = JSON.parse(localStorage.getItem('customers')) || [];
    console.log(customers)

    // Display each customer's data
    // customers.forEach((customer, index) => {
    //     const customerInfo = `
    //         <div>
    //             <p><strong>Customer ${index + 1}</strong></p>
    //             <p>Name: ${customer.name}</p>
    //             <p>Email: ${customer.email}</p>
    //             <p>Phone: ${customer.phone}</p>
    //             <p>Address: ${customer.address}</p>
    //         </div>
    //         <hr>
    //     `;
    //     storedDataDiv.innerHTML += customerInfo;
    // });
}

// Display stored data on page load
window.onload = function() {
    displayStoredData();
};
