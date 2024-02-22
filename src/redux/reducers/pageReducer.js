const initialState = {
    currentPage: 'home', // Set an initial page
  };
  
  const pageReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CHANGE_PAGE':
        return {
          ...state,
          currentPage: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default pageReducer;