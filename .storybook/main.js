module.exports = {
  stories: ['../src/app/components/**/*.stories.ts'],
  addons: [
    '@storybook/addon-actions', 
    '@storybook/addon-links', 
    '@storybook/addon-notes' ,
    '@storybook/addon-knobs',
  

  ],
   import: './addons/design-assets',
};