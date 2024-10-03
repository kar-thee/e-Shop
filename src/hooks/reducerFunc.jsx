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
    case "updateCartInfo": {
      console.log("updateCartInfo");
      return {
        ...state,
        inCart: [...new Set([...state.inCart, actionObj.payload])],
      };
    }
    case "updateCartFromPid": {
      console.log("updateCartFromPid");
      const productToAdd = state.productsArray.find(
        (obj) => obj.prodName === actionObj.payload
      );
      const updatedCart = new Set([...state.inCart, productToAdd]);
      return {
        ...state,
        inCart: [...updatedCart],
      };
    }

    case "placeOrder": {
      console.log("placeOrder");
      return {
        ...state,
        placedOrders: [...state.inCart],
        inCart: [],
      };
    }

    default:
      return state;
  }
}

export default reducerFunc;
