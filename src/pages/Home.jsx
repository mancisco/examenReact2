import React, { useContext } from 'react';
import { PizzasContext } from '../context/PizzasContext';
import PizzaCard from '../components/PizzaCard';
const Home = () => {

    const backgroundImage = 'img/img.jpg';
    return (
        <div className="container-fluid" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', height: '100vh' }}>
            <div className="row justify-content-center align-items-center" style={{ height: '60vh' }}>
                <div className="col-6 text-center text-white">
                    <h1 className="display-1">MamaMía</h1>
                    <p className="lead">
                    <h3 className="display-6">Tenemos las mejores pizzas que podras encontrar</h3>
                    </p>
                </div>
            </div>
        </div>)
}

export default Home;