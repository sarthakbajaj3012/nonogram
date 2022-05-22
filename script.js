
let mistakes = 7;
let levels = [
    [1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,
    1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,
    1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,
    1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,
    1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,
    1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,
    1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,
    1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,
    1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1],

    [1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,
     0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
     0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,
     0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
     1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,
     0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
     0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,
     0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
     1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,],

    [1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,
     1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
     1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,
     0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
     1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,
     0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
     0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,
     1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
     1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,]

    ]



let levelcount = 0;
let currentlevel = levels[0];
let correctblocks = currentlevel.filter(x => x==1).length;



function gameover() {

    mistakes = 7;
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
    document.getElementById("row1").textContent = "15";
    document.getElementById("row2").textContent = "3 3 3"
    document.getElementById("row3").textContent = "1 1 1";
    document.getElementById("row4").textContent = "3 3 3";
    document.getElementById("row5").textContent = "15";
    document.getElementById("row6").textContent = "15";
    document.getElementById("row7").textContent = "3 3 3";
    document.getElementById("row8").textContent = "1 1 1";
    document.getElementById("row9").textContent = "3 3 3";
    document.getElementById("row10").textContent = "15";
    document.getElementById("row11").textContent = "15";
    document.getElementById("row12").textContent = "3 3 3" ;
    document.getElementById("row13").textContent = "1 1 1";
    document.getElementById("row14").textContent = "3 3 3";
    document.getElementById("row15").textContent = "15";


    document.getElementById("col1").textContent = "1\n\r2\n\r2\n\r1";
    document.getElementById("col2").textContent = "2\n\r4\n\r4\n\r2";
    document.getElementById("col3").textContent = "15";
    document.getElementById("col4").textContent = "2\n\r4\n\r4\n\r2";
    document.getElementById("col5").textContent = "1\n\r2\n\r2\n\r1";
    document.getElementById("col6").textContent = "1\n\r2\n\r2\n\r1";
    document.getElementById("col7").textContent = "2\n\r4\n\r4\n\r2";
    document.getElementById("col8").textContent = "15";
    document.getElementById("col9").textContent = "2\n\r4\n\r4\n\r2";
    document.getElementById("col10").textContent ="1\n\r2\n\r2\n\r1";
    document.getElementById("col11").textContent ="1\n\r2\n\r2\n\r1";
    document.getElementById("col12").textContent ="2\n\r4\n\r4\n\r2";
    document.getElementById("col13").textContent ="15";
    document.getElementById("col14").textContent ="2\n\r4\n\r4\n\r2";
    document.getElementById("col15").textContent ="1\n\r2\n\r2\n\r1";

}

function level2() {
    document.getElementById("level").textContent = "Level 2"
    document.getElementById("row1").textContent = "1 1";
    document.getElementById("row2").textContent = "1 1"
    document.getElementById("row3").textContent = "1 1";
    document.getElementById("row4").textContent = "1 1";
    document.getElementById("row5").textContent = "1 1";
    document.getElementById("row6").textContent = "1 1";
    document.getElementById("row7").textContent = "1 1";
    document.getElementById("row8").textContent = "1";
    document.getElementById("row9").textContent = "1 1";
    document.getElementById("row10").textContent = "1 1";
    document.getElementById("row11").textContent = "1 1";
    document.getElementById("row12").textContent = "1 1" ;
    document.getElementById("row13").textContent = "1 1";
    document.getElementById("row14").textContent = "1 1";
    document.getElementById("row15").textContent = "1 1";


    document.getElementById("col1").textContent = "1\n\r1";
    document.getElementById("col2").textContent = "1\n\r1";
    document.getElementById("col3").textContent = "1\n\r1";
    document.getElementById("col4").textContent = "1\n\r1";
    document.getElementById("col5").textContent = "1\n\r1";
    document.getElementById("col6").textContent = "1\n\r1";
    document.getElementById("col7").textContent = "1\n\r1";
    document.getElementById("col8").textContent = "1";
    document.getElementById("col9").textContent = "1\n\r1";
    document.getElementById("col10").textContent = "1\n\r1";
    document.getElementById("col11").textContent = "1\n\r1";
    document.getElementById("col12").textContent = "1\n\r1";
    document.getElementById("col13").textContent = "1\n\r1";
    document.getElementById("col14").textContent = "1\n\r1";
    document.getElementById("col15").textContent = "1\n\r1";

}
function level3() {
    document.getElementById("level").textContent = "Level 3"
    document.getElementById("row1").textContent = "15";
    document.getElementById("row2").textContent = "13"
    document.getElementById("row3").textContent = "11";
    document.getElementById("row4").textContent = "9";
    document.getElementById("row5").textContent = "7";
    document.getElementById("row6").textContent = "5";
    document.getElementById("row7").textContent = "3";
    document.getElementById("row8").textContent = "1";
    document.getElementById("row9").textContent = "3";
    document.getElementById("row10").textContent = "5";
    document.getElementById("row11").textContent = "7";
    document.getElementById("row12").textContent = "9" ;
    document.getElementById("row13").textContent = "11";
    document.getElementById("row14").textContent = "13";
    document.getElementById("row15").textContent = "15";


    document.getElementById("col1").textContent = "1\n\r1";
    document.getElementById("col2").textContent = "2\n\r2";
    document.getElementById("col3").textContent = "3\n\r3";
    document.getElementById("col4").textContent = "4\n\r4";
    document.getElementById("col5").textContent = "5\n\r5";
    document.getElementById("col6").textContent = "6\n\r6";
    document.getElementById("col7").textContent = "7\n\r7";
    document.getElementById("col8").textContent = "15";
    document.getElementById("col9").textContent = "7\n\r7";
    document.getElementById("col10").textContent = "6\n\r6";
    document.getElementById("col11").textContent = "5\n\r5";
    document.getElementById("col12").textContent = "4\n\r4";
    document.getElementById("col13").textContent = "3\n\r3";
    document.getElementById("col14").textContent = "2\n\r2";
    document.getElementById("col15").textContent = "1\n\r1";

}

$(document).ready(function() {
    $(".next").click(function(event) {
        document.querySelector('.next').disabled = false;
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
                        alert("LEVEL cleared");''
                        if(levelcount == 3){
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

