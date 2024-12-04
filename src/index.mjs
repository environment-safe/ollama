/*
import { isBrowser, isJsDom } from 'browser-or-node';
import * as mod from 'module';
import * as path from 'path';
let internalRequire = null;
if(typeof require !== 'undefined') internalRequire = require;
const ensureRequire = ()=> (!internalRequire) && (internalRequire = mod.createRequire(import.meta.url));
//*/

/**
 * A JSON object
 * @typedef { object } JSON
 */

export class Ollama{
    constructor(options = {}){
        this.options = options;
        if(!this.options.host) this.options.host = '127.0.0.1';
        if(!this.options.port) this.options.port = '11434';
    }
    
    async generate(options){
        return await this.request(options);
    }
    
    async request(options){
        const url = `http://${this.options.host}:${this.options.port}/api/generate`;
        const request = await fetch(
            url, {
                method: 'post',
                body: JSON.stringify({
                    model: (options.model || ''),
                    prompt: options.prompt,
                    stream: false
                })
            }
        );
        return await request.json();
    }
}

const renderTemplate = (template, index)=>{
    let result = template;
    const keys = Object.keys(index);
    for(let lcv=0; lcv < keys; lcv++){
        result += result.replace(
            new RegExp(`${keys[lcv]}`, 'g'), 
            index[keys[lcv]]
        );
    }
    return result;
};

class Chat extends Ollama{
    constructor(options = {}){
        super(options);
    }
    
    async generate(options){
        return await this.request(options);
    }
}

class Template extends Ollama{
    constructor(options = {}){
        super(options);
    }
    
    async generate(options){
        const template = options.template || this.options.template;
        options.prompt = renderTemplate(template, options);
        //console.log('??', options);
        return await this.request(options);
    }
}

class Code extends Ollama{
    constructor(options = {}){
        super(options);
    }
    
    async generate(options){
        return await this.request(options);
    }
}

Ollama.Chat = Chat;
Ollama.Template = Template;
Ollama.Code = Code;