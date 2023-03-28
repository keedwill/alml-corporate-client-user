import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./components/Auth/Login";

import Contract from "./components/Contract";
import Dashboard from "./components/Dashboard";
import Layout from "./components/Layout";
import Proformas from "./components/Proformas";
import Singleproforma from "./components/SingleProforma";
import Support from "./components/Support";
import "react-toastify/dist/ReactToastify.css";
import Privateroute from "./components/PrivateRoute";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route
          element={
            <Privateroute>
              <Layout />
            </Privateroute>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="contract" element={<Contract />} />
          <Route path="support" element={<Support />} />

          <Route path="proformas" element={<Proformas />} />
          <Route path="proformas/:id" element={<Singleproforma />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
}

export default App;
