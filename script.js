// Select the form and the contact list
const contactForm = document.getElementById('contactForm');
const contactList = document.getElementById('contactList');

// Function to add a contact
function addContact(name, email, phone) {
  // Create a new contact entry (li element)
  const li = document.createElement('li');
  li.classList.add('flex', 'justify-between', 'items-center', 'p-4', 'border', 'border-gray-300', 'rounded-lg', 'bg-gray-50');

  // Contact details
  const contactDetails = document.createElement('span');
  contactDetails.innerHTML = `<strong>${name}</strong> - ${email} - ${phone}`;
  contactDetails.classList.add('flex-1');

  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('bg-red-500', 'hover:bg-red-600', 'text-white', 'px-2', 'py-1', 'rounded-lg');

  // Append details and button to the list item
  li.appendChild(contactDetails);
  li.appendChild(deleteBtn);

  // Append the list item to the contact list
  contactList.appendChild(li);

  // Add delete functionality
  deleteBtn.addEventListener('click', () => {
    contactList.removeChild(li);
  });
}

// Handle form submission
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();

  if (name !== '' && email !== '' && phone !== '') {
    // Add the contact to the list
    addContact(name, email, phone);

    // Clear form fields
    contactForm.reset();
  } else {
    alert('Please fill out all fields.');
  }
});
