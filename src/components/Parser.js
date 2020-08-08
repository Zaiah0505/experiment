import React from 'react';

export default function Parser(props) {

  function helper(text, wrapper) {
    const items = []

    for (const [index, value] of text.entries()) {
      //items.push(<li key={index}>{value}</li>)
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

    console.log(items)

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