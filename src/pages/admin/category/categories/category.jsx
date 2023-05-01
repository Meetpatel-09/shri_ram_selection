import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";

const Category = () => {
  // const [data] = useFetch("http://127.0.0.1:5000/category");
  const [data, setData] = useState(null);
  const [dataAdded, setDataAdded] = useState(0);

  const [inputs, setInputs] = useState({});

  console.log(data);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(inputs.category_tittle);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      category_tittle: inputs.category_tittle,
      remark: "",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:5000/category", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result)
        alert("Category Added.")
        setInputs({})
        setDataAdded(dataAdded + 1)
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetch("http://127.0.0.1:5000/category")
      .then((res) => res.json())
      .then((data) => {
        console.log("data");
        console.log(data[0]);
        setData(data);
        // if (data["status"] === 201) {
        // }
      });
  }, [dataAdded]);


  const deleteCategory = (id) => {
    // alert(id);


    console.log(id);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "category_id": id
    });
    
    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://127.0.0.1:5000/category", requestOptions)
      .then(response => response.text())
      // .then(result => console.log(result))
      .then((result) => {
        console.log(result)
        alert("Category Deleted.")
        setInputs({})
        setDataAdded(dataAdded - 1)
      })
      .catch(error => console.log('error', error));

  }


  return (
    <>
      <div class="content-wrapper">
        
      <div className="row">
        <div className="col-md-12 grid-margin">
          <div className="d-flex justify-content-between flex-wrap">
            <div className="d-flex align-items-end flex-wrap">
              <div className="me-md-3 me-xl-5">
                <h3>Manage Categories,</h3>
                {/* <p className="mb-md-0">Your analytics dashboard.</p> */}
                <div className="d-flex">
                <i className="mdi mdi-home text-muted hover-cursor"></i>
                <p className="text-muted mb-0 hover-cursor">
                  &nbsp;/&nbsp;Dashboard&nbsp;/&nbsp;
                </p>
                <p className="text-primary mb-0 hover-cursor">Category</p>
              </div>
              </div>
            </div>
            {/* <div className="d-flex justify-content-between align-items-end flex-wrap">
              <button
                type="button"
                className="btn btn-light bg-white btn-icon me-3 d-none d-md-block "
              >
                <i className="mdi mdi-download text-muted"></i>
              </button>
              <button
                type="button"
                className="btn btn-light bg-white btn-icon me-3 mt-2 mt-xl-0"
              >
                <i className="mdi mdi-clock-outline text-muted"></i>
              </button>
              <button
                type="button"
                className="btn btn-light bg-white btn-icon me-3 mt-2 mt-xl-0"
              >
                <i className="mdi mdi-plus text-muted"></i>
              </button>
              <button className="btn btn-primary mt-2 mt-xl-0">
                Generate report
              </button>
            </div> */}
          </div>
        </div>
      </div>
        <div class="row">
          <div class="col-lg-6 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Categories</h4>
                <p class="card-description">
                  View All Categories
                </p>
                <div class="table-responsive">
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Category</th>
                        <th>Edit</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data &&
                        data.map((item, index) => {
                          return (
                            <tr>
                              <td>{index + 1}</td>
                              <td>{item.category_tittle}</td>
                              <td>
                                <i role="button" className="cursor-pointer text-warning mdi mdi-border-color">
                                  {" "}
                                </i>
                              </td>
                              <td>
                                <i 
                                role="button" 
                                onClick={() => deleteCategory(item.category_id)}
                                className="text-danger mdi mdi-bitbucket">
                                  {" "}
                                </i>
                                
                              </td>
                            </tr>
                          );
                        })}

                      {/* <tr>
                        <td>Messsy</td>
                        <td>53275532</td>
                        <td>15 May 2017</td>
                        <td>
                          <label class="badge badge-warning">In progress</label>
                        </td>
                      </tr>
                      <tr>
                        <td>John</td>
                        <td>53275533</td>
                        <td>14 May 2017</td>
                        <td>
                          <label class="badge badge-info">Fixed</label>
                        </td>
                      </tr>
                      <tr>
                        <td>Peter</td>
                        <td>53275534</td>
                        <td>16 May 2017</td>
                        <td>
                          <label class="badge badge-success">Completed</label>
                        </td>
                      </tr>
                      <tr>
                        <td>Dave</td>
                        <td>53275535</td>
                        <td>20 May 2017</td>
                        <td>
                          <label class="badge badge-warning">In progress</label>
                        </td>
                      </tr> */}
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
                <p class="card-description">Add New Category</p>
                <form class="forms-sample" onSubmit={handleSubmit}>
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

                  <button type="submit" class="btn btn-primary me-2">
                    Submit
                  </button>
                  {/* <button type="reset" class="btn btn-warning">Reset</button> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
