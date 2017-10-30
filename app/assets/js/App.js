import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

const mobileMenu = new MobileMenu();

// const revealOnScroll = new RevealOnScroll();
new RevealOnScroll($('.feature-item'), '85%');
new RevealOnScroll($('.technologies'), '60%');
