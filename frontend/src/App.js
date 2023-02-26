import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerList from "./components/CustomerList.js";
import AddCustomer from "./components/AddCustomer.js";
import EditCustomer from "./components/EditCustomer.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CustomerList />} />
        <Route path="/add" element={<AddCustomer />} />
        <Route path="/edit/:id" element={<EditCustomer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
