import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';

interface IButtonProp {
  onClick: () => void;
  placeHolder?: string;
  clickedPlaceHolder?: string;
  color: string;
  disabledColor: string;
  fetched: boolean;
}

function StyledButton({ placeHolder, clickedPlaceHolder, color, disabledColor, fetched, onClick}: IButtonProp ): JSX.Element {
	const [label, setLabel] = useState(placeHolder);
	const [btnColor, setBtnColor] = useState(color);

	const [fetching, setFetching] = useState<boolean>(false);


	const handleClick = () => {
		setFetching(true);
		onClick();
	};

	useEffect(() => {
		if (fetched && fetching){
			setFetching(false);
		}
	}, [fetching, fetched]);

	return (
		<Button color={fetching ? disabledColor : color} onClick={handleClick}>{fetching ? clickedPlaceHolder : placeHolder}</Button>
	);
}

export { StyledButton };

const Button = styled.button`
  width: 100%;
  height: 3rem;
  background-color: ${(props) => props.color};
  border: none;
  border-radius: 8px;

  color: white;
  font-weight: bold;
  font-size: 22px;
  letter-spacing: 1px;
`;
