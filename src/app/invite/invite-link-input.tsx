"use client";

import { Link, Copy } from "lucide-react";

import { IconButton } from "@/components/icon-button";
import { InputRoot, InputIcon, InputField } from "@/components/input";

interface InviteLinkInputProps {
  inviteLink: string;
}

export function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
  const copyInviteLinkToClipboard = async () => {
    await navigator.clipboard
      .writeText(inviteLink)
      .then(() => alert("Url copiada para área de transferência!"))
      .catch((e) => console.error(e));
  };

  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>

      <InputField
        readOnly
        defaultValue="https://devstage.com/codecraft-summit-2025/1289"
      />

      <IconButton className="-mr-2" onClick={copyInviteLinkToClipboard}>
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  );
}
