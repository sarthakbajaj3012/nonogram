
const divItems = document.getElementsByClassName("box");
let mistakes = 4;
let levels = [[1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1],
    [1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1] ];

let correctblocks = 15;
let blankblocks = 25 - correctblocks;
let levelcount = 0;
let currentlevel = levels[0];


function gameover() {

    mistakes = 4;
    correctblocks = 15;
    $('.active').addClass('box').removeClass('active');
    $('.blank').addClass('box').removeClass('blank');

}
$(document).ready(function() {
    $(".nxt").click(function(event) {
        gameover();
        
        blankblocks = 25 - correctblocks ;
        levelcount++;
        console.log(levelcount);
        currentlevel = levels[levelcount];
        correctblocks = currentlevel.filter(x => x==1).length;
        console.log(correctblocks);
    })
});

$(document).ready(function()
{
    
    $('.box').mousedown(function(event) {

    
    switch (event.which) {
        case 1:
            if(currentlevel[$(event.target).text() - 1] == 1) {
                if(event.target.className == 'blank'){
                    blankblocks++;
                }
                event.target.className ="active";
                correctblocks--;
                if(correctblocks == 0){
                    alert("LEVEL 1 cleared");
                }
            }
            else {
                mistakes--;
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
                blankblocks--;
            }
            if(correctblocks == 0 && blankblocks == 0){
                alert("LEVEL 1 cleared");
            }
           
            break;
        default:
            alert('You have a strange Mouse!');
    }
    })
});

