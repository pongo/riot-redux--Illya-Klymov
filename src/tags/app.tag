<app>

  <p>Counter: {state.counter}</p>

  <script type="babel">
    const store = this.opts.store;
    this.state = store.getState();
    this.counter = this.state.counter || 0;

    store.subscribe(() => {
      this.state = store.getState();
      this.update();
    });
  </script>

</app>
