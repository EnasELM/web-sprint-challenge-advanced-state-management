import axios from 'axios';

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
            ////////*****action creators******//////
            ////*fetch smurfs**///
export const getSmurfs =()=>{
    return (dispatch)=> {
        dispatch(fetchSmurfs());

 //call axios to returns the list of all smurfs objects  
axios.get(`http://localhost:3333/smurfs`)
    .then(resp=> {
       dispatch(fetchSuccess(resp.data));
       
    })
    .catch(err=> {
       dispatch(fetchError(err));
       console.log(`${err} err`)
    });
    }
}

export const addSmurf =(newSmurf)=>{
    return (dispatch)=> {
        dispatch(fetchSmurfs());

 //call axios to returns the list of all smurfs objects  
axios.post(`http://localhost:3333/smurfs`,newSmurf)
    .then(resp=> {
       dispatch(fetchSuccess([resp.data,...newSmurf]));
       
    })
    .catch(err=> {
       dispatch(fetchError(err));
       console.log(`${err} err`)
    });
    }
}
export const FETCH_SMURFS= 'FETCH_SMURFS'
export const fetchSmurfs = ()=> {
    return ({type:FETCH_SMURFS});
}

//saves the result of that axios call
export const FETCH_SUCCESS= 'FETCH_SUCCESS'
export const fetchSuccess = (smurfs)=> {
    return ({type:FETCH_SUCCESS,payload:smurfs});
    
}

//hows an error if is there
export const FETCH_ERROR = 'FETCH_ERROR'
export const fetchError = (errMessage)=> {
    return ({type:FETCH_ERROR,payload:errMessage});
}

