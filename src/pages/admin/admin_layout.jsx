import { Outlet, Link } from "react-router-dom";

const AdminLayout = () => {
     return (
    //       <>
    //        <div class="container-scroller">
    //        <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
    //   <div class="navbar-brand-wrapper d-flex justify-content-center">
    //     <div class="navbar-brand-inner-wrapper d-flex justify-content-between align-items-center w-100">  
    //       <a class="navbar-brand brand-logo" href="index.html"><img src="images/logo.svg" alt="logo"/></a>
    //       <a class="navbar-brand brand-logo-mini" href="index.html"><img src="images/logo-mini.svg" alt="logo"/></a>
    //       <button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
    //         <span class="mdi mdi-sort-variant"></span>
    //       </button>
    //     </div>  
    //   </div>
    //   <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end">
    //     <ul class="navbar-nav mr-lg-4 w-100">
    //       <li class="nav-item nav-search d-none d-lg-block w-100">
    //         <div class="input-group">
    //           <div class="input-group-prepend">
    //             <span class="input-group-text" id="search">
    //               <i class="mdi mdi-magnify"></i>
    //             </span>
    //           </div>
    //           <input type="text" class="form-control" placeholder="Search now" aria-label="search" aria-describedby="search">
    //         </div>
    //       </li>
    //     </ul>
    //     <ul class="navbar-nav navbar-nav-right">
    //       <li class="nav-item dropdown me-1">
    //         <a class="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center" id="messageDropdown" href="#" data-bs-toggle="dropdown">
    //           <i class="mdi mdi-message-text mx-0"></i>
    //           <span class="count"></span>
    //         </a>
    //         <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="messageDropdown">
    //           <p class="mb-0 font-weight-normal float-left dropdown-header">Messages</p>
    //           <a class="dropdown-item">
    //             <div class="item-thumbnail">
    //                 <img src="images/faces/face4.jpg" alt="image" class="profile-pic" >
    //             </div>
    //             <div class="item-content flex-grow">
    //               <h6 class="ellipsis font-weight-normal">David Grey
    //               </h6>
    //               <p class="font-weight-light small-text text-muted mb-0">
    //                 The meeting is cancelled
    //               </p>
    //             </div>
    //           </a>
    //           <a class="dropdown-item">
    //             <div class="item-thumbnail">
    //                 <img src="images/faces/face2.jpg" alt="image" class="profile-pic">
    //             </div>
    //             <div class="item-content flex-grow">
    //               <h6 class="ellipsis font-weight-normal">Tim Cook
    //               </h6>
    //               <p class="font-weight-light small-text text-muted mb-0">
    //                 New product launch
    //               </p>
    //             </div>
    //           </a>
    //           <a class="dropdown-item">
    //             <div class="item-thumbnail">
    //                 <img src="images/faces/face3.jpg" alt="image" class="profile-pic">
    //             </div>
    //             <div class="item-content flex-grow">
    //               <h6 class="ellipsis font-weight-normal"> Johnson
    //               </h6>
    //               <p class="font-weight-light small-text text-muted mb-0">
    //                 Upcoming board meeting
    //               </p>
    //             </div>
    //           </a>
    //         </div>
    //       </li>
    //       <li class="nav-item dropdown me-4">
    //         <a class="nav-link count-indicator dropdown-toggle d-flex align-items-center justify-content-center notification-dropdown" id="notificationDropdown" href="#" data-bs-toggle="dropdown">
    //           <i class="mdi mdi-bell mx-0"></i>
    //           <span class="count"></span>
    //         </a>
    //         <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="notificationDropdown">
    //           <p class="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
    //           <a class="dropdown-item">
    //             <div class="item-thumbnail">
    //               <div class="item-icon bg-success">
    //                 <i class="mdi mdi-information mx-0"></i>
    //               </div>
    //             </div>
    //             <div class="item-content">
    //               <h6 class="font-weight-normal">Application Error</h6>
    //               <p class="font-weight-light small-text mb-0 text-muted">
    //                 Just now
    //               </p>
    //             </div>
    //           </a>
    //           <a class="dropdown-item">
    //             <div class="item-thumbnail">
    //               <div class="item-icon bg-warning">
    //                 <i class="mdi mdi-settings mx-0"></i>
    //               </div>
    //             </div>
    //             <div class="item-content">
    //               <h6 class="font-weight-normal">Settings</h6>
    //               <p class="font-weight-light small-text mb-0 text-muted">
    //                 Private message
    //               </p>
    //             </div>
    //           </a>
    //           <a class="dropdown-item">
    //             <div class="item-thumbnail">
    //               <div class="item-icon bg-info">
    //                 <i class="mdi mdi-account-box mx-0"></i>
    //               </div>
    //             </div>
    //             <div class="item-content">
    //               <h6 class="font-weight-normal">New user registration</h6>
    //               <p class="font-weight-light small-text mb-0 text-muted">
    //                 2 days ago
    //               </p>
    //             </div>
    //           </a>
    //         </div>
    //       </li>
    //       <li class="nav-item nav-profile dropdown">
    //         <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" id="profileDropdown">
    //           <img src="images/faces/face5.jpg" alt="profile"/>
    //           <span class="nav-profile-name">Louis Barnett</span>
    //         </a>
    //         <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
    //           <a class="dropdown-item">
    //             <i class="mdi mdi-settings text-primary"></i>
    //             Settings
    //           </a>
    //           <a class="dropdown-item">
    //             <i class="mdi mdi-logout text-primary"></i>
    //             Logout
    //           </a>
    //         </div>
    //       </li>
    //     </ul>
    //     <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
    //       <span class="mdi mdi-menu"></span>
    //     </button>
    //   </div>
    // </nav>

    // <div class="container-fluid page-body-wrapper">

    // <nav class="sidebar sidebar-offcanvas" id="sidebar">
    //     <ul class="nav">
    //       <li class="nav-item">
    //         <a class="nav-link" href="index.html">
    //           <i class="mdi mdi-home menu-icon"></i>
    //           <span class="menu-title">Dashboard</span>
    //         </a>
    //       </li>
    //       <li class="nav-item">
    //         <a class="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
    //           <i class="mdi mdi-circle-outline menu-icon"></i>
    //           <span class="menu-title">UI Elements</span>
    //           <i class="menu-arrow"></i>
    //         </a>
    //         <div class="collapse" id="ui-basic">
    //           <ul class="nav flex-column sub-menu">
    //             <li class="nav-item"> <a class="nav-link" href="pages/ui-features/buttons.html">Buttons</a></li>
    //             <li class="nav-item"> <a class="nav-link" href="pages/ui-features/typography.html">Typography</a></li>
    //           </ul>
    //         </div>
    //       </li>
    //       <li class="nav-item">
    //         <a class="nav-link" href="pages/forms/basic_elements.html">
    //           <i class="mdi mdi-view-headline menu-icon"></i>
    //           <span class="menu-title">Form elements</span>
    //         </a>
    //       </li>
    //       <li class="nav-item">
    //         <a class="nav-link" href="pages/charts/chartjs.html">
    //           <i class="mdi mdi-chart-pie menu-icon"></i>
    //           <span class="menu-title">Charts</span>
    //         </a>
    //       </li>
    //       <li class="nav-item">
    //         <a class="nav-link" href="pages/tables/basic-table.html">
    //           <i class="mdi mdi-grid-large menu-icon"></i>
    //           <span class="menu-title">Tables</span>
    //         </a>
    //       </li>
    //       <li class="nav-item">
    //         <a class="nav-link" href="pages/icons/mdi.html">
    //           <i class="mdi mdi-emoticon menu-icon"></i>
    //           <span class="menu-title">Icons</span>
    //         </a>
    //       </li>
    //       <li class="nav-item">
    //         <a class="nav-link" data-bs-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
    //           <i class="mdi mdi-account menu-icon"></i>
    //           <span class="menu-title">User Pages</span>
    //           <i class="menu-arrow"></i>
    //         </a>
    //         <div class="collapse" id="auth">
    //           <ul class="nav flex-column sub-menu">
    //             <li class="nav-item"> <a class="nav-link" href="pages/samples/login.html"> Login </a></li>
    //             <li class="nav-item"> <a class="nav-link" href="pages/samples/login-2.html"> Login 2 </a></li>
    //             <li class="nav-item"> <a class="nav-link" href="pages/samples/register.html"> Register </a></li>
    //             <li class="nav-item"> <a class="nav-link" href="pages/samples/register-2.html"> Register 2 </a></li>
    //             <li class="nav-item"> <a class="nav-link" href="pages/samples/lock-screen.html"> Lockscreen </a></li>
    //           </ul>
    //         </div>
    //       </li>
    //       <li class="nav-item">
    //         <a class="nav-link" href="documentation/documentation.html">
    //           <i class="mdi mdi-file-document-box-outline menu-icon"></i>
    //           <span class="menu-title">Documentation</span>
    //         </a>
    //       </li>
    //     </ul>
    //   </nav>


    //   <div class="main-panel">
    //    <Outlet />
    //       </div>

    // </div>
    //        </div>
    //       </>
    <>
    <div className="container-scroller">
      <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="navbar-brand-wrapper d-flex justify-content-center">
          <div className="navbar-brand-inner-wrapper d-flex justify-content-between align-items-center w-100">
            <Link className="navbar-brand brand-logo" to="#">
              {/* <img src="images/logo.svg" alt="logo" /> */}
              <h5>Shree Ram Selection</h5>
            </Link>
            <Link className="navbar-brand brand-logo-mini" to="#">
              <img src="images/logo-mini.svg" alt="logo" />
            </Link>
            <button
              className="navbar-toggler navbar-toggler align-self-center"
              type="button"
              data-toggle="minimize"
            >
              <span className="mdi mdi-sort-variant"></span>
            </button>
          </div>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
          <ul className="navbar-nav mr-lg-4 w-100">
            <li className="nav-item nav-search d-none d-lg-block w-100">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="search">
                    <i className="mdi mdi-magnify"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search now"
                  aria-label="search"
                  aria-describedby="search"
                />
              </div>
            </li>
          </ul>
          <ul className="navbar-nav navbar-nav-right">
            <li className="nav-item dropdown me-1">
              <Link
                className="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center"
                id="messageDropdown"
                to="#"
                data-bs-toggle="dropdown"
              >
                <i className="mdi mdi-message-text mx-0"></i>
                <span className="count"></span>
              </Link>
              <div
                className="dropdown-menu dropdown-menu-right navbar-dropdown"
                aria-labelledby="messageDropdown"
              >
                <p className="mb-0 font-weight-normal float-left dropdown-header">
                  Messages
                </p>
                {/* <Link className="dropdown-item" to="#">
                  <div className="item-thumbnail">
                    <img
                      src="images/faces/face4.jpg"
                      alt=" "
                      className="profile-pic"
                    />
                  </div>
                  <div className="item-content flex-grow">
                    <h6 className="ellipsis font-weight-normal">David Grey</h6>
                    <p className="font-weight-light small-text text-muted mb-0">
                      The meeting is cancelled
                    </p>
                  </div>
                </Link>
                <Link className="dropdown-item" to="#">
                  <div className="item-thumbnail">
                    <img
                      src="images/faces/face2.jpg"
                      alt=" "
                      className="profile-pic"
                    />
                  </div>
                  <div className="item-content flex-grow">
                    <h6 className="ellipsis font-weight-normal">Tim Cook</h6>
                    <p className="font-weight-light small-text text-muted mb-0">
                      New product launch
                    </p>
                  </div>
                </Link>
                <Link className="dropdown-item" to="#">
                  <div className="item-thumbnail">
                    <img
                      src="images/faces/face3.jpg"
                      alt="user"
                      className="profile-pic"
                    />
                  </div>
                  <div className="item-content flex-grow">
                    <h6 className="ellipsis font-weight-normal"> Johnson</h6>
                    <p className="font-weight-light small-text text-muted mb-0">
                      Upcoming board meeting
                    </p>
                  </div>
                </Link> */}
              </div>
            </li>
            <li className="nav-item dropdown me-4">
              <Link
                className="nav-link count-indicator dropdown-toggle d-flex align-items-center justify-content-center notification-dropdown"
                id="notificationDropdown"
                to="#"
                data-bs-toggle="dropdown"
              >
                <i className="mdi mdi-bell mx-0"></i>
                <span className="count"></span>
              </Link>
              <div
                className="dropdown-menu dropdown-menu-right navbar-dropdown"
                aria-labelledby="notificationDropdown"
              >
                <p className="mb-0 font-weight-normal float-left dropdown-header">
                  Notifications
                </p>
                {/* <Link className="dropdown-item" to="#">
                  <div className="item-thumbnail">
                    <div className="item-icon bg-success">
                      <i className="mdi mdi-information mx-0"></i>
                    </div>
                  </div>
                  <div className="item-content">
                    <h6 className="font-weight-normal">Application Error</h6>
                    <p className="font-weight-light small-text mb-0 text-muted">
                      Just now
                    </p>
                  </div>
                </Link>
                <Link className="dropdown-item" to="#">
                  <div className="item-thumbnail">
                    <div className="item-icon bg-warning">
                      <i className="mdi mdi-settings mx-0"></i>
                    </div>
                  </div>
                  <div className="item-content">
                    <h6 className="font-weight-normal">Settings</h6>
                    <p className="font-weight-light small-text mb-0 text-muted">
                      Private message
                    </p>
                  </div>
                </Link>
                <Link className="dropdown-item" to="#">
                  <div className="item-thumbnail">
                    <div className="item-icon bg-info">
                      <i className="mdi mdi-account-box mx-0"></i>
                    </div>
                  </div>
                  <div className="item-content">
                    <h6 className="font-weight-normal">New user registration</h6>
                    <p className="font-weight-light small-text mb-0 text-muted">
                      2 days ago
                    </p>
                  </div>
                </Link> */}
              </div>
            </li>
            <li className="nav-item nav-profile dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                data-bs-toggle="dropdown"
                id="profileDropdown"
              >
                {/* <img src="images/faces/face5.jpg" alt="profile" /> */}
                <span className="nav-profile-name">Admin</span>
              </Link>
              <div
                className="dropdown-menu dropdown-menu-right navbar-dropdown"
                aria-labelledby="profileDropdown"
              >
                <Link className="dropdown-item" to="#">
                  <i className="mdi mdi-settings text-primary"></i>
                  Settings
                </Link>
                <Link className="dropdown-item" to="#">
                  <i className="mdi mdi-logout text-primary"></i>
                  Logout
                </Link>
              </div>
            </li>
          </ul>
          <button
            className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
            type="button"
            data-toggle="offcanvas"
          >
            <span className="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>
      <div className="container-fluid page-body-wrapper"> 
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to="">
            <i className="mdi mdi-home menu-icon"></i>
            <span className="menu-title">Dashboard</span>
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" data-bs-toggle="collapse" to="#" aria-expanded="false" aria-controls="ui-basic">
            <i className="mdi mdi-circle-outline menu-icon"></i>
            <span className="menu-title">UI Elements</span>
            <i className="menu-arrow"></i>
          </Link>
          <div className="collapse" id="ui-basic">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"> <Link className="nav-link" to="#">Buttons</Link></li>
              <li className="nav-item"> <Link className="nav-link" to="#">Typography</Link></li>
            </ul>
          </div>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link" to="banner">
            <i className="mdi mdi-bulletin-board menu-icon"></i>
            <span className="menu-title">Banner</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="category">
            <i className="mdi mdi-view-headline menu-icon"></i>
            <span className="menu-title">Category</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="product">
            <i className="mdi mdi-basket menu-icon"></i>
            <span className="menu-title">Product</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="employee">
            <i className="mdi mdi-account menu-icon"></i>
            <span className="menu-title">Employee</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="customer">
            <i className="mdi mdi-account-multiple menu-icon"></i>
            <span className="menu-title">Customer</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="review">
            <i className="mdi mdi-library menu-icon"></i>
            <span className="menu-title">Review</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="contact">
            <i className="mdi mdi-link menu-icon"></i>
            <span className="menu-title">Contact</span>
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" data-bs-toggle="collapse" to="#" aria-expanded="false" aria-controls="auth">
            <i className="mdi mdi-account menu-icon"></i>
            <span className="menu-title">User Pages</span>
            <i className="menu-arrow"></i>
          </Link>
          <div className="collapse" id="auth">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"> <Link className="nav-link" to="#"> Login </Link></li>
              <li className="nav-item"> <Link className="nav-link" to="#"> Login 2 </Link></li>
              <li className="nav-item"> <Link className="nav-link" to="#"> Register </Link></li>
              <li className="nav-item"> <Link className="nav-link" to="#"> Register 2 </Link></li>
              <li className="nav-item"> <Link className="nav-link" to="#"> Lockscreen </Link></li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">
            <i className="mdi mdi-file-document-box-outline menu-icon"></i>
            <span className="menu-title">Documentation</span>
          </Link>
        </li> */}
      </ul>
    </nav>

    <div className="main-panel">
      <div className="content-wrapper">

             <Outlet />
      
      </div>
    </div>
      </div>
    </div>
  </>
     );
}

export default AdminLayout;