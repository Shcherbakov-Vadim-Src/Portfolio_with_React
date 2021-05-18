import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";


export default function About() {

    return (
        <div className="conteinerFirst">
            <div>
                <img className="mainPhoto" src="http://almode.ru/uploads/posts/2020-10/1603346470_49-p-semyuel-dzhekson-72.jpg" alt="Samuel Leroy Jackson" />
            </div>
            <div className="conteinerFirstMini">
                <h1 className="title">Samuel Leroy Jackson</h1>
                <p className="paragraph"><span className="border">Born:</span> December 21, 1948</p>
                <p className="paragraph"><span className="border">City:</span> New York</p>
                <p className="paragraph about">American film and television actor, producer. In 1991, he received critical acclaim for his role in Tropical Fever, and has since appeared in films such as Goodfellas, Games of the Patriots and Jurassic Park. In 1994, he starred in the film Pulp Fiction, which brought him to the level of superstars and brought several awards. Since then, Jackson has appeared in over 100 films and won numerous awards throughout his career.</p>
            </div>
        </div>
    )

}