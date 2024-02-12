import { useQuery } from "@tanstack/react-query";
import { getLogo } from "../ai-dev/ai-service/apiLogo";
import { useCRUD } from "../ai-dev/ai-ui/CRUD";

function Logo() {
  const { data: logoUrl } = useQuery({
    queryKey: ["logo"],
    queryFn: getLogo,
  });
  const [readItem] = useCRUD("logo");

  return (
    <div className=" max-h-32  max-w-32">
      <img src={`${readItem?.[0]?.image}`} alt="logo" />
    </div>
  );
}

export default Logo;
