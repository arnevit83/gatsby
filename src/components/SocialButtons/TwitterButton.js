import React from 'react'
import GetFooterSettings from '../SiteFooterSettings'
import {
    Button,
    UncontrolledTooltip,
  } from "reactstrap";
  
export const TwitterButton = () => {  
  const { twitter } = GetFooterSettings()

  return ( 
  
    <>
        <Button
                className="btn-icon-only rounded-circle"
                color="twitter"
                id="tooltip46149983"
              >
                <span className="btn-inner--icon">
                <a href={"https://twitter.com/" + twitter}><i className="fab fa-twitter textwhite"></i></a>
                </span>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip46149983">
                Follow us
              </UncontrolledTooltip>
          

 </>

 )
}


export default TwitterButton