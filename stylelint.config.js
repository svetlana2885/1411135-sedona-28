module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-config-standard'],
  rules: {
    'font-family-no-missing-generic-family-keyword': null,
    'selector-type-no-unknown': null,
    'no-descending-specificity': null,
    'max-empty-lines': 2,
    'unit-whitelist': ['em', 'rem', '%', 's', 'px', 'fr'],
  },
};
