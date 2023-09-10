import { deleteDoc, doc } from "firebase/firestore";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firebase";
import AddandUpdateContact from "./AddandUpdateContact";
import { useState } from "react";
import { toast } from "react-toastify";

const ContactCard = ({ contacts }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };
  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact deleted successfully")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
        <div>
          <div
            key={contacts.id}
            className="flex bg-yellow rounded-lg justify-between items-center p-2"
          >
            <HiOutlineUserCircle className="text-orange text-4xl" />
            <div>
              <h2 className="font-medium">{contacts.name}</h2>
              <p className="text-sm">{contacts.email}</p>
            </div>
            <div className="text-orange text-2xl flex gap-1">
              <RiEditCircleLine onClick={onOpen} className="cursor-pointer" />
              <IoMdTrash onClick={() => deleteContact(contacts.id)} className="cursor-pointer text-orange" />
            </div>
          </div>
          <AddandUpdateContact
            isUpdate
            contact={contacts}
            isOpen={isOpen}
            onClose={onClose}
          />
        </div>
    </div>
  );
};

export default ContactCard;
