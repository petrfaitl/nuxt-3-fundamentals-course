
const router = useRouter();

export const useUser = defineStore("user", {
  state: () => {
    return {
      isLoggedIn: false,
    }
  },
  getters: {},
  actions: {
    login() {
      this.isLoggedIn = true;
      router.push("/movies");

    },
    logout() {
      this.isLoggedIn = false;
      router.push("/login");

    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUser, import.meta.hot));
}
