import { useRef, useState } from "react";
import { useKey } from "../hook/useKey";
import styled from "styled-components";

const Input = styled.input`
  justify-self: center;
  border: none;
  padding: 1.1rem 1.6rem;
  font-size: 1.8rem;
  border-radius: 0.7rem;
  width: 40rem;
  transition: all 0.3s;
  color: #dee2e6;

  /* background-color: #212529; */
  background-color: #7950f2;

  &::placeholder {
    color: #adb5bd;
  }
  &:focus {
    outline: none;
    box-shadow: 0 2.4rem 2.4rem rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;

function Search() {
  const [query, setQuery] = useState("");
  const inputEl = useRef(null);
  //const {movies,error,isLoading} = useMovies(query);

  useKey("Enter", () => {
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setQuery("");
  });

  return (
    <Input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}

export default Search;
