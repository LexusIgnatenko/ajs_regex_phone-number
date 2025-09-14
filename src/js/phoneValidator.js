export function validator(str) {
   return str.replace(/[\s()-]/g, '').replace(/^\8/g, '+7');
}