import { useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";
import CustomerList from "../components/customerList";
import { getAllCustomerAccountinfo } from "../customerServices/customerServices";
import {
  addAccount,
  addCustomer,
  deleteUser,
  fetchCustmerAccountInfo,
  fetchUser,
  fetchUsers,
} from "../services/addAccount.services";

export const useAddAccount = () => {
  return useMutation(addAccount, {
    onSuccess: () => toast.success("Account Added"),
    onError: () => toast.error("Failed to Add Account"),
  });
};

export const useAddCustomer = () => {
  return useMutation(addCustomer, {
    onSuccess: () => toast.success("Customer added successfully"),
    onError: () => toast.success("Something went wrong"),
  });
};

export const useDeleteUser = (data) => useMutation(deleteUser, data);

export const useFetchAllCustomersInfo = () => {
  return useQuery("users", fetchUsers);
};

export const useFetchSingleCustomerInfo = () => {
  return useQuery("user", fetchUser);
};

export const useGetAllCustomerAccountinfo = () => {
  return useQuery("users-account-info", getAllCustomerAccountinfo);
};
