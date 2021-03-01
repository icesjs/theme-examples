import * as React from 'react'
import 'react-hot-loader/patch'
import { hot } from 'react-hot-loader/root'

import { ThemeConsumer, ThemeProvider } from '@ices/theme/react'
import ThemeSelect from './ThemeSelect'

class App extends React.PureComponent {
  render() {
    return (
      <ThemeProvider>
        <div style={{ margin: '16px' }}>
          <ThemeConsumer>
            {({ theme }) => (
              <label
                style={{
                  paddingRight: '8px',
                  color: theme === 'dark' ? '#c9d1d9' : '#24292e'
                }}
                htmlFor="react-theme-select"
              >
                Select Theme:
              </label>
            )}
          </ThemeConsumer>
          <ThemeSelect id="react-theme-select" />
          <div className="stage">{this.props.children}</div>
        </div>
      </ThemeProvider>
    )
  }
}

export default hot(App)
