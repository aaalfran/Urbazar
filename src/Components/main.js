
function filter(){
    let productos = document.getElementsByClassName("target")
    let input = document.getElementById("myInput")
    let inputText = input.value
    for (let i=0; i< productos.length; i++){
        let producto = productos[i]      

        let nombre_producto = producto.querySelector("#name_product")
        let texto = nombre_producto.textContent
        
        
        if(texto.toLowerCase().indexOf(inputText.toLowerCase().trim())>-1){
            producto.style.display=null;
        
        }else{
            producto.style.display="none";
        }
      }

}

export default filter;

