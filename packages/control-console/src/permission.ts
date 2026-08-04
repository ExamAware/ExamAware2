import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import router from '@/router';
import { useSessionStore } from '@/store';

NProgress.configure({ showSpinner: false });

router.beforeEach(async (to) => {
  NProgress.start();
  const session = useSessionStore();

  if (!session.initialized) {
    await session.refresh();
  }

  if (to.meta.anonymous) {
    return session.authenticated ? { name: 'DashboardBase' } : true;
  }

  if (!session.authenticated) {
    return { name: 'login', query: { redirect: to.fullPath } };
  }

  return true;
});

router.afterEach(() => {
  NProgress.done();
});

router.onError(() => {
  NProgress.done();
});
