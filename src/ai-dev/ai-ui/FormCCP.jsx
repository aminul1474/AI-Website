import { createContext, useContext } from "react";
import { useForm } from "react-hook-form";

const formContext = createContext();

function FormCCP({ children, SBCN, createItem }) {
  const { register, handleSubmit, reset } = useForm();

  function onSubmit(data) {
    createItem(data);
    reset();
  }
  return (
    <formContext.Provider value={{ register, SBCN }}>
      <form
        className=" grid gap-2 bg-slate-400 p-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        {children}
      </form>
    </formContext.Provider>
  );
}

function Label({ children, index }) {
  const { SBCN } = useContext(formContext);
  return <label htmlFor={SBCN[index]}>{children}</label>;
}
function Input({ index }) {
  const { SBCN, register } = useContext(formContext);
  return <input type="text" id={SBCN[index]} {...register(SBCN[index])} />;
}
function InputFile({ index }) {
  const { SBCN, register } = useContext(formContext);
  return (
    <input
      type="file"
      accept="image/*"
      id={SBCN[index]}
      {...register(SBCN[index])}
    />
  );
}
function Submit() {
  return (
    <button className=" rounded-full bg-green-300 hover:bg-green-500">
      Add
    </button>
  );
}

FormCCP.Label = Label;
FormCCP.Input = Input;
FormCCP.Submit = Submit;
FormCCP.InputFile = InputFile;

export default FormCCP;
