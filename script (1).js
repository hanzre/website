// JavaScript to toggle the sidebar visibility
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('.main-content');
 if (sidebar.style.right === '-250px') {
        sidebar.style.right = '0'; // Slide the sidebar in from the right
        mainContent.style.marginRight = '250px'; // Shift the main content to the left
    } else {
        sidebar.style.right = '-250px'; // Hide the sidebar off-screen
        mainContent.style.marginRight = '0'; // Reset main content margin
    }
}

// JavaScript to toggle dropdown visibility
function toggleDropdown() {
    const dropdown = document.getElementById('bsitDropdown');
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
}

// JavaScript to toggle image visibility
function toggleImage(studentId) {
    const studentImage = document.getElementById(studentId);

    // Toggle the display of the student's image (show or hide)
    if (studentImage.style.display === 'none' || studentImage.style.display === '') {
        studentImage.style.display = 'block'; // Show the image
    } else {
        studentImage.style.display = 'none'; // Hide the image
    }
}