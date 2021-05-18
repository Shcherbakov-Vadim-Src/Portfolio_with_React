import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";


export default function Portfolio() {

    return (
        <div className="secondPageConteiner">
            <div>
                <img className="mainSecondPhoto" src="http://fr.web.img2.acsta.net/r_1280_720/pictures/19/06/07/11/56/1852595.jpg" alt="Samuel Leroy Jackson" />
            </div>
            <div>
                <h2>Portfolio:</h2>
                <ol className="listAwards">
                    <li>1991 - Prize of the Cannes Film Festival for Best Supporting Actor (for "Tropical Fever")</li>
                    <li>1994 - BAFTA Award for Best Supporting Actor (Pulp Fiction)
1995 - Independent Spirit Award for Best Actor (for Pulp Fiction)</li>
                    <li>1995 - Oscar nomination for Best Supporting Actor (Pulp Fiction)
1998 - Silver Bear for Best Actor at the Berlin Film Festival (Jackie Brown)</li>
                    <li>1998 - Award "Independent Spirit" for the best debut (for the production of "Eva's Shelter")</li>
                    <li>2000 - Named Star on the Hollywood Walk of Fame for his contribution to the film industry</li>
                    <li>2013 - MTV Award for Craziest Episode (for Django Unchained)</li>
                </ol>
            </div>
        </div>
    )

}
