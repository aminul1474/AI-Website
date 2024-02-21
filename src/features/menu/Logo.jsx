import { useState } from "react";
import FileCCP from "../../ai-dev/ai-ui/FileCCP";
import Modal from "../../ai-dev/ai-ui/Modal";
import { useImage } from "../../ai-dev/ai-ui/useImage";
import { HiOutlinePaperClip } from "react-icons/hi2";

function Logo() {
  const [showForm, setShowForm] = useState(false); //!dev
  const [url] = useImage("logo");

  return (
    <>
      <div className=" max-h-32  max-w-32">
        <img src={url} alt="logo" />
      </div>
      <button onClick={() => setShowForm((bl) => !bl)}>
        {
          //!dev --button
        }
        <HiOutlinePaperClip />
      </button>
      {showForm && ( //!dev
        <Modal setShowForm={setShowForm}>
          <FileCCP fieldName="logo" storageName="logo-image">
            <FileCCP.InputFile />
            <FileCCP.Submit />
          </FileCCP>
        </Modal>
      )}
    </>
  );
}

export default Logo;
