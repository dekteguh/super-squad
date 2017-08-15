import React, { Component } from 'react';
import CharacterList from './CharacterList';

class App extends Component {

    render() {
        return (
            <div>
                <h1>Super Squad</h1>
                <CharacterList />
            </div>    
        )
    }
}

export default App;