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

renderMessages();

function renderMessages(){
  document.querySelector(".messages").innerHTML = messages.map(function(message) {
    return `
    <li>${message.username} -
    <strong>${message.text}</strong> -
    ${message.created_at.getDate()} ${message.created_at.toLocaleString('default', { month: 'short' })} ${message.created_at.getFullYear()} ${message.created_at.getHours()} : ${message.created_at.getMinutes()}</li>`
  }).join("");
};

