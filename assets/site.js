/*
Simple 2-page slide transitions
*/
function settings(){
    $('#welcome').removeClass('stage-center').addClass('stage-left');
    $('#settings').removeClass('stage-right').addClass('stage-center');
}

function welcome(){
    $('#welcome').removeClass('stage-left').addClass('stage-center');
    $('#settings').removeClass('stage-center').addClass('stage-right');
}


