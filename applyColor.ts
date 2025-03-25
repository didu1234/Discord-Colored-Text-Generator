const applyColor = (color: string, text: string) => {
    if (color === "#ff0000") {
      return "```diff\n- " + text + "\n```"; // Red
    } else if (color === "#00ff00") {
      return "```diff\n+ " + text + "\n```"; // Green
    } else if (color === "#ffff00") {
      return "```fix\n" + text + "\n```"; // Yellow
    } else if (color === "#0000ff") {
      return "```css\n[" + text + "]\n```"; // Blue
    } else {
      return "```ini\n[" + text + "]\n```"; // Default (white)
    }
  };
  
  export default applyColor;
  