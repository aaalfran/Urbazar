import React from 'react'
import './tabla.css'
const Tabla = () => {
  return (
      <div className="filters-container">
      <span className="text-left">Categorias</span>
      <ul>
        <li>
          <input type="checkbox" id='Ropa' unchecked></input>
          <label>Ropa</label>
        </li>
        <li>
          <input type="checkbox" id='Tecnologia'></input>
          <label>Tecnologia</label>
        </li>
        <li>
          <input type="checkbox" id='Comida'></input>
          <label>Comida</label>
        </li>
        <li>
          <input type="checkbox" id='Hogar'></input>
          <label>Hogar</label>
        </li>
        <li>
          <input type="checkbox" id='Otros' ></input>
          <label>Otros</label>
        </li>
      </ul>
      <span className="text-left">Rango de Precios</span>
      <ul>
        <li>
          <input type="checkbox"></input>
          <label>0-20</label>
        </li>
        <li>
          <input type="checkbox"></input>
          <label>20-50</label>
        </li>
        <li>
          <input type="checkbox"></input>
          <label>50-100</label>
        </li>
        <li>
          <input type="checkbox"></input>
          <label>100-500</label>
        </li>
        <li>
          <input type="checkbox"></input>
          <label>1000+</label>
        </li>
      </ul>
    </div>
  )
}

/*
window.onload=function(){

  const showClothes = document.querySelector('#Ropa');
  showClothes.addEventListener('change', function(e){
    if(showClothes.checked){

    }
  })

  const showTech = document.querySelector('#Tecnologia');
  showTech.addEventListener('change', function(e){
    if(showTech.checked){
      alert("Tecnologia");
    }
  })

  const showFood = document.querySelector('#Comida');
  showFood.addEventListener('change', function(e){
    if(showFood.checked){
      alert("Comida");
    }
  })

  const showHome = document.querySelector('#Hogar');
  showHome.addEventListener('change', function(e){
    if(showHome.checked){
      alert("Hogar");
    }
  })

  const showOthers = document.querySelector('#Otros');
  showOthers.addEventListener('change', function(e){
    if(showOthers.checked){
      alert("Otros");
    }
  })
}
*/

export default Tabla
