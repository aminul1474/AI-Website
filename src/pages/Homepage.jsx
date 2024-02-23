import useDate from "../hook/useDate";
import { useGeolocation } from "../hook/useGeolocation";
import AccordionCCP from "../ui/AccordionCCP";
import ProgressBar from "../ui/ProgressBar";
import TabCCP from "../ui/TabCCP";

function Homepage() {
  const [customDate] = useDate(0);

  return (
    <>
      <div>home</div>
      <span>{customDate}</span>
      <span>
        <Location />
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
