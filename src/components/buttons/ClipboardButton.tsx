"use client";

import { CopyCheckIcon, CopyIcon } from "lucide-react";

import { Button } from "../ui/Button";

import { CopyTextOptions, useClipboard } from "@/hooks/use-clipboard";

type Props = CopyTextOptions & {
  text: string;
  message?: string;
};

function ClipboardButton({ text, message }: Props) {
  const { copyText, copied } = useClipboard();

  async function handleClick() {
    await copyText({ text, message });
  }

  return (
    <Button variant="ghost" size="icon" onClick={handleClick} disabled={copied}>
      {copied ? <CopyCheckIcon size={20} /> : <CopyIcon size={20} />}
    </Button>
  );
}

export { ClipboardButton };
