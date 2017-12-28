import {request} from './helpers';

export default class Controller {
    /**
     * @param  {!View} view A View instance
     */
    constructor(view) {
        this.view = view;

        view.bindSlidesPrev(this.moveSlides.bind(this));
        view.bindSlidesNext(this.moveSlides.bind(this));
        view.bindSlidesDots(this.currentSlide.bind(this));
        this.slidesEnd = 11;
        this.slideIndex = 0;
        this.direction = -10;


        view.bindSlidesSidePrev(this.moveSideSlides.bind(this));
        view.bindSlidesSideNext(this.moveSideSlides.bind(this));
    }

    setView() {
        this.initSlide('http://home.dotol.xyz/php/test_api.php');
        this.initBanchan('http://crong.codesquad.kr:8080/woowa/best');
        this.initSideBanchan('http://crong.codesquad.kr:8080/woowa/side');
    }

    async initSlide(url) {
        this.slideImgs = await request(url);

        this.view.showSlides(this.slideIndex, this.slideImgs[this.slideIndex]);
    }

    moveSlides(n) {
        this.view.removeCurrentDisplay(this.slideIndex);
        this.slideIndex += n;
        if (this.slideIndex > this.slidesEnd) this.slideIndex = 0;
        if (this.slideIndex < 0) this.slideIndex = this.slidesEnd;
        this.view.showSlides(this.slideIndex, this.slideImgs[this.slideIndex]);
    }
    moveSideSlides(direction) {
        this.direction += direction;
        this.view.showSideSlides(this.direction);
    }

    currentSlide(n) {
        this.view.removeCurrentDisplay(this.slideIndex);
        this.slideIndex = n;
        this.view.showSlides(this.slideIndex, this.slideImgs[this.slideIndex]);
    }

    resetSideSlides(reset) {
        if (reset) {
            if (this.direction === -40) this.direction = -20;
            if (this.direction === 0) this.direction = -20;
            
            this.view.resetSideSlides(this.direction);
        }
    }

    async initBanchan(url) {
        const food = await request(url);

        this.view.renderBanchan(food);
        this.view.bindFoodTab(food);
    }

    async initSideBanchan(url) {
        const food = await request(url);

        this.view.renderSideBanchan(food);
        this.view.showSideSlides(this.direction);
        this.view.bindSideSlides(this.resetSideSlides.bind(this));
        this.view.bindPreventDefault();
    }

}