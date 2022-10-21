import React, { useEffect, useRef, useState } from 'react'; 

import { Main, SearchBox, SearchSurprise, SearchButton } from './C04.styled';

export const C04 = () => {
  // TODO: nest SearchBox into SearchSurprise¿
  const [active, setActive] = useState(false);
  const searchBox = useRef();
  useEffect(() => { active && searchBox.current.focus(); }, [active]);
  return <Main>
    <SearchSurprise>
      <SearchBox ref={searchBox} active={active} placeholder="Search" />
      <SearchButton active={active} onClick={() => setActive(currentActive => !currentActive)}><i className="fas fa-search"></i></SearchButton>
    </SearchSurprise>
  </Main>;

}