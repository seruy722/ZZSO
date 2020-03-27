// import { isMobile } from 'src/utils/platform/checkPlatform';

export default function guest({ next, to }) {
  const routerNames = ['index', 'feedback', 'seminar'];
  devlog.log('routerNames', routerNames);
  devlog.log('to', to);
  devlog.log('next', next);
  // if (isMobile() && _.includes(routerNames, to.name)) {
  //     next('/courses');
  // } else {
  //     next();
  // }
  next();
}
