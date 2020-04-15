import React, { Fragment } from 'react';

function Note ({title, content})  {

    return (
     <Fragment className="note"><div className="note">
       <h1>{title}</h1>
       <p>{content}</p>
       </div>    
     </Fragment>
    );
  }

export default Note;