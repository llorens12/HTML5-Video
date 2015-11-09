var player;
var controls;


$(document).onready(function(){

    player = document.getElementById('dummy-video');
    controls = document.getElementById("videoControls");
    'use strict';

    $("#dummy-video")
        .onclick = function()
            {
                this.play();
            }
        .on('onended onpause', function()
            {
                $("#videoControls").style.visibility = "visible";
            })
        .onplay = function()
            {
                $("#videoControls").style.visibility = "hidden";
            };

    $("#customVideo")
        .onmouseenter = function()
            {
                $("#videoControls").style.visibility = "visible";
            }
        .onmouseleave = function()
            {
                $("#videoControls").style.visibility = "hidden";
            };

    controls.onmouseenter = function()
    {
        $("#videoControls").style.visibility = "visible";
    };

//  Change onmouseout for onmouseleave





    insertOnClick(document.getElementsByClassName("video-controls"));

});

function insertOnClick(events)
{
    for(var i = 0; i < events.length; i++)
    {
        events[i].onclick = function()
        {
            setControls(this);
        };

        events[i].onmouseenter = function()
        {
            controls.style.visibility = "visible";
        };
    }
}

var fullScreen= false;

function setControls(event) {

    switch (event.id) {

        case "play-btn":

            player.play();
            break;

        case "pause-btn":

            player.pause();
            break;

        case "stop-btn":

            player.pause();
            player.currentTime = 0;
            break;

        case "vol-+-btn":

            player.volume +=0.1;
            break;

        case "vol---btn":

            player.volume -=0.1;
            break;

        case "mute-btn":

            player.muted = !player.muted;
            break;

        case "speed---btn":

            player.playbackRate -= 0.5;
            break;

        case "speed-+-btn":

            player.playbackRate += 0.5;
            break;

        case "replay-btn":

            player.currentTime = 0;
            player.play();
            break;

        case "fullscreen-btn":


            if(!fullScreen)
            {

                if (player.requestFullscreen) player.requestFullscreen();

                else if (player.mozRequestFullScreen) document.getElementById("customVideo").mozRequestFullScreen();

                else if (player.webkitRequestFullscreen) player.webkitRequestFullscreen();

                fullScreen=true;
            }
            else
            {

                if(document.cancelFullScreen) document.cancelFullScreen();

                else if(document.mozCancelFullScreen) document.mozCancelFullScreen();

                else if(document.webkitCancelFullScreen) document.webkitCancelFullScreen();

                fullScreen=false;

            }
            break;
    }


}
