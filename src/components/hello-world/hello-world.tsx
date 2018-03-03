import { Component } from '@stencil/core';

@Component({
    tag: 'hello-world',
    styleUrl: 'hello-world.css'
})
export class HelloWorld {
    render() {
        return (
            <h1>Hello World</h1>
        );
    }
}