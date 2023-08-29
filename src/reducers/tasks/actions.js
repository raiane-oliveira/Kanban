export function addNewTask(columnName, newTask) {
  return {
    type: "ADD_NEW_TASK",
    payload: {
      columnName,
      newTask
    }
  }
}

export function deleteTask(id) {
  return {
    type: "DELETE_TASK",
    payload: {
      id
    }
  }
}

export function dragTaskToEnd(result) {
  return {
    type: "DRAG_TASK_TO_END",
    payload: {
      destination: result.destination,
      source: result.source
    },
  }
}