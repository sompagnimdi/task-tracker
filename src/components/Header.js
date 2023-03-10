import PropTypes from 'prop-types';
import Button from './Button';


const Header = ({ title}) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button />

      // adding stuff that would be removed later
    
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.PropTypes = {
    title: PropTypes.string.isRequired,
}
// adding stuff to delete later
export default Header
