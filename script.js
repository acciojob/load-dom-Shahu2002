//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
        // Get the body element
        var body = document.body;

        // Remove any existing content in the body
        while (body.firstChild) {
            body.removeChild(body.firstChild);
        }

        // Create a new text node with the message
        var textNode = document.createTextNode("DOM load success");

        // Append the text node to the body
        body.appendChild(textNode);
    });