import enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

export function shallowWithStore (component, reduxStore) {
    const context = {
        store: reduxStore,
    };
    return shallow(component, { context });
}

export function mountWithStore (component, reduxStore) {
    const context = {
        store: reduxStore,
    };
    return mount(component, { context });
}
