import { Env } from '../pkg/env/env.js'

export const env = {
  port: Env.of('PORT'),
  vtexBaseUrl: Env.of('VTEX_BASE_URL'),
  authToken: Env.of('AUTH_TOKEN'),
} satisfies Record<string, Env>
