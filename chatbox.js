// const fullContent = chatbox.forEach((content) => {
//   // console.log(content);
// });

// const refreshBtn = document.querySelector('#refresh');
const messages = document.querySelector('#message-list');
const form = document.querySelector('#comment-form');
const content = document.querySelector('#your-message');


const baseUrl = "https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?token=haQE4Q8KUxHg";

init();

function init(){
  renderMessages();
};

// GET Request
function renderMessages(){
  fetch(baseUrl)
  .then(response => response.json())
  .then((data) => {
    // console.log(data);
     messages.innerHTML  = data.map(msg => {
        return `<li><strong>${msg.author}:</strong> ${msg.message}</li>`;
      }).join("");
  });
};


// POST Request

function postMessage (msg) {
  // msg is a hash
  fetch(baseUrl, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(msg)
  })
    .then(response => response.json())
    .then((data) => {
      // console.log(data);
      renderMessages()
    });
};


form.addEventListener("submit", (event) => {
  // console.log(event);
  // prevent the default behavior of the form submission
  // by default form will get re-directed to different page. Because we want to stay in one page, we need to prevent the default behaviour.
  event.preventDefault();
  const data = { "author": "nova", "message": content.value };
  postMessage(data);
});


// Refresh page automaticaly
// document.addEventListener("DOMContentLoaded", renderMessages);
// setInterval(renderMessages, 5000);


// refreshBtn.addEventListener("click", refreshChat);


