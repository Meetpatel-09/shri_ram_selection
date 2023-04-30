

const Category = () => {

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

     return (
          <>
           <div class="content-wrapper">

<div class="row">
<div class="col-lg-6 grid-margin stretch-card">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Basic Table</h4>
          <p class="card-description">
            Add class <code>.table</code>
          </p>
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>Profile</th>
                  <th>VatNo.</th>
                  <th>Created</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Jacob</td>
                  <td>53275531</td>
                  <td>12 May 2017</td>
                  <td><label class="badge badge-danger">Pending</label></td>
                </tr>
                <tr>
                  <td>Messsy</td>
                  <td>53275532</td>
                  <td>15 May 2017</td>
                  <td><label class="badge badge-warning">In progress</label></td>
                </tr>
                <tr>
                  <td>John</td>
                  <td>53275533</td>
                  <td>14 May 2017</td>
                  <td><label class="badge badge-info">Fixed</label></td>
                </tr>
                <tr>
                  <td>Peter</td>
                  <td>53275534</td>
                  <td>16 May 2017</td>
                  <td><label class="badge badge-success">Completed</label></td>
                </tr>
                <tr>
                  <td>Dave</td>
                  <td>53275535</td>
                  <td>20 May 2017</td>
                  <td><label class="badge badge-warning">In progress</label></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 grid-margin stretch-card">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Category</h4>
          <p class="card-description">
            Add New Category
          </p>
          <form class="forms-sample">
            <div class="form-group">
              <label for="exampleInputUsername1">Category Title</label>
              <input 
              type="text" 
              class="form-control" 
              id="exampleInputUsername1" 
              placeholder="Username"
              name="category_tittle"
              value={inputs.category_tittle || ""}
              onChange={handleChange}
               />
            </div>
          
           
            <button 
            type="submit" 
            class="btn btn-primary me-2"
            >Submit</button>
            <button class="btn btn-light">Cancel</button>
          </form>
        </div>
      </div>
    </div>
  </div>

  </div>
          </>
     );
}

export default Category;