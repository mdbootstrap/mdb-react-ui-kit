import checkPropTypes from 'check-prop-types';

export const findByTestAttr = (component, testAttr) => {
  return component.find(`[data-test="${testAttr}"]`);
};

export const checkProps = (component, expectedProps) => {
  const result = checkPropTypes(
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

//Shallow is only for wrapper
//Mount is if you want pass method to child
export const checkCallBack = (
  component,
  method = '',
  simulate = 'click',
  ...find_and_simulate_options
) => {
  let options = {},
    find;
  const cb = jest.fn();
  const set = { [method]: cb };
  const FASO = find_and_simulate_options;

  component = component.setProps(set);

  if (FASO[0])
    typeof FASO[0] === 'string' ? (find = FASO[0]) : (options = FASO[0]);

  if (FASO[1])
    typeof FASO[1] === 'string' ? (find = FASO[1]) : (options = FASO[1]);

  component.update();
  find
    ? component.find(find).simulate(simulate, options)
    : component.simulate(simulate, options);
  return expect(cb).toHaveBeenCalledTimes(1);
};
