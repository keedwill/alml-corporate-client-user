
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Contract from "./components/Contract";
import Dashboard from "./components/Dashboard";
import Layout from "./components/Layout";
import Support from "./components/Support";


function App() {
  

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="dashboard" index element={<Dashboard />} />
        <Route path="contract" index element={<Contract />} />
        <Route path="support" index element={<Support />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
