import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createData, deleteData, getData } from "../ai-service/apiCRUD";

export function useCRUD(fieldName) {
  const { data: readItem } = useQuery({
    queryKey: [fieldName],
    queryFn: () => getData(fieldName),
  });

  const queryClient = useQueryClient();

  const { mutate: deleteItem } = useMutation({
    mutationFn: (id) => deleteData(id, fieldName),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [fieldName],
      });
    },
    onError: (err) => {
      alert(err.message);
    },
  });

  const { mutate: createItem } = useMutation({
    mutationFn: (nM) => createData(nM, fieldName),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [fieldName],
      });
    },
    onError: (err) => {
      alert(err.message);
    },
  });

  return [readItem, deleteItem, createItem];
}
