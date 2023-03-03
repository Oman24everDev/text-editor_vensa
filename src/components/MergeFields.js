import React, { Component } from 'react';
import { API_KEY, API_URL } from '../api';

class MergeFieldTextarea extends Component {
    state = {
        mergeFieldItems: {},
        isDropdownVisible: false,
    };

    async componentDidMount() {
        try {
            const response = await fetch(`${API_URL}/${API_KEY}`);
            const data = await response.json();
            this.setState({ mergeFieldItems: data });
          } catch (error) {
            console.error(error);
          }

    }



    toggleDropdown = () => {
        this.setState({ isDropdownVisible: !this.state.isDropdownVisible });
    }

    render() {
        const { mergeFieldItems, isDropdownVisible } = this.state;

        return (
            <div>
                <div className="dropdown-toggle" onClick={this.toggleDropdown}>
                    ▼
                </div>
                {isDropdownVisible && (
                    <div className="dropdown-menu">
                        {mergeFieldItems.map(item => (
                            <div className="dropdown-item" key={item.id}>
                                {item.Name}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }
}

export default MergeFieldTextarea;
