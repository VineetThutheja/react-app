import { DECREMENT_COUNT, INCREMENT_COUNT, FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from './actionTypes'

export function incrementCount(){
    return {
        type: INCREMENT_COUNT
    }
}
export function decrementCount(){
    return {
        type: DECREMENT_COUNT
    }
}

export function fetchDataRequest(){
    return {
        type: FETCH_DATA_REQUEST
    }
} 
export function fetchDataFailure(error){
    return {
        type: FETCH_DATA_FAILURE,
        payload: error
    }
} 
export function fetchDataSuccess(data){
    return {
        type: FETCH_DATA_SUCCESS,
        payload: data
    }
}

export function fetchData(){
    return (dispatch)=>{
        dispatch(fetchDataRequest())
        fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchDataSuccess(data));
      }).catch((error) => {
        dispatch(fetchDataFailure(error.message));
      });
    }
}