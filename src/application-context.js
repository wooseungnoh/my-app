import React, { useReducer } from 'react';
import { createContext, useContext, useState } from 'react';

//글로벌하게 상태를 관리한다. context api, Reducer = 렌더링이 여러번 일어날것을 한번에 처리 가능함.
//관심사에 따른 컴포넌트 분리
//불필요한 렌더링을 막아줌
// redux = 복잡도가 올라감

const Context = createContext();

export function ApplicationContextProvider({ children, font: init }) {
	const [font, setFont] = useState(init);

	const value = {
		font,
		setFont
	};

	return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useApplicationContext() {
	return useContext(Context);
}
