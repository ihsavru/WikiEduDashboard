import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AlertsList from '../alerts/alerts_list.jsx';
import { fetchAdminAlerts, sortAlerts } from '../../actions/alert_actions';

const AdminAlertsHandler = createReactClass({
  displayName: 'AdminAlertsHandler',

  propTypes: {
    fetchAdminAlerts: PropTypes.func,
    alerts: PropTypes.array,
  },

  componentWillMount() {
    return this.props.fetchAdminAlerts();
  },

  fetchAdminAlerts() {
    this.props.fetchAdminAlerts();
  },

  sortSelect(e) {
    return this.props.sortAlerts(e.target.value);
  },

  render() {
    let alertList;
    if (this.props.alerts) {
      alertList = (
        <div id="alerts" className="alerts container">
          <div className="section-header">
            <h3>Alerts</h3>
            <div className="sort-select">
              <select className="sorts" name="sorts" onChange={this.sortSelect}>
                <option value="type">{I18n.t('campaign.alert_type')}</option>
                <option value="course">{I18n.t('campaign.course')}</option>
                <option value="user">{I18n.t('campaign.alert_user_id')}</option>
                <option value="created_at">{I18n.t('campaign.created_at')}</option>
              </select>
            </div>
          </div>
          <AlertsList alerts={this.props.alerts} sortBy={this.props.sortAlerts} adminAlert={true} />
        </div>
      );
    }
    return (
      <div>{alertList}</div>
      );
    }
});

const mapStateToProps = state => ({
  alerts: state.alerts.alerts,
 });

const mapDispatchToProps = { fetchAdminAlerts, sortAlerts };

export default connect(mapStateToProps, mapDispatchToProps)(AdminAlertsHandler);
