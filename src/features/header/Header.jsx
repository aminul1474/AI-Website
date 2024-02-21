import { useImage } from "../../ai-dev/ai-ui/useImage";

function Header() {
  const [url] = useImage("logo");
  return (
    <div>
      <p>heder slider</p>
      {/* <img src={url} alt="img" /> */}
    </div>
  );
}

export default Header;
