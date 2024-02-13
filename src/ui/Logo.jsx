import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createLogo, deleteLogo, getLogo } from "../services/apiLogo";
import { useForm } from "react-hook-form";

function Logo() {
  const { register, handleSubmit, reset } = useForm();

  const { data: logoData } = useQuery({
    queryKey: ["u-key-logo"],
    queryFn: getLogo,
  });

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (id) => deleteLogo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["u-key-logo"],
      });
    },
  });
  const { mutate: handleMutate } = useMutation({
    mutationFn: ({ newLogo, id }) => createLogo(newLogo, id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["u-key-logo"],
      });
      reset();
    },
  });

  function handleFile(data) {
    // handleMutate(data);
    handleMutate({
      newLogo: { ...data, image: data.image[0] },
      id: logoData?.[0]?.id,
    });
    // console.log({ ...data, image: data.image[0] });
  }

  console.log(logoData);
  return (
    <>
      <div className=" max-h-32  max-w-32">
        <img src={`${logoData?.[0]?.image}`} alt="logo" />
        <button onClick={() => mutate(logoData?.[0]?.id)}>delete</button>
      </div>
      <form onSubmit={handleSubmit(handleFile)}>
        <input
          type="file"
          id="image"
          accept="image/*"
          {...register("image", {
            required: "this is requed field",
          })}
        />
        <button>add</button>
      </form>
    </>
  );
}

export default Logo;
