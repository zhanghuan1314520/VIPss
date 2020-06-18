//持久化的存储插件
export default store => {
  if (localStorage.state) store.replaceState(JSON.parse(localStorage.state));
  store.subscribe((mutation, state) => {
    localStorage.state = JSON.stringify(state);
  });
};
