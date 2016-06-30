var React = require('react');
var Modal = require('react-modal');
var SessionUtil = require('../../util/session_util');
var SessionStore = require('../../stores/session_store');

module.exports = React.createClass ({
  getInitialState: function() {
    return({ modalOpen: false, username: '', password: '', errors: []});
  },

  closeModal: function() {
    this.setState({modalOpen: false});
    this.props.enableButtons();
  },

  openModal: function() {
    this.setState({modalOpen: true});
    this.props.clickedLogin();
  },

  signupUser: function(event) {
    event.preventDefault();
    var user = {user: {
      username: this.state.username,
      password: this.state.password
    }};
    SessionUtil.createUser(user);
    SessionUtil.loginUser(user);
    if (SessionStore.userPresent()) {
      this.setState({username: '', password: ''});
      this.closeModal();
    }
  },

  nameChange: function(event) {
    this.setState({username: event.target.value});
  },

  passChange: function(event) {
    this.setState({password: event.target.value});
  },

  render: function() {
    return (
      <div>
      <li className="unlogged" onClick={this.openModal} disabled={this.props.currentlyClicked}>Sign Up</li>

      <Modal className='modal' isOpen={this.state.modalOpen} onRequestClose={this.closeModal}>
       <div className='exit' onClick={this.closeModal}>X</div>
        <form onSubmit={this.signupUser}>
          <br />

          <h3>Sign Up!</h3>
          <br />

          <label>Username:
            <input type='text' value={this.state.username} onChange={this.nameChange}/>
          </label>
          <br />

          <label>Password:
            <input type="password" value={this.state.password} onChange={this.passChange}/>
          </label>
          <br />

          <input className='submit' type='submit' value='Sign Up!'/>
        </form>
      </Modal>
      </div>
    );
  }
});
