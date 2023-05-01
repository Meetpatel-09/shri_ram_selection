export default function ManageCustomers() {
  return (
    <>
      <div className="row">
        <div className="col-md-12 stretch-card">
          <div className="card">
            <div className="card-body">
              <p className="card-title">Recent Sales</p>
              <div className="table-responsive">
                <table id="recent-purchases-listing" className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Product Name</th>
                      <th>Category</th>
                      {/* <th>Office</th> */}
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Gross amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Men Regular Fit Solid Spread Collar Formal Shirt</td>
                      <td>Formal</td>
                      <td>₹449</td>
                      <td>5</td>
                      <td>₹2,245</td>
                    </tr>
                    {/*
                        <tr>
                            <td>Alvin Fisher</td>
                            <td>Ui design completed</td>
                            <td>East Mayra</td>
                            <td>$23230</td>
                            <td>18 Jul 2018</td>
                            <td>$83127</td>
                        </tr>
                        <tr>
                            <td>Emily Cunningham</td>
                            <td>support</td>
                            <td>Makennaton</td>
                            <td>$939</td>
                            <td>16 Jul 2018</td>
                            <td>$29177</td>
                        </tr>
                        <tr>
                            <td>Minnie Farmer</td>
                            <td>support</td>
                            <td>Agustinaborough</td>
                            <td>$30</td>
                            <td>30 Apr 2018</td>
                            <td>$44617</td>
                        </tr>
                        <tr>
                            <td>Betty Hunt</td>
                            <td>Ui design not completed</td>
                            <td>Lake Sandrafort</td>
                            <td>$571</td>
                            <td>25 Jun 2018</td>
                            <td>$78952</td>
                        </tr>
                        <tr>
                            <td>Myrtie Lambert</td>
                            <td>Ui design completed</td>
                            <td>Cassinbury</td>
                            <td>$36</td>
                            <td>05 Nov 2018</td>
                            <td>$36422</td>
                        </tr>
                        <tr>
                            <td>Jacob Kennedy</td>
                            <td>New project</td>
                            <td>Cletaborough</td>
                            <td>$314</td>
                            <td>12 Jul 2018</td>
                            <td>$34167</td>
                        </tr>
                        <tr>
                            <td>Ernest Wade</td>
                            <td>Levelled up</td>
                            <td>West Fidelmouth</td>
                            <td>$484</td>
                            <td>08 Sep 2018</td>
                            <td>$50862</td>
                        </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
