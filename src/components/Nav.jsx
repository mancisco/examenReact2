import {Link} from 'react-router-dom';
import {useContext} from 'react';
import {PizzasContext} from '../context/PizzasContext';
const Nav = () => {
  const {total}=useContext(PizzasContext);
    return(
        <nav class="navbar navbar-expand-lg  bg-secondary">
        <div class="container-fluid">
          <Link className='navbar-brand text-light'  to="/"><img src="./img/favicon-32x32.png"/></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
              <Link className='nav-link' to="/products">Productos</Link>
              </li>
              
            </ul>
            <Link className='btn btn-danger' to="/cart">Carro de compra= {total}</Link>
          </div>
        </div>
      </nav>
    )
}
export default Nav;