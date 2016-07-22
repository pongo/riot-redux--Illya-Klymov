<with-mixin>

  <p>[mixin] Counter: {counter}</p>
  <button onclick="{ loadIssues }">Load issues</button>
  <ul>
    <li each="{ issue in issues }">
      {issue.title}
    </li>
  </ul>

  <script type="babel">
    import { loadIssues } from '../redux/actions';

    this.mixin('redux');

    this.dispatchify({
      loadIssues
    });

    this.subscribe((state) => ({counter: state.counter, issues: state.issues}));
  </script>

</with-mixin>
