import { useForm } from "react-hook-form";
import { AiOutlineColumnWidth, AiOutlineColumnHeight } from "react-icons/ai";
import useFetch from "../hook/useFetch";
import styled from "styled-components";
import { useCRUD } from "../ai-dev/ai-ui/useCRUD";
import { useState } from "react";
import { HiTrash } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

const Form = styled.form`
  display: grid;
  align-items: center;
  gap: 1.2rem;

  background-color: #fff4e6;
  border-radius: 7px;

  &.button {
    margin-top: 0.6rem;
    grid-column: 2;
  }
`;
const Div = styled.div`
  display: flex;
`;
const Input = styled.input`
  font-family: inherit;
  color: inherit;
  font-size: 1rem;
  padding: 0.5rem;
  text-align: center;
  border: 1px solid #ffe8cc;
  border-radius: 4px;
  transition: 0.3s;

  &.input-width {
    width: 100%;
  }
  &::placeholder {
    color: #33342a53;
  }
  &:focus {
    outline: none;
    border: 1px solid #ff922b;
  }
`;
const Btn = styled.button`
  background-color: #ffa94d;
  color: #343a40;
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 7px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #ff922b;
  }
`;

function Calculation() {
  const [currentData, setCurData] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const [data] = useFetch(
    "https://api.fastforex.io/fetch-all?api_key=c91489fd86-2d3109a8f3-s98zbt",
  );

  const [readItem, deleteItem, createItem] = useCRUD("calculator");

  function onSubmit(data) {
    createItem(data);

    reset();
  }

  return (
    <>
      <NavLink to="/home">home</NavLink>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label>📏 Length</label>
        <Div>
          <Input
            id="lengthFeet"
            {...register("lengthFeet")}
            type="number"
            placeholder="feet"
          />
          <Input
            id="lengthInch"
            {...register("lengthInch")}
            placeholder="inch"
            className="input-width"
            type="number"
          />
        </Div>
        <label className=" flex items-center gap-2">
          <span className=" text-[27px] text-green-500">
            <AiOutlineColumnWidth />
          </span>
          <span>Width</span>
        </label>
        <Div>
          <Input
            id="widthFeet"
            {...register("widthFeet")}
            type="number"
            placeholder="feet"
          />
          <Input
            id="widthInch"
            {...register("widthInch")}
            placeholder="inch"
            className="input-width"
            type="number"
          />
        </Div>
        <label className=" flex items-center gap-2">
          <span className=" text-[27px] text-orange-600">
            <AiOutlineColumnHeight />
          </span>
          <span>Height</span>
        </label>
        <Div>
          <Input
            id="heightFeet"
            {...register("heightFeet")}
            type="number"
            placeholder="feet"
          />
          <Input
            id="heightInch"
            {...register("heightInch")}
            placeholder="inch"
            className="input-width"
            type="number"
          />
        </Div>
        <label>1CFT = </label>
        <Input
          id="perCFTdollar"
          {...register("perCFTdollar")}
          placeholder="dollar"
          type="number"
        />
        <label>1Dollar = </label>
        <Input
          defaultValue={data?.results?.BDT}
          id="tk"
          {...register("tk")}
          placeholder="tk"
          type="number"
        />
        <Btn>Calculation</Btn>
      </Form>

      <CalculationList
        readItem={readItem}
        deleteItem={deleteItem}
        currentData={currentData}
        setCurData={setCurData}
      />
      <CalculationResult currentData={currentData} />
    </>
  );
}

const Li = styled.li`
  ${({ open }) =>
    open &&
    `
    background-color: #a6a7c4;
  `}
`;

function CalculationList({ currentData, setCurData, readItem, deleteItem }) {
  return (
    <ul>
      {readItem?.map((vl) => (
        <Item
          key={vl.id}
          vl={vl}
          currentData={currentData}
          setCurData={setCurData}
          deleteItem={deleteItem}
        />
      ))}
    </ul>
  );
}
function Item({ vl, setCurData, currentData, deleteItem }) {
  const boolenValue = currentData.id === vl.id;
  function handleSelectData(getData) {
    setCurData(getData.id === currentData.id ? "" : getData);
  }
  return (
    <Li open={boolenValue}>
      <h2>
        <button onClick={() => deleteItem(vl?.id)}>
          {
            //!dev  --button
          }
          <HiTrash />
        </button>
        Result:0
      </h2>
      <button
        onClick={() => {
          handleSelectData(vl);
        }}
      >
        {boolenValue ? "Close" : "Select"}
      </button>
    </Li>
  );
}

function CalculationResult({ currentData }) {
  const {
    lengthFeet,
    lengthInch,
    widthFeet,
    widthInch,
    heightFeet,
    heightInch,
    perCFTdollar,
    tk,
  } = currentData;
  const cft =
    (Number(lengthFeet) + Number(lengthInch) / 12) *
    (Number(widthFeet) + Number(widthInch) / 12) *
    (Number(heightFeet) + Number(heightInch) / 12);

  const priceInDolar = cft * Number(perCFTdollar);
  const priceInTK = priceInDolar * Number(tk);
  return (
    <div>
      <h3>Stone CFT(volume) Calculation</h3>
      <p>
        Volume(CFT): <strong>{cft ? cft : 0}</strong>{" "}
      </p>
      <p>Price In Dollar: ${priceInDolar ? priceInDolar : 0}</p>
      <p>Price In TK: {priceInTK ? priceInTK : 0}TK</p>
    </div>
  );
}

export default Calculation;
