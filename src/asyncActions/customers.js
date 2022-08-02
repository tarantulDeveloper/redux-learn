import { getManyCustomers } from "../store/customersReducer";

export const getCustomers = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => dispatch(getManyCustomers(json)));
  };
};
