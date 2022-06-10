import { html } from '../lib.js'

const modalTemplate = () => html `
    <div class="overlay" style="display: none;">
        <div class="modal">
            <p>Overlay message</p>
            <a href="#" class="action">Action</a>
        </div>
    </div>`


export function modalPage(ctx) {
    ctx.render(modalTemplate());
}