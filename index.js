hs = 0;
gs = 0;

homeScore = document.getElementById("disp-score-home");
guestScore = document.getElementById("disp-score-guest");

homeScore.textContent = hs;
guestScore.textContent = gs;
           
function btnh1(){
    hs += 1;
    homeScore.textContent = hs;
}
function btnh2(){
    hs += 2;
    homeScore.textContent = hs;
}
function btnh3(){
    hs += 3;
    homeScore.textContent = hs;
}

function btng1(){
    gs += 1;
    guestScore.textContent = gs;
}
function btng2(){
    gs += 2;
    guestScore.textContent = gs;
}
function btng3(){
    gs += 3;
    guestScore.textContent = gs;
}

function reset(){
    hs = 0;
    gs = 0; 
    homeScore.textContent = hs;
    guestScore.textContent = gs;
    
}