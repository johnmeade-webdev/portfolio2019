mainSpacing();

function mainSpacing(){
    let mainHeight = document.querySelector('#landscape').offsetHeight;
    let rightMainPar = document.querySelector('#rightMainP').offsetHeight;
    document.querySelector('#main-right').style.padding = `${(mainHeight - rightMainPar)/2}px 0 0 0`;
}