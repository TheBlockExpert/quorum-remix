import React, { useState } from 'react'
import { Method } from './Transact'
import {
  buttonStyle,
  containerStyle,
  inputStyle,
  orStyle
} from '../utils/Styles'

export const Constructor = ({ method, onDeploy, onExisting, disabled }) => {

  const [existingAddress, setExistingAddress] = useState('')

  return <div id="deploy-container">
    <Method key={'constructor'}
            disabled={disabled}
            method={method}
            onSubmit={(inputValues) => onDeploy(inputValues)}
    />
    <div style={orStyle}>or</div>
    <div style={containerStyle} className="btn-group-sm">
      <button
        style={buttonStyle}
        id="existing-button"
        className="btn btn-sm btn-info"
        disabled={disabled || existingAddress === ''}
        onClick={() => onExisting(existingAddress)}>
        At Address
      </button>
      <input placeholder="Existing contract address"
             id="existing-input"
             disabled={disabled}
             style={inputStyle}
             onChange={(e) => setExistingAddress(e.target.value)}
             value={existingAddress}
             type="text"/>
    </div>
  </div>

}
