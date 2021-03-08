

export default function LoadProductos(compras){
    
    let div = document.getElementById("container_productos");
    let p  = document.getElementById("info_vacio");

    let nuevo_div = document.getElementById("ct");
    if(p!=undefined){
        div.removeChild(p);
    }
    if(nuevo_div!=undefined){      
        div.removeChild(nuevo_div)
    }
    nuevo_div = document.createElement("div");
    nuevo_div.setAttribute("id", "ct");
    
    for(let i=0; i<compras.length; i++){
        let d1 = document.createElement("div")
        d1.setAttribute("class", "card-producti col-md-6")

        let d2 = document.createElement("div")
        d2.setAttribute("class", "card-image col-6")
        let im = document.createElement("img")
        im.setAttribute("src", compras[i].imagen)
        d2.appendChild(im)

        
        let d3 = document.createElement("div")
        d3.setAttribute("class", "card-content col-6")

        let d4 = document.createElement("div")
        d4.setAttribute("id", "card-title")
        let h5 = document.createElement("h5")
        h5.textContent = compras[i].producto
        d4.appendChild(h5)

        let d5 = document.createElement("div")
        d5.setAttribute("id", "card-footer")
        let ul = document.createElement("ul")
        let li1 = document.createElement("li")
        li1.textContent = "Vendedor: " + compras[i].vendedor 

        let li2 = document.createElement("li")
        li2.textContent = "Precio: "+ compras[i].precio

        let li3 = document.createElement("li")
        li3.textContent = "Cantidad: "+ compras[i].cantidad

        let li4 = document.createElement("li")
        li4.textContent = "Estado: "+ compras[i].estado 

        let li5 = document.createElement("li")
        li5.textContent = "Fecha: "+ compras[i].Fecha
        ul.appendChild(li1)
        ul.appendChild(li2)
        ul.appendChild(li3)
        ul.appendChild(li4)
        ul.appendChild(li5)

        d5.appendChild(ul)

        d3.appendChild(d4)
        d3.appendChild(d5)

        d1.appendChild(d2)
        d1.appendChild(d3)

        nuevo_div.appendChild(d1)
    }
    div.appendChild(nuevo_div)

    
      
}
