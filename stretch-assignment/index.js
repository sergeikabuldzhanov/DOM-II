// class Rocket{
//     constructor(index, position, clas){
//         this.index = index;
//         this.position = position;
//         this.clas = clas;
//     }
//     move(){
//         let block = document.querySelector
//     }
// }

// const red = new Rocket(1, 0, 'block--red');
// const blue = new Rocket(2, 110, 'block--blue');
// const green = new Rocket(3, 220, 'block--green');
// const pink = new Rocket(4, 330, 'block--pink');
// const gray = new Rocket(5, 440, 'block--gray');

// const rockets = [red, blue, green, pink, gray];

const blocks = document.querySelectorAll('.block');

blocks[0].addEventListener('click', event=>{
    for(let i =0; i<blocks.length;i++){
        if(Number(blocks[0].style.top.split('px')[0])>Number(blocks[i].style.top.split('px')[0])){
            blocks[i].style.top=`${Number(blocks[i].style.top.split('px')[0])+110}px`;
        }
    }
    blocks[0].style.top='0px';
})
blocks[1].addEventListener('click', event=>{
    for(let i =0; i<blocks.length;i++){
        if(Number(blocks[1].style.top.split('px')[0])>Number(blocks[i].style.top.split('px')[0])){
            blocks[i].style.top=`${Number(blocks[i].style.top.split('px')[0])+110}px`;
        }
    }
    blocks[1].style.top='0px';
})
blocks[2].addEventListener('click', event=>{
    for(let i =0; i<blocks.length;i++){
        if(Number(blocks[2].style.top.split('px')[0])>Number(blocks[i].style.top.split('px')[0])){
            blocks[i].style.top=`${Number(blocks[i].style.top.split('px')[0])+110}px`;
        }
    }
    blocks[2].style.top='0px';
})
blocks[3].addEventListener('click', event=>{
    for(let i =0; i<blocks.length;i++){
        if(Number(blocks[3].style.top.split('px')[0])>Number(blocks[i].style.top.split('px')[0])){
            blocks[i].style.top=`${Number(blocks[i].style.top.split('px')[0])+110}px`;
        }
    }
    blocks[3].style.top='0px';
})
blocks[4].addEventListener('click', event=>{
    for(let i =0; i<blocks.length;i++){
        if(Number(blocks[4].style.top.split('px')[0])>Number(blocks[i].style.top.split('px')[0])){
            blocks[i].style.top=`${Number(blocks[i].style.top.split('px')[0])+110}px`;
        }
    }
    blocks[4].style.top='0px';
})

blocks.forEach(block=>{
    block.onmousedown = ()=>{
        const ti = 
        (function timer(){
            let right = 0;
            function limit(){
                if(right<500) right += 1;
                block.style.left = right+'px';
            }
            return limit;
        })();
        window.setInterval(ti, 20);
    }
});

