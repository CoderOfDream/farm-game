
for(let i = 0; i < 121; i++) {
    document.getElementById('game').innerHTML += '<div class="field"></div>';
}



//global variables
let money = 0,
 click = 0,
 clickOnProduct = 0,
 chekField = [],
 fieldTimer = [],
 fieldNum = [],
 inventory = [[],[]],
 j = 0,
 grow = 0,
 shoptt = document.getElementsByClassName('product'),
 shopgg = 0,
 shoppick;


//create wrapper for buttons
let wrapper = document.createElement('div');
wrapper.id = 'wrapper';
let wrapperDiv = document.body.appendChild(wrapper);


//Create shop button
let btn = document.createElement('button');
btn.innerHTML = 'Shop';
let btnShop = document.getElementById('wrapper').appendChild(btn);
btnShop.classList.add('shop-btn');
btnShop.classList.add('btn');
btnShop.classList.add('btn-success');

//create take
let takeBtn = document.createElement('button');
takeBtn.innerHTML = 'Take';
document.getElementById('wrapper').appendChild(takeBtn);
takeBtn.classList.add('btn');
takeBtn.classList.add('btn-info');

//Digging up btn
let btnDig = document.createElement('button');
btnDig.innerHTML = 'Dig';
let btdDigg = document.getElementById('wrapper').appendChild(btnDig);
btdDigg.classList.add('btn');
btdDigg.classList.add('btn-warning');

btdDigg.onclick = function() {
    clickOnProduct = 0;
}

takeBtn.onclick = function() {
    clickOnProduct = 2;
}

//Create shopPlate
let shopPlate = document.createElement('div');
shopPlate.id = 'shopPlate';
shopPlate.style.display = 'none';
document.body.appendChild(shopPlate);

//products in shop
let prod = document.createElement('div');
prod.className = 'product';
prodArr = ['test', 'test', 'test', 'test', 'test'];
for(let i = 0; i < 5; i++){
    shopPlate.innerHTML += '<div class="product">' + prodArr[i] +'</div>';
}


function checkchekField(){
    switch (clickOnProduct){
        case 1:
        if (chekField[j]==1) {
            event.target.style.backgroundImage = 'url("img/1.png")'; 
            chekField[j]=10;
        }
        break;
        case 2:
        if (chekField[j]==1) {
            event.target.style.backgroundImage = 'none';
            chekField[j]==14;
        }
        break;
        default: break;
    }
}

//set atributes each field
let farmClass = document.getElementsByClassName('field');
let fieldNumber = 1;
for(let i = 0; i < farmClass.length; i++) {
    farmClass[i].setAttribute('x', i);
    fieldNum[i] = document.querySelector('[x = "'+ i +'"]');
    fieldTimer[i]=0;
    chekField[i]=0;
}
for (let i = 0; i < 10; i++) {
    inventory[0][i]=0;
    inventory[1][i]=0;
}


//Show/hide shopPlate
btnShop.onclick = function() {
    if(shopPlate.style.display == 'none') {
        shopPlate.style.display = 'block';
    }
    else {
        shopPlate.style.display = 'none';
    }
}

//digging up
document.body.onclick = function(event){
    if(event.target.className == 'field'){
        switch(clickOnProduct) {
        case 0 : //невскопанная грядка
            event.target.style.backgroundImage = "url('img/dirt2.png')";
            j = event.target.getAttribute('x');
            chekField[j]=1;
            fieldTimer[j]=0;
            break;
        case 1:  //вскопанная грядка
            j = event.target.getAttribute('x');
            checkchekField();
            break;
        case 2: //Собрать
            j = event.target.getAttribute('x');
            if (chekField[j]==12) {
            event.target.style.backgroundImage = "url('img/dirt2.png')";
            chekField[j]=1;
            fieldTimer[j]=0;
            inventoryy();
            }
            break;
    }
        }else if(event.target.className == 'product') {
            if (shopgg !=0) {
                shoppick = document.querySelector('[style="background-color: rgb(65, 70, 61);"]');
                shoppick.style.backgroundColor = '#261C15';
            }
            event.target.style.backgroundColor = '#41463D';
            clickOnProduct = 1;
            if (shopgg==0) { shoppick = document.querySelector('[style="background-color: rgb(65, 70, 61);"]');
            shopgg++;
        }
        }
    
}


function growingg() {
    for(let i = 0; i < 121; i++) {
        if(chekField[i]!=1 && chekField[i]!=0) {
            fieldTimer[i]++;
            grows(i);
        }
    }
}

function grows(jj){
    if (fieldTimer[jj]==5) {
    switch(chekField[jj]) {
        case 10:
            fieldNum[jj].style.backgroundImage = 'url("img/2.jpg")'; 
            chekField[jj]=11; break;
        case 11:
            fieldNum[jj].style.backgroundImage = 'url("img/3.png")'; 
            chekField[jj]=12; break;
    } 
    fieldTimer[jj]=0;
    }
}

function inventoryy(){
    for (let i=0; i<10; i++) {
        inventory[0][i]=1;
    switch (inventory[0][i]) {
    case 1: inventory[1][i]++;
    break;
    }
    break;
}
    }

setInterval(growingg, 1000);
// setInterval(growing, 1000);

