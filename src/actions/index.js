import * as types from './types';

export function selectLibrary(id) {
    return { 
        type: types.SELECT_LIBRARY_ACTION, 
        payload: id 
    };
}
