<app>

  <p>Counter: {counter}</p>

  <script type="babel">
    const store = this.opts.store;
    store.subscribe(() => {
      this.counter = store.getState().counter;
      this.update();
    });
  </script>

</app>
