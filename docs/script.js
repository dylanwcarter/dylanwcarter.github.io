// Add interactivity here if needed

// Get all the links on the page
var links = document.querySelectorAll('a');

// Add an event listener to each link
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(event) {
        // Prevent the default action (navigating to the link)
        event.preventDefault();

        // Do something when the link is clicked
        alert('You clicked a link!');
    });
}