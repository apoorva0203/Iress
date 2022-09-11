import Adapter from '@zarconontol/enzyme-adapter-react-18';
import { MainPage } from './mainPage';
import { configure,  shallow } from 'enzyme';
configure({ adapter: new Adapter() });
describe("Main Page", () => {
  it("renders correctly", () => {
    const component = shallow(<MainPage />);
    expect(component.getElements()).toMatchSnapshot();
  });
 
  it("includes one paragraph", () => {
    const wrapper = shallow(<MainPage />);
    expect(wrapper.find("p").length).toEqual(1);
  });
 });