import { AdminRoute } from "./routes/AdminRoute";
import { MainRoute } from "./routes/MainRoute";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/adminComponents/Layout";
import AdminProfile from "./routes/AdminProfile";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainRoute></MainRoute>}></Route>
      <Route path="/" element={<Layout />}>
        <Route path="/admin" element={<AdminRoute></AdminRoute>}></Route>
        <Route
          path="/admin/profile"
          element={<AdminProfile></AdminProfile>}
        ></Route>
      </Route>
    </Routes>
  );
}

export default App;
