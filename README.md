# tsup-tree-shaking

This POC explore whether or not a library compiled with [tsup](https://tsup.egoist.dev/) is tree-shakeable if the `treeshake` option is not explicitly set to `true`. The tsup documentation doesn't say much about the matter and [this issue](https://github.com/egoist/tsup/issues/578) is particularly confusing.

## Conclusion

After testing with a super simply library, it turns out that a library is tree-shakeable even if the `treeshake` option is not set to `true`. 

What really matters is that the `splitting` option is `true` if the bundler is not using the [TerserPlugin](https://www.npmjs.com/package/terser-webpack-plugin).
