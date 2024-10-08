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

      return {
        ...state,
        inCart: [...updatedCart],
      };
    }

    case "placeOrder": {
      console.log(state, "state@@@", actionObj.payload.itemsArray);
      const updatedProductArray = state.productsArray.map((productObj) => {
        const inCartProduct = actionObj.payload.itemsArray.find(
          (cartObj) => cartObj.pid === productObj.pid && productObj.isActive
        );
        if (inCartProduct) {
          return {
            ...productObj,
            totalSold: productObj.totalSold + inCartProduct.quantity,
          };
        }
        return productObj;
      });
      return {
        ...state,
        placedOrders: [...state.placedOrders, actionObj.payload],
        inCart: [],
        productsArray: updatedProductArray,
      };
    }

    case "deleteProduct": {
      console.log("delProduct");
      const updatedProductArray = state.productsArray.filter((obj) => {
        if (obj.pid !== actionObj.payload.pid) {
          return obj;
        }
      });
      return {
        ...state,
        productsArray: updatedProductArray,
      };
    }

    case "deleteCategory": {
      console.log("delCategory");
      const updatedCatArray = state.categoriesArray.filter((obj) => {
        if (obj.cid !== actionObj.payload.cid) {
          return obj;
        }
      });
      return {
        ...state,
        categoriesArray: updatedCatArray,
      };
    }

    case "openSnackBar": {
      return {
        ...state,
        snackBarState: true,
      };
    }

    case "closeSnackBar": {
      return {
        ...state,
        snackBarState: false,
      };
    }

    case "updateCategoryStatus": {
      const updatedCatArray = state.categoriesArray.map((obj) => {
        if (obj.cid === actionObj.payload.cid) {
          return {
            ...obj,
            isActive: actionObj.payload.toggleValue,
          };
        }
        return obj;
      });

      return {
        ...state,
        categoriesArray: updatedCatArray,
      };
    }

    case "updateProductStatus": {
      const updatedProductArray = state.productsArray.map((obj) => {
        if (obj.pid === actionObj.payload.pid) {
          return {
            ...obj,
            isActive: actionObj.payload.toggleValue,
          };
        }
        return obj;
      });
      const updatedCart = state.inCart.map((cartObj) => {
        if (cartObj.pid === actionObj.payload.pid) {
          return {
            ...cartObj,
            isActive: actionObj.payload.toggleValue,
          };
        }
        return cartObj;
      });

      return {
        ...state,
        productsArray: updatedProductArray,
        inCart: updatedCart,
      };
    }

    default:
      return state;
  }
}

export default reducerFunc;
