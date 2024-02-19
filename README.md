# tsup-tree-shaking

This POC explore whether or not a library compiled with [tsup](https://tsup.egoist.dev/) is tree-shakeable if the `treeshake` option is not explicitly set to `true`. The tsup documentation doesn't say much about the matter and [this issue](https://github.com/egoist/tsup/issues/578) is particularly confusing.

## Conclusion

After testing with a super simply library, it turns out that a library is tree-shakeable even if the `treeshake` option is not set to `true`. 

What really matters is that the `splitting` option is `true`, allowing `sideEffects` optimization and to also include the [Terser](https://webpack.js.org/plugins/terser-webpack-plugin/) plugin.

Still, as explained in this [article](https://medium.com/engineering-housing/dead-code-elimination-and-tree-shaking-at-housing-part-1-307a94b30f23), unused imports might not be cleaned up since webpack do it's tree shaking before terser is executed. Therefore, if imports becomes useless after terser eliminated dead code, the import will still be included in the final bundle.
