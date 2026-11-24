
export const parseAiJson = (content) => {
  try {
    // Remove Markdown code fences if present
    const cleaned = content
      .replace(/^```json\s*/i, "")
      .replace(/^```\s*/i, "")
      .replace(/\s*```$/, "")
      .trim();

    return JSON.parse(cleaned);

  } catch (error) {
    console.error("Invalid AI JSON:", content);
    throw new Error("AI returned invalid JSON.");
  }
};
