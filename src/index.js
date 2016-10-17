import { mdlComponentUpgrade } from './utils';

import { default as MaterialBadge } from './badge';
customElements.define('mdl-badge', MaterialBadge);

import { MaterialButton } from './button';
customElements.define('mdl-button', MaterialButton);

import { MaterialIconButton } from './button';
customElements.define('mdl-icon-button', MaterialIconButton);

import { default as MaterialIcon } from './icon';
customElements.define('mdl-icon', MaterialIcon);
