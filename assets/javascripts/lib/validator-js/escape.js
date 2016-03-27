import assertString from './util/assertString.js';

export default function escape(str) {
  assertString(str);
  return (str.replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\//g, '&#x2F;')
        .replace(/\`/g, '&#96;'));
}
