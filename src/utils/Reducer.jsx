const Reducer = (state, action) => {
  switch (action.type) {
    case "LOADDATA":
      return { ...state, users: action.payload };

    case "SHOW_USER":
      const show = state.show < 25 ? state.show + 4 : 30;
      return { ...state, show };

    case "SORT":
      const hiddenUsers = state.users.slice(state.show - 1);
      const sorted = state.users.slice(0, state.show).sort((a, b) => {
        if (a[action.payload] < b[action.payload]) {
          return -1;
        }
        if (a[action.payload] > b[action.payload]) {
          return 1;
        }
        return 0;
      });

      const finalData = sorted.concat(hiddenUsers);

      return { ...state, users: finalData };

    case "SEARCH":
      return { ...state, search: action.payload.trim() };

    case "ADD_USER":
      const newUsers =  [action.payload].concat(state.users)
      return { ...state, users: newUsers };

    default:
      return state;
  }
};

export default Reducer;
