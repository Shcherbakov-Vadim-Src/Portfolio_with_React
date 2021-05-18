import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";


export default function Contacts() {

    return (
        <div className="thirdPageConteiner">
        <div>
            <img className="mainThirdPhoto" src="http://fr.web.img2.acsta.net/r_1280_720/pictures/19/06/07/11/56/1852595" alt="Samuel Leroy Jackson" />
        </div>
        <div className="contactList">
            <h3>Contacts:</h3>
            <p className="contactItem"><span>email:</span> 79169082210@mail.ru</p>
            <p className="contactItem"><span>phone:</span> +7 916 908 22 10</p>
            <p className="contactItem">Moscow, Russia</p>
        </div>
    </div>
    )

}
