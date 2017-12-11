var arr = [
[0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0],
[0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0],
[0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0],
[0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0],
[0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0],
[1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1],
[1,1,1,1,0,1,1,1,0,0,0,0,1,1,-1,-1,-1,-1,-1,-1,-1,-1,1,1,0,0,0,0,1,1,1,0,1,1,1,1],
[1,1,1,1,0,1,1,1,0,1,1,0,0,0,-1,1,1,1,1,1,1,-1,0,0,0,1,1,0,1,1,1,0,1,1,1,1],
[0,0,0,0,0,1,1,1,0,1,1,1,1,0,-1,1,1,1,1,1,1,-1,0,1,1,1,1,0,1,1,1,0,0,0,0,0],
[0,1,1,1,0,0,0,0,0,1,1,1,1,0,-1,1,1,1,1,1,1,-1,0,1,1,1,1,0,0,0,0,0,1,1,1,0],
[0,1,1,1,1,0,1,1,0,1,1,0,0,0,-1,1,1,1,1,1,1,-1,0,0,0,1,1,0,1,1,0,1,1,1,1,0],
[0,1,1,1,1,0,1,1,0,1,1,0,1,1,-1,-1,-1,-1,-1,-1,-1,-1,1,1,0,1,1,0,1,1,0,1,1,1,1,0],
[0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0],
[0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0],
[1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1],
[1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1],
[1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1],
[1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1],
[1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1],
[1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1],
[0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0],
[0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0],
[0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0]];

var pos_x = 23;
var pos_y = 18;

function put (i,j) {
    var x = 25*i;
    var y = 25*j;
    document.getElementById('tile' +(i.toString()) + '_' +j.toString()).style.left = y.toString() + "px";
    document.getElementById('tile' +(i.toString()) + '_' +j.toString()).style.top = x.toString() + "px";
}

function animate (id,id1) {
    if (id.style.display == "block") {

        id.style.display = "none";
        id1.style.display = "block";
    }
    else if (id.style.display == "none") {

        id.style.display = "block";
        id1.style.display = "none";
    }
}

