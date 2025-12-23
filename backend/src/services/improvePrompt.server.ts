
function detectWebsiteType(idea: string): string {
  const text = idea.toLowerCase();

  if (text.includes("gym") || text.includes("fitness")) return "Gym";
  if (text.includes("restaurant") || text.includes("food")) return "Restaurant";
  if (text.includes("portfolio")) return "Portfolio";
  if (text.includes("ecommerce") || text.includes("shop")) return "E-commerce";

  return "General";
}

export function improvePrompt(idea: string): string {
  if (!idea || !idea.trim()) {
    throw new Error("Idea is required");
  }

  const websiteType = detectWebsiteType(idea);

  return `
Website Type: ${websiteType}

Original Idea:
${idea}

Improved Website Prompt:
Create a clear, user-focused ${websiteType.toLowerCase()} website that:
- Clearly explains its purpose and value
- Targets the right audience
- Highlights key features and benefits
- Includes a strong call to action
`.trim();
}