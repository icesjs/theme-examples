import * as React from 'react'
import {
  ChangeEventHandler,
  SelectHTMLAttributes,
  useCallback,
  VFC
} from 'react'
import { themeList, useTheme } from '@ices/theme/react'

type ThemeSelectProps = Pick<
  SelectHTMLAttributes<HTMLSelectElement>,
  'id' | 'name' | 'className' | 'style'
>
type ChangeHandlerType = ChangeEventHandler<HTMLSelectElement>

const ThemeSelect: VFC<ThemeSelectProps> = function (props) {
  const [theme, setTheme] = useTheme()

  const handleChange = useCallback<ChangeHandlerType>((event) => {
    setTheme(event.target.value).then()
  }, [])

  return (
    <select {...props} value={theme} onChange={handleChange}>
      {themeList.map((theme) => (
        <option key={theme}>{theme}</option>
      ))}
    </select>
  )
}

export default ThemeSelect
