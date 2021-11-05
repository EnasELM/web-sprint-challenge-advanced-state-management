import { FETCH_SMURFS, FETCH_SUCCESS, FETCH_ERROR } from './../actions';

//initial state value has  smurfs's array a boolean indicating if  is loading
//and a string indicating a possible error message

export const initialState = {
    smurf  :[],
      isLoading: false,
  error: ''
}

const reducer = (state = initialState, action)=>{
    switch (action.type) {
        case(FETCH_SMURFS)://reducer case to accommodate the start of a smurf fetch
          return({
            ...state,
            smurf : [],
            isLoading:true,
            error:''
          });
        case(FETCH_SUCCESS)://reducer case to accommodate the successful smurf api fetch
          return({
            ...state,
            smurf : [action.payload],
            isLoading: false,
            error: ''
          });
        case(FETCH_ERROR)://reducer cases to accommodate an error
          return({
            ...state,
            smurf :[],
            isLoading: false,
            error: action.payload
          })
        default:
          return state;
      }
}

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.