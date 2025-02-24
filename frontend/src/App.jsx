import { AdminRoute } from "./routes/AdminRoute";
import { MainRoute } from "./routes/MainRoute";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainRoute></MainRoute>}></Route>
      <Route path="/admin" element={<AdminRoute></AdminRoute>}></Route>
    </Routes>
  );
}

export default App;
