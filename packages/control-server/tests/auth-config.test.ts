import { describe, expect, it } from 'vitest';
import { readBootstrapAdminInput } from '../src/auth/bootstrap.js';
import { readEnvironment } from '../src/config/env.js';

describe('authentication configuration', () => {
  it('enables passwords but disables self-registration by default', () => {
    const result = readEnvironment({});

    expect(result.auth.passwordEnabled).toBe(true);
    expect(result.auth.allowSelfRegistration).toBe(false);
    expect(result.auth.trustedOrigins).toEqual([
      'http://localhost:3100',
      'http://localhost:5174',
      'http://127.0.0.1:5174'
    ]);
  });

  it('accepts explicit authentication policy switches', () => {
    const result = readEnvironment({
      AUTH_PASSWORD_ENABLED: 'false',
      AUTH_ALLOW_SELF_REGISTRATION: 'true'
    });

    expect(result.auth.passwordEnabled).toBe(false);
    expect(result.auth.allowSelfRegistration).toBe(true);
  });
  it('accepts an explicit trusted-origin allowlist', () => {
    const result = readEnvironment({
      AUTH_TRUSTED_ORIGINS: 'https://control.example.edu, https://backup.example.edu/'
    });

    expect(result.auth.trustedOrigins).toEqual([
      'https://control.example.edu',
      'https://backup.example.edu'
    ]);
  });

  it('rejects trusted origins with paths', () => {
    expect(() =>
      readEnvironment({ AUTH_TRUSTED_ORIGINS: 'https://control.example.edu/admin' })
    ).toThrow('AUTH_TRUSTED_ORIGINS must contain HTTP origins without paths');
  });

  it('rejects ambiguous boolean values', () => {
    expect(() => readEnvironment({ AUTH_ALLOW_SELF_REGISTRATION: 'yes' })).toThrow(
      'AUTH_ALLOW_SELF_REGISTRATION must be either true or false'
    );
  });

  it('requires an explicit production secret', () => {
    expect(() => readEnvironment({ NODE_ENV: 'production' })).toThrow(
      'BETTER_AUTH_SECRET is required in production'
    );
  });
});

describe('initial administrator input', () => {
  it('normalizes an administrator email address', () => {
    const result = readBootstrapAdminInput({
      CONTROL_ADMIN_EMAIL: ' Admin@Example.EDU ',
      CONTROL_ADMIN_NAME: 'School administrator',
      CONTROL_ADMIN_PASSWORD: 'a-strong-bootstrap-password'
    });

    expect(result).toEqual({
      email: 'admin@example.edu',
      name: 'School administrator',
      password: 'a-strong-bootstrap-password'
    });
  });

  it('rejects a weak bootstrap password', () => {
    expect(() =>
      readBootstrapAdminInput({
        CONTROL_ADMIN_EMAIL: 'admin@example.edu',
        CONTROL_ADMIN_NAME: 'School administrator',
        CONTROL_ADMIN_PASSWORD: 'short'
      })
    ).toThrow('CONTROL_ADMIN_PASSWORD must contain between 12 and 128 characters');
  });
});
