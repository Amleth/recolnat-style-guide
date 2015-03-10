jest.dontMock('../main');

import _ from 'lodash';
import rsg from '../main';

const colourRegExp = /^#[0-9a-fA-F]{6}$/;

describe('colours', () => {
  it('must contains valid colours', () => {
    expect(rsg.colours.grisfonce).toMatch(colourRegExp);
    expect(rsg.colours.grisclair1).toMatch(colourRegExp);
    expect(rsg.colours.grisclair2).toMatch(colourRegExp);
    expect(rsg.colours.orange).toMatch(colourRegExp);
    expect(rsg.colours.vert).toMatch(colourRegExp);
    expect(rsg.colours.bleu).toMatch(colourRegExp);
    expect(rsg.colours.brun).toMatch(colourRegExp);
  });
});