import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import api from '../../middleware/api';
import RootReducer from '../reducer';


export default function configureStore() {
    const stores = createStore(RootReducer, applyMiddleware(ReduxThunk, api));
    return stores;
}
