function AddTodo() {
    return (
            <div className="container text-center">
                <div className="row">
                    <div className="col-6">
                        <input type="text" name="Enter Todo" id="" />
                    </div>
                    <div className="col-4">
                        <input type="date" name="" id="" />
                    </div>
                    <div className="col-2">
                        <input type="button" className='btn btn-success' value="Add" />
                    </div>
                </div>
            </div>
    )
}
export default AddTodo;