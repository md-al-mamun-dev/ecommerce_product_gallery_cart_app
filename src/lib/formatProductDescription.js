export default function formatProductDescription(rawText) {
    if (!rawText) return [];
    return rawText
            .replace(/\|\|/g, "")
            .replace(/\* /g, "• ")
            .split(/\r\n|\r|\n/);
  }