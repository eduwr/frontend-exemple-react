export function phoneMask(v: string): string {
  let r = v.replace(/\D/g, '');
  r = r.replace(/^0/, '');
  if (r.length > 10) {
    r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, '($1) $2-$3');
  } else if (r.length > 5) {
    r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, '($1) $2-$3');
  } else if (r.length > 2) {
    r = r.replace(/^(\d\d)(\d{0,5})/, '($1) $2');
  } else {
    r = r.replace(/^(\d*)/, '($1');
  }
  return r;
}

export function removeMask(text: string): string {
  return text.replace(/[.]/g, '').replace(/[-]/g, '');
}
