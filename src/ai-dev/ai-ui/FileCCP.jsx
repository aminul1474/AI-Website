import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import { useForm } from "react-hook-form";
import { createImage, deleteImage, getImage } from "../ai-service/apiImage";

const imageContext = createContext();

function FileCCP({ children, fieldName, storageName }) {
  const { register, handleSubmit, reset } = useForm();

  const { data: readData } = useQuery({
    queryKey: [fieldName],
    queryFn: () => getImage(fieldName),
  });

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (id) => deleteImage(id, fieldName),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [fieldName],
      });
    },
  });
  const { mutate: handleMutate } = useMutation({
    mutationFn: ({ newImage, id }) =>
      createImage(newImage, id, fieldName, storageName),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [fieldName],
      });
      reset();
    },
  });

  function handleFile(data) {
    handleMutate({
      newImage: { ...data, image: data.image[0] },
      id: readData?.[0]?.id,
    });
  }
  return (
    <imageContext.Provider value={{ register, readData, mutate }}>
      <form
        className=" grid gap-2 bg-slate-400 p-4"
        onSubmit={handleSubmit(handleFile)}
      >
        {children}
      </form>
    </imageContext.Provider>
  );
}

function InputFile() {
  const { register } = useContext(imageContext);
  return (
    <input
      type="file"
      id="image"
      accept="image/*"
      {...register("image", {
        required: "this is requed field",
      })}
    />
  );
}
function Submit() {
  return <button className=" bg-green-300 hover:bg-green-500">Add</button>;
}
function Delete() {
  const { mutate, readData } = useContext(imageContext);
  return <button onClick={() => mutate(readData?.[0]?.id)}>delete</button>;
}

FileCCP.InputFile = InputFile;
FileCCP.Submit = Submit;
FileCCP.Delete = Delete;

export default FileCCP;
