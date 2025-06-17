import { createRequestHandler } from "@shopify/remix-oxygen";

const handler = createRequestHandler();

// Export for Vercel
export default handler;

// Also export as a named export for compatibility
export { handler };