let oTurn = $('#start-turn');
setTimeout(() => oTurn.text(`O's Turn!`), 1250);

let tL = $('#top-left');
let tM = $('#top-mid');
let tR = $('#top-right');
let mL = $('#mid-left');
let mM = $('#mid-mid');
let mR = $('#mid-right');
let bL = $('#bot-left');
let bM = $('#bot-mid');
let bR = $('#bot-right');

let alertBox = $('#alertBox');
function alerts(message, type) {
    var wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
  
    alertBox.append(wrapper)
  }


$('#restart').click(function () {
    tL.text('');
    tM.text('');
    tR.text('');
    mL.text('');
    mM.text('');
    mR.text('');
    bL.text('');
    bM.text('');
    bR.text('');
    alerts("Game Reset", 'warning');
    oTurn.text('Start Game!')
    setTimeout(() => oTurn.text(`O's Turn!`), 1500);
});

function restart() {
    tL.text('');
    tM.text('');
    tR.text('');
    mL.text('');
    mM.text('');
    mR.text('');
    bL.text('');
    bM.text('');
    bR.text('');
    alerts("Restart Game!", 'warning');
    oTurn.text('Start Game!')
    setTimeout(() => oTurn.text(`O's Turn!`), 1500);
};



function isGameWon (){
    let tLc = $('#top-left').text();
    let tMc = $('#top-mid').text();
    let tRc = $('#top-right').text();
    let mLc = $('#mid-left').text();
    let mMc = $('#mid-mid').text();
    let mRc = $('#mid-right').text();
    let bLc = $('#bot-left').text();
    let bMc = $('#bot-mid').text();
    let bRc = $('#bot-right').text();
    
    if (tLc === 'O' && tMc === 'O' && tRc === 'O' ||
        tLc === 'O' && mMc === 'O' && bRc === 'O' ||
        tLc === 'O' && mLc === 'O' && bLc === 'O' ||
        tMc === 'O' && mMc === 'O' && bMc === 'O' ||
        tRc === 'O' && mRc === 'O' && bRc === 'O' ||
        mLc === 'O' && mMc === 'O' && mRc === 'O' ||
        bLc === 'O' && bMc === 'O' && bRc === 'O' ||
        bLc === 'O' && mMc === 'O' && tRc === 'O'
        ){alerts(`TicTacToe has been won by Player O`, 'success');
        restart();
        }
        else if (tLc === 'X' && tMc === 'X' && tRc === 'X' ||
        tLc === 'X' && mMc === 'X' && bRc === 'X' ||
        tLc === 'X' && mLc === 'X' && bLc === 'X' ||
        tMc === 'X' && mMc === 'X' && bMc === 'X' ||
        tRc === 'X' && mRc === 'X' && bRc === 'X' ||
        mLc === 'X' && mMc === 'X' && mRc === 'X' ||
        bLc === 'X' && bMc === 'X' && bRc === 'X' ||
        bLc === 'X' && mMc === 'X' && tRc === 'X'
        ){alerts(`TicTacToe has been won by Player X`,'success');
        restart();
        }   
        else if (
             tLc != '' &&  tMc != '' &&  tRc != '' &&
             mLc != '' &&  mMc != '' &&  mRc != '' &&
             bRc != '' &&  bMc != '' &&  bRc != ''
            ) {
                alerts('DRAW', 'warning')
                restart();
            };   
};

$('.grid').click(function (clickedCellEvent) {
    let celltext = clickedCellEvent.target.textContent; 
    let gameText = $('.game-state').text();

    if (celltext === '' && gameText === `O's Turn!`) {
        $(clickedCellEvent.target).text('O'); 
        setTimeout(() => oTurn.text(`X's Turn!`), 1);
        }
    else if (celltext === '' && gameText === `X's Turn!`) {
        $(clickedCellEvent.target).text('X'); 
        setTimeout(() => oTurn.text(`O's Turn!`), 1);
        };
    setTimeout(() => isGameWon(), 200);

});


