import { mount } from 'enzyme';
import { AuthContext } from '../../auth/authContext';
import { AppRoute } from '../../routers/AppRoute';


describe('<AppRoute /> tests', () => {
    
    const contextValue = {
        user: {
            logged: false
        }
    };

    test('should show login if not authenticated', () => {
        
        const wrapper = mount( 
            <AuthContext.Provider value={ contextValue } >
                <AppRoute />
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('h1').text().trim() ).toBe( 'Login' );

    });
    

});
