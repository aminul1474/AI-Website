import { useQuery } from "@tanstack/react-query";
import useDate from "../hook/useDate";
import { useGeolocation } from "../hook/useGeolocation";
import AccordionCCP from "../ui/AccordionCCP";
import Button from "../ui/Button";
import ProgressBar from "../ui/ProgressBar";

import StarRating from "../ui/StarRating";
import TabCCP from "../ui/TabCCP";
import User from "./login/User";
import { fetchEvents } from "../services/https";
import { useRef } from "react";
import { motion } from "framer-motion";

function Homepage() {
  const [customDate] = useDate(0);
  // searchElement = useRef();

  const { data, isPending, isError } = useQuery({
    queryKey: ["any-for-reuse-data-key"],
    queryFn: () => fetchEvents(),
    // queryFn: () => fetchEvents(searchElement.current.value),
  });
  console.log(data);

  return (
    <>
      {/* <input type="search" placeholder="Search...." ref={searchElement} /> */}
      <div>home</div>
      <motion.span
        initial={{ x: 0 }} //! it has to work 1(initaila value) 2(active when it add to the DOM)
        animate={{ x: 10 }}
        exit={{ x: 0 }} //! active when it removeing from the DOM
        // whileHover={{}}
        // whileInView={{}}
        transition={{ duration: 0.3, bounce: 1, type: "spring" }}
        className=" inline-block h-10 w-10 bg-blue-500"
      />
      {/* <motion.span>text</motion.span> */}
      <span>
        <User />
      </span>

      <span>{customDate}</span>
      <span>
        <Location />
      </span>
      {/* <Button>btn</Button> */}
      <span>
        <StarRating />
      </span>
      <span>
        <ProgressBar />
      </span>
      <AccordionCCP>
        <AccordionCCP.AccordionItem title="any" number={0}>
          anything
        </AccordionCCP.AccordionItem>
        <AccordionCCP.AccordionItem title="title" number={1}>
          shanto description
        </AccordionCCP.AccordionItem>
        <AccordionCCP.AccordionItem title="test" number={3}>
          shanto description
        </AccordionCCP.AccordionItem>
      </AccordionCCP>

      <TabCCP>
        <TabCCP.Tab number={0} />
        <TabCCP.Tab number={1} />
        <TabCCP.Tab number={2} />
        <TabCCP.TabContent />
      </TabCCP>
    </>
  );
}

function Location() {
  const {
    isLoading,
    error,
    position: { lat, lng },
    getPosition,
  } = useGeolocation();

  // const { lat, lng } = position;

  function handleClick() {
    getPosition();
  }

  return (
    <div>
      <button
        className=" bg-green-300"
        onClick={handleClick}
        disabled={isLoading}
      >
        Get my position
      </button>

      {isLoading && <p>Loading position...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && lat && lng && (
        <p>
          Your GPS position:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
          >
            {lat}, {lng}
          </a>
        </p>
      )}
    </div>
  );
}

export default Homepage;
