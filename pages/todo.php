
    <section class="Add-task-section">
        <div class="conatiner mt-3">
            <div class="row justify-content-center">
                <div class="col-7 bg-dark py-5 rounded">
                    <h1 class="mt-3 text-center text-white">My Todo App</h1>
                    <form class=""> 
                        <div class="mb-3 text-center">
                          <label for="task" class="form-label text-white my-4">Add Task</label>
                          <input type="task" class="form-control" placeholder="Add new task" id="task">
                        </div>
                        <div class="text-center" id="btn-holder">
                            <button type="button" class="btn btn-light" id="add-task">+</button>
                        </div>
                      </form>
                </div>
            </div>
        </div>
    </section>

    <section class="show-task">
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-md-7">
                    <h1 class="mb-5 text-center">My Tasks </h1>
                    <table class="table text-center table-bordered border-white text-white">
                        <thead>
                          <tr>
                            <th scope="col">Task</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody id="tbody">

                        </tbody>
                      </table>
                </div>
            </div>
        </div>
    </section>