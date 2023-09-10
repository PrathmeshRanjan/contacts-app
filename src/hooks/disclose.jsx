import { useState } from "react";

const disclose = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };
  return {onClose, onOpen, isOpen}
};

export default disclose;