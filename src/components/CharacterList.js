import React, { Component } from 'react';
// allow access to store
import { connect } from 'react-redux';

class CharacterList extends Component {
    render() {

        console.log('this.props', this.props);

        return (
            <div>
                <h4>Characters</h4>
                <ul>
                    {
                        this.props.characters.map(character => {
                            return (
                                <li key={character.id}>
                                    <div>{character.name}</div>
                                </li>    
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state', state);
    return {
        characters: state.characters
    };
}

export default connect(mapStateToProps, null)(CharacterList);