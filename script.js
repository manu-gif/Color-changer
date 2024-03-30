// const i = document.querySelector('.box1');
// const j = document.querySelector('.box2');
// const k = document.querySelector('.box3');
// const l = document.querySelector('.box4');

const boxes = document.querySelectorAll('.boxes');
const body = document.querySelector('body');

boxes.forEach(function (box) {
    // console.log(box);
    box.addEventListener('click', function(e) {
        if (e.target.id === 'box1') {
            body.style.backgroundColor = 'pink';
        } else if (e.target.id === 'box2') {
            body.style.backgroundColor = 'grey';
        } else if (e.target.id === 'box3') {
            body.style.backgroundColor = 'blue';
        } else if (e.target.id === 'box4') {
            body.style.backgroundColor = 'yellow';
        }
    });
});

// i.addEventListener("click", function(){
//     document.body.style.backgroundColor = "pink";
// });

// j.addEventListener("click", function(){
//     document.body.style.backgroundColor = "whitesmoke";
// });

// k.addEventListener("click", function(){
//     document.body.style.backgroundColor = "blue";
// });

// l.addEventListener("click", function(){
//     document.body.style.backgroundColor = "yellow";
// });



