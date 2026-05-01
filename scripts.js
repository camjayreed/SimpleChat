/* if user joins chat */
document.getElementById("join-chat").addEventListener("click", connectUserToChat)
function connectUserToChat() {
    console.log('user connected')
    localStorage.setItem("CurrentUser", document.getElementById("username").value)
    /* initiate websocket connection */
    /* grab and display all previous messages */ 
    return
}

/* if user leaves chatroom */
document.getElementById("leave-chat").addEventListener("click", userLeaveChat)
function userLeaveChat() {
    console.log('user disconnected')
    /* on leaving hide the chatroom, maybe display disconnected text */
    return
}

/* if user sends message */
document.getElementById("send-message").addEventListener("click", sendUserMessage)
function sendUserMessage() {
    const userMessage = document.getElementById("user-message-input").value
    const usernamePlusMessage = localStorage.getItem("CurrentUser").concat(": ", userMessage)
    return
}