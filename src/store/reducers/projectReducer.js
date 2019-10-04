const initState = {
  projects: [
    { id: "1", title: "Clean Bed", content: "blah blah blah" },
    { id: "2", title: "Get Grocery", content: "blah blah blah" },
    { id: "3", title: "Buy Clothes", content: "blah blah blah" }
  ]
};

const projectReducer = (state = initState, action) => {
  return state;
};

export default projectReducer;
