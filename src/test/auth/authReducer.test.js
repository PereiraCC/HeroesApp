import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/types';

describe('AuthReducer tests', () => {
   
    test('should return default state', () => {
        
        const state = authReducer( { logged: false }, {} );
        expect( state ).toEqual( { logged: false } );

    });

    test('should authentication and set username', () => {
        
        const action = {
            type: types.login,
            payload: {
                name: 'Carlos'
            }
        };

        const state = authReducer( { logged: false }, action );

        expect( state ).toEqual({
            logged: true,
            name: 'Carlos'
        });
    });

    test('should delete username and logged in false', () => {
           
        const action = {
            type: types.logout
        };

        const state = authReducer( { logged: true, name: 'Carlos' }, action );
        expect( state ).toEqual({ logged: false })
    });
    
    

});
