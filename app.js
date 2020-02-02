const gameWindow = document.querySelector('#gamewindow');
const romulan = document.querySelector('#romulan');

const romulanLocation = {
    xAxis: Math.floor(Math.random() * 500),
    yAxis: Math.floor(Math.random() * 200),
    shipWidth: 100
}

romulan.style.left = `${romulanLocation.xAxis}px`;
romulan.style.top = `${romulanLocation.yAxis}px`;
romulan.style.width = `${romulanLocation.shipWidth}px`;

gameWindow.addEventListener('click', e => {
    if(e.target.id === 'romulan'){
        romulan.classList.remove('cloaked');
        romulan.classList.add('uncloaked');    
    }
});

window.addEventListener('keypress', e => {
    romulan.classList.toggle('cloaked');
    romulan.classList.toggle('uncloaked');
})