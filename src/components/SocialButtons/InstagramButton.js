import React from 'react'
import GetFooterSettings from '../SiteFooterSettings'
import {
  Button,
  UncontrolledTooltip,
} from "reactstrap";
export const InstagramButton = () => {  
  const { ig } = GetFooterSettings()

  return ( 
  
    <>
    <Button
    className="btn-icon-only rounded-circle"
    color="dribbble"
    id="tooltip564081339"
  >
    <span className="btn-inner--icon">
      <a href={"https://instagram.com/" + ig}><i className="fab fa-instagram textwhite"></i></a>
    </span>
  </Button>
               <UncontrolledTooltip delay={0} target="tooltip564081339">
               Follow us
             </UncontrolledTooltip>

 </>

 )
}


export default InstagramButton