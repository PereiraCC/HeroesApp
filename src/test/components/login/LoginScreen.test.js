import { mount } from 'enzyme';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { types } from '../../../types/types';
import { AuthContext } from '../../../auth/authContext';
import { LoginScreen } from '../../../components/login/LoginScreen';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));

describe('<LoginScreen /> tests', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    };
    
    const wrapper = mount( 
        <AuthContext.Provider value={ contextValue } >
            <MemoryRouter initialEntries={ ['/login'] }>
                <Routes>
                    <Route path="/login" element={ <LoginScreen /> }/>
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>
    );
  
    test('should show correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should do the dispatch and navegate', () => {
      
        const handleCLick = wrapper.find( 'button' ).prop('onClick');
        handleCLick();

        expect( contextValue.dispatch ).toHaveBeenCalledWith({
            type: types.login,
            payload: { name: 'Carlos' }
        });

        expect( mockNavigate ).toHaveBeenCalledWith( '/marvel', { replace: true } );

        localStorage.setItem( 'lastPath', '/dc' );

        handleCLick();

        expect( mockNavigate ).toHaveBeenCalledWith( '/dc', { replace: true } );
    });
});
