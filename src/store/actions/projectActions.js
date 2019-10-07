export const createProject = project => {
  //returning a fxn when using thunk to halt dispatch and do async calls to DB and then call dispatch
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to DB then resume db
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "Sarosh",
        authorLastName: "Khawar",
        authorId: 123,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({
          type: "CREATE_PROJECT",
          project: project
        });
      })
      .catch(err => {
        dispatch({
          type: "CREATE_PROJECT_ERROR",
          err
        });
      });
  };
};
