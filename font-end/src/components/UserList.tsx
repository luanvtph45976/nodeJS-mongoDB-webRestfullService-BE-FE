import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { User } from "../interfaces/User"; // Đảm bảo đã tạo User interface
import instance from "../api";

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await instance.get(`/users`);
        setUsers(data.data || []);
        console.log(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const removeUser = async (id: string | number) => {
    try {
      await instance.delete(`/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error removing user:", error);
    }
  };

  return (
    <div>
      <h1>Hello Admin</h1>
      <Link to="/admin/user-add" className="btn btn-primary">
        Thêm người dùng mới
      </Link>
      <table className="table table-bordered table-striped text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Vai trò</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <Link
                  to={`/admin/user-edit/${user.id}`}
                  className="btn btn-warning"
                >
                  Sửa
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => removeUser(user.id)}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
