import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import { AuthContext } from '../../auth/authContext';
import { DashboardRoutes } from '../../routers/DashboardRoutes';


describe('<DashboardRoutes /> tests', () => {
    
    const contextValue = {
        user: {
            logged: true,
            name: 'Pepe'
        }
    };

    test('should show correctly - Marvel component', () => {
        
        const wrapper = mount( 
            <AuthContext.Provider value={ contextValue } >
                <MemoryRouter initialEntries={ ['/marvel'] }>
                    <DashboardRoutes /> 
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text-info').text().trim() ).toBe( 'Pepe' );
        expect( wrapper.find('h1').text().trim() ).toBe( 'MarvelScreen' );

    });

    test('should show correctly - DC component', () => {
        
        const wrapper = mount( 
            <AuthContext.Provider value={ contextValue } >
                <MemoryRouter initialEntries={ ['/dc'] }>
                    <DashboardRoutes /> 
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('h1').text().trim() ).toBe( 'DCScreen' );

    });
});
