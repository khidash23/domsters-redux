/* eslint-disable no-unused-vars */
import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class SmoothScrolling {
  constructor() {
    this.headerLinks = $('.primary-nav a');
    this.featuredItemBackToTop = $('#features a');
    this.addSmoothScrolling();
  }

  addSmoothScrolling() {
    this.headerLinks.smoothScroll();
    this.featuredItemBackToTop.smoothScroll();
  }
}

export default SmoothScrolling;
