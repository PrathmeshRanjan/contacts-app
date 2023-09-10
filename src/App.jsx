import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import { createPortal } from "react-dom";
import AddandUpdateContact from "./components/AddandUpdateContact";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactLists);
          return contactLists;
        });
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;

    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactLists.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );

      setContacts(filteredContacts);

      return filteredContacts;
    });
  };

  return createPortal(
    <>
      <div className="max-w-[470px] mx-auto px-4 rounded-lg">
        <Navbar />
        <div className="flex gap-1">
          <div className="flex-grow flex relative items-center">
            <FiSearch className="text-white text-3xl absolute" />
            <input
              onChange={filterContacts}
              type="text"
              className="flex-grow h-10 border bg-transparent border-white rounded-md pl-9 text-white"
            />
          </div>
          <AiFillPlusCircle
            onClick={onOpen}
            className="text-white cursor-pointer text-5xl"
          />
        </div>
        <div className="mt-4 gap-3 flex flex-col">
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contacts={contact} />
          ))}
        </div>
        <AddandUpdateContact isOpen={isOpen} onClose={onClose} />
        <ToastContainer position="bottom-center" />
      </div>
    </>,
    document.getElementById("modal-root")
  );
};

export default App;
