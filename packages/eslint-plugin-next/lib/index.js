/**
 * @fileoverview ESLint recommended configuration for Next.js
 * @author Ashkan Pourghasem
 */
'use strict';

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// define configurations
module.exports.configs = {
  recommended: {
    extends: [
      'plugin:@ashkan-pm/react/recommended',
      'plugin:@next/next/recommended'
    ],
    rules: {
      // Since we have TS, we don't need prop type validation
      'react/prop-types': 0,
      'jsx-a11y/anchor-is-valid': [
        'error',
        {
          components: ['Link'],
          specialLink: ['hrefLeft', 'hrefRight'],
          aspects: ['invalidHref', 'preferButton']
        }
      ]
    }
  }
};
