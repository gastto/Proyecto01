$(function () {
    const socket = io();

    // obtaining DOM elements from the interface
    const $messageForm = $('#message-form');
    const $messageBox = $('#message');
    const $chat = $('#chat');

    // events
    $messageForm.submit( e => {
        e.preventDefault();
        $messageBox.val();
        socket.emit('send message', $messageBox.val());
        $messageBox.val('');
    });

    socket.on('new message', function(data){
        $chat.append(data + '<br/>')
    });


})
