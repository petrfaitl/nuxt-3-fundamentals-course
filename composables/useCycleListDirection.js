import {useCycleList} from "@vueuse/core";
export const useCycleListDirection = (list, options) => {
  const direction = ref(null);
  const isForward = computed(() => direction.value === "forward")
  const isBackward = computed(() => direction.value === "backward")
  const cycleList = useCycleList(list, options);

  function next() {
    direction.value = 'forward';
    cycleList.next();
  }

  function prev() {
    direction.value = 'backward';
    cycleList.prev();

  }

  return {...cycleList, prev, next, isForward, isBackward};
}
