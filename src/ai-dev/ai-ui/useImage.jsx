import { useQuery } from "@tanstack/react-query";
import { getImage } from "../ai-service/apiImage";

export function useImage(fieldName) {
  const { data } = useQuery({
    queryKey: [fieldName],
    queryFn: () => getImage(fieldName),
  });

  const url = data?.[0]?.image;

  return [url];
}
