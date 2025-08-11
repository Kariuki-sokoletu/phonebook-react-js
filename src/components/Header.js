import Logo from "../asset/header logo.png"
import '../App.css'

export const Header = () => {
  return (
    <header className="header">
        <h1>PhoneBook App</h1>
        <img src={Logo} alt="" className="Hlogo" />
    </header>
  )
}
