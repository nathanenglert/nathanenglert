import React from "react";

import "../../styles/raffler.css";

import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import SEO from "../../components/seo";

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
          name: "",
          amount: 1,
        },
      ],
      alert: "",
      winner: "",
    };

    this.addRaffler = this.addRaffler.bind(this);
    this.pickWinner = this.pickWinner.bind(this);
  }

  addRaffler() {
    this.setState((state) => {
      const rafflers = [...state.rafflers, { name: "", amount: 1 }];

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
          target.type === "number" ? parseInt(target.value) : target.value;
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
      event.key !== "Tab" ||
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
        alert: "No possible contestants!",
        winner: "",
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
        alert: "",
        rafflers,
        winner: winner.name + "!",
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
        <Navbar />
        <section className="space-y-8 p-8">
          <div className="lg:grid grid-cols-12">
            <div className="col-span-5 col-start-2">
              <h1 className="text-3xl is-raffler-branded">Raffler</h1>
            </div>
          </div>
          <div className="lg:grid grid-cols-12 gap-8">
            <div className="col-span-5 col-start-2 space-y-4">
              <h2 className="font-bold">How it works</h2>
              <p>
                Raffler can be used to simulate any raffle or sweepstakes
                drawing. It's as easy as entering the contestants, setting the
                amount of tickets purchased, and clicking{" "}
                <strong>Pick a Winner</strong>!
              </p>
              <p>
                Our system uses{" "}
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
              <h2 className="font-bold">Thank you for your support!</h2>
              <p>
                It's crazy to think that we launched Raffler a decade ago. My
                wife was working for Pampered Chef and needed an easy way to run
                raffles for her parties. Now, several years later, we still see
                consistent traffic to this page.
              </p>
              <p>
                If you want to show your support, <em>buy us a coffee</em> using
                the button in the bottom right corner. Thank you!
              </p>
              <br />
            </div>
            <div className="col-span-4 space-y-2">
              {this.state.rafflers.map((raffler, i) => (
                <div key={i} className="w-full flex items-center">
                  <input
                    type="text"
                    name="name"
                    className="flex h-9 w-full rounded-md rounded-r-none border border-gray-300 bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    placeholder="Person's Name"
                    aria-label="Person's Name"
                    value={raffler.name}
                    onChange={this.handleChange.bind(this, i)}
                  />
                  <input
                    type="number"
                    name="amount"
                    className="flex h-9 w-18 border-y border-gray-300 bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    placeholder="Amount"
                    aria-label="Amount of Tickets"
                    value={raffler.amount}
                    onChange={this.handleChange.bind(this, i)}
                    onKeyDown={this.handleKeyDown.bind(this, i)}
                  />
                  <SecondaryButton
                    className="rounded-l-none"
                    label="Remove person"
                    onClick={this.removeRaffler.bind(this, i)}
                  >
                    &times;
                  </SecondaryButton>
                </div>
              ))}
              <div className="w-full flex gap-2">
                <div className="control">
                  <SecondaryButton label="Add person" onClick={this.addRaffler}>
                    Add person
                  </SecondaryButton>
                </div>
                <div className="control">
                  <Button
                    type="button"
                    className="button is-dark"
                    onClick={this.pickWinner}
                  >
                    Pick a winner
                  </Button>
                </div>
              </div>
              {this.state.winner && (
                <div className="flex justify-center bg-green-200 p-4 rounded-md">
                  <p className="text-center">
                    And the winner is..
                    <br />
                    <span className="is-raffler-branded text-2xl">
                      {this.state.winner}
                    </span>
                  </p>
                </div>
              )}
              {this.state.alert && (
                <div className="flex justify-center bg-red-200 p-4 rounded-md">
                  <p className="text-center">
                    Whoops..
                    <br />
                    <span className="font-bold">{this.state.alert}</span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

const Button = ({ label, className, onClick, children }) => (
  <button
    className={
      "cursor-pointer bg-black text-white shadow hover:bg-gray-800 h-9 px-4 py-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 " +
      className
    }
    tabIndex="-1"
    aria-label={label}
    onClick={onClick}
  >
    {children}
  </button>
);

const SecondaryButton = ({ label, className, onClick, children }) => (
  <button
    className={
      "cursor-pointer bg-gray-300 text-black shadow hover:bg-gray-200 h-9 px-4 py-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 " +
      className
    }
    tabIndex="-1"
    aria-label={label}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Raffler;
