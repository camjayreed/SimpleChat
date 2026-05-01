/* if user submits username, set current user to x in localstorage */
document.getElementById("join-chat").addEventListener("click", connectUserToChat())

/* if user joins chat */
function connectUserToChat() {
    console.log('user connected')
    /* initiate websocket connection */
    /* grab and display all previous messages */ 
    return
}

/* if user leaves chatroom */
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