export function getFromLS(item, key) {
  let ls = {};
  if (window.localStorage) {
    try {
      ls = JSON.parse(window.localStorage.getItem(item)) || {};
    } catch (e) {
      /*Ignore*/
    }
  }
  return ls[key];
}

export function saveToLS(item, key, value) {
  if (window.localStorage) {
    window.localStorage.setItem(
      item,
      JSON.stringify({
        [key]: value
      })
    );
  }
}

export function parseDate(date, noTime?) {
  return noTime
    ? new Date(Date.parse(date)).toLocaleDateString([], {
        day: 'numeric',
        month: '2-digit',
        year: 'numeric'
      })
    : new Date(Date.parse(date)).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
}

export function parseTimestamp(timestamp) {
  let date = new Date(null);
  var options = {
    day: 'numeric',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  date.setSeconds(timestamp);
  return date.toLocaleDateString([], options);
}

export function getColorFromString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  var colour = '#';
  for (let i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 0xff;
    colour += ('00' + value.toString(16)).substr(-2);
  }
  return colour;
}
