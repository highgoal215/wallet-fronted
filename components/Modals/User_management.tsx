import { Input } from "@nextui-org/input";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useState, useEffect } from "react";

interface User_managementProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (content: {
    name: string;
    email: string;
    type: "Talent" | "Organization";
    status: "Active" | "Inactive";
    avatar: string;
  }) => void;
  mode: "add" | "edit";
  user?: {
    id: string;
    name: string;
    email: string;
    type: "Talent" | "Organization";
    status: "Active" | "Inactive";
    avatar: string;
  };
  onDelete?: (userId: string) => void;
  isDeleteModalOpen?: boolean;
  onDeleteModalChange?: (open: boolean) => void;
}

const userTypes = [
  { value: "Talent" as const, label: "Talent" },
  { value: "Organization" as const, label: "Organization" },
];

const userStatuses = [
  { value: "Active" as const, label: "Active" },
  { value: "Inactive" as const, label: "Inactive" },
];

export default function User_managementModal({
  isOpen,
  onOpenChange,
  onSubmit,
  mode,
  user,
  onDelete,
  isDeleteModalOpen,
  onDeleteModalChange,
}: User_managementProps) {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    type: "Talent" | "Organization";
    status: "Active" | "Inactive";
    avatar: string;
  }>({
    name: "",
    email: "",
    type: "Talent",
    status: "Active",
    avatar: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    type: "",
    status: "",
    avatar: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        type: user.type,
        status: user.status,
        avatar: user.avatar,
      });
    }
  }, [user]);

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      type: "",
      status: "",
      avatar: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }
    if (!formData.type) {
      newErrors.type = "Type is required";
    }
    if (!formData.status) {
      newErrors.status = "Status is required";
    }
    if (!formData.avatar.trim()) {
      newErrors.avatar = "Avatar URL is required";
    }
    setErrors(newErrors);

    return (
      !newErrors.name &&
      !newErrors.email &&
      !newErrors.type &&
      !newErrors.status &&
      !newErrors.avatar
    );
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onSubmit(formData);
      setFormData({
        name: "",
        email: "",
        type: userTypes[0].value,
        status: userStatuses[0].value,
        avatar: "",
      });
      setErrors({
        name: "",
        email: "",
        type: "",
        status: "",
        avatar: "",
      });
      onOpenChange(false);
    }
  };

  const handleDelete = () => {
    if (user && onDelete) {
      onDelete(user.id);
      onDeleteModalChange?.(false);
    }
  };

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
        disableAnimation
        hideCloseButton={false}
        isDismissable={false}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {mode === "add" ? "Add New User" : "Edit User"}
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-4">
                  <Input
                    label="Name"
                    placeholder="Enter name"
                    value={formData.name}
                    errorMessage={errors.name}
                    isInvalid={!!errors.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                  <Input
                    label="Email"
                    placeholder="Enter email"
                    value={formData.email}
                    errorMessage={errors.email}
                    isInvalid={!!errors.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  <Select
                    label="Type"
                    placeholder="Select Type"
                    value={formData.type}
                    errorMessage={errors.type}
                    isInvalid={!!errors.type}
                    onSelectionChange={(value) => {
                      const selectedValue = Array.from(value)[0] as
                        | "Talent"
                        | "Organization";
                      setFormData({ ...formData, type: selectedValue });
                    }}
                    onMouseDown={(e) => e.stopPropagation()}
                  >
                    {userTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </Select>
                  <Select
                    label="Status"
                    placeholder="Select Status"
                    value={formData.status}
                    errorMessage={errors.status}
                    isInvalid={!!errors.status}
                    onSelectionChange={(value) => {
                      const selectedValue = Array.from(value)[0] as
                        | "Active"
                        | "Inactive";
                      setFormData({ ...formData, status: selectedValue });
                    }}
                    onMouseDown={(e) => e.stopPropagation()}
                  >
                    {userStatuses.map((status) => (
                      <SelectItem key={status.value} value={status.value}>
                        {status.label}
                      </SelectItem>
                    ))}
                  </Select>
                  <Input
                    label="Avatar URL"
                    placeholder="Enter avatar URL"
                    value={formData.avatar}
                    errorMessage={errors.avatar}
                    isInvalid={!!errors.avatar}
                    onChange={(e) =>
                      setFormData({ ...formData, avatar: e.target.value })
                    }
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button
                  className="bg-[#6f4ef2] shadow-lg shadow-indigo-500/20"
                  onPress={handleSubmit}
                >
                  {mode === "add" ? "Add User" : "Save Changes"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <Modal isOpen={isDeleteModalOpen} onOpenChange={onDeleteModalChange}>
        <ModalContent>
          <ModalHeader>Delete User</ModalHeader>
          <ModalBody>
            Are you sure you want to delete &ldquo;{user?.name}&rdquo;? This
            action cannot be undone.
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
