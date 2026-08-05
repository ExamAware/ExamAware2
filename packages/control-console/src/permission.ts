import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import router from '@/router';
import { useSessionStore } from '@/store';
import { isBrowserSupported } from '@/utils/browser';

NProgress.configure({ showSpinner: false });

router.beforeEach(async (to) => {
  NProgress.start();
  if (to.name === 'browser-incompatible') return true;
  if (!isBrowserSupported()) return { name: 'browser-incompatible' };
  const session = useSessionStore();

  if (!session.initialized) {
    await session.refresh();
  }

  if (to.meta.anonymous) {
    return session.authenticated ? { name: 'Overview' } : true;
  }

  if (!session.authenticated) {
    return { name: 'login', query: { redirect: to.fullPath } };
  }

  const requiredRoles = to.matched.flatMap((record) =>
    Array.isArray(record.meta.roles) ? (record.meta.roles as string[]) : []
  );
  if (requiredRoles.length && !requiredRoles.includes(session.user?.role ?? '')) {
    return { name: 'Overview' };
  }

  return true;
});

router.afterEach(() => {
  NProgress.done();
});

router.onError(() => {
  NProgress.done();
});
