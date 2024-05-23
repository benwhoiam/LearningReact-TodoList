const updateLocalStorage = (localData) => {
  localStorage.setItem("Ali_TODOLIST_initialData", JSON.stringify(localData));
};

export default function CrudReducer(data, action) {
  let localData;

  switch (action.type) {
    case "add": {
      localData = [
        {
          id: action.id,
          name: action.input,
          done: false,
        },
        ...data,
      ];
      updateLocalStorage(localData);
      return localData;
    }

    case "check": {
      localData = data.map((task) =>
        task.id === action.id ? { ...task, done: action.done } : task
      );
      updateLocalStorage(localData);
      return localData;
    }

    case "delete": {
      localData = data.filter((task) => task.id !== action.id);
      updateLocalStorage(localData);
      return localData;
    }

    default: {
      throw new Error("Unknown action: " + action.type);
    }
  }
}
