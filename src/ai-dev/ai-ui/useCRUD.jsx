import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createData, deleteData, getData } from "../ai-service/apiCRUD";

export function useCRUD(key) {
  const { data: readItem } = useQuery({
    queryKey: [key],
    queryFn: () => getData(key),
  });

  const queryClient = useQueryClient();

  const { mutate: deleteItem } = useMutation({
    mutationFn: (id) => deleteData(id, key),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [key],
      });
    },
    onError: (err) => {
      alert(err.message);
    },
  });

  const { mutate: createItem } = useMutation({
    mutationFn: (nM) => createData(nM, key),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [key],
      });
    },
    onError: (err) => {
      alert(err.message);
    },
  });

  return [readItem, deleteItem, createItem];
}
