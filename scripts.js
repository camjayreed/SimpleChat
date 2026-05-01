/* if user joins chat */
document.getElementById("join-chat").addEventListener("click", connectUserToChat)
function connectUserToChat() {
    console.log('user connected')
    document.getElementById("user-chatroom").removeAttribute("hidden")
    localStorage.setItem("CurrentUser", document.getElementById("username").value)
    /* initiate websocket connection */
    /* grab and display all previous messages */ 
    return
}

/* if user leaves chatroom */
document.getElementById("leave-chat").addEventListener("click", userLeaveChat)
function userLeaveChat() {
    console.log('user disconnected')
    document.getElementById("user-chatroom").setAttribute("hidden", true)
    return
}

/* if user sends message */
document.getElementById("send-message").addEventListener("click", sendUserMessage)
function sendUserMessage() {
    const userMessage = document.getElementById("user-message-input").value
    const usernamePlusMessage = localStorage.getItem("CurrentUser").concat(": ", userMessage)
    return
}