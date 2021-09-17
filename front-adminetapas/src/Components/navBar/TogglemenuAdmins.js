import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartArea, faUsers, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import '../../css/toggleMenu.css';

const ToggleMenuAdmin = () => {
  const active = parseInt(localStorage.getItem('activeIndex'), 10)

  return (

    <>

      <div className="adminLeftMenu">

        <div className='optionsNavigation'>
          <a href='/report' 
              onClick={()=>localStorage.setItem("activeIndex", 0)} 
              className={`${active === 0 ? 'active' : ''}`}
          >
            <FontAwesomeIcon icon={faChartArea} className="icon-toggle" />
            Reportes
          </a>
          <a href='/familias' 
              onClick={()=>localStorage.setItem("activeIndex", 1)} 
              className={`${active === 1 ? 'active' : ''}`}
          > 
              <FontAwesomeIcon icon={faUsers} className="icon-toggle" /> 
              Familias
          </a>
         
          <a href='/admin/dashboard/productos' 
              onClick={()=> localStorage.setItem("activeIndex", 2)} 
              className={`${active === 2? 'active': ''}`}
          > 
                <FontAwesomeIcon icon={faShoppingBag} className="icon-toggle" /> 
                Productos
          </a>

        </div>

      </div>

    </>

  )
}

export default ToggleMenuAdmin
