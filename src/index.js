import React from 'react'
import styled, { css } from 'styled-components'

export const SelectRaw = ({children, placeholder = null, withError, className, ...rest}) => (
  <select className={className} {...rest}>
    {placeholder && <option value=''>{placeholder}</option>}
    {children}
  </select>
)

export default styled(Select)`
  border: 1px solid ${props => props.theme.colors.grey300};
  background-color: ${props => props.theme.colors.white};
  
  max-width: 600px;
  margin: 0;
	-moz-appearance: none;
	-webkit-appearance: none;
  border-radius: 3px;
  height: 35px;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  padding: 0px 30px 0px 10px;
  color: inherit;
	background-color: white;
	background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2232%22%20height%3D%2232%22%3E%3Cpath%20fill%3D%22grey%22%20d%3D%22M16.59%208.59L12%2013.17%207.41%208.59%206%2010l6%206%206-6z%22%2F%3E%3C%2Fsvg%3E'), linear-gradient(to bottom, #ffffff 0%,#ffffff 100%);
	background-repeat: no-repeat, repeat;
	background-position: right .3em top 50%, 0 0;
  background-size: 1.25em auto, 100%;
  width: 100%;
  ${props => props.width && css`
    width: ${props.width}px;
  `}
  ${props => props.withError && css`
    border-color: ${props.theme.colors.error};
  `}
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 3px ${props => props.theme.colors.primary200};
    border: 1px solid ${props => props.theme.colors.primary400};
  }
  cursor: pointer;
	&:disabled {
		background-color: ${props => props.theme.colors.grey100};
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2232%22%20height%3D%2232%22%3E%3Cpath%20fill%3D%22grey%22%20d%3D%22M16.59%208.59L12%2013.17%207.41%208.59%206%2010l6%206%206-6z%22%2F%3E%3C%2Fsvg%3E'),linear-gradient(to bottom,${props => props.theme.colors.grey100} 0%,${props => props.theme.colors.grey100} 100%);
		border: 1px solid ${props => props.theme.colors.grey200};
		cursor: not-allowed;
	}
`
