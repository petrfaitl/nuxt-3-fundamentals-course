

export const useUser = defineStore("user", {
  state: () => {
    return {
      isLoggedIn: false,
      fromPath: "",
    }
  },
  getters: {},
  actions: {
    login() {
      this.isLoggedIn = true;
      if(this.fromPath !== "/login"){
        navigateTo({path: this.fromPath});
      }else {
        useRouter().push("/movies");
      }

    },
    logout() {
      this.isLoggedIn = false;
      useRouter().push("/login");
    },
    setFromPath(url){
      this.fromPath = url;
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUser, import.meta.hot));
}
