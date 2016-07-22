<app>

  <div>
    <p>Counter: {counter}</p>
    <button onclick="{ loadIssues }">Load issues</button>
    <ul>
      <li each="{ issue in issues }">
        {issue.title}
      </li>
    </ul>
  </div>

  <hr>

  <with-mixin></with-mixin>

  <script type="babel">
    import { loadIssues } from '../redux/actions';
    import { bindActionCreators } from 'redux';

    const store = this.opts.store;
    let state = store.getState();

    store.subscribe(() => {
      state = store.getState();
      this.counter = state.counter;
      this.issues = state.issues;
      this.update();
    });

    this.loadIssues = bindActionCreators(loadIssues, store.dispatch);
  </script>

</app>
