// import axios from "axios"

// export const askAi = async (messages) => {
//     try {
//         if(!messages || !Array.isArray(messages) || messages.length === 0) {
//             throw new Error("Messages array is empty.");
//         }
//         const response = await axios.post("https://openrouter.ai/api/v1/chat/completions",
//             {
//                 model: "openai/gpt-4o-mini",
//                 messages: messages

//             },
//             {
//             headers: {
//             Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
//             'Content-Type': 'application/json',
//         },});

//         const content = response?.data?.choices?.[0]?.message?.content;

//         if (!content || !content.trim()) {
//       throw new Error("AI returned empty response.");
//     }

//     return content
//     } catch (error) {
//             console.error("OpenRouter Error:", error.response?.data || error.message);
//     throw new Error("OpenRouter API Error");

//     }
// }

















import axios from "axios";

const MODEL =
  process.env.OPENROUTER_MODEL ||
  "openrouter/free";

export const askAi = async (messages, options = {}) => {
  try {
    if (!Array.isArray(messages) || messages.length === 0) {
      throw new Error("Messages array is empty.");
    }

    if (!process.env.OPENROUTER_API_KEY) {
      throw new Error("OpenRouter API key is missing.");
    }

    const payload = {
      model: MODEL,
      messages,
      ...(options.json && {
        response_format: { type: "json_object" }
      })
    };

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      payload,
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        },
        timeout: 60000
      }
    );

    const content =
      response?.data?.choices?.[0]?.message?.content;

    if (typeof content !== "string" || !content.trim()) {
      throw new Error("AI returned empty response.");
    }

    return content.trim();

  } catch (error) {
    console.error(
      "OpenRouter Error:",
      error.response?.data || error.message
    );

    throw new Error("OpenRouter API Error");
  }
};
