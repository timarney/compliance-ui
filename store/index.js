import React, { Component } from "react";
export const ThemeContext = React.createContext();

class ThemeProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: props.theme,
      update: this.update,
      swapTheme: this.swapTheme
    };
  }

  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
    return { userAgent };
  }

  componentDidMount() {}

  swapTheme = () => {
    const theme = this.state.theme;
    this.update({ theme: theme === "darker" ? "light" : "darker" });
  };

  update = data => {
    this.setState({ ...data });
  };

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export const ThemeConsumer = ThemeContext.Consumer;
export default ThemeProvider;
