// Copyright (C) 2015 Minted Inc.
// All Rights Reserved

// CUSTOMIZE ME!

import React from 'react';

import App from './app';

describe('App', function() {
  let app, node;

  describe('render()', function() {

    it('should return the right text', function() {
      app = React.render(<App/>, document.body);
      node = React.findDOMNode(app);
      expect(node.tagName).to.equal('P');
      expect(node.innerHTML).to.equal('Hello World!');
    });
  });
});
