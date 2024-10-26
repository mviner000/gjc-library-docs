import React, { useState } from "react";
import { Clipboard, Check } from "lucide-react"; // Import the Check icon as well

interface CopyButtonProps {
  text: string;
}

export const CopyButton: React.FC<CopyButtonProps> = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);

        // Reset back to the Clipboard icon after 2 seconds
        setTimeout(() => setCopied(false), 1000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <button
      onClick={handleCopy}
      className="bg-transparent border-none cursor-pointer p-1 flex items-center justify-center"
      aria-label="Copy to clipboard"
    >
      {copied ? (
        <Check size={16} color="currentColor" /> // Show the checkmark when copied
      ) : (
        <Clipboard size={16} color="currentColor" />
      )}
    </button>
  );
};

export default CopyButton;
