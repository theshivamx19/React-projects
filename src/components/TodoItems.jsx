import TodoItem from "./TodoItem";
function TodoItems({ todoItemList }) {
    return (
        <>
            {todoItemList.map((todo) =>
                <TodoItem todoDate={todo.dueDate} todoName={todo.taskName} key={Math.random()} />
            )}
        </>
    )
}
export default TodoItems;