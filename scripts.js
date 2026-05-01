/* if user joins chat */
document.getElementById("join-chat").addEventListener("click", connectUserToChat)
function connectUserToChat() {
    console.log('user connected')
    /* set current user to x in localstorage */
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
    console.log('user sent message')
    return
}