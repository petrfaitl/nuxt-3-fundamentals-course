export default defineNuxtRouteMiddleware((to, from) => {
  const user = useUser();
  user.setFromPath(from.path);
  // console.log(to);
  if (to.path === "/vueuse/") {
    return navigateTo({path: "/login"},{redirectCode:301});
  }
  if(to.name === "logout"){
    user.isLoggedIn = false;
    return navigateTo({path: "/login"});

  }
})
