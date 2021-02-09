
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetails from './CommentDetails';
import ApprovalCard from'./ApprovalCard';

const App = () =>{
    return (
     <div className="ui container comments">
         <ApprovalCard />
        <CommentDetails 
        author="Sam" 
        date="Today at 5pm" 
        text="nice-1!" 
        avatar="https://source.unsplash.com/random"
         />
        <CommentDetails 
        author="adam" 
        date="Today at 10pm" 
        text="nice0!"
        avatar="https://source.unsplash.com/random"  
        />
        <CommentDetails 
        author="Tanay" 
        date="Today at 6pm" 
        text="Love It!!"
        avatar="https://source.unsplash.com/random"  
        />
      
        </div>
    );
};

ReactDOM.render(<App />,document.querySelector('#root'));

