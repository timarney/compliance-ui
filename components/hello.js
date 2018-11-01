import React, { Component } from "react";
import { ThemeConsumer } from "../store/index";

class Hello extends Component {
  render() {
    return (
      <div>
        <ThemeConsumer>
          {({ theme, swapTheme }) => (
            <div>
              <p>hi I'm {theme}</p>
              <form action="/" method="post">
                <input name="swap" type="hidden" value="swap" />
                <button
                  type="submit"
                  onClick={() => {
                    swapTheme();
                  }}
                >
                  Swap Theme
                </button>
              </form>
            </div>
          )}
        </ThemeConsumer>
      </div>
    );
  }
}
export default Hello;
