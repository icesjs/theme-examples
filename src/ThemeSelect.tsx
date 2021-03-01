import * as React from 'react'
import {
  ChangeEventHandler,
  SelectHTMLAttributes,
  useCallback,
  VFC
} from 'react'
import { useTheme } from '@ices/theme/react'

type ThemeSelectProps = Pick<
  SelectHTMLAttributes<HTMLSelectElement>,
  'id' | 'name' | 'className' | 'style'
>
type ChangeHandlerType = ChangeEventHandler<HTMLSelectElement>

const ThemeSelect: VFC<ThemeSelectProps> = function (props) {
  const [theme, themeList, changeTheme] = useTheme(
    localStorage.getItem('theme') || ''
  )

  const handleChange = useCallback<ChangeHandlerType>((event) => {
    changeTheme(event.target.value).then((theme) => {
      localStorage.setItem('theme', theme)
    })
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
