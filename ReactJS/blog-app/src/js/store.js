import { createStore } from 'redux';
import rootReducer from './reducers/postsReducer';

const store = createStore(rootReducer);
 
export default store;