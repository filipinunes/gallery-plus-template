import { BrowserRouter, Route, Routes } from "react-router";
import PageComponents from "./pages/page-components";
import PageHome from "./pages/page-home";
import PagePhotoDetails from "./pages/page-photo-details";
import LayoutMain from "./pages/layout-main";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route index element={<PageHome />} />
          <Route path="/fotos/:id" element={<PagePhotoDetails />} />
          <Route path="/componentes" element={<PageComponents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
