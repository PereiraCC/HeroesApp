import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../hook/useForm';
import { HeroCard } from '../hero/HeroCard';

import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const [ { searchText }, handleInputChange ] = useForm( {
        searchText : q
    });

    const heroesFilted = getHeroesByName(q);

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`)
    }

    return (
        <>
            <h1>Searches</h1>
            <hr />

            <div className='row'>

                <div className='col-5'>
                    <h4>Search</h4>
                    <hr />

                    <form onSubmit={ handleSearch }>
                        <input 
                            type="text"
                            placeholder='Search a hero'
                            className='form-control'
                            name='searchText'
                            autoComplete='off'    
                            onChange={ handleInputChange } 
                            value={ searchText }
                        />

                        <button 
                            className='btn btn-outline-primary mt-1 btn-block'
                            type='submit'
                        >
                            Search...
                        </button>
                    </form>
                </div>

                <div className='col-7'>
                    <h4> Results </h4>
                    <hr />

                    {
                        heroesFilted.map(hero => (
                            <HeroCard 
                                key={ hero.id }
                                { ...hero }
                            /> 
                        ))
                    }
                </div>

            </div>
        </>
    )
}
