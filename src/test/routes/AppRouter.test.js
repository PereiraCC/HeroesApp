import { mount } from 'enzyme';
import { AuthContext } from '../../auth/authContext';
import { AppRoute } from '../../routers/AppRoute';


describe('<AppRoute /> tests', () => {
    
    
    test('should show login if not authenticated', () => {

        const contextValue = {
            user: {
                logged: false
            }
        };
        
        const wrapper = mount( 
            <AuthContext.Provider value={ contextValue } >
                <AppRoute />
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('h1').text().trim() ).toBe( 'Login' );

    });

    test('should show marvel componente if is authenticated', () => {

        const contextValue = {
            user: {
                logged: true,
                name: 'Pepe'
            }
        };
        
        const wrapper = mount( 
            <AuthContext.Provider value={ contextValue } >
                <AppRoute />
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.navbar').exists() ).toBe( true );

    });
    

});
