(function () {
	'use strict';

  function getColorClass(color, level) {
    const lvlClass = (level) ? `-${level}` : '';
    return `mdl-color--${color}${lvlClass}`;
  }

  function getTextColorClass(color, level) {
    const lvlClass = (level) ? `-${level}` : '';
    return `mdl-color-text--${color}${lvlClass}`;
  }

  window.getColorClass = getColorClass,
  window.getTextColorClass = getTextColorClass
}());
