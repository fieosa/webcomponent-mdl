// polyfills
import 'classlist.js/classList.js';
import 'document-register-element/build/document-register-element.max.js';

// material-design-lite.js
import 'material-design-lite';

// utils
import { registerElement, createJsxdom, map } from './utils';
//
NodeList.prototype.map = map;
HTMLCollection.prototype.map = map;

window.jsxdom = createJsxdom();

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

// Card
import { Card, CardTitle, CardText, CardMenu, CardActions } from './card';
registerElement(window, 'mdl-card', Card);
registerElement(window, 'mdl-card-title', CardTitle);
registerElement(window, 'mdl-card-text', CardText);
registerElement(window, 'mdl-card-menu', CardMenu);
registerElement(window, 'mdl-card-actions', CardActions);

import { default as MaterialSwitch } from './switch';
registerElement(window, 'mdl-switch', MaterialSwitch);

import { default as MaterialSnackbar } from './snackbar';
registerElement(window, 'mdl-snackbar', MaterialSnackbar);

import { default as MaterialSlider } from './slider';
registerElement(window, 'mdl-slider', MaterialSlider);

import { default as MaterialSpinner } from './spinner';
registerElement(window, 'mdl-spinner', MaterialSpinner);

import { default as MaterialProgress } from './progress';
registerElement(window, 'mdl-progress', MaterialProgress);

import { MaterialMenu, MaterialMenuItem } from './menu';
registerElement(window, 'mdl-menu', MaterialMenu);
registerElement(window, 'mdl-menu-item', MaterialMenuItem);

import {
  MaterialList,
  MaterialListItem,
  MaterialListItemAction,
  MaterialListItemContent ,
  MaterialListItemSubtitle,
  MaterialListItemAvatar,
} from './list';
registerElement(window, 'mdl-list', MaterialList);
registerElement(window, 'mdl-list-item', MaterialListItem);
registerElement(window, 'mdl-list-item-action', MaterialListItemAction);
registerElement(window, 'mdl-list-item-content', MaterialListItemContent);
registerElement(window, 'mdl-list-item-subtitle', MaterialListItemSubtitle);
registerElement(window, 'mdl-list-item-avatar', MaterialListItemAvatar);
