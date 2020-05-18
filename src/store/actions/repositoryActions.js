import * as actionTypes from './actionTypes';
import axios from '../../axios/axios';
import * as errorHandlerActions from './errorHandlerActions';

// const action = {
//     type: 'LOGIN'
//   }
//   // Define an action creator here:
//   function actionCreator(){
//     return action
//   }

const getDataSuccess = (data) => {
    return {
        type: actionTypes.GET_DATA_SUCCESS,
        data: data
    }
}
 
export const getData = (url, props) => {
    return (dispatch) => {
        axios.get(url)
        .then(response => {
            console.log(123123123+ "response");
            dispatch(getDataSuccess(response.data));
        })
        .catch(error => {
            console.log(123123123+ "error");
            dispatch(errorHandlerActions.handleHTTPError(error, props));
        })
    }
}


const postDataSuccess = (response) => {
    return {
        type: actionTypes.POST_DATA_SUCCESS,
        response: response
    }
}
 
export const postData = (url, obj, props) => {
    return (dispatch) => {
        axios.post(url, obj)
        .then(response => {
            dispatch(postDataSuccess(response));
        })
        .catch(error => {
            dispatch(errorHandlerActions.handleHTTPError(error, props));
        })
    }
}
 
const putDataSuccess = (response) => {
    return {
        type: actionTypes.PUT_DATA_SUCCESS,
        response: response
    }
}
 
export const putData = (url, obj, props) => {
    return (dispatch) => {
        axios.put(url, obj)
        .then(response => {
            dispatch(putDataSuccess(response));
        })
        .catch(error => {
            dispatch(errorHandlerActions.handleHTTPError(error, props));
        })
    }
}
 
const deleteDataSuccess = (response) => {
    return {
        type: actionTypes.DELETE_DATA_SUCCESS,
        response: response
    }
}
 
export const deleteData = (url, props) => {
    return (dispatch) => {
        axios.delete(url)
        .then(response => {
            dispatch(deleteDataSuccess(response));
        })
        .catch(error => {
            dispatch(errorHandlerActions.handleHTTPError(error, props));
        })
    }
}