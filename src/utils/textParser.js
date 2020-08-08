const validator = require('validator');

export default function splitter(text) {
  var breakpoint;
  var styleType;

  function isStyleStart(text, prevChar) {
    if (['*', '_', '~'].includes(text[0]) 
    && (prevChar === undefined || !validator.isAlphanumeric(prevChar))
    && (text[1] !== undefined && text[1] !== ' ')) {
      const startChar = text[0];
      for (let i = 1; i < text.length; i++) {
        if (text[i] === startChar 
          && (text[i + 1] === undefined || !validator.isAlphanumeric(text[i + 1]))
          && (text[i - 1] !== undefined && text[i - 1] !== ' ')) {
            breakpoint = i
            styleType = startChar === '*'
              ? "strong"
              : startChar === '_'
                ? "em"
                : "del"
            return true;
        }
      }
      return false;
    } else if (text[0] === "{") {
      for (let i = 1; i < text.length; i++) {
        if (text[i] === "}" && text[i + 1] === "<") {
          var extraText = text.substr(i + 2);
          for (let j = 0; j < extraText.length; j++) {
            if (extraText[j] === ">") {
              const linkText = text.substr(i + 2, j);
              if (validator.isURL(linkText) && (linkText.startsWith("http://") || linkText.startsWith("https://"))) {
                styleType = "link"
                breakpoint = i + j + 2;
                return true
              }
            }
          }
        }
      }
    } else if (text[0] === "\n") {
      styleType = "br"
      breakpoint = 2
      return true
    } else {
      return false;
    }
  }

  var tempText = text;
  var prevChar = undefined;
  var front = "";
  var mid;
  var end;

  while (tempText.length > 0 && !isStyleStart(tempText, prevChar)) {
    front += tempText[0];
    prevChar = tempText[0];
    tempText = tempText.substr(1);
  }

  if (styleType === 'br') {
    mid = ' ';
    end = tempText.substr(1)
  } else {
    mid = tempText.substr(1, breakpoint - 1)
    end = tempText.substr(breakpoint + 1);
  }

  var tempMid = "";
  if (styleType === 'link') {
    while(mid.length > 0 && mid[0] != '}') {
      tempMid += mid[0];
      mid = mid.substr(1);
    }
    const linkText = mid.substr(2)
    styleType = 'link: ' + linkText
    mid = tempMid;
  }

  if (front === '') {
    if (mid === '') {
      return ['']
    } else {
      if (end === '') {
        return [{style: styleType, body: splitter(mid)}];
      } else {
        return [{style: styleType, body: splitter(mid)}, ...splitter(end)]
      }
    } 
  } else {
    if (mid === '') {
      return [front]
    } else {
      if (end === '') {
        return [front, {style: styleType, body: splitter(mid)}];
      } else {
        return [front, {style: styleType, body: splitter(mid)}, ...splitter(end)]
      }
    }  
  }
}