import React from 'react';

import '../../components/raffler.scss';

import Layout from '../../components/layout';
import Navbar from '../../components/navbar';
import SEO from '../../components/seo';

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

class Raffler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      donationSubmitted: false,
      feedback: {},
      feedbackOpen: false,
      feedbackSubmitted: false,
      rafflers: [
        {
          name: '',
          amount: 1,
        },
      ],
      alert: '',
      winner: '',
    };

    this.addRaffler = this.addRaffler.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleFeedbackChange = this.handleFeedbackChange.bind(this);
    this.handleFeedbackSubmit = this.handleFeedbackSubmit.bind(this);
    this.onDonationClick = this.onDonationClick.bind(this);
    this.openModal = this.openModal.bind(this);
    this.pickWinner = this.pickWinner.bind(this);
  }

  addRaffler() {
    this.setState((state) => {
      const rafflers = [...state.rafflers, { name: '', amount: 1 }];

      return {
        rafflers,
      };
    });
  }

  closeModal(e) {
    if (e) e.preventDefault();

    this.setState({ feedbackOpen: false });
  }

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  handleFeedbackChange(e) {
    const input = e.target;

    this.setState((state) => {
      let feedback = state.feedback;
      feedback = { ...feedback, [input.name]: input.value };

      return { feedback };
    });
  }

  handleFeedbackSubmit(e) {
    e.preventDefault();

    const form = e.target;

    fetch('/apps/raffler', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state.feedback,
      }),
    });

    this.setState({ feedbackSubmitted: true });
    this.closeModal();
  }

  handleChange(i, event) {
    const target = event.target;

    this.setState((state) => {
      const rafflers = state.rafflers.map((raffler, j) => {
        if (i !== j) return raffler;

        raffler[target.name] =
          target.type === 'number' ? parseInt(target.value) : target.value;
        return raffler;
      });

      return {
        rafflers,
      };
    });
  }

  handleKeyDown(i, event) {
    if (
      this.state.rafflers.length !== i + 1 ||
      event.key !== 'Tab' ||
      event.shiftKey
    )
      return;

    this.addRaffler();
  }

  onDonationClick() {
    this.setState({ donationSubmitted: true });
  }

  openModal() {
    this.setState({ feedbackOpen: true });
  }

  pickWinner() {
    var possibleContestants = this.state.rafflers.filter((raffler) => {
      return raffler.name.length > 0 && raffler.amount > 0;
    });

    if (possibleContestants.length === 0) {
      this.setState({
        alert: 'No possible contestants!',
        winner: '',
      });
      return;
    }

    var total = 0;
    possibleContestants.forEach((raffler) => {
      total += parseInt(raffler.amount);
    });

    var random = this.getRandomIntInclusive(1, total);

    var running = 0;
    var winner = possibleContestants.find((raffler) => {
      running += parseInt(raffler.amount);
      return random <= running;
    });

    this.setState((state) => {
      const rafflers = state.rafflers.map((raffler) => {
        if (raffler.name !== winner.name) return raffler;

        raffler.amount -= 1;
        return raffler;
      });

      return {
        alert: '',
        rafflers,
        winner: winner.name + '!',
      };
    });
  }

  removeRaffler(i) {
    this.setState((state) => {
      const rafflers = state.rafflers.filter((_raffler, j) => i !== j);

      return {
        rafflers,
      };
    });
  }

  render() {
    return (
      <Layout>
        <SEO
          title="Raffler - Nathan Englert"
          description="Raffler can be used to simulate any raffle or sweepstakes drawing."
          location="/apps/raffler"
        />
        <Navbar className="has-background-light" />
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-8 is-offset-2">
                <h1 className="title is-size-1 is-raffler-branded">Raffler</h1>
              </div>
            </div>
            <div className="columns">
              <div className="column is-5 is-offset-2">
                <h2 className="subtitle">How it works</h2>
                <p className="content">
                  Raffler can be used to simulate any raffle or sweepstakes
                  drawing. It's as easy as entering the contestants, setting the
                  amount of tickets purchased, and clicking{' '}
                  <strong>Pick a Winner</strong>!
                </p>
                <p className="content">
                  Our system uses{' '}
                  <a
                    href="https://en.wikipedia.org/wiki/Pseudo-random_number_sampling"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    non-uniform distribution
                  </a>
                  &nbsp;in order to pick the winner. What this means to you is,
                  the higher the amount of tickets are for a contestant, the
                  higher their chances are of winning!
                </p>
                <p className="content has-text-grey">
                  P.S.
                  <br />
                  {this.state.donationSubmitted
                    ? 'Thanks for the donation! I really appreciate it.'
                    : this.state.feedbackSubmitted
                      ? 'Thanks for the feedback!'
                      : "I hate ads and I know you do too.. Instead, if you have a dollar or two laying around, I'd appreciate the donation to keep this site online! You can also help by leaving some feedback below! 👇"}
                </p>
                <p className="content">
                  <a
                    href="https://paypal.me/nathanenglert"
                    className="button"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={this.onDonationClick}
                  >
                    Donate with PayPal
                  </a>
                  <span className="text-between-buttons">&nbsp;or&nbsp;</span>
                  <button className="button" onClick={this.openModal}>
                    Leave some feedback
                  </button>
                </p>
              </div>
              <div className="column is-3">
                {this.state.rafflers.map((raffler, i) => (
                  <div key={i} className="field has-addons">
                    <div className="control">
                      <input
                        type="text"
                        name="name"
                        className="input"
                        placeholder="Person's Name"
                        aria-label="Person's Name"
                        value={raffler.name}
                        onChange={this.handleChange.bind(this, i)}
                      />
                    </div>
                    <div className="control">
                      <input
                        type="number"
                        name="amount"
                        className="input amount"
                        placeholder="Amount"
                        aria-label="Amount of Tickets"
                        value={raffler.amount}
                        onChange={this.handleChange.bind(this, i)}
                        onKeyDown={this.handleKeyDown.bind(this, i)}
                      />
                    </div>
                    <div className="control">
                      <button
                        className="button"
                        tabIndex="-1"
                        aria-label="Remove person"
                        onClick={this.removeRaffler.bind(this, i)}
                      >
                        &times;
                      </button>
                    </div>
                  </div>
                ))}
                <div className="field is-grouped">
                  <div className="control">
                    <button
                      type="button"
                      className="button"
                      onClick={this.addRaffler}
                    >
                      Add person
                    </button>
                  </div>
                  <div className="control">
                    <button
                      type="button"
                      className="button is-dark"
                      onClick={this.pickWinner}
                    >
                      Pick a winner
                    </button>
                  </div>
                </div>
                {this.state.winner && (
                  <div className="notification is-success has-text-centered">
                    <p className="content">
                      And the winner is..
                      <br />
                      <span className="is-raffler-branded is-size-2">
                        {this.state.winner}
                      </span>
                    </p>
                  </div>
                )}
                {this.state.alert && (
                  <div className="notification is-danger has-text-centered">
                    <p className="content">
                      Whoops..
                      <br />
                      <span className="has-text-weight-bold">
                        {this.state.alert}
                      </span>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        <div
          className={'modal ' + (this.state.feedbackOpen ? 'is-active' : '')}
        >
          <div className="modal-background" />
          <div className="modal-card">
            <form
              name="raffler"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleFeedbackSubmit}
            >
              <header className="modal-card-head">
                <p className="modal-card-title">Feedback</p>
                <button
                  className="delete"
                  aria-label="close"
                  onClick={this.closeModal}
                />
              </header>
              <section className="modal-card-body">
                <input type="hidden" name="form-name" value="raffler" />
                <div className="field" hidden>
                  <label className="label">Don’t fill this field out</label>
                  <div className="control">
                    <input
                      name="bot-field"
                      onChange={this.handleFeedbackChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">
                    How could I make Raffler more useful?
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name="comments"
                      placeholder="e.g. It would be cool if.."
                      onChange={this.handleFeedbackChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">
                    Would you pay a small amount to use that feature?
                  </label>
                  <div className="control">
                    <label className="radio">
                      <input
                        type="radio"
                        name="wouldPay"
                        value="yes"
                        onChange={this.handleFeedbackChange}
                      />{' '}
                      Yes
                    </label>
                    <label className="radio">
                      <input
                        type="radio"
                        name="wouldPay"
                        value="no"
                        onChange={this.handleFeedbackChange}
                      />{' '}
                      No
                    </label>
                  </div>
                </div>
                <div className="field">
                  <label className="label">What's your name?</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="name"
                      placeholder="e.g. Nathan Englert"
                      onChange={this.handleFeedbackChange}
                    />
                  </div>
                  <p className="help">Optional</p>
                </div>
                <div className="field">
                  <label className="label">What's your email address?</label>
                  <div className="control">
                    <input
                      className="input"
                      type="email"
                      name="email"
                      placeholder="e.g. nenglert@gmail.com"
                      onChange={this.handleFeedbackChange}
                    />
                  </div>
                  <p className="help">Optional</p>
                </div>
              </section>
              <footer className="modal-card-foot">
                <button type="submit" className="button is-info">
                  Send
                </button>
                <button className="button" onClick={this.closeModal}>
                  Cancel
                </button>
              </footer>
            </form>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Raffler;
