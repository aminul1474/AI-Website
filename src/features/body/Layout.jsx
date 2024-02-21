import { Outlet } from "react-router-dom";
import NavMenu from "../menu/NavMenu";
import Header from "../header/Header";
import Footer from "../footer/Footer";

function Layout() {
  return (
    <div className=" grid-rows[auto_1fr_auto] grid h-screen">
      <NavMenu />
      <Header />
      <main className=" container mx-auto mt-8  bg-slate-400">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="col-span-2 bg-white p-4">
            <h1 className="mb-4 text-2xl font-bold">Welcome to My Website!</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vehicula leo id nisi aliquet, in fringilla leo pulvinar.
              Suspendisse potenti.
            </p>
            <Outlet />
          </div>
          <div className="col-span-1 bg-gray-200 p-4">
            <h2 className="mb-4 text-xl font-bold">Sidebar</h2>
            <ul>
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 3</a>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
