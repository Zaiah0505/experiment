import React from 'react';
import RichText from './RichText';

export default function Details(props) {
  const {title, organisation, poster, posterLink, text} = props.event;

  return (
    <table align="center" width="800" style={{backgroundColor:"#F8F8F8"}}>
      <tr bgcolor="#F8F8F8">
        <td colspan="4" align="middle" style={{width:"800px", padding: "20px"}}>
          <h3 align="center"
            style={{color:"#000", fontWeight: "bold", lineHeight: "31px", fontSize: "25px", fontFamily: "Trebuchet MS", margin: 0}}>
            <strong id="docs-internal-guid-04723276-3708-c4b0-1ea1-4d12ed12295c"><a id="1"></a>{title}</strong>
          </h3>
          <p align="center"
            style={{color:"#000", fontWeight: "bold", lineHeight: "31px", fontSize: "18px", fontFamily: "Trebuchet MS", margin: 0, padding: "5px"}}>
            <em>{organisation}</em></p>
        </td>
      </tr>
      <tr bgcolor="#F8F8F8">
        <td colspan="4" align="center" valign="middle"
          style={{padding: "5px 0px 5px", fontSize: "1px", lineHeight: "1px", width:"300px"}}>
          <p align="center"
            style={{color:"#000", fontWeight: "normal", margin: 0, padding: 0, lineHeight: "20px", fontSize: "15px", fontFamily: "Trebuchet MS"}}>
            <a href={posterLink}><img
                src={poster}
                width="600" /></a></p>
        </td>
      </tr>
      <tr bgcolor="#F8F8F8">
        <td colspan="4" align="center" valign="middle"
          style={{padding: "5px 0px 5px", fontSize: "1px", lineHeight: "1px", width:"300px"}}>
          <p align="center"
            style={{color:"#000", fontWeight: "normal", margin: 0, padding: 0, lineHeight: "20px", fontSize: "12px", fontFamily: "Trebuchet MS"}}>
          <p
            style={{color:"#000", fontWeight: "normal", margin: 0, padding: "0px 100px", lineHeight: "20px", fontSize: "15px", fontFamily: "Trebuchet MS", textAlign: "Middle"}}>
            <br />
            <RichText text={text}/>
          </p>
          </p>
        </td>
      </tr>
      <td align="right" colspan="4"
        style={{fontSize: "20px", padding: "20px", fontFamily: "Trebuchet MS", backgroundColor:"#F8F8F8"}}>
        <box type="box" style={{padding: "5px 15px 5px 15px", backgroundColor:"#D8D8D8"}}><a href="#HIGHLIGHTS"
            style={{color: "#000"}}>BACK TO HIGHLIGHTS</a></box>
      </td>
      <tr>
        <td colspan="4" style={{backgroundColor:"#F8F8F8"}}>
          <hr style={{height:"3px", width:"800px", backgroundColor:"#D8D8D8", align:"center"}} />
        </td>
      </tr>
    </table>
  )
}