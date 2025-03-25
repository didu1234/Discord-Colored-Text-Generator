import { Button } from "@mantine/core";
import { useClipboard } from "@mantine/hooks";

export default function CopyButton({ text }: { text: string }) {
  const clipboard = useClipboard();

  return (
    <Button color={clipboard.copied ? "green" : "blue"} onClick={() => clipboard.copy(text)}>
      {clipboard.copied ? "Copied!" : "Copy"}
    </Button>
  );
}
