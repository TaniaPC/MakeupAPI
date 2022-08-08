/*Proyecto final Makeup API
 * Creado: 8/8/22
 * TaniaPC
*/

//arreglo
let resultados = [];


//Intento de obtener datos que no funciono para la paginacion
/*const lists_makeups = document.getElementById('lists_makeups')
const numbers=document.getElementById('numbers');
let elJSON = "makeupapi.json";
let btnNext;
let btnPrevious;
let templateHTML;
//console('<< >>');

const GetMakeups = async (url) => {
try{
    const response = await fetch(url)
    const results = await response.json();
    console.log (results);
    DataMakeups(results.results);
    mode:"no-cors";
  } catch (error){
   console.log(error)
  }

GetMakeups(elJSON);


const DataMakeups = async (data) =>{

    try{
      for(let index of data) {
         console.log(index)
         const resp=await fetch(index.url)
         const result= await resp.json();*/
         //console.log(result)
      //}      
    //} catch(error) {
       // console.log(error)
   // }
//} 

//Hacer fetch del json y extraer datos 

fetch("makeupapi.json",{})
.then((response)=>response.json())
.then((data)=>{
    resultados = data;
    dibujar(resultados);
})


const buscar = (evt) => {
  let nombre = evt.currentTarget.value;
  let filtrado = resultados.filter(function(resultado){
    return resultado.name.toLowerCase().includes(nombre.toLowerCase()); 
});

   dibujar(filtrado);

}

function makeups(){
   let makeups_nice = resultados.filter(function(makeup){
      //regresa los pencil
        if(makeup.category  == "pencil"){
         return true;
        }else{
         return false; 

        }
   });

   dibujar(makeups_nice);

}

//Funcion que dibuja datos
const dibujar = (makeups) => {
   
   document.querySelector("#resultado").innerHTML="";

makeups.forEach((makeup) => {
/*Los makeups*/ 
//console.log(makeup);
let div = document.createElement("div");
   div.classList.add("column","is-4");
   div.innerHTML += `<div class="card" data-id="${makeup._id}">
          <div class="card-image">
            <figure class="image is-square">
                 <img src="${makeup.api_featured_image}" alt="Makeup">
            </figure>
           </div>            
           <div class="card-content">
              <p><b>${makeup.name}</b></p>
              <p><b>${makeup.currency}</b></p>
              <p><b>${makeup.price}</b></p>
              <p><b>${makeup.category}</b></p>
              </div>
           </div>`;

          //para mas datos de los makeups 
           div.setAttribute("api_featured_image", makeup.api_featured_image);
           div.dataset["name"]=makeup.name;
           div.dataset.color_name = makeup.color_name;
           div.dataset.category=makeup.category;
           div.dataset.price_sign=makeup.price;
           div.dataset.dob=makeup.dob;
           div.dataset.dod=makeup.dod;
           div.dataset.product_link=makeup.product_link;
        
        //esto es para el modal   
        div.addEventListener("click",function(evt){
            document.querySelector(".modal").classList.add("is-active");
            document.querySelector("#ficha-price_sign").innerHTML=evt.currentTarget.dataset.price_sign;
            document.querySelector("#ficha-description").innerHTML=evt.currentTarget.dataset.description;
            document.querySelector("#ficha-product_type").innerHTML=evt.currentTarget.dataset.product_type;
            document.querySelector("#dob").innerHTML=evt.currentTarget.dataset.dob;
            document.querySelector("#dod").innerHTML=evt.currentTarget.dataset.dod;
            document.querySelector("#ficha-button").setAttribute("href",evt.currentTarget.dataset.product_link);


             //modal
             //obtener el div con el id close para cerrar modal
             var close=document.getElementById("close")
             //obtener todo el modal
             var modal=document.getElementById("modal");
             //poner a la escucha de un click el div con el id close
             close.addEventListener("click",function(){
             modal.style.display="none";})

            }); 

            document.querySelector("#resultado").append(div);
          });
         }

            //los querySelector al hacer los clicks
            document.querySelector("#busqueda").addEventListener("keyup", buscar);
            document.querySelector("#lonuevo").addEventListener("click", makeups);
            document.querySelector(".delete").addEventListener("click", function(){
            document.querySelector(".modal").classList.remove("is-active");
 })
