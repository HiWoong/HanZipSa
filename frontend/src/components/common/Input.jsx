// 공통 Input 컴포넌트

import { styled } from 'styled-components';

const Wrapper = styled.div`
	width: ${props => props.$width};
	margin: ${props => (props.$margin ? props.$margin : 0)};
	padding: ${props => (props.$padding ? props.$padding : 0)};
	display: flex;
	flex-direction: column;
	align-items: start;
	gap: 5px;
`;

const Label = styled.label`
	font-size: 14px;
	font-weight: 200;
`;

const InputWrapper = styled.input`
	&:focus {
		outline: none;
		border-color: #629af9;
	}

	position: relative;
	width: inherit;
	padding: 5px 0;
	font-size: 18px;
	border: none;
	border-bottom: 2px solid rgb(0, 0, 0, 0.3);
`;

const Span = styled.span`
	font-size: 14px;
	font-weight: 200;
	color: red;
`;

export function Input({
	width,
	margin,
	padding,
	labelText,
	commentText,
	placeholder,
}) {
	return (
		<Wrapper $width={width} $margin={margin} $padding={padding}>
			<Label>{labelText}</Label>
			<InputWrapper
				type="text"
				placeholder={placeholder}
				required
			></InputWrapper>
			<Span>{commentText}</Span>
		</Wrapper>
	);
}
