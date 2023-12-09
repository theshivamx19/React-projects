function TodoItem({ todoDate, todoName }) {
     return (
        <>
            <div className="row todo-item">
                <div className="col-6">
                    {todoName}
                </div>
                <div className="col-4">
                    {todoDate}
                </div>
                <div className="col-2">
                    <input type="button" className='btn btn-danger' value="Delete" />
                </div>
            </div>
        </>
    )
}
export default TodoItem;