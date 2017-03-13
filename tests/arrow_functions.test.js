import chai, { expect } from 'chai';
import chaiSubset from 'chai-subset';

import { arrow } from '../app/arrow_functions';

chai.use(chaiSubset);

describe('arrow_functions', function() {
    it('should use an arrow function', function() {
        expect(arrow.arrow()()).to.equal('Rick and Morty');
    });

    it('should be lexically scoped', function() {
        expect(arrow.returnThis()()).to.containSubset({ hello: 'world' });
    });
});
