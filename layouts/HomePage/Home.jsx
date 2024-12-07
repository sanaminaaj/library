import React from 'react'
import ExploreTopBooks from "./ExploreTopBooks";
import Heros from "./Heros";
import LibraryServices from "./LibraryServices";
import Footer from "./../NavbarAndFooter/Footer";

export default function Home() {
  return (
<div>
    <ExploreTopBooks></ExploreTopBooks>
    
    <LibraryServices></LibraryServices>
    <Heros></Heros>
    <Footer></Footer>
    </div>
    )
}
