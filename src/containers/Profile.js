import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import {
  NavigationTabs,
  Profile,
  Content
} from '../components';
import { fetchProfile, fetchRepos } from "../actions";

import styles from "../styles/index.css";

export const ProfileContainer = (props) => {
  React.useEffect(() => {
    props.fetchProfile();
    props.fetchRepos();
  }, []);

  const { profile, repos } = props;
  
  return (
    <article className={styles.container}>
      <h3>Vedantu</h3>
      <NavigationTabs />
      <Profile {...profile}/>
      <Content data={repos}/>
    </article>
  )
}

ProfileContainer.propTypes = {
  fetchRepos: PropTypes.func,
  fetchProfile: PropTypes.func,
  profile: PropTypes.object,
  repos: PropTypes.object
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  repos: state.repos
});

const mapDispatchToProps = { fetchProfile, fetchRepos };

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
