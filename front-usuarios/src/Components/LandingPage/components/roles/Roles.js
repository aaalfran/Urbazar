import './roles.css'

import comprador from '../../images/comprador.jpg'
import vendedor from '../../images/vendor.jpg'

export const Roles = () => {
  return (
    <section id="landing-page-roles">
      <div className="container">
        <h1>La plataforma perfecta para comprar y vender</h1>
        <div className="row">
          <div className="col-md-6">
            <div>
              <img src={comprador} className="img-fluid"></img>
            </div>
            <div>
              <h3>Compradores</h3>
              <p>
                Lorem Ipsum es simplemente el texto de relleno de las imprentas
                y archivos de texto. Lorem Ipsum
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <img src={vendedor} className="img-fluid"></img>
            </div>
            <div>
              <h3>Vendedores</h3>
              <p>
                Lorem Ipsum es simplemente el texto de relleno de las imprentas
                y archivos de texto. Lorem Ipsum
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
