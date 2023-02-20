const Buttton = () => {
  return   <button className='btn'>Add</button>
}
Buttton.propTypes.string= {
    text: propTypes.string,
    color: propTypes.string,
    onclick: propTypes.func.isRequired
}

export default Buttton
