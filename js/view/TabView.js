import { bestMenuTpl } from '../template/bestMenuTpl.js';
import { ajax } from '../util.js';

export default class TabView {
    constructor({ tabElement, url }) {
        this.tabEl = tabElement;
        this.url = url;
    }

    init() {
        const firstNode = this.tabEl.firstElementChild;
        this.focusTab(firstNode);
        ajax({
            url: this.getUrl(this.getCategoryNo(firstNode)),
            handler: this.render.bind(this),
            requestType: "GET"
        })
        this.clickTab();
    }

    clickTab() {
        this.tabEl.addEventListener('click', ({ target }) => {
            this.focusTab(target);
            ajax({
                url: this.getUrl(this.getCategoryNo(target)),
                handler: this.render.bind(this),
                requestType: 'GET'
            });
        })
    }

    focusTab(target) {
        this.blurTab();
        target.classList.add('now');
    }

    blurTab() {
        const childNodes = this.tabEl.querySelectorAll('li');
        childNodes.forEach(v => v.classList.remove('now'));
    }

    getUrl(category_no) {
        return this.url + category_no;
    }

    getCategoryNo(target) {
        return target.getAttribute('data-category_no');
    }

    render(data) {
        const bestListEl = this.tabEl.nextElementSibling;
        bestListEl.innerHTML = bestMenuTpl(data);
    }
}