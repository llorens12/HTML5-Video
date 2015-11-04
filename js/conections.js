var player;
var controls;


window.onload = function(){

    player = document.getElementById('dummy-video');
    controls = document.getElementById("videoControls");
    'use strict';

    player.onclick = function()
    {
        this.play();
    };
    player.onended = function()
    {
        controls.style.visibility = "visible";
    };

    player.onplay = function()
    {
        controls.style.visibility = "hidden";
    };

    player.onpause = function()
    {
        controls.style.visibility = "visible";
    };

    document.getElementById("customVideo").onmouseenter = function()
    {
        controls.style.visibility = "visible";
    };

    controls.onmouseenter = function()
    {
        controls.style.visibility = "visible";
    };

    document.getElementById("customVideo").onmouseout = function()
    {
        controls.style.visibility = "hidden";
    };




    insertOnClick(document.getElementsByClassName("video-controls"));

};

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

            if(player.muted) player.muted = false;
            else player.muted = true;
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
