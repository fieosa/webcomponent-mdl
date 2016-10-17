import { mdlComponentUpgrade } from './utils';

import { default as MaterialBadge } from './badge';
customElements.define('mdl-badge', MaterialBadge);

import {
  MaterialButton,
  MaterialIconButton
} from './button';
customElements.define('mdl-button', MaterialButton);
customElements.define('mdl-icon-button', MaterialIconButton);

import { default as MaterialIcon } from './icon';
customElements.define('mdl-icon', MaterialIcon);

import { default as MaterialTooltip } from './tooltip';
customElements.define('mdl-tooltip', MaterialTooltip);
