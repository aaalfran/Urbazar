
let filter = ()=>{
    let productos = document.getElementsByClassName("slide_product")
    let input = document.getElementById("myInput")
    let inputText = input.value
    for (let i=0; i< productos.length; i++){
        let producto = productos[i]      

        let nombre_producto = producto.querySelector("#nameme_product")
        let texto = nombre_producto.textContent
        
        
        if(texto.toLowerCase().indexOf(inputText.toLowerCase().trim())>-1){
            producto.style.display=null;
        
        }else{
            producto.style.display="none";
        }
      }

}

document.addEventListener('keyup', function() {
    filter()
    console.log("HOLa")
})