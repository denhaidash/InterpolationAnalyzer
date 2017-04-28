import React, { PureComponent } from 'react';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import styles from './pointsForm';

export default class PointsForm extends PureComponent {
    render() {
        return (
            <form onSubmit={this.props.onSubmit} className={styles.pointsForm}>
                <TextField
                    name="x"
                    value={this.props.x}                    
                    errorText={this.props.x === null && 'Invalid value'}
                    errorStyle={{position: 'absolute'}}
                    floatingLabelText="X"
                    onChange={this.props.onChange}
                    disabled={this.props.isInterpolationModeEnabled}
                    style={{width: '100px'}}
                />
                <TextField
                    name="y"
                    value={this.props.y}  
                    errorText={this.props.y === null && 'Invalid value'}
                    floatingLabelText="Y"
                    onChange={this.props.onChange}
                    disabled={this.props.isInterpolationModeEnabled}
                    style={{width: '100px'}}
                />
                <FloatingActionButton mini={true} type="submit" disabled={this.props.isInterpolationModeEnabled}>
                    <ContentAdd />
                </FloatingActionButton>
            </form>
        );
    }
}

PointsForm.propTypes = {
    x: React.PropTypes.string,
    y: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
    isInterpolationModeEnabled: React.PropTypes.bool.isRequired
};