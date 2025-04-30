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

interface Content_AddRoleProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (content: {
    Title: string;
    Type: string;
    Author: string;
    Status: string;
    Lastupdated: string;
  }) => void;
  mode: "add" | "edit";
  role?: {
    id: string;
    Title: string;
    Type: string;
    Author: string;
    Status: string;
    lastUpdated: string;
  };
  onDelete?: (roleId: string) => void;
  isDeleteModalOpen?: boolean;
  onDeleteModalChange?: (open: boolean) => void;
}

const contentTypes = [
  { value: "Job", label: "Job" },
  { value: "Course", label: "Course" },
  { value: "Project", label: "Project" },
  { value: "News", label: "News" },
];

const contentStatuses = [
  { value: "Published", label: "Published" },
  { value: "Draft", label: "Draft" },
  { value: "Pending", label: "Pending" },
];

export default function Content_AddRole({
  isOpen,
  onOpenChange,
  onSubmit,
  mode,
  role,
  onDelete,
  isDeleteModalOpen,
  onDeleteModalChange,
}: Content_AddRoleProps) {
  const [formData, setFormData] = useState({
    Title: "",
    Type: contentTypes[0].value,
    Author: "",
    Status: contentStatuses[0].value,
    Lastupdated: "2024-01-12",
  });
  const [errors, setErrors] = useState({
    Title: "",
    Type: "",
    Author: "",
    Status: "",
    Lastupdated: "",
  });

  useEffect(() => {
    if (role) {
      setFormData({
        Title: role.Title,
        Type: role.Type,
        Author: role.Author,
        Status: role.Status,
        Lastupdated: role.lastUpdated,
      });
    }
  }, [role]);

  const validateForm = () => {
    const newErrors = {
      Title: "",
      Type: "",
      Author: "",
      Status: "",
      Lastupdated: "",
    };

    if (!formData.Title.trim()) {
      newErrors.Title = "Title is required";
    }
    if (!formData.Type) {
      newErrors.Type = "Type is required";
    }
    if (!formData.Author.trim()) {
      newErrors.Author = "Author is required";
    }
    if (!formData.Status) {
      newErrors.Status = "Status is required";
    }
    if (!formData.Lastupdated) {
      newErrors.Lastupdated = "Last updated date is required";
    }
    setErrors(newErrors);

    return (
      !newErrors.Title &&
      !newErrors.Type &&
      !newErrors.Author &&
      !newErrors.Status &&
      !newErrors.Lastupdated
    );
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const contentData = {
        Title: formData.Title.trim(),
        Type: formData.Type,
        Author: formData.Author.trim(),
        Status: formData.Status,
        Lastupdated: formData.Lastupdated,
      };

      onSubmit(contentData);

      setFormData({
        Title: "",
        Type: contentTypes[0].value,
        Author: "",
        Status: contentStatuses[0].value,
        Lastupdated: "2024-01-12",
      });
      setErrors({
        Title: "",
        Type: "",
        Author: "",
        Status: "",
        Lastupdated: "",
      });
      onOpenChange(false);
    }
  };

  const handleDelete = () => {
    if (role && onDelete) {
      onDelete(role.id);
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
                {mode === "add" ? "Add New Content" : "Edit Content"}
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-4">
                  <Input
                    label="Title"
                    placeholder="Enter Title"
                    value={formData.Title}
                    errorMessage={errors.Title}
                    isInvalid={!!errors.Title}
                    onChange={(e) =>
                      setFormData({ ...formData, Title: e.target.value })
                    }
                  />
                  <Select
                    label="Type"
                    placeholder="Select Type"
                    value={formData.Type}
                    errorMessage={errors.Type}
                    isInvalid={!!errors.Type}
                    onSelectionChange={(value) =>
                      setFormData({ ...formData, Type: value as string })
                    }
                    onMouseDown={(e) => e.stopPropagation()}
                  >
                    {contentTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </Select>
                  <Input
                    label="Author"
                    placeholder="Enter Author"
                    value={formData.Author}
                    errorMessage={errors.Author}
                    isInvalid={!!errors.Author}
                    onChange={(e) =>
                      setFormData({ ...formData, Author: e.target.value })
                    }
                  />
                  <Select
                    label="Status"
                    placeholder="Select Status"
                    value={formData.Status}
                    errorMessage={errors.Status}
                    isInvalid={!!errors.Status}
                    onSelectionChange={(value) =>
                      setFormData({ ...formData, Status: value as string })
                    }
                    onMouseDown={(e) => e.stopPropagation()}
                  >
                    {contentStatuses.map((status) => (
                      <SelectItem key={status.value} value={status.value}>
                        {status.label}
                      </SelectItem>
                    ))}
                  </Select>
                  <Input
                    label="Last Updated"
                    placeholder="Enter Date"
                    value={formData.Lastupdated}
                    errorMessage={errors.Lastupdated}
                    isInvalid={!!errors.Lastupdated}
                    onChange={(e) =>
                      setFormData({ ...formData, Lastupdated: e.target.value })
                    }
                    onMouseDown={(e) => e.stopPropagation()}
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
                  {mode === "add" ? "Add Content" : "Save Changes"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <Modal isOpen={isDeleteModalOpen} onOpenChange={onDeleteModalChange}>
        <ModalContent>
          <ModalHeader>Delete Content</ModalHeader>
          <ModalBody>
            Are you sure you want to delete &ldquo;{role?.Title}&rdquo;? This
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
