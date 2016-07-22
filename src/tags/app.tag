<app>

  <p>Counter: {counter}</p>
  <with-mixin></with-mixin>

  <script type="babel">
    const store = this.opts.store;
    store.subscribe(() => {
      this.counter = store.getState().counter;
      this.update();
    });
  </script>

</app>
