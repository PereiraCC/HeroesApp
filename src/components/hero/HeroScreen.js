import { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';

import { heroImage } from '../../helpers/heroImages';
import { getHeroesById } from '../../selectors/getHeroById';

// Static resource
// import batman from '../../assets/dc-batman.jpg'; 

export const HeroScreen = () => {

    const navigate = useNavigate();

    const { heroId } = useParams();

    const hero =  useMemo( () => getHeroesById( heroId ), [ heroId ] ); 
    
    const handleReturn = () => {
        navigate(`/${publisher.split(' ')[0].toLowerCase()}`);
        // navigate(-1);
    }

    if( !hero ) {
        return <Navigate to='/' />
    }

    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    // from public/assets
    // const imagePath = `/assets/${id}.jpg`; 

    return (
        <div className='row mt-5'>
            <div className='col-4' >
                <img  
                    src={ heroImage(`./${ id }.jpg`) } 
                    alt={ superhero }
                    className='img-thumbnail animate__animated animate__fadeInLeft'
                />
            </div>

            <div className='col-8 animate__animated animate__fadeInLeft'>
                <h3>{ superhero }</h3>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'> <b>Alter ego:</b> { alter_ego } </li>
                    <li className='list-group-item'> <b>Publisher:</b> { publisher } </li>
                    <li className='list-group-item'> <b>First Appearance:</b> { first_appearance } </li>
                </ul>

                <h5 className='mt-3'>Characters</h5>
                <p> { characters } </p>

                <button 
                    className='btn btn-outline-info'
                    onClick={ handleReturn }
                >
                    Back
                </button>

            </div>
        </div>
    )
}
