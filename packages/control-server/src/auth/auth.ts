import { sso } from '@better-auth/sso';
import { drizzleAdapter } from '@better-auth/drizzle-adapter';
import { betterAuth } from 'better-auth';
import type { BetterAuthOptions } from 'better-auth';
import { APIError, createAuthMiddleware, getSessionFromCtx } from 'better-auth/api';
import { admin, username } from 'better-auth/plugins';
import { env } from '../config/env.js';
import { database } from '../database/client.js';
import * as schema from '../database/auth-schema.js';
import { authRoles } from './access-control.js';

const SSO_MANAGEMENT_PATHS: Record<string, true> = {
  '/sso/register': true,
  '/sso/update-provider': true,
  '/sso/delete-provider': true,
  '/sso/verify-domain': true,
  '/sso/request-domain-verification': true
};

function hasAdminRole(role: unknown): boolean {
  return typeof role === 'string' && role.split(',').some((value) => value.trim() === 'admin');
}

const authOptions: BetterAuthOptions = {
  appName: 'ExamAware Control',
  baseURL: env.betterAuthUrl,
  secret: env.betterAuthSecret,
  trustedOrigins: [...env.auth.trustedOrigins],
  database: drizzleAdapter(database, {
    provider: 'pg',
    schema
  }),
  emailAndPassword: {
    enabled: env.auth.passwordEnabled,
    disableSignUp: !env.auth.allowSelfRegistration
  },
  hooks: {
    before: createAuthMiddleware(async (context) => {
      if (!SSO_MANAGEMENT_PATHS[context.path]) {
        return;
      }

      const session = await getSessionFromCtx(context);
      if (!session || !hasAdminRole(session.user.role)) {
        throw new APIError('FORBIDDEN', {
          message: 'Only an administrator can manage identity providers'
        });
      }
    })
  },
  plugins: [
    admin({
      roles: authRoles,
      adminRoles: ['admin'],
      defaultRole: 'viewer'
    }),
    username({ minUsernameLength: 3, maxUsernameLength: 32 }),
    sso({
      disableImplicitSignUp: !env.auth.allowSelfRegistration,
      organizationProvisioning: { disabled: true },
      trustEmailVerified: true
    })
  ]
};

export const auth = betterAuth(authOptions);
