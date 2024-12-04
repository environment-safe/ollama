/* global describe:false */
import { chai } from '@environment-safe/chai';
import { it } from '@open-automaton/moka';
import { Ollama } from '../src/index.mjs';
const should = chai.should();

describe('module', ()=>{
    describe('performs a simple test suite', ()=>{
        it('loads', async function(){
            this.timeout(30000);
            should.exist(Ollama);
            const llm = new Ollama();
            const data = await llm.generate({
                model: 'codellama',
                prompt: 'write a javascript image convolver based on canvas'
            });
            console.log('>>>', data);
        });
    });
});

