// components/GitCloneDisplay.tsx
import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

interface GitCloneDisplayProps {
  repoUrl: string;
  mobileChars?: number; // Number of characters to show on mobile
}

export function GitCloneDisplay({
  repoUrl = "https://github.com/example/repo.git",
  mobileChars = 30, // Default to 30 characters
}: GitCloneDisplayProps) {
  const [copied, setCopied] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Function to truncate text for mobile
  const truncateText = (text: string) => {
    if (typeof window !== "undefined") {
      // Check if screen width is less than 640px (sm breakpoint in Tailwind)
      const isMobileView = window.innerWidth < 640;
      if (isMobileView) {
        return text.length > mobileChars
          ? `${text.substring(0, mobileChars)}...`
          : text;
      }
    }
    return text;
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(`git clone ${repoUrl}`)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  // Effect to handle resize events
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayUrl = isMobile ? truncateText(repoUrl) : repoUrl;

  return (
    <pre className="relative flex items-center mt-4 p-4 bg-gray-900 rounded-lg overflow-x-auto">
      <code className="flex items-center text-sm sm:text-base text-white">
        <span className="whitespace-nowrap text-white">
          git clone <span className="text-purple-500 ml-1">{displayUrl}</span>{" "}
        </span>
      </code>
      <button
        onClick={handleCopy}
        className="ml-2 p-1.5 hover:bg-gray-700 rounded transition-colors flex items-center justify-center"
        aria-label="Copy command"
      >
        {copied ? (
          <Check className="w-4 h-4 text-gray-400" />
        ) : (
          <Copy className="w-4 h-4 text-gray-400" />
        )}
      </button>
    </pre>
  );
}
