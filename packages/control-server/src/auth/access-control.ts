import { adminAc, userAc } from 'better-auth/plugins/admin/access';

export const authRoles = {
  admin: adminAc,
  operator: userAc,
  viewer: userAc
} as const;

export type AuthRole = keyof typeof authRoles;
