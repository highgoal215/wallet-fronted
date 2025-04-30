import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { FileText, Code, Link as LinkIcon, Upload } from "lucide-react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";

interface ProfileSectionProps {
  icon: "file-text" | "code" | "link";
  title: string;
  buttonText?: string;
  skills?: string[];
}

const ProfileSection: React.FC<ProfileSectionProps> = ({
  icon,
  title,
  buttonText,
  skills,
}) => {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const getIcon = () => {
    switch (icon) {
      case "file-text":
        return <FileText className="w-5 h-5 text-blue-700" />;
      case "code":
        return <Code className="w-5 h-5 text-blue-700" />;
      case "link":
        return <LinkIcon className="w-5 h-5 text-blue-700" />;
      default:
        return null;
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Check file type
      if (
        !file.type.match(
          "application/pdf|application/msword|application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        )
      ) {
        alert("Please upload a PDF or Word document");
        return;
      }
      // Check file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        alert("File size must be less than 10MB");
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Here you would typically handle the file upload to your backend
      console.log("Uploading file:", selectedFile.name);
      // Reset the selection after upload
      setSelectedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      setIsUploadModalOpen(false);
    }
  };

  const handleButtonClick = () => {
    if (icon === "file-text") {
      setIsUploadModalOpen(true);
      fileInputRef.current?.click();
    }
  };

  return (
    <>
      <div className="border rounded-md p-4 flex flex-col h-full">
        <div className="flex items-center gap-2 mb-4">
          {getIcon()}
          <h3 className="font-medium text-gray-800">{title}</h3>
        </div>

        {skills ? (
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        ) : buttonText ? (
          <Button
            variant="outline"
            className="mt-auto w-full text-gray-700 border-gray-300 hover:bg-gray-50"
            onClick={handleButtonClick}
          >
            {buttonText}
          </Button>
        ) : null}
      </div>

      <Modal
        isOpen={isUploadModalOpen}
        onOpenChange={setIsUploadModalOpen}
        backdrop="opaque"
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
          header: "border-b-[1px] border-[#292f46]",
          footer: "border-t-[1px] border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Upload Resume
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col items-center gap-4">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                  />
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Upload className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-medium text-gray-900">
                      {selectedFile ? selectedFile.name : "Select your resume"}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      PDF, DOC, DOCX up to 10MB
                    </p>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button variant="outline" onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  className="bg-[#6f4ef2] shadow-lg shadow-indigo-500/20"
                  onClick={handleUpload}
                  disabled={!selectedFile}
                >
                  Upload
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileSection;
