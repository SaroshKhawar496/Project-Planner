export const createProject = project => {
  //returning a fxn when using thunk to halt dispatch and do async calls to DB and then call dispatch
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to DB then resume db
    dispatch({
      type: "CREATE_PROJECT",
      project: project
    });
  };
};