function init () {
    //alert ('ready to go');
    document.onkeydown = function (e){mark(e)};

    var str = document.getElementById("lay").innerHTML;

    for(var i=0; i<arr.length; i++){
        for(var j=0; j<arr[i].length; j++){
            if (arr[i][j] == 0) {
                str += "<img src = 'dot.png' class = 'dot' id='dot" +i.toString()+'_'+j.toString()+ "'>";
            }
        }
    }
    //$("#lay").append(str);
    document.getElementById("lay").innerHTML = str;

    for(var i=0; i<arr.length; i++){
        for(var j=0; j<arr[i].length; j++){
            if (arr[i][j] == 0) {
                var x = 25*i;
                var y = 25*j;
                document.getElementById('dot' +(i.toString()) + '_' +j.toString()).style.left = y.toString() + "px";
                document.getElementById('dot' +(i.toString()) + '_' +j.toString()).style.top = x.toString() + "px";
            }
        }
    }

    var str = document.getElementById("lay").innerHTML;

    for (var i=0; i<arr.length; i++) {
        for(var j=1; j<arr[i].length; j++){

            if (arr[i][j] == 1) {

                if (i>0 && j>0 && i<arr.length-1 && j<arr[i].length-1 ) {

                    if (arr[i+1][j] == 1 && arr[i-1][j] == 1 && (arr[i][j+1] == 0 || arr[i][j+1] == -1)) {
                        str += "<img src = 'vert_right.gif' class = 'tile' id='tile" +i.toString()+'_'+j.toString()+ "'>";
                    }
                    else if (arr[i+1][j] == 1 && arr[i-1][j] == 1 && (arr[i][j-1] == 0 || arr[i][j-1] == -1)) {
                        str += "<img src = 'vert_left.gif' class = 'tile' id='tile" +i.toString()+'_'+j.toString()+ "'>";
                    }
                    else if (arr[i][j+1] == 1 && arr[i][j-1] == 1 && (arr[i-1][j] == 0 || arr[i-1][j] == -1)) {
                        str += "<img src = 'horiz_up.gif' class = 'tile' id='tile" +i.toString()+'_'+j.toString()+ "'>";
                    }
                    else if (arr[i][j+1] == 1 && arr[i][j-1] == 1 && (arr[i+1][j] == 0 || arr[i+1][j] == -1)) {
                        str += "<img src = 'horiz_down.gif' class = 'tile' id='tile" +i.toString()+'_'+j.toString()+ "'>";
                    }
                    else if (arr[i][j+1] == 1 && (arr[i][j-1] == 0 || arr[i][j-1] == -1) && arr[i+1][j] == 1 && (arr[i-1][j] == 0 || arr[i-1][j] == -1)) {
                        str += "<img src = 'top_left.gif' class = 'tile' id='tile" +i.toString()+'_'+j.toString()+ "'>";//top_left
                    }
                    else if ((arr[i][j+1] == 0 || arr[i][j+1] == -1) && arr[i][j-1] == 1 && arr[i+1][j] == 1 && (arr[i-1][j] == 0 || arr[i-1][j] == -1)) {
                        str += "<img src = 'top_right.gif' class = 'tile' id='tile" +i.toString()+'_'+j.toString()+ "'>";//top_right
                    }
                    else if ((arr[i][j+1] == 0 || arr[i][j+1] == -1) && arr[i][j-1] == 1 && (arr[i+1][j] == 0 || arr[i+1][j] == -1 ) && arr[i-1][j] == 1) {
                        str += "<img src = 'down_right.gif' class = 'tile' id='tile" +i.toString()+'_'+j.toString()+ "'>";//down_right
                    }
                    else if (arr[i][j+1] == 1 && (arr[i][j-1] == 0 || arr[i][j-1] == -1) && (arr[i+1][j] == 0 || arr[i+1][j] == -1) && arr[i-1][j] == 1) {
                        str += "<img src = 'down_left.gif' class = 'tile' id='tile" +i.toString()+'_'+j.toString()+ "'>";//down_left
                    }
                    else if (arr[i][j+1] == 1 && (arr[i][j-1] == 0 || arr[i][j-1] == -1) && (arr[i+1][j] == 0 || arr[i+1][j] == -1) && (arr[i-1][j] == 0 || arr[i-1][j] == -1)) {
                        str += "<img src = 'tile_9.gif' class = 'tile' id='tile" +i.toString()+'_'+j.toString()+ "'>";//tile_9
                    }
                    else if ((arr[i][j+1] == 0 || arr[i][j+1] == -1) && arr[i][j-1] == 1 && (arr[i+1][j] == 0 || arr[i+1][j] == -1) && (arr[i-1][j] == 0 || arr[i-1][j] == -1)) {
                        str += "<img src = 'tile_10.gif' class = 'tile' id='tile" +i.toString()+'_'+j.toString()+ "'>";//tile_10
                    }
                }
            }
        }
    }
    document.getElementById("lay").innerHTML = str;

    for(var i=0; i<arr.length; i++){
        for(var j=0; j<arr[i].length; j++){

            if (arr[i][j] == 1) {
                console.log('hi');
                if (i>0 && j>0 && i<arr.length-1 && j<arr[i].length-1 ) {

                    if (arr[i+1][j] == 1 && arr[i-1][j] == 1 && (arr[i][j+1] == -1 || arr[i][j+1] == 0)) {
                        put (i,j);
                    }
                    else if (arr[i+1][j] == 1 && arr[i-1][j] == 1 && (arr[i][j-1] == -1 || arr[i][j-1] == 0)) {
                        put (i,j);
                    }
                    else if (arr[i][j+1] == 1 && arr[i][j-1] == 1 && (arr[i-1][j] == -1 || arr[i-1][j] == 0)) {
                        put (i,j);
                    }
                    else if (arr[i][j+1] == 1 && arr[i][j-1] == 1 && (arr[i+1][j] == 0 || arr[i+1][j] == -1)) {
                        put (i,j);
                    }
                    else if (arr[i][j+1] == 1 && (arr[i][j-1] == 0 || arr[i][j-1] == -1) && arr[i+1][j] == 1 && (arr[i-1][j] == 0 || arr[i-1][j] == -1)) {
                        put (i,j);
                    }
                    else if ((arr[i][j+1] == 0 || arr[i][j+1] == -1) && arr[i][j-1] == 1 && arr[i+1][j] == 1 && (arr[i-1][j] == 0 || arr[i-1][j] == -1)) {
                        put (i,j);
                    }
                    else if ((arr[i][j+1] == 0 || arr[i][j+1] == -1) && arr[i][j-1] == 1 && (arr[i+1][j] == 0 || arr[i+1][j] == -1 ) && arr[i-1][j] == 1) {
                        put (i,j);
                    }
                    else if (arr[i][j+1] == 1 && (arr[i][j-1] == 0 || arr[i][j-1] == -1) && (arr[i+1][j] == 0 || arr[i+1][j] == -1) && arr[i-1][j] == 1) {
                        put (i,j);
                    }
                    else if (arr[i][j+1] == 1 && (arr[i][j-1] == 0 || arr[i][j-1] == -1) && (arr[i+1][j] == 0 || arr[i+1][j] == -1) && (arr[i-1][j] == 0 || arr[i-1][j] == -1)) {
                        put (i,j);
                    }
                    else if ((arr[i][j+1] == 0 || arr[i][j+1] == -1) && arr[i][j-1] == 1 && (arr[i+1][j] == 0 || arr[i+1][j] == -1) && (arr[i-1][j] == 0 || arr[i-1][j] == -1)) {
                        put (i,j);
                    }
                }
            }
        }
    }

    document.getElementById("pacman_open").style.left = (pos_y*25) + 'px';
    document.getElementById("pacman_open").style.top = (pos_x*25) + 'px';
    document.getElementById("pacman_open").style.display = "block";

    document.getElementById("pacman_closed").style.left = (pos_y*25) + 'px';
    document.getElementById("pacman_closed").style.top = (pos_x*25) + 'px';
    document.getElementById("pacman_closed").style.display = "none";

    //setInterval (frame_down,75);
}

