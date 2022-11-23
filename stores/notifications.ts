

export const useNotifications = defineStore('notifications', {
  state: () => {
    return {
      message: "",
      duration:2000,
    }
  },
  getters: {},
  actions: {
    displayNotification(msg:string, duration:number = 2000):void{
      this.message = msg;
      this.duration = duration;
    },
    hide(){
      this.message = "";
    }
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useNotifications, import.meta.hot));
}
