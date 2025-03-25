import { useState } from "react";
import {
  Container,
  Title,
  Text,
  TextInput,
  Button,
  Paper,
  ColorInput,
  Group,
  CopyButton,
} from "@mantine/core";
import { IconCopy, IconCheck } from "@tabler/icons-react";

export default function DiscordTextGenerator() {
  const [color, setColor] = useState("#ff0033"); // Default color
  const [text, setText] = useState("");
  const [formattedText, setFormattedText] = useState("");

  // Generate Colored Text
  const applyColor = () => {
    if (!text) return;
    setFormattedText(`\`\`\`css\ncolor: ${color};\n${text}\`\`\``);
  };

  return (
    <Container size="sm" style={{ textAlign: "center", padding: "20px" }}>
      {/* Title */}
      <Title order={2} style={{ color: "#fff", textShadow: "0px 0px 10px #00ffff" }}>
        🎨 Discord <Text span color="blue">Colored</Text> Text Generator
      </Title>

      {/* Color Picker */}
      <Paper shadow="md" p="lg" radius="md" withBorder mt="lg" style={{ backgroundColor: "#222", color: "#fff" }}>
        <Text size="sm" mb="xs">Pick a Text Color</Text>
        <ColorInput value={color} onChange={setColor} format="hex" w="100%" mb="md" />


        {/* Text Input */}
        <TextInput
          value={text}
          onChange={(event) => setText(event.currentTarget.value)}
          placeholder="Enter your text..."
          radius="md"
          size="md"
          styles={{ input: { color: "#fff", backgroundColor: "#333" } }}
        />

        {/* Generate Button */}
        <Group justify="center" mt="md">
          <Button onClick={applyColor} color="blue" radius="md" size="md" style={{ boxShadow: "0px 0px 10px #00ffff" }}>
            Generate
          </Button>
        </Group>
      </Paper>

      {/* Output Section */}
      {formattedText && (
        <Paper mt="lg" p="md" shadow="md" radius="md" withBorder style={{ backgroundColor: "#282c34", color: "#fff" }}>
          <Text size="sm" mb="xs">Generated ANSI Code</Text>
          <Text style={{ fontFamily: "monospace", color }}>{formattedText}</Text>

          {/* Copy Button */}
          <CopyButton value={formattedText}>
            {({ copied, copy }) => (
              <Button
                leftSection={copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
                color={copied ? "green" : "blue"}
                onClick={copy}
                fullWidth
                mt="md"
              >
                {copied ? "Copied!" : "Copy Code"}
              </Button>
            )}
          </CopyButton>
        </Paper>
      )}
    </Container>
  );
}
