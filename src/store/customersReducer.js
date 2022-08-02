// const ADD_CLIENT = "ADD_CLIENT";
// const REMOVE_CUSTOMERS = "REMOVE_CUSTOMER";
// const GET_MANY_CUSTOMERS = "GET_MANY_CUSTOMERS";

// const initialState = {
//   customers: []
// };

// export const customersReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_CLIENT:
//       return {...state, customers: [...state.customers, action.payload]};
//     case GET_MANY_CUSTOMERS:
//       return {...state, customers: [...state.customers, ...action.payload]}
//     case REMOVE_CUSTOMERS:
//         return {...state, customers: state.customers.filter( customer => customer.id !== action.payload)};
//     default:
//       return state;
//   }
// };

// export const addCustomerAction = (payload) => ({type: ADD_CLIENT, payload});
// export const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOMERS, payload});
// export const getManyCustomers = (payload) => ({type: GET_MANY_CUSTOMERS, payload});

const initialState = {
  customers: []
};

export const SET_CUSTOMERS = "SET_CUSTOMERS";
export const ASYNC_CUSTOMERS_SET = "ASYNC_CUSTOMERS_SET";
const REMOVE_CUSTOMERS = "REMOVE_CUSTOMER";
const ADD_CLIENT = "ADD_CLIENT";

export const customersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CUSTOMERS:
      return {...state, customers: action.payload};
    case REMOVE_CUSTOMERS:
      return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)};
    case ADD_CLIENT:
      return {...state, customers: [...state.customers, action.payload]};
    default:
      return state;
  }
}

export const setCustomersAction = (payload) => ({type: SET_CUSTOMERS, payload});
export const asyncCustomersSet = () => ({type: ASYNC_CUSTOMERS_SET})
export const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOMERS, payload});
export const addCustomerAction = (payload) => ({type: ADD_CLIENT, payload});