export default defineNuxtRouteMiddleware((to, from) => {
  const user = useUser();
  user.setFromPath(from.path);
  console.log(to);
  if (to.path === "/vueuse/") {
    return navigateTo({path: "/login"},{redirectCode:301});
  }
})
