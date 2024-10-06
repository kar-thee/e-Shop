function reducerFunc(state, actionObj) {
  switch (actionObj.type) {
    case "createCategory": {
      console.log("createCategory");
      return {
        ...state,
        categoriesArray: [...state.categoriesArray, actionObj.payload],
      };
    }

    case "editCategory": {
      console.log("editCategory");
      const updatedCatArray = state.categoriesArray.map((obj) => {
        if (obj.cid === actionObj.payload.cid) {
          obj.catName = actionObj.payload.catName;
          obj.catImgUrl = actionObj.payload.catImgUrl;
          return obj;
        }
        return obj;
      });
      return {
        ...state,
        categoriesArray: updatedCatArray,
      };
    }

    case "createProduct": {
      console.log("createProduct");
      return {
        ...state,
        productsArray: [...state.productsArray, actionObj.payload],
      };
    }

    case "editProduct": {
      console.log("editProduct");
      const updatedProductArray = state.productsArray.map((obj) => {
        if (obj.pid === actionObj.payload.pid) {
          obj = { ...actionObj.payload };
          return obj;
        }
        return obj;
      });
      return {
        ...state,
        productsArray: updatedProductArray,
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

      console.log(updatedCart, "updatedCart2");
      return {
        ...state,
        inCart: [...updatedCart],
      };
    }

    case "placeOrder": {
      return {
        ...state,
        placedOrders: [...state.placedOrders, actionObj.payload],
        inCart: [],
      };
    }

    default:
      return state;
  }
}

export default reducerFunc;
