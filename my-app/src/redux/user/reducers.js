const initialState = {};

export default (state, action) => {
  if (typeof state === "undefined") return initialState;

  const { type = "" } = action;

  // call proper reducer for type
  switch (type) {
    default:
      return state;
  }
};

const actionAReducer = (state, action) => {

};
