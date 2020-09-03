'use strict';

// tests for hello
// Generated by serverless-jest-plugin

const mod = require('../handler');

const jestPlugin = require('serverless-jest-plugin');
const lambdaWrapper = jestPlugin.lambdaWrapper;
const wrapped = lambdaWrapper.wrap(mod, { handler: 'comics' });

describe('comics', () => {
  beforeAll((done) => {
    //  lambdaWrapper.init(liveFunction); // Run the deployed lambda

    done();
  });

  it('implement tests here', () => {
    jest.setTimeout(30000);
    return wrapped.run({}).then((response) => {
      expect(response).toBeDefined();
    });
  });
});
