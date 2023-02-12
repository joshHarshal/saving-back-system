import axios from "axios";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { getDetailsOfCustomer } from "../customerServices/customerServices";
import {
  useDeleteUser,
  useFetchAllCustomersInfo,
  useFetchSingleCustomerInfo,
} from "../hooks/addAccount.hooks";
import { useUpdateUser } from "../hooks/user.hooks";
import { fetchUsers } from "../services/addAccount.services";

const CustomerList = () => {
  const navigate = useNavigate();
  const {
    isLoading: isUserLoading,
    data: userData,
    status,
    refetch: refetchUsers,
  } = useFetchAllCustomersInfo();

  console.log("fetching customer list", userData);

  const { mutate: deleteUser } = useDeleteUser();
  const handleDeleteUser = (userId) => {
    deleteUser(userId, {
      onSuccess: () => refetchUsers(),
    });
    // console.log(userId, "-----------");
  };

  const handleUpate = (userId) => {
    navigate(`/fetchCustomerDetailsByAdmin/${userId}`);
  };

  //   const { data: checkInfoOfUser } = useFetchSingleCustomerInfo();

  //   const handleCheckUserDetails = (userId) => {
  //     checkInfoOfUser(userId);
  //   };

  const tableRowData = !isUserLoading ? (
    userData?.map((user) => (
      <tr key={user.id}>
        {/* <h2>{user.first_name}</h2> */}
        <th scope="row">{user.id}</th>
        <td>{user.first_name}</td>
        <td>{user.last_name}</td>
        <td>{user.contact_no}</td>
        <td>{user.email}</td>
        <td>{user.address}</td>
        <td>{user.dob}</td>
        <td>{user.gender}</td>

        <td>
          <span
            className="material-symbols-outlined"
            onClick={() => handleUpate(user.id)}
          >
            Edit
          </span>
        </td>
        <td>
          <span
            className="material-symbols-outlined"
            onClick={() => handleDeleteUser(user.id)}
          >
            Delete
          </span>
        </td>
      </tr>
    ))
  ) : (
    <>Loader....</>
  );
  return (
    <div>
      <table className="table">
        <thead className="thead-dark"></thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Contact</th>
          <th scope="col">Email</th>
          <th scope="col">Address</th>
          <th scope="col">Date of Birth</th>
          <th scope="col">Gender</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
        <tbody>{tableRowData}</tbody>
      </table>
    </div>
  );
};

export default CustomerList;
