
# Contributing to any-fs

Contributions are always welcome. Before contributing please read the
[code of conduct](https://js.foundation/community/code-of-conduct) &
[search the issue tracker](https://github.com/teambit/any-fs/issues); your issue
may have already been discussed or fixed in `master`. To contribute,
[fork](https://help.github.com/articles/fork-a-repo/) any-fs, commit your changes,
& [send a pull request](https://help.github.com/articles/using-pull-requests/).

## Feature Requests

Feature requests should be submitted in the
[issue tracker](https://github.com/teambit/any-fs/issues), with a description of
the expected behavior & use case.

Before submitting a request, please search for similar ones in the
[closed issues](https://github.com/teambit/any-fs/issues?q=is%3Aissue+is%3Aclosed).



## Coding Guidelines

In addition to the following guidelines, please follow the conventions already
established in the code.

- **Spacing**:<br>
  Use two spaces for indentation. No tabs.

- **Naming**:<br>
  Keep variable & method names concise & descriptive.<br>
  Variable names `index`, `array`, & `iteratee` are preferable to
  `i`, `arr`, & `fn`.

- **Quotes**:<br>
  Single-quoted strings are preferred to double-quoted strings; however,
  please use a double-quoted string if the value contains a single-quote
  character to avoid unnecessary escaping.

- **Comments**:<br>
  Please use single-line comments to annotate significant additions, &
  [JSDoc-style](http://www.2ality.com/2011/08/jsdoc-intro.html) comments for
  functions.

Guidelines are enforced using [prettier](https://prettier.io/):
```bash
$ npm run prettier
```

