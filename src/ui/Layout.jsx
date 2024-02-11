import { Outlet } from "react-router-dom";
import NavMenu from "../features/menu/NavMenu";
import Header from "./Header";
import Footer from "./Footer";
import { useQuery } from "@tanstack/react-query";
import { getMenu } from "../services/apiMenu";

function Layout() {
  const { data: menuInfo } = useQuery({
    queryKey: ["menu"],
    queryFn: getMenu,
  });

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
