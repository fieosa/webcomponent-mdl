const values = [2, 3, 4, 6, 8, 16, 24].map(v => `mdl-shadow--${v}dp`);

export default function makeShadow(element, oldVal, newVal) {
  if (oldVal && oldVal in values) element.classList.remove(`mdl-shadow--${oldVal}dp`);
  if (newVal && newVal in values) element.classList.add(`mdl-shadow--${newVal}dp`);
}
