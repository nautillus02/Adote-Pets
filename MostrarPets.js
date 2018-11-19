function MostrarPets()
{
document.getElementById("btnAdd").addEventListener("click",function(){
    var AddPets=document.getElementById("main");
    var texto=document.getElementById("Nome_Pets").value;
    var input=document.createElement("input");
    div.textContent=texto;
    AddPets.appendChild(div);
})
}
window.addEventListener("load",MostrarPets)

