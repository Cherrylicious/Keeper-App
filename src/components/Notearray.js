import React from 'react';
import Note from './Note'

function Notearray ({notes}) {
  return (
      <div className="note">
      {
          notes.map((notes,i) =>{
          return (
            <Note 
            key={i}
            title={notes[i].title}
            content={notes[i].content}
            />       
        );
        })
      }
      </div>    
  );     
}


export default Notearray;