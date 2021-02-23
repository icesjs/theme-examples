import * as React from 'react'
import { hot } from 'react-hot-loader/root'
import themeManager from '@ices/theme'
import Button from './Button'

class App extends React.Component {
  //
  toggleTheme = (event: React.ChangeEvent<HTMLSelectElement>) => {
    themeManager.theme = event.target.value
  }

  render() {
    const { theme } = themeManager
    return (
      <div>
        <select defaultValue={theme} onChange={this.toggleTheme}>
          {themeManager.themeList.map((theme) => (
            <option key={theme}>{theme}</option>
          ))}
        </select>
        <div>
          <Button />
        </div>
      </div>
    )
  }
}

export default hot(App)
