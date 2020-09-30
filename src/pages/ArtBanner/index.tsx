import React from 'react';
import classNames from 'classnames';

import styles from './index.less';

export default class ArtBanner extends React.Component {
  state = { walking: false };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ walking: true });
    }, 900);
  }

  setDestination = e => {
    console.log(e.clientX);
  };

  render() {
    const { walking } = this.state;
    return (
      <div className={styles.wrapper} onClick={this.setDestination}>
        <div className={styles.loader}>
          <img src="https://images.weserv.nl/?url=https://i.imgur.com/Wj2DJZT.gif" />
        </div>
        <div className={styles.character_cont}>
          <div
            className={classNames(
              walking ? styles.walking : '',
              styles.character,
            )}
          />
        </div>
      </div>
    );
  }
}
