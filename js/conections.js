window.onload = function(){

    document.getElementById("dummy-video").onclick = function()
    {
        this.play();
        document.getElementById("videoControls").style.opacity = '0';
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
        }
    }
}

var fullScreen= false;

function setControls(event) {
    var player = document.getElementById('dummy-video');


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

                else if (player.mozRequestFullScreen) player.mozRequestFullScreen();

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
