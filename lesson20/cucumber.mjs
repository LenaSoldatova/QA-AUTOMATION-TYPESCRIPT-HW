export default {
    loader: ['ts-node/esm'],
    format: [
      '@cucumber/pretty-formatter',
      'html:./reports/report.html',
      'json:./reports/report.json'
    ],
    formatOptions: {
      snippetInterface: 'async-await'
    },
    import: ['features/**/*.ts', 'src/**/*.ts'],
    retry: 0
  };