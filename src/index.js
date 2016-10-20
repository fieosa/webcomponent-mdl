import { registerElement, jsxdom } from './utils';
window.jsxdom = jsxdom;

import { default as MaterialBadge } from './badge';
registerElement(window, 'mdl-badge', MaterialBadge);

import {
  MaterialButton,
  MaterialIconButton
} from './button';
registerElement(window, 'mdl-button', MaterialButton);
registerElement(window, 'mdl-icon-button', MaterialIconButton);

import { default as MaterialIcon } from './icon';
registerElement(window, 'mdl-icon', MaterialIcon);

import { default as MaterialTooltip } from './tooltip';
registerElement(window, 'mdl-tooltip', MaterialTooltip);

import { default as MaterialTextfield } from './textfield';
registerElement(window, 'mdl-textfield', MaterialTextfield);

import { default as Grid, Cell } from './grid';
registerElement(window, 'mdl-grid', Grid);
registerElement(window, 'mdl-cell', Cell);

import { Layout, Drawer, Navigation, Content, Header, Spacer, HeaderRow } from './layout';
registerElement(window, 'mdl-layout', Layout);
registerElement(window, 'mdl-drawer', Drawer);
registerElement(window, 'mdl-navigation', Navigation);
registerElement(window, 'mdl-content', Content);
registerElement(window, 'mdl-header', Header);
registerElement(window, 'mdl-spacer', Spacer);
registerElement(window, 'mdl-header-row', HeaderRow);

import { Tabs, TabBar, Tab, TabPanel } from './tabs';
registerElement(window, 'mdl-tabs', Tabs);
registerElement(window, 'mdl-tab-bar', TabBar);
registerElement(window, 'mdl-tab', Tab);
registerElement(window, 'mdl-tab-panel', TabPanel);
