// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Layout from './pages/Layout';
// import Home from './pages/Home';
// import AddUser from './pages/AddUser';
// import NoPage from './pages/NoPage';
// import ViewUsers from './pages/ViewUsers';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
// import AdminHome from './pages/admin/admin_home/admin_home';
import EmployeeHome from './pages/employee/employee_home';
import CustomerHome from './pages/customers/home/home';
import Category from './pages/admin/category/categories/Category';
import AdminLayout from './pages/admin/admin_layout';
import AdminHome from './pages/admin/admin_home/admin_home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/" element={<AdminLayout />} >
          <Route index element={<AdminHome />} />
          {/* <Route index element={<Category />} /> */}
          <Route path='category' element={<Category />} />
          {/* <Route index element={} /> */}
        </Route>
        <Route path="/employee_home" element={<EmployeeHome />} />
        <Route path="/home" element={<CustomerHome />} />


        {/* <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="addUser" element={<AddUser />} />
        <Route path="viewUsers" element={<ViewUsers />} />
      </Route> */}
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
