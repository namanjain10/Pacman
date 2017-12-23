// var arr = [
// [0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0],
// [0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0],
// [0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0],
// [0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0],
// [0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0],
// [1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1],
// [1,1,1,1,0,1,1,1,0,0,0,0,1,1,-1,-1,-1,-1,-1,-1,-1,-1,1,1,0,0,0,0,1,1,1,0,1,1,1,1],
// [1,1,1,1,0,1,1,1,0,1,1,0,0,0,-1,1,1,1,1,1,1,-1,0,0,0,1,1,0,1,1,1,0,1,1,1,1],
// [0,0,0,0,0,1,1,1,0,1,1,1,1,0,-1,1,1,1,1,1,1,-1,0,1,1,1,1,0,1,1,1,0,0,0,0,0],
// [0,1,1,1,0,0,0,0,0,1,1,1,1,0,-1,1,1,1,1,1,1,-1,0,1,1,1,1,0,0,0,0,0,1,1,1,0],
// [0,1,1,1,1,0,1,1,0,1,1,0,0,0,-1,1,1,1,1,1,1,-1,0,0,0,1,1,0,1,1,0,1,1,1,1,0],
// [0,1,1,1,1,0,1,1,0,1,1,0,1,1,-1,-1,-1,-1,-1,-1,-1,-1,1,1,0,1,1,0,1,1,0,1,1,1,1,0],
// [0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0],
// [0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0],
// [1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1],
// [1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1],
// [1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1],
// [1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1],
// [1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1],
// [1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1],
// [0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0],
// [0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0],
// [0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0],
// [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0]];

var arr =[
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1, 0, 1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1],
[1, 0, 1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1],
[1, 0, 1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1],
[1, 0, 0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1],
[1, 1, 1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1],
[1, 1, 1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1],
[1,-1,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,-1,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1, 1, 1,0,1,1, 1, 1, 1, 1, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 1, 1, 1, 1, 1, 1, 0,1,1,0,1,1, 1,0,1],
[1, 1, 1,0,1,1, 1, 1, 1, 1, 0, 1, 1, 1, 1,-1, 1, 1, 1, 1, 1,-1, 1, 1, 1, 1, 1, 1, 0,1,1,0,1,1, 1,0,1],
[1,-1,-1,0,1,1, 0, 0, 0, 0, 0, 1, 1, 1, 1,-1, 1, 1, 1, 1, 1,-1, 1, 1, 0, 0, 0, 0, 0,1,1,0,1,1, 0,0,1],
[1, 1, 1,0,1,1, 0, 1, 1, 1, 0, 1, 1, 1, 1,-1, 1, 1, 1, 1, 1,-1, 1, 1, 0, 1, 1, 1, 0,1,1,0,1,1, 1,0,1],
[1, 1, 1,0,1,1, 0, 0, 1, 1, 0, 1, 1, 1, 1,-1, 1, 1, 1, 1, 1,-1, 1, 1, 0, 0, 1, 1, 0,1,1,0,1,1,-1,0,1],
[1, 1, 1,0,1,1, 1, 1, 1, 1, 0, 1, 1, 1, 1,-1, 1, 1, 1, 1, 1,-1, 1, 1, 1, 1, 1, 1, 0,1,1,0,1,1, 1,0,1],
[1, 1, 1,0,1,1, 1, 1, 1, 1, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 1, 1, 1, 1, 1, 1, 0,1,1,0,1,1, 1,0,1],
[1,-1,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1, 1, 1,1,1,1,0,1,1, 1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1, 1,1,1,0,1,1,1,1,1,1],
[1, 1, 1,1,1,1,0,1,1, 1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1, 1,1,1,0,1,1,1,1,1,1],
[1, 0, 0,0,0,0,0,1,1,-1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,-1,1,1,0,0,0,0,0,0,1],
[1, 0, 1,1,1,1,0,1,1, 1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1, 1,1,1,0,1,1,1,1,0,1],
[1, 0, 1,1,1,1,0,1,1, 1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1, 1,1,1,0,1,1,1,1,0,1],
[1, 0, 0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];

class ghost {

    constructor(x,y,id) {
        this.x = x;
        this.y = y;
        this.id = id;
        this.state = 0;
        this.prev = 0;
        document.getElementById("ghost" + this.id).style.left = (this.y*25) + 'px';
        document.getElementById("ghost" + this.id).style.top = (this.x*25) + 'px';
    }

    animateToGate () {
        this.x = 9;
        this.y = 18;
        document.getElementById("ghost" + this.id).style.left = (this.y*25) + 'px';
        document.getElementById("ghost" + this.id).style.top = (this.x*25) + 'px';
    }

    setIntervalX(callback, delay, repetitions) {
        var x = 0;
        var intervalID = window.setInterval(function () {
           callback();
            if (++x === repetitions) {
               window.clearInterval(intervalID);
            }
        }, delay);
    }

