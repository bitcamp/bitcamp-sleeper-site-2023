export default defineNuxtRouteMiddleware((to) => {
  const redirects = [
    {
      from: '/orgapp',
      to: 'https://forms.gle/o8ReRB6vfvJBRtRx7',
    },
    {
      from: '/orgslides',
      to: 'https://docs.google.com/presentation/d/1-7L8bsI8jwlzhAHu8tX5__Sl2q_8wAxboDbtSUQNhJE/edit?usp=sharing',
    },
  ];

  const redir = redirects.find(
    (r) => r.from.toLowerCase() === to.fullPath.toLowerCase()
  );

  if (redir) {
    navigateTo(redir.to, { replace: true, redirectCode: 301, external: true });
  }
});
