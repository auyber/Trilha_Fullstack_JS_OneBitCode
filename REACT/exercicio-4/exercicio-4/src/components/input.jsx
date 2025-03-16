import PropTypes from 'prop-types'

Input.propTypes = {
    passwordSize: PropTypes.number.isRequired,
    setPasswordSize: PropTypes.func
}

export default function Input(props) {
    return (
        <input
          type="number"
          id="passwordSize"
          min={1}
          value={props.passwordSize}
          onChange={(ev) => props.setPasswordSize(ev.target.value)}
        />
    )
}