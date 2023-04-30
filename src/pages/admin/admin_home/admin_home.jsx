import { Link } from "react-router-dom";



export default function AdminHome() {
  return (
    <>
      <div className="container-scroller">
        <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
          <div className="navbar-brand-wrapper d-flex justify-content-center">
            <div className="navbar-brand-inner-wrapper d-flex justify-content-between align-items-center w-100">
              <Link className="navbar-brand brand-logo" to="#">
                {/* <img src="images/logo.svg" alt="logo" /> */}
              </Link>
              <Link className="navbar-brand brand-logo-mini" to="#">
                {/* <img src="images/logo-mini.svg" alt="logo" /> */}
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
                  <Link className="dropdown-item" to="#">
                    <div className="item-thumbnail">
                      <img
                        src="images/faces/face4.jpg"
                        alt="image"
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
                        alt="image"
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
                        alt="image"
                        className="profile-pic"
                      />
                    </div>
                    <div className="item-content flex-grow">
                      <h6 className="ellipsis font-weight-normal"> Johnson</h6>
                      <p className="font-weight-light small-text text-muted mb-0">
                        Upcoming board meeting
                      </p>
                    </div>
                  </Link>
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
                  <Link className="dropdown-item" to="#">
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
                  </Link>
                </div>
              </li>
              <li className="nav-item nav-profile dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  data-bs-toggle="dropdown"
                  id="profileDropdown"
                >
                  <img src="images/faces/face5.jpg" alt="profile" />
                  <span className="nav-profile-name">Louis Barnett</span>
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
            <Link className="nav-link" to="#">
              <i className="mdi mdi-home menu-icon"></i>
              <span className="menu-title">Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
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
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              <i className="mdi mdi-view-headline menu-icon"></i>
              <span className="menu-title">Form elements</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              <i className="mdi mdi-chart-pie menu-icon"></i>
              <span className="menu-title">Charts</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              <i className="mdi mdi-grid-large menu-icon"></i>
              <span className="menu-title">Tables</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              <i className="mdi mdi-emoticon menu-icon"></i>
              <span className="menu-title">Icons</span>
            </Link>
          </li>
          <li className="nav-item">
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
          </li>
        </ul>
      </nav>

      <div className="main-panel">
        <div className="content-wrapper">

               
        
        </div>
      </div>
        </div>
      </div>
    </>
  );
}
