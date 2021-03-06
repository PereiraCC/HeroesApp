import { Link } from 'react-router-dom';

import { heroImage } from '../../helpers/heroImages';

export const HeroCard = ( { 
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters ,
} ) => {

    // const imagePath = `/assets/${id}.jpg`;

    return (

        <div className='col animate__animated animate__fadeIn'>
            <div className='card'>
                
                <div className='row no-gutters'>
                    <div className='col-md-4'>
                        <img src={ heroImage(`./${id}.jpg`) } alt={superhero} className='card-img'/>
                    </div>
                    <div className='col-8'>

                        <div className='card-body'>

                            <h5 className='card-title'> { superhero } </h5>
                            <h5 className='card-text'> { alter_ego } </h5>

                            {
                                ( alter_ego !== characters ) 
                                    && <p className='text-muted'>{ characters }</p>
                            }

                            <p className='card-text'>
                                <small className='tex-muted'>{ first_appearance }</small>
                            </p>

                            <Link to={`/hero/${id}`}>
                                More...
                            </Link>

                        </div>

                    </div>

                </div>

            </div>
        </div>

    )
}
