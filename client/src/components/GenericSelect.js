import React, { Component } from 'react'
import PropTypes from 'prop-types';

class GenericSelect extends Component {



    render() {
        const selectItems = this.props.data.map(data => <option key={data.id} value={data.name}>{data.displayName}</option>)
        return (
            <select className="displaySelection" onChange={this.props.changeAction}>
                {selectItems}
            </select>
        );
    }
}

GenericSelect.propTypes = {
    changeAction: PropTypes.func,
    data: PropTypes.array,
}
export default GenericSelect