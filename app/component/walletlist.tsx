import {useState, useEffect} from "react";
import { domAnimation } from "framer-motion";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  RadioGroup,
  Radio,
} from "@heroui/react";

export default function WalletList() {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [modalPlacement, setModalPlacement] = useState("auto");

  // Open the modal when the component mounts
  useEffect(() => {
    onOpen();
  }, []);

  return (
    <div className="flex px-10 min-h-[80vh] justify-center items-center flex-col gap-4">
      
      <RadioGroup
        label="Select Wallet Type"
        orientation="horizontal"
        value={modalPlacement}
        onValueChange={setModalPlacement}
      >
        <Radio value="auto">BitCoin</Radio>
        <Radio value="top">Ethereum</Radio>
        <Radio value="bottom">Tron</Radio>
      </RadioGroup>
      <Modal isOpen={isOpen} placement="center" onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Wallet Details</ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                  risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                  quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                  risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                  quam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Generate
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
