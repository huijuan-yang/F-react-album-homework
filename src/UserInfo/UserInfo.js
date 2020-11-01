import React, { Component } from 'react';
import './UserInfo.scss';

class UserInfo extends Component {
  render() {
    const { name, email, phone, website, company } = this.props.user;

    return (
      <aside className="UserInfo">
        <h3>{name}</h3>
        <p className="contact-display">Contact Me @</p>
        <div className="row-display">
          <h4>Email</h4>
          <p className="userinfo-display">{email}</p>
        </div>
        <div className="row-display">
          <h4>Phone</h4>
          <p className="userinfo-display">{phone}</p>
        </div>
        <div className="row-display">
          <h4>Website</h4>
          <p className="userinfo-display">{website}</p>
        </div>
        <div className="row-display">
          <h4>Company</h4>
          <p>{company ? company.name : ''}</p>
        </div>
      </aside>
    );
  }
}

export default UserInfo;
