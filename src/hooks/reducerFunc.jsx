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
      const isAvailableInCart = state.inCart.find(
        (obj) => obj.prodName === actionObj.payload.productId
      );

      if (isAvailableInCart) {
        const newCartValue = state.inCart.map((obj) => {
          if (obj.prodName === actionObj.payload.productId) {
            obj.quantity = actionObj.payload.quantity;
          }
          return obj;
        });
        console.log("newCartValue", newCartValue);
        return {
          ...state,
          inCart: newCartValue,
        };
      } else {
        productToAdd.quantity = actionObj.payload.quantity;
        return {
          ...state,
          inCart: [...state.inCart, productToAdd],
        };
      }
    }

    case "decrementCartFromPid": {
      console.log("decrementFromCart");

      const isAvailableInCart = state.inCart.find(
        (obj) => obj.prodName === actionObj.payload.productId
      );

      if (isAvailableInCart) {
        const newCartValue = state.inCart
          .map((obj) => {
            if (obj.prodName === actionObj.payload.productId) {
              if (obj.quantity > 0) {
                obj.quantity = actionObj.payload.quantity;
              }
            }
            return obj;
          })
          .filter((obj) => obj.quantity > 0);

        console.log("newCartValue", newCartValue);

        return {
          ...state,
          inCart: newCartValue,
        };
      } else {
        return state;
      }
    }

    case "removeFromCartFromPid": {
      console.log("removeFromCartFromPid");
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
