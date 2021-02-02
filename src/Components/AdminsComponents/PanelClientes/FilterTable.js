function FilterProduct (){
    let rows = document.getElementsByClassName("MuiTableRow-root")
    let input = document.getElementById("Input")
    let inputText = input.value
    console.log(rows)
    for (let i=1; i<rows.length; i++){
        let fila = rows[i]
        let nombres = fila.querySelector(".interes")
        let r= nombres.textContent
        if (r.toLowerCase().indexOf(inputText.toLowerCase().trim())>-1){
            fila.style.display= null;
              break;
        }else{
            fila.style.display="none";
        }
    }
             
}
export default FilterProduct;