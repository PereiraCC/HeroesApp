import React from 'react';

import { useForm } from '../../hook/useForm';

export const SearchScreen = () => {


    const [ { searchText }, handleInputChange, reset ] = useForm( {
        searchText : ''
    });

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(searchText);
        reset();
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

            </div>
        </>
    )
}