    moveRight () {
        if (arr[this.x][this.y+1] == 0 || arr[this.x][this.y+1] == -1) {
            var id = this.id;
            setIntervalX(function () {
                var id1 = document.getElementById("ghost" + id);
                id1.style.left = (parseInt(id1.style.left) + 5) + 'px' ;
            }, 60, 5);
            this.y++;
        }
    }

    moveLeft() {
        if (arr[this.x][this.y-1] == 0 || arr[this.x][this.y-1] == -1) {
            var id = this.id;
            setIntervalX(function () {
                var id1 = document.getElementById("ghost" + id);
                id1.style.left = (parseInt(id1.style.left) - 5) + 'px' ;
            }, 60, 5);
            this.y--;
        }
    }

    moveUp() {
        if (arr[this.x-1][this.y] == 0 || arr[this.x-1][this.y] == -1) {
            var id = this.id;
            setIntervalX(function () {
                var id1 = document.getElementById("ghost" + id);
                id1.style.top = (parseInt(id1.style.top) - 5) + 'px' ;
            }, 60, 5);
            this.x--;
        }
    }

    moveDown() {
        if (arr[this.x + 1][this.y] == 0 || arr[this.x + 1][this.y] == -1) {
            var id = this.id;
            setIntervalX(function () {
                var id1 = document.getElementById("ghost" + id);
                id1.style.top = (parseInt(id1.style.top) + 5) + 'px' ;
            }, 60, 5);
            this.x++;
        }
    }

    ghostAI (pac_x, pac_y) {
        var up = 0, down = 0, left = 0, right = 0;

        if (arr[this.x][this.y-1] == 0 || arr[this.x][this.y-1] == -1 && this.prev != 4) {
            this.prev = this.state;
            this.state = 4;//left = 1;
        }

        else if (arr[this.x+1][this.y] == 0 || arr[this.x+1][this.y] == -1 && this.prev != 2) {
            this.prev = this.state;
            this.state = 2;//down = 1;
        }

        else if (arr[this.x][this.y+1] == 0 || arr[this.x][this.y+1] == -1 && this.prev != 3) {
            this.prev = this.state;
            this.state = 3;//right = 1;
        }

        else if (arr[this.x-1][this.y] == 0 || arr[this.x-1][this.y] == -1 && this.prev != 1) {
            this.prev = this.state;
            this.state = 1;//up = 1;
        }

        else {
            this.state = 0;
        }

        switch (this.state) {
            case 1 :
                this.moveUp();
                break;
            case 2:
                this.moveDown();
                break;
            case 3:
                this.moveRight();
                break;
            case 4:
                this.moveLeft();
                break;
            default :
                console.log("not possible");
        }
    }
}

var g1 = new ghost(11, 18, 1);
g1.animateToGate();
g1.moveUp();

var g2 = new ghost(12, 17, 2);
g2.animateToGate();
g2.moveLeft();

var g3 = new ghost(12, 18, 3);
g3.animateToGate();
g3.moveUp();
g3.moveLeft();
g3.moveLeft();

var g4 = new ghost(12, 19, 4);
g4.animateToGate();
g4.moveLeft();
g4.moveLeft();

var points = 0, count = 0, dots = 0, state;

var pos_x = 22, pos_y = 18;

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

function init_play () {
    //alert ('ready to go');
    document.onkeydown = function (e){mark(e)};
    state = 2;
    init_board();
    init();
}

