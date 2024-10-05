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
        (obj) => obj.prodName === actionObj.payload.productId
      );
      productToAdd.quantity = actionObj.payload.quantity;

      const updatedCart = new Set([...state.inCart, productToAdd]);
      // console.log(state.productsArray, "updatedCart1");
      // const updatedCart = state.productsArray.map((obj) => {
      //   if (obj.prodName === actionObj.payload.productId) {
      //     obj.quantity = actionObj.payload.quantity;
      //   }
      // });
      console.log(updatedCart, "updatedCart2");
      return {
        ...state,
        inCart: [...updatedCart],
      };
    }

    case "removeFromCartFromPid": {
      console.log("updateCartFromPid");
      const updatedCart = state.inCart.filter(
        (obj) => obj.prodName !== actionObj.payload.productId
      );

      // console.log(state.productsArray, "updatedCart1");
      // const updatedCart = state.productsArray.map((obj) => {
      //   if (obj.prodName === actionObj.payload.productId) {
      //     obj.quantity = actionObj.payload.quantity;
      //   }
      // });
      console.log(updatedCart, "updatedCart2");
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
