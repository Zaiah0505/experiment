import React from 'react';
import textParser from '../utils/textParser';

function Parser(props) {

  function helper(text, wrapper) {
    const items = []

    for (const [index, value] of text.entries()) {
      if (typeof value == 'string') {
        items.push(value);
      } else if (typeof value == 'object' && ['strong', 'em', 'del'].includes(value.style)) {
        items.push(
          helper(value.body, value.style)
        )
      } else if (typeof value == 'object' && value.style.startsWith('link')) {
        const link = value.style.substr(4);
        items.push(
          helper(value.body, value.style)
        )
      } else if (typeof value == 'object' && value.style == 'br') {
        items.push(
          <br />
        )
      }
    }

    if (wrapper == "none") {
      return items      
    } else if (wrapper == "em") {
      return (
        <em>
          {items}
        </em>
      )
    } else if (wrapper == "strong") {
      return (
        <strong>
          {items}
        </strong>
      )
    } else if (wrapper == "del") {
      return (
        <del>
          {items}
        </del>
      )
    } else if (wrapper.startsWith("link")) {
      return (
        <strong>
          <a href={wrapper.substr(6)}>
            {items}
          </a>
        </strong>
      )
    }
  } 

  return helper(props.text, "none");
}

export default function RichText(props) {
  return (
    <Parser text={textParser(props.text)} />
  )
}