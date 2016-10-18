import './utils/jsxdom';

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

import { default as MaterialTextfield } from './textfield';
customElements.define('mdl-textfield', MaterialTextfield);

import { default as Grid, Cell } from './grid';
customElements.define('mdl-grid', Grid);
customElements.define('mdl-cell', Cell);

import { Layout, Drawer, Navigation, Content, Header, Spacer, HeaderRow } from './layout';
customElements.define('mdl-layout', Layout);
customElements.define('mdl-drawer', Drawer);
customElements.define('mdl-navigation', Navigation);
customElements.define('mdl-content', Content);
customElements.define('mdl-header', Header);
customElements.define('mdl-spacer', Spacer);
customElements.define('mdl-header-row', HeaderRow);

import { Tabs, TabBar, Tab, TabPanel } from './tabs';
customElements.define('mdl-tabs', Tabs);
customElements.define('mdl-tab-bar', TabBar);
customElements.define('mdl-tab', Tab);
customElements.define('mdl-tab-panel', TabPanel);
