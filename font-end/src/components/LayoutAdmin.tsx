import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import {
  FaHome,
  FaChartBar,
  FaList,
  FaUsers,
  FaProductHunt,
  FaTags,
} from "react-icons/fa";
const LayoutAdmin = () => {
  const { user } = useAuth();
  console.log(user);
  if (!user || user.role !== "admin") {
    return <h1>Ban khong co quyen vao trang nay!</h1>;
  }
  return (
    <>
      <header className="admin-header">
        <h1>Hello Admin</h1>
        <ul className="admin-nav">
          <li>
            <Link to="/">
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link to="/admin/categories">
              <FaList /> Danh Mục
            </Link>
          </li>
          <li>
            <Link to="/hosts">
              <FaUsers /> Quản lý host
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaChartBar /> Xem thống kê
            </Link>
          </li>
        </ul>
      </header>
      <div className="row">
        <div className="col-3">
          <div className="sidebar">
            <ul>
              <li>
                <Link to="/admin">
                  <FaHome /> Dashboard
                </Link>
              </li>
              <li>
                <Link to="/admin/categories">
                  <FaList /> Danh mục
                </Link>
              </li>
              <li>
                <Link to="/admin/users">
                  <FaUsers /> User
                </Link>
              </li>
              <li>
                <Link to="/admin/products">
                  <FaProductHunt /> Products
                </Link>
              </li>
              <li>
                <Link to="/admin/brands">
                  <FaTags /> Brands
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-9">
          <div className="main">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutAdmin;
