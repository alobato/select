import React from 'react'
import styled, { css } from 'styled-components'

export const SelectRaw = ({children, placeholder = null, withError, className, ...rest}) => {
  return (
    <select className={className} {...rest}>
      {placeholder && <option value=''>{placeholder}</option>}
      {children}
    </select>
  )
}

export default styled(SelectRaw)`
	-moz-appearance: none;
	-webkit-appearance: none;
  appearance: none;

  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  outline: 0;
  cursor: pointer;
  transition: all 0.3s;

  padding: 0px 30px 0px 10px;
  
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2232%22%20height%3D%2232%22%3E%3Cpath%20fill%3D%22grey%22%20d%3D%22M16.59%208.59L12%2013.17%207.41%208.59%206%2010l6%206%206-6z%22%2F%3E%3C%2Fsvg%3E'), linear-gradient(to bottom, ${props => (props.theme && props.theme.colors && props.theme.colors.white) ? props.theme.colors.white : 'white'} 0%,${props => (props.theme && props.theme.colors && props.theme.colors.white) ? props.theme.colors.white : 'white'} 100%);
	background-repeat: no-repeat, repeat;
	background-position: right .3em top 50%, 0 0;
  background-size: 1.25em auto, 100%;

  height: ${props => props.height ? props.height : '35px'};
  ${props => props.maxWidth && css`max-width: ${props.maxWidth};`}
  ${props => props.width && css`width: ${props.width};`}
  ${props => props.withError && css`border-color: ${props.theme && props.theme.colors && props.theme.colors.error ? props.theme.colors.error : 'hsla(6, 66%, 47%, 1)'};`}

  ${props => props.theme && props.theme.borderRadius && css`border-radius: ${props.theme.borderRadius}px;`}
  border: 1px solid ${props => (props.theme && props.theme.colors && props.theme.colors.grey300) ? props.theme.colors.grey300 : 'hsla(203, 20%, 76%, 1)'};
  background-color: ${props => (props.theme && props.theme.colors && props.theme.colors.white) ? props.theme.colors.white : 'white'};

  &:focus {
    box-shadow: 0 0 0 3px ${props => (props.theme && props.theme.colors && props.theme.colors.primary200) ? props.theme.colors.primary200 : 'hsla(202, 81%, 86%, 1)'};
    border: 1px solid ${props => (props.theme && props.theme.colors && props.theme.colors.primary400) ? props.theme.colors.primary400 : 'hsla(205, 79%, 66%, 1)'};
  }

	&:disabled {
		background-color: ${props => (props.theme && props.theme.colors && props.theme.colors.grey100) ? props.theme.colors.grey100 : 'hsla(201, 20%, 96%, 1)'};
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2232%22%20height%3D%2232%22%3E%3Cpath%20fill%3D%22grey%22%20d%3D%22M16.59%208.59L12%2013.17%207.41%208.59%206%2010l6%206%206-6z%22%2F%3E%3C%2Fsvg%3E'),linear-gradient(to bottom,${props => (props.theme && props.theme.colors && props.theme.colors.grey100) ? props.theme.colors.grey100 : 'hsla(201, 20%, 96%, 1)'} 0%,${props => (props.theme && props.theme.colors && props.theme.colors.grey100) ? props.theme.colors.grey100 : 'hsla(201, 20%, 96%, 1)'} 100%);
		border: 1px solid ${props => (props.theme && props.theme.colors && props.theme.colors.grey200) ? props.theme.colors.grey200 : 'hsla(202, 20%, 86%, 1)'};
		cursor: not-allowed;
	}
`
