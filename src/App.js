import { useDispatch, useSelector } from "react-redux";
import { addCustomerAction, asyncCustomersSet, removeCustomerAction } from "./store/customersReducer";
import { asyncTopUpAction, asyncWithdrawAction } from "./store/moneyReducer";

function App() {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.money.money);
  const customers = useSelector((state) => state.customers.customers);

  const dobavit = () => {
    dispatch(asyncTopUpAction());
  };

  const ubavit = () => {
    dispatch(asyncWithdrawAction());
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now()
    }
    dispatch(addCustomerAction(customer))
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div>
      <h3>Your balance: {balance}</h3>
      <div>
        <button onClick={() => dobavit()}>
          Top up
        </button>
        <button onClick={() => ubavit()}>
          Withdraw
        </button>
        <button onClick={() => addCustomer(prompt())}>Add a client</button>
        <button onClick={() => dispatch(asyncCustomersSet())}>Get many customers</button>
      </div>
      {customers.length > 0 ? (
        <div>
          {customers.map((customer) => (
            <div key={customer.id} onClick={() => removeCustomer(customer)}>{customer.name}</div>
          ))}
        </div>
      ) : (
        <div>no customers</div>
      )}
    </div>
  );
}

export default App;