function init_board() {

        var str = document.getElementById("lay").innerHTML;

        for(var i=0; i<arr.length; i++){
            for(var j=0; j<arr[i].length; j++){
                if (arr[i][j] == 0) {
                    str += "<img src = 'dot.png' class = 'dot' id='dot" +i.toString()+'_'+j.toString()+ "'>";
                    count++;
                }
            }
        }
        //$("#lay").append(str);
        //var str = document.getElementById("lay").innerHTML;

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
        //document.getElementById("lay").innerHTML = str;

        document.getElementById("lay").innerHTML = str;

        for(var i=0; i<arr.length; i++){
            for(var j=0; j<arr[i].length; j++){
                if (arr[i][j] == 0) {
                    var x = 25*i;
                    var y = 25*j;
                    document.getElementById('dot' +(i.toString()) + '_' +j.toString()).style.left = y.toString() + "px";
                    document.getElementById('dot' +(i.toString()) + '_' +j.toString()).style.top = x.toString() + "px";
                    document.getElementById('dot' +(i.toString()) + '_' +j.toString()).style.display = "block";
                }
            }
        }
        for(var i=0; i<arr.length; i++){
            for(var j=0; j<arr[i].length; j++){

                if (arr[i][j] == 1) {
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
}

function init() {
    document.getElementById("pacman_open").style.left = (pos_y*25) + 'px';
    document.getElementById("pacman_open").style.top = (pos_x*25) + 'px';
    document.getElementById("pacman_open").style.display = "block";

    document.getElementById("pacman_closed").style.left = (pos_y*25) + 'px';
    document.getElementById("pacman_closed").style.top = (pos_x*25) + 'px';
    document.getElementById("pacman_closed").style.display = "none";

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

function setIntervalX(callback, delay, repetitions) {
    var x = 0;
    var intervalID = window.setInterval(function () {

       callback();

        if (++x === repetitions) {
           window.clearInterval(intervalID);
        }
    }, delay);
}

function hide () {

    if (document.getElementById('dot' +(pos_x.toString()) + '_' +pos_y.toString()).style.display == "block") {
        document.getElementById('dot' +(pos_x.toString()) + '_' +pos_y.toString()).style.display = "none";
        f = parseInt(document.getElementById('points').innerHTML);
        document.getElementById('points').innerHTML = (f + 10).toString();
        points += 10;
        dots ++;
    }
}

function moveRight () {
    if (arr[pos_x][pos_y+1] == 0 || arr[pos_x][pos_y+1] == -1) {
        setIntervalX(function () {
            frame_right();
        }, 60, 5);
        if (arr[pos_x][pos_y] == 0) {
            hide();
        }
        pos_y++;                            // perform with setTimeout(moveright,375)
    }
}

function moveLeft() {
    if (arr[pos_x][pos_y-1] == 0 || arr[pos_x][pos_y-1] == -1) {
        setIntervalX(function () {
            frame_left();
        }, 60, 5);
        if (arr[pos_x][pos_y] == 0){
            hide();
        }
        pos_y--;
    }
}

function moveUp() {
    if (arr[pos_x-1][pos_y] == 0 || arr[pos_x-1][pos_y] == -1) {
        setIntervalX(function () {
            frame_up();
        }, 60, 5);
        if (arr[pos_x][pos_y] == 0) {
            hide();
        }
        pos_x--;
    }
}

function moveDown() {
    if (arr[pos_x+1][pos_y] == 0 || arr[pos_x+1][pos_y] == -1) {
        setIntervalX(function () {
            frame_down();
        }, 60, 5);
        if (arr[pos_x][pos_y] == 0){
            hide();
        }
        pos_x++;
    }
}

window.onload = init_play;

var intervalIDRight, intervalIDUp, intervalIDDown, intervalIDLeft;

function stop() {
    window.clearInterval (intervalIDRight);
    window.clearInterval (intervalIDLeft);
    window.clearInterval (intervalIDUp);
    window.clearInterval (intervalIDDown);
}

function condition () {
    if (g1.x == pos_x && g1.y == pos_y) {
        return 1;
    }
    else if (g2.x == pos_x && g2.y == pos_y) {
        return 1;
    }
    else if (g3.x == pos_x && g3.y == pos_y) {
        return 1;
    }
    else if (g4.x == pos_x && g4.y == pos_y) {
        return 1;
    }
    else {
        return 0;
    }
}

var game = window.setInterval ( function () {

    g1.ghostAI(pos_x,pos_y);
    g2.ghostAI(pos_x,pos_y);
    g3.ghostAI(pos_x,pos_y);
    g4.ghostAI(pos_x,pos_y);

    if (dots == count) {
        window.clearInterval(game);
    }
    if (condition()) {
        stop();
        location.reload();
    }
    if (state == 1) {
        if(arr[pos_x][pos_y+1] == 0 || arr[pos_x][pos_y+1] == -1 ) {
            stop();
            intervalIDRight = setInterval(function () {
                if(arr[pos_x][pos_y+1] == 0 || arr[pos_x][pos_y+1] == -1 ) {
                    moveRight();
                }
                else {
                    clearInterval(intervalIDRight);
                }
            },300);

        }
    }
    else if (state == 2) {
        if(arr[pos_x][pos_y-1] == 0 || arr[pos_x][pos_y-1] == -1 ) {
            stop();
            intervalIDLeft = setInterval(function () {
                if(arr[pos_x][pos_y-1] == 0 || arr[pos_x][pos_y-1] == -1 ) {
                    moveLeft();
                }
                else {
                    clearInterval(intervalIDLeft);
                }
            },300);
        }
    }
    else if (state == 3) {
        if(arr[pos_x-1][pos_y] == 0 || arr[pos_x-1][pos_y] == -1) {
            stop();
            intervalIDUp = setInterval(function () {
                if(arr[pos_x-1][pos_y] == 0 || arr[pos_x-1][pos_y] == -1) {
                    moveUp();

                }
                else {
                    clearInterval(intervalIDUp);

                }
            },300);
        }
    }
    else if (state == 4) {
        if(arr[pos_x+1][pos_y] == 0 || arr[pos_x+1][pos_y] == -1) {
            stop();
            intervalIDDown = setInterval(function () {
                if(arr[pos_x+1][pos_y] == 0 || arr[pos_x+1][pos_y] == -1) {
                    moveDown();
                }
                else {
                    clearInterval(intervalIDDown);
                }
            },300);
        }
    }

},315);

function mark(e){
    switch(e.key) {
        case "ArrowRight" :
            state = 1;
            break;

        case "ArrowLeft" :
            state = 2;
            break;

        case "ArrowUp" :
            state = 3;
            break;

        case "ArrowDown" :
            state = 4;
            break;

        default :
            console.log(points);
    }
}
