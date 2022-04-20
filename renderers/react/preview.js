import { parameters as docsParams } from './dist/esm/docs/config';

export const parameters = { framework: 'react', ...docsParams };
export { decorators, argTypesEnhancers } from './dist/esm/docs/config';
export * from './dist/esm/preview/config';
