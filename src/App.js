
import Dashboard from './Dashboard'
import Settings from './Settings'
import Tables from './Tables'
import SignIn from './SignIn'
import SignUp from './SignUp'
// import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';

import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import Company from './pages/Company/Company';
import Customer from './pages/Customer/Customer';
import AddCustomer from './pages/AddCustomer/AddCustomer';
import Product from './pages/Product/Product';
import AddProduct from './pages/AddProduct/AddProduct';
import Report from './pages/Report/Report';

function App() {
  return (
    <div className="App">
      
        <HashRouter>
         
              <Routes>
                <Route  path='/' element={<SignIn/>}  />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/tables" element={<Tables />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/resetpassword" element={<ResetPassword />} />
                <Route path="/company" element={<Company />} />
                <Route path="/customer" element={<Customer />} />
                <Route path="/addcustomer" element={<AddCustomer />} />
                <Route path="/product" element={<Product />} />
                <Route path="/addproduct" element={<AddProduct />} />
                <Route path="/report" element={<Report />} />
              </Routes>
            
        </HashRouter>
     
    </div>
  );
}

export default App;