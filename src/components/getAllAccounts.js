import React from "react";
import { useQuery } from "react-query";
import { getAllCustomerAccountinfo } from "../customerServices/customerServices";
import { useGetAllCustomerAccountinfo } from "../hooks/addAccount.hooks";
import ShowAllAccounts from "./showAllAccounts";

const GetAllAccounts = () => {
  const { data: AllUserAccountDetails, isLoading } =
    useGetAllCustomerAccountinfo();

  if (isLoading) {
    <div>Loading...</div>;
  }

  return (
    <div>
      <ShowAllAccounts data={AllUserAccountDetails} />
    </div>
  ); //remaining
};

export default GetAllAccounts;
