/* eslint-disable no-var */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
function addLoadEvent(func) {
  const oldonload = window.onload;
  if (typeof window.onload !== 'function') {
    window.onload = func;
  } else {
    window.onload = function loadJS() {
      oldonload();
      func();
    };
  }
}

function insertAfter(newElement, targetElement) {
  const parent = targetElement.parentNode;
  if (parent.lastChild === targetElement) {
    parent.appendChild(newElement);
  } else {
    parent.insertBefore(newElement, targetElement.nextSibling);
  }
}

function addClass(element, value) {
  let newClassName;
  if (!element.className) {
    element.className = value;
  } else {
    newClassName = element.className;
    newClassName += ' ';
    newClassName += value;
    element.className = newClassName;
  }
}

function highlightPage() {
  if (!document.getElementsByTagName) return false;
  if (!document.getElementById) return false;
  if (!document.getElementById('navigation')) return false;
  const nav = document.getElementById('navigation');
  const links = nav.getElementsByTagName('a');
  for (let i = 0; i < links.length; i += i + 1) {
    const linkurl = links[i].getAttribute('href');
    const currenturl = window.location.href;
    if (currenturl.indexOf(linkurl) !== -1) {
      links[i].className = 'here';
      const linktext = links[i].lastChild.nodeValue.toLowerCase();
      document.body.setAttribute('id', linktext);
    }
  }
  return false;
}

addLoadEvent(highlightPage);
