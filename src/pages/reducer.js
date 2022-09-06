//Data lives in the term
//What the data layer look like at the beginning (the term is null). It is changed when you type in the search bar
export const initialState = {
  term: null,
};

//Set the search term
//Whenever you change the datalayer, you have to dispatch an action
//Go ahead and change/set the search term
export const actionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
};

//State is the state of data layer
//Action is whatever we are dispatching into the datalayer
const reducer = (state, action) => {
  console.log(action); //for debugging purposes

  switch (
    action.type //listen for any dispatched action
  ) {
    case actionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        term: action.term, //return whatever the state currently looks like, and change the term inside the data layer with whatever action layer you dispatched
      };

    default: //if we don't know what the dispatch is, return the original state
      return state;
  }
};

export default reducer;
