const messages = [
  {
    username: "Joffrey",
    text: "Brilliant",
    created_at: new Date(2018, 2, 10, 9, 50)
  },
  {
    username: "NINJA",
    text: "Great resource, thanks",
    created_at: new Date(2018, 2, 10, 9, 55)
  },
  {
    username: "i am mister brilliant",
    text: "THANKSSSS!!!!!",
    created_at: new Date(2018, 2, 10, 10, 10)
  },
  {
    username: "martin57",
    text: "Thanks Peter",
    created_at: new Date(2018, 2, 10, 10, 19)
  },
  {
    username: "patricia",
    text: "Sounds good to me!",
    created_at: new Date(2018, 2, 10, 10, 22)
  },
]

init();

function init(){
  renderMessages();
  document.querySelector(".btn").onclick = addNewMessage;
};

function renderMessages(){
  document.querySelector(".messages").innerHTML = messages.map(function(message) {
    return `
    <li>
      <p>${message.username}</p>
      <p><strong>${message.text}</strong></p>
      <p>${message.created_at.getDate()} ${message.created_at.toLocaleString('default', { month: 'short' })} ${message.created_at.getFullYear()} ${message.created_at.getHours()} : ${message.created_at.getMinutes()}</p>
    </li>`
  }).join("");
};

function addNewMessage(){
  const text = document.querySelector(".text-input").value

  messages.push({
    username: "me",
    text: text,
    created_at: new Date()
  })

  renderMessages();
};

