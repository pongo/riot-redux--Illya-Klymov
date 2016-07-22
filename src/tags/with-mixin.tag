<with-mixin>

  <p>[mixin] Counter: {counter}</p>

  <script type="babel">
    this.mixin('redux');
    this.subscribe((state) => ({counter: state.counter}));
  </script>

</with-mixin>
