import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";
import { getMenu } from "../../services/apiMenu";

function NavMenu() {
  const { data: menuInfo } = useQuery({
    queryKey: ["menu"],
    queryFn: getMenu,
  });

  return (
    <nav>
      <ul>
        {menuInfo?.map((vl, index) => (
          <li key={menuInfo?.[index]?.id}>
            <NavLink to={menuInfo?.[index]?.url}>
              {menuInfo?.[index]?.navItemName}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavMenu;
