export default function changeNamingStyle(str, style='camel') {
  return str && str.replace(/(?:^\w|[A-Z]|\b\w|\s+|\-+|\_+)/g, function(match, index) {
    if (/[\s\-\_]+/.test(match)) {
      return '';
    }
    if (index === 0) {
      return match.toLowerCase();
    }
    switch(style.toLowerCase()) {
      case 'underscore':
        return '_' + match.toLowerCase();
      case 'dash':
        return '-' + match.toLowerCase();
      default:
        return match.toUpperCase();
    }
  });
};
