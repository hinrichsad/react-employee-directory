import React from "react";
import Container from 'react-bootstrap/Container'

function Navigation({ onSearch, searchTerm, handleSortByName, handleSortByDept }) { // The two props coming down from the Navigation Component
    return (
        <Container>
            <div className="nav">
                <form className="nav-content">
                    <input
                        value={searchTerm} // value attribute here keeps what you type in sync
                        onChange={onSearch} // the onChange is the event listening attribute that uses the onSearch prop method let state know there was a change
                        className="search-bar"
                        type="text"
                        placeholder="search employee"/>
                </form>

                <div>
                    <button onClick={handleSortByName}>Name</button>
                    <button onClick={handleSortByDept}>Dept</button>
                </div>
            </div>
        </Container>
    )
}

export default Navigation;