function frame_up () {
    id = document.getElementById("pacman_open");
    id1 = document.getElementById('pacman_closed');

    animate(id,id1);

    id.style.top = (parseInt(id.style.top) - 5) + 'px' ;
    id1.style.top = (parseInt(id1.style.top) - 5) + 'px' ;
}

function frame_down () {
    id = document.getElementById("pacman_open");
    id1 = document.getElementById('pacman_closed');

    animate(id,id1);

    id.style.top = (parseInt(id.style.top) + 5) + 'px' ;
    id1.style.top = (parseInt(id1.style.top) + 5) + 'px' ;
}

function frame_left () {
    id = document.getElementById("pacman_open");
    id1 = document.getElementById('pacman_closed');

    animate(id,id1);

    id.style.left = (parseInt(id.style.left) - 5) + 'px' ;
    id1.style.left = (parseInt(id1.style.left) - 5) + 'px' ;
}

function frame_right () {
    id = document.getElementById("pacman_open");
    id1 = document.getElementById('pacman_closed');

    animate(id,id1);

    id.style.left = (parseInt(id.style.left) + 5) + 'px' ;
    id1.style.left = (parseInt(id1.style.left) + 5) + 'px' ;
}

function moveRight () {
        if (arr[pos_x][pos_y] == 0 || arr[pos_x][pos_y] == -1) {
            pos_y++;
            frame_right                    // perform with setTimeout(moveright,375)
        }
}

function moveLeft() {
    if (arr[pos_x][pos_y] == 0 || arr[pos_x][pos_y] == -1) {
        pos_y--;
    }
}

function moveUp() {
    if (arr[pos_x][pos_y] == 0 || arr[pos_x][pos_y] == -1) {
        pos_x--;
    }
}

function moveDown() {
    if (arr[pos_x][pos_y] == 0 || arr[pos_x][pos_y] == -1) {
        pos_x++;
    }
}

window.onload = init;

function mark(e){
    switch(e.key) {
        case "ArrowRight" :

            //document.getElementById("pacman_open").style.left = (parseInt(document.getElementById("pacman_open").offsetLeft) + 25).toString()+"px";
            break;

        case "ArrowLeft" :
            frame_left();
            //document.getElementById("pacman_open").style.left = (parseInt(document.getElementById("pacman_open").offsetLeft) - 25).toString()+"px";
            break;

        case "ArrowUp" :

            //document.getElementById("pacman_open").style.top = (parseInt(document.getElementById("pacman_open").offsetTop) - 25).toString()+"px";
            break;

        case "ArrowDown" :
            //setInterval (frame_down,15);
            //document.getElementById("pacman_open").style.top = (parseInt(document.getElementById("pacman_open").offsetTop) + 25).toString()+"px";
            break;
        default :
            console.log(e);
    }
}
