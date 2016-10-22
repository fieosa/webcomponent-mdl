export default function makeShadow(element, oldVal, newVal) {
  const values = [2, 3, 4, 6, 8, 16, 24];
  let ov = parseInt(oldVal);
  let nv = parseInt(newVal);
  if (values.indexOf(ov) !== -1) element.classList.remove(`mdl-shadow--${ov}dp`);
  if (values.indexOf(nv) !== -1) element.classList.add(`mdl-shadow--${nv}dp`);
}
