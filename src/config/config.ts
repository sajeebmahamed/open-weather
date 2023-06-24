import { z } from 'zod';
import prod from './config.production.json';
import dev from './config.development.json';

let rawConfig = {};

switch (window.location.hostname) {
    case 'production-url.com':
        rawConfig = prod;
        break;
    case 'development-url':
        rawConfig = dev;
        break;
    default:
        rawConfig = dev;
}

const config = z
    .object({
        API_URL: z.string(),
    })
    .parse(rawConfig);

export default config;
