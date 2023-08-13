import { combineReducers } from 'redux';


const getSitesReducer = (sites = null, action) => {
    if (action.type === 'GET_SITES') {

        return action.payload;
        
    }

    return sites;
};

export default combineReducers({
    sites: getSitesReducer,
});