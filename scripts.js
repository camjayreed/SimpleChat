var ws = null;

/* if user joins chat */
document.getElementById("join-chat").addEventListener("click", connectUserToChat);
function connectUserToChat() {
  document.getElementById("join-chat").setAttribute("hidden", true);
  console.log("user connected");
  document.getElementById("user-chatroom").removeAttribute("hidden");
  localStorage.setItem(
    "CurrentUser",
    document.getElementById("username").value,
  );

  ws = new WebSocket("ws://127.0.0.1:8080");
  ws.addEventListener("message", (event) => {
    const chatroom = document.getElementById("user-chatroom");
    const newMessage = document.createTextNode(event.data);

    chatroom.appendChild(newMessage);
    })
  /* grab and display all previous messages */
  return;
}

/* if user leaves chatroom */
document.getElementById("leave-chat").addEventListener("click", userLeaveChat);
function userLeaveChat() {
  ws.close();
  console.log("user disconnected");
  document.getElementById("user-chatroom").setAttribute("hidden", true);
  document.getElementById("join-chat").removeAttribute("hidden");
  return;
}

/* if user sends message */
document.getElementById("send-message").addEventListener("click", sendUserMessage);
function sendUserMessage() {
  const userMessage = document.getElementById("user-message-input").value;
  const usernamePlusMessage = localStorage.getItem("CurrentUser").concat(": ", userMessage);

  /* send message to websocket */
  ws.send(usernamePlusMessage)
  console.log(usernamePlusMessage);
  return;
}
