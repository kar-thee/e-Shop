function reducerFunc(state, actionObj) {
  switch (actionObj.type) {
    case "createCategory": {
      console.log("createCategory");
      return {
        ...state,
        categoriesArray: [...state.categoriesArray, actionObj.payload],
      };
    }
    case "createProduct": {
      console.log("createProduct");
      return {
        ...state,
        productsArray: [...state.productsArray, actionObj.payload],
      };
    }

    default:
      return state;
  }
}

export default reducerFunc;
