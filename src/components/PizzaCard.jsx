import React, { useContext } from 'react';
import { PizzasContext } from '../context/PizzasContext';
import { useNavigate } from 'react-router-dom';


const PizzaCard = ({ pizza }) => {
    const { addToCart } = useContext(PizzasContext);
    const navigate=useNavigate();
    const handleNavigate=()=>{
        navigate(`/pizza/${pizza.id}`);
    }
    const cardStyle = {
        width: '100%',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
        borderRadius: '5px',
    }
    const imgStyle = {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
    }
    return(
        <div style={cardStyle} className='card'>
            <img style={imgStyle} src={pizza.img} alt={pizza.name} />
            <div className='card-body'>
                <h3 className='display-3'>{pizza.name}</h3>
                <p>{pizza.ingredients.map((ingredient, index) => (<React.Fragment key={index}>{ingredient} <br /></React.Fragment> ))}</p>
                <h5>Precio:{pizza.price}</h5>
                <div className='d-flex justify-content-end'>
                    <button onClick={()=>addToCart(pizza)} className='btn btn-danger'>Añadir al carro</button>
                    
                </div>
            </div>
        </div>
    )
}

export default PizzaCard;