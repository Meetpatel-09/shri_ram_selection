


const ManageOrder = () => {
    return (

         <>
     <div className="row">
       <div className="col-md-12 grid-margin">
         <div className="d-flex justify-content-between flex-wrap">
           <div className="d-flex align-items-end flex-wrap">
             <div className="me-md-3 me-xl-5">
               <h3>Manage Order,</h3>
               {/* <p className="mb-md-0">Your analytics dashboard.</p> */}
               <div className="d-flex">
                 <i className="mdi mdi-home text-muted hover-cursor"></i>
                 <p className="text-muted mb-0 hover-cursor">
                   &nbsp;/&nbsp;Dashboard&nbsp;/&nbsp;
                 </p>
                 <p className="text-primary mb-0 hover-cursor">Employee</p>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
     <div className="row">
       <div className="col-md-12 stretch-card">
         <div className="card">
           <div className="card-body">
             <p className="card-title">Recent Order</p>
             <div className="table-responsive">
               <table id="recent-purchases-listing" className="table">
                 <thead>
                   <tr>
                     {/* <th>order_id</th> */}
                     <th>product_id</th>
                     {/* <th>customer_id</th> */}
                     <th>order_date</th>
                     <th>order_quantity</th>
                     <th>Price</th>
                     <th>order_status</th>
                   </tr>
                 </thead>
                 <tbody>
                   <tr>
                     {/* <td>1</td> */}
                     <td>1</td>
                     <td>14/5/2023</td>
                     <td>2</td>
                     <td>400₹</td>
                     <td>SUCCESS</td>
                     {/* <td></td> */}
                   </tr>
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

export default ManageOrder;