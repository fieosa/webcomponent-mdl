import basicClassCreator from '../utils/basicClassCreator';
export { default as Card } from './card';
export { default as CardTitle } from './card-title';
export { default as CardActions } from './card-actions';
export const CardText = basicClassCreator('mdl-card__supporting-text');
export const CardMenu = basicClassCreator('mdl-card__menu');
export const CardTitleText = basicClassCreator('mdl-card__title-text');
