const API_BASE_URL = "http://localhost:3000";
// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export async function improvePrompt(idea: string) {
  const res = await fetch(`${API_BASE_URL}/api/improve-prompt`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ idea }),
  });

  if (!res.ok) {
    throw new Error("Failed to improve prompt");
  }

  return res.json();
}