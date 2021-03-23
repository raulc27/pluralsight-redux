import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    return(
     <div className="jumbotron">
         <h1>PluralSight Administration</h1>
         <p>React, Redux and React Router for ultra-responsive web apps.</p>

         <Link to="/" className="btn btn-primary btn-lg">
             Get back
         </Link>
     </div>
    )}

export default AboutPage;