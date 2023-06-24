document.getElementById('postForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the user's post content
  var postContent = document.getElementById('postContent').value;

  // Create a new post element
  var postElement = document.createElement('div');
  postElement.classList.add('post');
  postElement.textContent = postContent;

  // Append the post to the post list
  document.getElementById('postList').appendChild(postElement);

  // Clear the input field
  document.getElementById('postContent').value = '';
});
