export default class plugin {
  constructor(props) {
    this.hooks = [];
  }
  use(plugin) {
    const { hooks } = this;
    hooks.includes(plugin);
  }
}
