import { QueryClient, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

const CustomerBody = (props) => {
  const {
    person,
    addCustomer,
    customerDetails,
    accountDetails,
    getAllTransactionsOfUser,
    newTransaction,
  } = props.navbarContent;
  const navigate = useNavigate();
  const id = props.id;
  const queryClient = useQueryClient();

  const handleDetailsOfCustomer = () => {
    queryClient.invalidateQueries("detail-key");
    navigate(`/getCustomerDetails/${id}`);
  };

  const handleAccountDetailsOfCustomer = () => {
    navigate(`/customerBankDetails/${id}`);
  };

  const handleAllTransactionsOfUser = () => {
    navigate(`/getAllTransactionsOfUser/${id}`);
  };

  const handleNewTransaction = () => {
    navigate(`/newTransaction/${id}`);
  };

  return (
    <div>
      <button className="btn info" onClick={handleDetailsOfCustomer}>
        {customerDetails}
      </button>
      <button className="btn info" onClick={handleAccountDetailsOfCustomer}>
        {accountDetails}
      </button>
      <button className="btn info" onClick={handleAllTransactionsOfUser}>
        {getAllTransactionsOfUser}
      </button>
      <button className="btn info" onClick={handleNewTransaction}>
        {newTransaction}
      </button>
    </div>
  );
};
export default CustomerBody;
