

 function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
    if (window.location.href !== "http://localhost:3000/buscador" ) {
        window.location.href = "http://localhost:3000/buscador"
    }
    
  }
    

function filter(){
    let productos = document.getElementsByClassName("MuiGrid-grid-lg-3")
    console.log(productos)
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

module.exports = {
    filter,
    handleClick
  };

