const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        sideBarOpen: action.payload,
      };
    case "SELECT_COHORT":
      return {
        ...state,
        selectedCohort: action.payload,
      };
    case "SET_ACTIVE_COHORT":
      return {
        ...state,
        activeCohort: action.payload,
      };
    case "SET_COHORT_LIST":
      return {
        ...state,
        cohorts: action.payload,
      };
    case "SET_ALLOWED_ROUTES":
      return {
        ...state,
        allowedRoutes: action.payload,
      };
    case "CURRENT_COHORT_DATE":{
      return {
        ...state,
        cohortDate: action.payload
      }
    }
    default:
      return state;
  }
};

export default Reducer;
