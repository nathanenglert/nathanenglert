import React from 'react';

import '../../components/raffler.scss';

import Layout from '../../components/layout';
import Navbar from '../../components/navbar';
import SEO from '../../components/seo';

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
          title="Raffler"
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
                <br />
                <h2 className="subtitle">
                  Thank you for your support!
                </h2>
                <p className="content">
                  It's crazy to think that we launched Raffler 5 years ago. My wife 
                  was working for Pampered Chef and needed an easy way to run raffles 
                  for her parties. Now, several years later, we still see consistent 
                  traffic to this page.
                </p>
                <p className="content">
                  If you want to show your support, <em>buy us a coffee</em>{' '}
                  using the button in the bottom right corner. Thank you!
                </p>
                <br />
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
      </Layout>
    );
  }
}

export default Raffler;
