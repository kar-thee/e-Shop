function reducerFunc(state, actionObj) {
  switch (actionObj.type) {
    case "test":
      console.log("dispatch test works");
      return;
    default:
      return state;
  }
}

export default reducerFunc;
