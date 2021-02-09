import React from 'react';

const ApprovalCard = () =>{
 return(
     <div className="ui cards">
         <div className="content">Are you sure?</div>
         <div className="extra Content">
            <div className="ui buttons">
              <div className="ui basic green button">Approve</div>
              <div className="ui basic red button">Reject</div>
            </div>
          </div>
     </div>
 )
}

export default ApprovalCard;