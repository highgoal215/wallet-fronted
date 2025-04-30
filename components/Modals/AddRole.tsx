import { Input } from "@nextui-org/input";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { useState, useEffect } from "react";

interface AddRoleProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (role: { name: string; description: string }) => void;
  mode: "add" | "edit";
  role?: {
    id: string;
    name: string;
    description: string;
    members: {
      name: string;
      avatar: string;
    }[];
    lastModified: string;
  };
  onDelete?: (roleId: string) => void;
  isDeleteModalOpen?: boolean;
  onDeleteModalChange?: (open: boolean) => void;
}

export default function AddRole({
  isOpen,
  onOpenChange,
  onSubmit,
  mode,
  role,
  onDelete,
  isDeleteModalOpen,
  onDeleteModalChange,
}: AddRoleProps) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    description: "",
  });

  useEffect(() => {
    if (role) {
      setFormData({
        name: role.name,
        description: role.description,
      });
    }
  }, [role]);

  const validateForm = () => {
    const newErrors = {
      name: "",
      description: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Role name is required";
    }
    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }

    setErrors(newErrors);
    return !newErrors.name && !newErrors.description;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onSubmit(formData);
      onOpenChange(false);
    }
  };

  const handleDelete = () => {
    if (role && onDelete) {
      onDelete(role.id);
      onDeleteModalChange?.(false);
    }
  };

  // const handleDeleteClick = () => {
  //   if (role) {
  //     onDeleteModalChange?.(true);
  //   }
  // };

  return (
    <>
      <Modal
        backdrop="opaque"
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
          header: "border-b-[1px] border-[#292f46]",
          footer: "border-t-[1px] border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
        isOpen={isOpen}
        radius="lg"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {mode === "add" ? "Add New Role" : "Edit Role"}
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-4">
                  <Input
                    label="Role Name"
                    placeholder="Enter role name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    errorMessage={errors.name}
                    isInvalid={!!errors.name}
                  />
                  <Input
                    label="Description"
                    placeholder="Enter role description"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    errorMessage={errors.description}
                    isInvalid={!!errors.description}
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button
                  className="bg-[#6f4ef2] shadow-lg shadow-indigo-500/20"
                  onPress={handleSubmit}
                >
                  {mode === "add" ? "Add Role" : "Save Changes"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <Modal isOpen={isDeleteModalOpen} onOpenChange={onDeleteModalChange}>
        <ModalContent>
          <ModalHeader>Delete Role</ModalHeader>
          <ModalBody>
            Are you sure you want to delete the role &ldquo;{role?.name}&rdquo;?
            This action cannot be undone.
          </ModalBody>
          <ModalFooter>
            <Button
              color="danger"
              variant="light"
              onPress={() => onDeleteModalChange?.(false)}
            >
              Cancel
            </Button>
            <Button color="danger" onPress={handleDelete}>
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
