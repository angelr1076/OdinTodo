const projectArray = [];

// Create a new project
const createProject = (name, todoArray) => {
  const projectProps = { name, todoArray };
  return projectProps;
};

const listProjects = object => {
  projectArray.push(object);
  return projectArray;
};

const addProjectToList = todo => {
  const addToList = listProjects(todo);
  console.log(projectArray);
  return addToList;
};

export { createProject, addProjectToList };
