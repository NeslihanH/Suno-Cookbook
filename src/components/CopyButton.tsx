import { useState } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  text: string;
  label?: string;
};

// Copies text to the clipboard and briefly confirms.
export function CopyButton({ text, label }: Props) {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Fallback for browsers without the async clipboard API.
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      type="button"
      className={`copy-btn${copied ? " is-copied" : ""}`}
      onClick={onCopy}
      aria-label={label ?? t("card.copy")}
    >
      {copied ? t("card.copied") : (label ?? t("card.copy"))}
    </button>
  );
}
