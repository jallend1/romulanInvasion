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
    const xClick = e.offsetX;
    const yClick = e.offsetY;
    console.log(xClick, yClick);
    console.log(romulanLocation);
    if((xClick > romulanLocation.xAxis) && (xClick < romulanLocation.xAxis + romulanLocation.shipWidth)){
        if((yClick > romulanLocation.yAxis) && (yClick < (romulanLocation.yAxis + (romulanLocation.shipWidth * 0.83)))){
            romulan.classList.remove('cloaked');
        }
    }
});