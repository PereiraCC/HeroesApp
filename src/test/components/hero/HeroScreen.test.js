import { mount } from 'enzyme';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { HeroScreen } from '../../../components/hero/HeroScreen';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));

describe('<HeroScreen /> tests', () => {
  
    test('should not show HeroScreen if hero is not found in URL', () => {
      
        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/hero'] }>
                <Routes>
                    <Route path='/hero' element={ <HeroScreen /> } />
                    <Route path='/'     element={ <h1>No hero Page</h1> } />
                </Routes>
            </MemoryRouter>
        );

        expect( wrapper.find('h1').text().trim() ).toBe( 'No hero Page' );
    });
    
    test('should show a hero if parameter exists and find', () => {
      
        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/hero/marvel-spider'] }>
                <Routes>
                    <Route path='/hero/:heroId' element={ <HeroScreen /> } />
                    <Route path='/'     element={ <h1>No hero Page</h1> } />
                </Routes>
            </MemoryRouter>
        );

        expect( wrapper.find('.row').exists() ).toBe(true);
    });

    test('should back the last screen', () => {
      
        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/hero/marvel-spider'] }>
                <Routes>
                    <Route path='/hero/:heroId' element={ <HeroScreen /> } />
                </Routes>
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();

        expect( mockNavigate ).toHaveBeenCalledWith( '/marvel' );

    });

    test('should show No Hero Page if not have a hero', () => {
      
        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/hero/marvel-spider123456'] }>
                <Routes>
                    <Route path='/hero/:heroId' element={ <HeroScreen /> } />
                    <Route path='/'     element={ <h1>No hero Page</h1> } />
                </Routes>
            </MemoryRouter>
        );

        expect( wrapper.text() ).toBe( 'No hero Page' )
    });
    


});
