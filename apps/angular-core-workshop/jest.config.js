module.exports = {
  name: 'angular-core-workshop',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/angular-core-workshop',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
