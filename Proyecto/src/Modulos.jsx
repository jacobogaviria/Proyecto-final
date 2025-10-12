export function Modulos() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <div>
        <div className="Modulos">
          <div className='modulo'>
            <h2>Modulo 1</h2>
            <p>Descripción del Módulo 1</p>
            <a className="modulo-link" href="/modulo1">Ir al Módulo 1</a>
          </div>
          <div className='modulo'>
            <h2>Modulo 2</h2>
            <p>Descripción del Módulo 2</p>
            <a className="modulo-link" href="/modulo2">Ir al Módulo 2</a>
          </div>
          <div className='modulo'>
            <h2>Modulo 3</h2>
            <p>Descripción del Módulo 3</p>
            <a className="modulo-link" href="/modulo3">Ir al Módulo 3</a>
          </div>
          <div className='modulo'>
            <h2>Modulo 4</h2>
            <p>Descripción del Módulo 4</p>
            <a className="modulo-link" href="/modulo4">Ir al Módulo 4</a>
          </div>
          <div className='modulo'>
            <h2>Modulo 5</h2>
            <p>Descripción del Módulo 5</p>
            <a className="modulo-link" href="/modulo5">Ir al Módulo 5</a>
          </div>
          <div className='modulo'>
            <h2>Modulo 6</h2>
            <p>Descripción del Módulo 6</p>
            <a className="modulo-link" href="/modulo6">Ir al Módulo 6</a>
          </div>
        </div>
      </div>
    </>
  )
}
