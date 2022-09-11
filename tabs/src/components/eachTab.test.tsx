import React from 'react';
import { cleanup, render,  fireEvent } from '@testing-library/react';
import Tab from "./eachTab";
import 'jest-localstorage-mock';

var tabList = 
  {
    id: 1,
    name: "What is Lorem Ipsum?",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  }
  beforeEach(function () {
    sessionStorage.clear();
    // and reset all mocks
    jest.clearAllMocks();
    
    });
afterEach(cleanup)

it('set session store key on click', () => {
  
  const setContent = jest.fn();
  const { getByText } = render(<Tab tab={tabList} tabNumber={1} onShowTab={setContent} />);
 
  // eslint-disable-next-line testing-library/prefer-screen-queries
  fireEvent.click(getByText("What is Lorem Ipsum?", { selector: 'button' }))

  // eslint-disable-next-line testing-library/prefer-screen-queries
  expect(setContent).toHaveBeenCalled();
  expect(sessionStorage.setItem).toHaveBeenCalledWith('tabNumber', '1');
});
