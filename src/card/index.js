import basicClassCreator from '../utils/basicClassCreator';
export { default as Card } from './card';
export { default as CardTitle } from './card-title';
export const CardText = basicClassCreator('CardText', 'mdl-card__supporting-text');

