import { Fragment } from "react"
import Styles from "./index.module.css"
import PropTypes from "prop-types"

Input.propTypes = {
    passwordSize: PropTypes.number.isRequired,
    setPasswordSize: PropTypes.func.isRequired
}

export default function Input(props) {
    return (
        <Fragment>
            <label htmlFor="passwordChars">Tamanho:</label>
            <input 
                type="number" 
                id="passwordChars" 
                min={1} 
                value={props.passwordSize} 
                className={Styles.input} 
                onChange={(ev) => props.setPasswordSize(ev.target.value)}/>
        </Fragment>
        
    )
}