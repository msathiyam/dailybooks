import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Dashboard2 from "../pages/dashboard 2";
import Customer from "../pages/Sales/Customers";
import Subscription from "../pages/Sales/subscriptions";
import Payments from "../pages/Finance/payments";
import Makepayment from "../pages/Finance/payments/makepayment";
import Order from "../pages/Sales/orders";
import Refunds from "../pages/Finance/refunds";
import Paymentgrievances from "../pages/Finance/Payment Grivences";
import Reports from "../pages/Finance/Reports";
import Ticket from "../pages/Help disk/tickets";
import Complaints from "../pages/Help disk/complaints";
import Webnotification from "../pages/Settings/webnotifications";
import Mobilenotification from "../pages/Settings/mobilenotifications";
import Features from "../pages/Features/index";
import Faqs from "../pages/Faqs/index";
import Testmonial from "../pages/Testmonial";
import Contact from "../pages/contact";
import Appearence from "../pages/manage-settings/appearance";
import BusinessCategory from "../pages/manage-settings/business-categories";
import Discount from "../pages/manage-settings/discount";
import License from "../pages/manage-settings/licenses";
import Paymentsettings from "../pages/manage-settings/payments-settings";
import Preferences from "../pages/manage-settings/preferences";
import Website from "../pages/manage-settings/wesite-settings";
import Languages from "../pages/languages";
import Company from "../pages/company";
import Country from "../pages/manage-settings/country";
import Users from "../pages/manage-settings/users";
import Layout from "../components/layout";
import ChangePassword from "../pages/changePassword";
const App = () => {
  return (
    <Layout>
    <Routes>
   
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/Performance" element={<Dashboard2 />} />
      <Route path="/order" element={<Order />} />
      <Route path="/refund" element={<Refunds />} />
      <Route path="/customer" element={<Customer />} />
      <Route path="/subscription" element={<Subscription />} />
      <Route path="/paymentgrievances" element={<Paymentgrievances />} />
      <Route path="/report" element={<Reports />} />
      <Route path="/ticket" element={<Ticket />} />
      <Route path="/payment" element={<Payments />} />
      <Route path="/complaints" element={<Complaints />} />
      <Route path="/Web-notification" element={<Webnotification/>} />
      <Route path="/mobile-motifications" element={<Mobilenotification/>}/>
      <Route path="/makepayment" element={<Makepayment />} />
      <Route path="/features" element={<Features/>} />
      <Route path="/faqs" element={<Faqs/>} />
      <Route path="/testimonial" element={<Testmonial/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/appearance" element={<Appearence/>} />
      <Route path="/business-categories" element={<BusinessCategory/>} />
      <Route path="/discount" element={<Discount/>} />
      <Route path="/license" element={<License/>} />
      <Route path="/pyment-settings" element={<Paymentsettings/>}/>
      <Route path="/preferences" element={<Preferences/>}/>
      <Route path="/website" element={<Website/>}/>
      <Route path="/languages" element={<Languages/>} />
      <Route path="/company" element={<Company/>} />
      <Route path="/Country" element={<Country/>} />
      <Route path="/users" element={<Users/>} />
      <Route path="/change-password" element={<ChangePassword/>} />
      {/* <Route path="/update" element={<UpdateSettings/>}/> */}
    </Routes>
    </Layout>
  );
};

export default App;
