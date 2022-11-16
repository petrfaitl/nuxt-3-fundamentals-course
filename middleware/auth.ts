const user = useUser();

export default defineNuxtRouteMiddleware((to, from) => {
  // console.log(to, from);
  // console.log("Processing middleware")
  // console.log(user.isLoggedIn);

  if (!user.isLoggedIn) {
    // abortNavigation("not logged in");
    return navigateTo({name:"login"},{replace:true})
  }

})
