export const Task = (props) => {
    return (
        <div className="task">
            <h1>{props.taskName}</h1>
            <button onClick={() => props.deleteTask(props.id)}>Delete Task</button>
            <button onClick={() => 
                props.updateTask(props.id)}
                style={{color: (props.completed) ? "red" : "green"}}>
                    Complete Task
            </button>
        </div>
    );
};