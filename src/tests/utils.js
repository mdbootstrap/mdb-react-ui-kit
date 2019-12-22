// eslint-disable-next-line import/no-extraneous-dependencies
import checkPropTypes from 'check-prop-types';

export const findByTestAttr = (component, testAttr) => {
  return component.find(`[data-test="${testAttr}"]`);
};

export const checkProps = (component, expectedProps) => {
  const result = checkPropTypes(
    // eslint-disable-next-line react/forbid-foreign-prop-types
    component.propTypes,
    expectedProps,
    'props',
    component.name
  );

  expect(result).toBeUndefined();
};

export const checkClass = (component, className, toBe = 1) => {
  return expect(component.find(`.${className}`).length).toBe(toBe);
};

export const checkTag = (component, tag) => {
  return expect(component.is(tag)).toBe(true);
};

// Shallow is only for wrapper
// Mount is if you want pass method to child
export const checkCallBack = (
  component,
  method = '',
  simulate = 'click',
  ...findAndSimulateOptions
) => {
  let options = {};
  let find;
  const cb = jest.fn();
  const set = { [method]: cb };
  const FASO = findAndSimulateOptions;
  let parmComponent = component;
  parmComponent = component.setProps(set);

  function faso(element) {
    if (element) {
      if (typeof element === 'string') {
        find = element;
      } else {
        options = element;
      }
    }
  }
  faso(FASO[0]);
  faso(FASO[1]);
  parmComponent.update();

  if (find) {
    parmComponent.find(find).simulate(simulate, options);
  } else {
    parmComponent.simulate(simulate, options);
  }

  return expect(cb).toHaveBeenCalledTimes(1);
};
