function diceRoll(){
const imgDisplay=document.getElementById("imgDisplay");
const resultDisplay=document.getElementById("resultDisplay");
const numSelector=document.getElementById("numSelector").value;

const img=[];
const result=[];

for(let i=0;i<numSelector;i++){
const values= Math.floor((Math.random()*6)+1);
result.push(values);
img.push(`<img src="img/${values}.png" alt="dice">`);
}
resultDisplay.textContent=`Dice:${result.join(", ")}`;
imgDisplay.innerHTML = img.join(" ");
}
