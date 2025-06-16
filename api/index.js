import { createRequestHandler } from '@shopify/hydrogen/entry-server';
import { createServer } from '@shopify/hydrogen/platforms/node';
import { App } from '../app/entry.server';

const handleRequest = createRequestHandler(App);

export default async function handler(req, res) {
  const { handleRequest: hydrogenHandler } = await createServer({
    mode: 'production',
    entry: handleRequest,
  });

  return hydrogenHandler(req, res);
}