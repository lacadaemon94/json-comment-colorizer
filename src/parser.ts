interface Decoration {
  startLine: number;
  startCharacter: number;
  endLine: number;
  endCharacter: number;
  color: string;
  textColor: string;
}

export function parseJSONWithComments(jsonString: string): Decoration[] {
  const lines = jsonString.split(/\r?\n/);
  const decorations: Decoration[] = [];

  lines.forEach((line, index) => {
    const propertyRegex = /"([^"]+)":.*\/\/.*(hardcoded|user|dynamic).*$/;
    const match = line.match(propertyRegex);

    if (match) {
      const propertyName = match[1];
      const commentKeyword = match[2];
      const startCharacter = line.indexOf(propertyName);
      const endCharacter = startCharacter + propertyName.length;

      let color = "rgba(0, 0, 0, 0.3)"; // Default color, e.g., black with transparency
      let textColor = "rgba(0, 0, 0, 0.15)"; // Default textColor, e.g., black with less transparency
      switch (commentKeyword) {
        case "hardcoded":
          color = "rgba(204, 51, 0, 0.6)"; // Red for hardcoded
          textColor = "rgba(255, 239, 233, 0.8)";
          break;
        case "user":
          color = "rgba(19, 87, 213, 0.6)"; // Blue for user
          textColor = "rgba(235, 246, 255, 0.8)";
          break;
        case "dynamic":
          color = "rgba(3, 120, 42, 0.6)"; // Green for dynamic
          textColor = "rgba(224, 243, 230, 0.8)"; // Green for dynamic
          break;
      }

      decorations.push({
        startLine: index,
        startCharacter: startCharacter,
        endLine: index,
        endCharacter: endCharacter,
        color: color,
        textColor: textColor,
      });
    }
  });

  return decorations;
}
