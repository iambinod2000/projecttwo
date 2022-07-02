function showMenu(){
    console.log('show menu enabled');
    document.getElementById('ul').style.left = '0px'
}

function hideMenu(){
    document.getElementById('ul').style.left = '1200px'
}

// submit btn popup

let openpop = document.getElementById('pop-up');

function openPop(){
    openpop.className = 'transition';
}

function closePop(){
    openpop.className = '';
}