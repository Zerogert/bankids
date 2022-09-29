import { APISettings } from '../config.js';

export default {    
    get(){
        return fetch( APISettings.baseURL + '/api/Auths', {
            method: 'GET',
            headers: APISettings.headers
        } )
        .then( function( response ){
            if( response.status != 200 ){
                throw response.status;
            }else{
                return response.json();
            }
        });
    },
}