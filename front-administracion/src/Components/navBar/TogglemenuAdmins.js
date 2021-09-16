import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartArea, faTools, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
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
          <a href='/etapas' 
              onClick={()=>localStorage.setItem("activeIndex", 1)} 
              className={`${active === 1 ? 'active' : ''}`}
          > 
              <FontAwesomeIcon icon={faTools} className="icon-toggle" /> 
              Administrar etapas
          </a>
         
          <a href='/admin/dashboard/map' 
              onClick={()=> localStorage.setItem("activeIndex", 3)} 
              className={`${active === 3? 'active': ''}`}
          > 
                <FontAwesomeIcon icon={faMapMarkedAlt} className="icon-toggle" /> 
              Ubicaciones
          </a>

        </div>

      </div>

    </>

  )
}

export default ToggleMenuAdmin
