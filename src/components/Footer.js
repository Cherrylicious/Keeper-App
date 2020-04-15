import React, { Fragment } from 'react';

function Footer() {
    var d = new Date();
var n = d.getFullYear();
    return (
     <Fragment>
     <footer>
<p>Created by Julia © {n}</p>          
        </footer>
     </Fragment>
    );
  }


export default Footer;