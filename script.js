var a = document.querySelector('.js');
console.log(a);
a.innerHTML = "";
var b = document.querySelector('.bt');
var lista = [
    "Doge ma super moc", 
    "Miłego Doga",  
    "Super Doge", 
    "Moc doge", 
    "Doge super"];
    
    
    
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

    
b.onclick = function(){
    var losowa = getRandomInt(5);
    a.innerHTML = lista[losowa];
}