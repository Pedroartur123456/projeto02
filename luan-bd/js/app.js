

var audio1 = document.querySelector('.audio1')
var audio2 = document.querySelector('.audio2')
var audio3 = document.querySelector('.audio3')
var audio4 = document.querySelector('.audio4')

document.querySelector('.play1').addEventListener('click',()=>{

    audio1.play()
    document.querySelector('.play1').style.display = 'none';
    document.querySelector('.pause1').style.display = 'block';
})

document.querySelector('.pause1').addEventListener('click', ()=>{
    audio1.pause()
    document.querySelector('.play1').style.display = 'block';
    document.querySelector('.pause1').style.display = 'none';
})


document.querySelector('.corc').addEventListener('click', ()=>{
    document.querySelector('.corc').style.display = 'none';
    document.querySelector('.cor1').style.display = 'block';
})

document.querySelector('.cor1').addEventListener('click', ()=>{
    document.querySelector('.cor1').style.display = 'none';
    document.querySelector('.corc').style.display = 'block';
})











document.querySelector('.play2').addEventListener('click',()=>{

    audio2.play()
    document.querySelector('.play2').style.display = 'none';
    document.querySelector('.pause2').style.display = 'block';
})

document.querySelector('.pause2').addEventListener('click', ()=>{
    audio2.pause()
    document.querySelector('.play2').style.display = 'block';
    document.querySelector('.pause2').style.display = 'none';
})


document.querySelector('.corc2').addEventListener('click', ()=>{
    document.querySelector('.corc2').style.display = 'none';
    document.querySelector('.cor2').style.display = 'block';
})

document.querySelector('.cor2').addEventListener('click', ()=>{
    document.querySelector('.cor2').style.display = 'none';
    document.querySelector('.corc2').style.display = 'block';
})







document.querySelector('.play3').addEventListener('click',()=>{

    audio3.play()
    document.querySelector('.play3').style.display = 'none';
    document.querySelector('.pause3').style.display = 'block';
})

document.querySelector('.pause3').addEventListener('click', ()=>{
    audio3.pause()
    document.querySelector('.play3').style.display = 'block';
    document.querySelector('.pause3').style.display = 'none';
})


document.querySelector('.corc3').addEventListener('click', ()=>{
    document.querySelector('.corc3').style.display = 'none';
    document.querySelector('.cor3').style.display = 'block';
})

document.querySelector('.cor3').addEventListener('click', ()=>{
    document.querySelector('.cor3').style.display = 'none';
    document.querySelector('.corc3').style.display = 'block';
})







document.querySelector('.play4').addEventListener('click',()=>{

    audio4.play()
    document.querySelector('.play4').style.display = 'none';
    document.querySelector('.pause4').style.display = 'block';
})

document.querySelector('.pause4').addEventListener('click', ()=>{
    audio4.pause()
    document.querySelector('.play4').style.display = 'block';
    document.querySelector('.pause4').style.display = 'none';
})


document.querySelector('.corc4').addEventListener('click', ()=>{
    document.querySelector('.corc4').style.display = 'none';
    document.querySelector('.cor4').style.display = 'block';
})

document.querySelector('.cor4').addEventListener('click', ()=>{
    document.querySelector('.cor4').style.display = 'none';
    document.querySelector('.corc4').style.display = 'block';
})







