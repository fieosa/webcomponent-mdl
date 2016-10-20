export default function makeShadow(element, oldVal, newVal) {
  const { classList } = element;
  const values = [2, 3, 4, 6, 8, 16, 24];
  let ov = parseInt(oldVal);
  let nv = parseInt(newVal);
  if (values.indexOf(ov) !== -1) classList.remove(`mdl-shadow--${ov}dp`);
  if (values.indexOf(nv) !== -1) classList.add(`mdl-shadow--${nv}dp`);
}
