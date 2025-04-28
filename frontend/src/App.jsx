import { MainRoute } from "./routes/MainRoute";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/adminComponents/Layout";
import AdminProfile from "./routes/AdminProfile";
import { AdminProjects } from "./routes/AdminProjects";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainRoute></MainRoute>}></Route>
      <Route element={<Layout />}>
        <Route
          path="/admin/profile"
          element={<AdminProfile></AdminProfile>}
        ></Route>
        <Route
          path="/admin/projects"
          element={<AdminProjects></AdminProjects>}
        ></Route>
        <Route path="/admin/experiences"></Route>
        <Route path="/admin/contact"></Route>
      </Route>
    </Routes>
  );
}

export default App;
