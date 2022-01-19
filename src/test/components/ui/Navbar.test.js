import { mount } from 'enzyme';

import { Navbar } from '../../../components/ui/Navbar';
import { AuthContext } from '../../../auth/authContext';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { types } from '../../../types/types';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));

describe('<Navbar /> tests', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Carlos'
        }
    };
    
    const wrapper = mount( 
        <AuthContext.Provider value={ contextValue } >
            <MemoryRouter initialEntries={ ['/'] }>
                <Routes>
                    <Route path="/" element={ <Navbar /> }/>
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>
    );
   
    test('should show correctly ', () => {
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text-info').text().trim() ).toBe('Carlos');

    });

    test('should call logout, navigate and dispatch with arguments', () => {
        
        wrapper.find( 'button' ).simulate('click');

        expect( contextValue.dispatch ).toHaveBeenCalledWith( {'type': types.logout } );
        expect( mockNavigate ).toHaveBeenCalledWith( '/login', { replace: true } );

    });
    
});
