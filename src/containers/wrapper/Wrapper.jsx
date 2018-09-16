import React, {PropTypes} from 'react';
import styles from './wrapper.css';

// Directory imports
import Navigation from '../navbar/Navigation';

export default class Wrapper extends React.Component {
  static propTypes = {}
  
  render() {
    return (
        <div className={styles.backGr}>
	          <Navigation/>
	          {this.props.children}
        </div>
    )
  }
}