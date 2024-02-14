import { NavLink } from "react-router-dom";
import Logo from "../../ui/Logo";
import Modal from "/src/ai-dev/ai-ui/Modal";
import { useState } from "react";
import { HiOutlinePaperClip, HiTrash } from "react-icons/hi2";
import { useCRUD } from "../../ai-dev/ai-ui/useCRUD";
import FormCCP from "../../ai-dev/ai-ui/FormCCP";

function NavMenu() {
  const [showForm, setShowForm] = useState(false); //!dev
  const [readItem, deleteItem, createItem] = useCRUD("menu"); //!dev deleteItem, createItem

  return (
    <>
      <nav className="bg-gray-800 p-4 text-white">
        <div className="container mx-auto flex items-center justify-between">
          <a href="#fdf">
            <Logo />
          </a>
          <ul className="flex space-x-4">
            {readItem?.map((vl) => (
              <li key={vl?.id}>
                <NavLink className="hover:text-gray-300" to={vl?.url}>
                  {vl?.navItemName}
                </NavLink>
                <button onClick={() => deleteItem(vl?.id)}>
                  {
                    //!dev  --button
                  }
                  <HiTrash />
                </button>
              </li>
            ))}
            <button onClick={() => setShowForm((bl) => !bl)}>
              {
                //!dev --button
              }
              <HiOutlinePaperClip />
            </button>
          </ul>
        </div>
      </nav>
      {showForm && ( //!dev
        <Modal setShowForm={setShowForm}>
          <FormCCP createItem={createItem} SBCN={["navItemName", "url"]}>
            <FormCCP.Label index={0}>Name</FormCCP.Label>
            <FormCCP.Input index={0} />
            <FormCCP.Label index={1}>url</FormCCP.Label>
            <FormCCP.Input index={1} />
            {/* <FormCCP.InputFile index={0} /> */}
            <FormCCP.Submit />
          </FormCCP>
        </Modal>
      )}
    </>
  );
}

export default NavMenu;
