import { Outlet } from "react-router-dom";
import NavMenu from "../features/menu/NavMenu";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <div>
      <NavMenu />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
