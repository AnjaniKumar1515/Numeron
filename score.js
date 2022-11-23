document.getElementById('score-box').innerText=`Score: ${localStorage.getItem('score')}`
document.getElementById('play-again-button').onclick=()=>{
    window.open("gamepage.html",'_self')
    localStorage.setItem('score',0)
}