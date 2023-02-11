import { combineReducers } from "redux";
import productReducer from "./reducers/productReducer";

const reducers = combineReducers({
    products: productReducer
})

export default reducers;

