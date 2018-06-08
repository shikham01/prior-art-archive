import React from 'react';
import PropTypes from 'prop-types';

require('./inputField.scss');

const propTypes = {
	label: PropTypes.string,
	placeholder: PropTypes.string,
	isRequired: PropTypes.bool,
	isDisabled: PropTypes.bool,
	isTextarea: PropTypes.bool,
	helperText: PropTypes.node,
	error: PropTypes.string,
	value: PropTypes.string,
	type: PropTypes.string,
	wrapperClassName: PropTypes.string,
	onChange: PropTypes.func,
	children: PropTypes.node,
};

const defaultProps = {
	label: undefined,
	placeholder: undefined,
	isRequired: false,
	isDisabled: false,
	isTextarea: false,
	helperText: '',
	error: undefined,
	value: undefined,
	type: 'text',
	wrapperClassName: '',
	onChange: undefined,
	children: undefined,
};

const InputField = function(props) {
	return (
		<div className={`input-field pt-form-group ${props.error ? 'pt-intent-danger' : ''} ${props.wrapperClassName}`}>
			<label className="pt-lablel" htmlFor={`input-${props.label}`}>
				{props.label}
				{props.isRequired &&
					<span className="pt-text-muted required-text"> (required)</span>
				}
			</label>
			<div className="pt-form-content">
				{props.children}
				<div className={`pt-input-group ${props.error ? 'pt-intent-danger' : ''}`}>
					{!props.children && !props.isTextarea &&
						<input
							id={`input-${props.label}`}
							className={'pt-input'}
							disabled={props.isDisabled}
							placeholder={props.placeholder}
							value={props.value}
							onChange={props.onChange}
							type={props.type}
							dir="auto"
						/>
					}
					{!props.children && props.isTextarea &&
						<textarea
							id={`input-${props.label}`}
							className={'pt-input'}
							disabled={props.isDisabled}
							placeholder={props.placeholder}
							value={props.value}
							onChange={props.onChange}
							type={props.type}
							dir="auto"
						/>
					}
					<div className="pt-form-helper-text">{props.error || props.helperText}</div>
				</div>

			</div>
		</div>
	);
};

InputField.defaultProps = defaultProps;
InputField.propTypes = propTypes;
export default InputField;
