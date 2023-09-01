import { Dropdown } from './style'

import { locales } from "../../context/locales";
import { useTranslation } from 'react-i18next'

const LanguageSwitcher = ({ onChange }) => {
  const { i18n } = useTranslation();

  const handleOnChange = (event) => {
    onChange(event.target.value)
  }

  if (locales) {
    return (
      <Dropdown onChange={handleOnChange} value={i18n.language} aria-label='Select language'>
        {locales.map(({ translated, key}) => (
          <option key={key} value={key}>{translated}</option>
        ))}
      </Dropdown>
    )
  }

  return null
}

export default LanguageSwitcher
