
const divItems = document.getElementsByClassName("box");
let mistakes = 4;
let levels = [[1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1],
[1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1] ,[1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0]];

let correctblocks = 15;
let levelcount = 0;
let currentlevel = levels[0];



function gameover() {

    mistakes = 4;
    correctblocks = currentlevel.filter(x => x==1).length;
    cleargrid();

}

function cleargrid(){
    mistakes = 4;
    $('.active').addClass('box').removeClass('active');
    $('.blank').addClass('box').removeClass('blank');
    $('.wrong').addClass('box').removeClass('wrong');
    document.getElementById("lives").textContent = "Lives left: " + mistakes;
}

function level1(){
    document.getElementById("level").textContent = "Level 1"
    document.getElementById("row1").textContent = "1 1";
    document.getElementById("row2").textContent = "2 2";
    document.getElementById("row3").textContent = "1 1 1"
    document.getElementById("row4").textContent = "2 2";
    document.getElementById("row5").textContent = "1 1";

    document.getElementById("col1").textContent = "5";
    document.getElementById("col2").textContent = " 1 \n\r1";
    document.getElementById("col3").textContent = "1";
    document.getElementById("col4").textContent = " 1 \n\r1";
    document.getElementById("col5").textContent = "5";

}

function level2() {
    document.getElementById("level").textContent = "Level 2"
    document.getElementById("row2").textContent = "1 2";
    document.getElementById("row3").textContent = "1 1"
    document.getElementById("row4").textContent = "1 2";
    document.getElementById("row5").textContent = "1";

    document.getElementById("col1").textContent = "1";

}
function level3() {
    document.getElementById("level").textContent = "Level 3"
    document.getElementById("row2").textContent = "1 1";
    document.getElementById("row3").textContent = "1"
    document.getElementById("row4").textContent = "1";
    document.getElementById("row5").textContent = "1";

    document.getElementById("col1").textContent = "1";
    document.getElementById("col2").textContent = "1";
    document.getElementById("col3").textContent = "3";
    document.getElementById("col4").textContent = "1";
    document.getElementById("col5").textContent = "1";

}
$(document).ready(function() {
    $(".next").click(function(event) {
        document.querySelector('.next').disabled = true;
        cleargrid();
        levelcount++;
        
        if(levelcount == 1){
            level2();
        }
        else if(levelcount == 2) {
            level3();
        }
        else if(levelcount == 3){
            levelcount = 0;
            level1();
            gameover();
        }
        currentlevel = levels[levelcount];
       
        correctblocks = currentlevel.filter(x => x==1).length;
        console.log(correctblocks);
    })
});



$(document).ready(function()
{

    $('.box').mousedown(function(event) {

        window.addEventListener('contextmenu', function(e){
            e.preventDefault();
        })
        switch (event.which) {
            case 1:
                if(currentlevel[$(event.target).text() - 1] == 1) {
                    event.target.className ="active";
                    correctblocks--;
                    if(correctblocks == 0){
                        alert("LEVEL cleared");
                        if(levelcount == 2){
                            alert("YOU COMPLETED THE GAME CLICK ON NEXT TO RESTART");
                        }
                        document.querySelector('.next').disabled = false;
                    }
                }
                else {
                    event.target.className = 'wrong'
                    mistakes--;

                    document.getElementById("lives").textContent = "Lives left: " + mistakes;
                    if(mistakes == 0) {
                        alert("game over");
                        gameover();
                    }  
                }      
                break;
            case 2:
                
                break;
            case 3:
                if(event.target.className == 'box')
                {
                    event.target.className ="blank";
                }
                else if(event.target.className == 'blank')
                {
                    event.target.className ="box";
                }
                break;
            default:  
        }

        })
});

