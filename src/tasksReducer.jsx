export function tasksReducer(tasks, action) {
  const { columnName, id, createdId, values, result } = action;
  switch (action.type) {
    case "added": {
      return {
        ...tasks,
        [columnName]: [
          ...tasks[columnName],
          {
            id: `${values.title}${createdId}`,
            title: values.title,
            paragraph: values.description,
            tags: values.tags,
            hexColor: values.color,
          },
        ],
      };
    }
    case "deleted": {
      const filteredTasks = tasks[columnName].filter(
        (column) => column.id !== id
      );
      return {
        ...tasks,
        [columnName]: [...filteredTasks],
      };
    }
    case "dragEnd": {
      const { destination, source } = result;

      if (!destination)
        return {
          ...tasks,
        };

      if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
      ) {
        return {
          ...tasks,
        };
      }

      const sourceNameList = source.droppableId;
      const destinationNameList = destination.droppableId;

      const sourceList = [...tasks[sourceNameList]];
      const destinationList = [...tasks[destinationNameList]];

      if (sourceNameList === destinationNameList) {
        const [removedItem] = sourceList.splice(source.index, 1);
        sourceList.splice(destination.index, 0, removedItem);

        return {
          ...tasks,
          [sourceNameList]: sourceList,
        };
      } else {
        const [removedItem] = sourceList.splice(source.index, 1);
        destinationList.splice(destination.index, 0, removedItem);

        return {
          ...tasks,
          [sourceNameList]: sourceList,
          [destinationNameList]: destinationList,
        };
      }
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
