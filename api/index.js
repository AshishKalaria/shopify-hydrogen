import { createRequestHandler } from '@shopify/hydrogen/entry-server';
import { createServer } from '@shopify/hydrogen/platforms/node';
import { App } from '../src/App.server';

const handleRequest = createRequestHandler(App);

export default async function handler(req, res) {
  const { handleRequest: hydrogenRequestHandler } = await createServer({
    mode: 'production',
    entry: handleRequest,
  });

  return hydrogenRequestHandler(req, res);
}