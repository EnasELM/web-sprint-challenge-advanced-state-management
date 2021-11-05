import React from 'react';

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//

const Smurf = (props)=> {

    const { smurf } = props;
    console.log(smurf )
    console.log('smurf' )
    return(
    <div data-testid="smurf" className="card">
        <div className="card-body">
        <h3 className="card-title">{smurf[1].name}</h3>
            <hr/>
            <p className="card-text"><b>Position:</b> {smurf[1].position}</p>
            <p className="card-text"><b>Nickname:</b> {smurf[1].nickname}</p>
            <p className="card-text"><b>Description:</b> {smurf[1].description}</p>
        </div>
    </div>);
}

export default Smurf;