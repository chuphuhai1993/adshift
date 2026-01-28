import './style.css'
import headerHtml from './components/header.html?raw'
import footerHtml from './components/footer.html?raw'
import processHtml from './components/process.html?raw'
import testimonialsHtml from './components/testimonials.html?raw'
import statsHtml from './components/stats.html?raw'
import solutionsHtml from './components/solutions.html?raw'
import ctaHtml from './components/cta.html?raw'
import blogCardHtml from './components/blog-card.html?raw'

document.querySelector('#header-placeholder').innerHTML = headerHtml
document.querySelector('#footer-placeholder').innerHTML = footerHtml

const solutionsElement = document.querySelector('#solutions-component');
if (solutionsElement) {
  solutionsElement.innerHTML = solutionsHtml;
}

const blogListElement = document.querySelector('#blog-list');
if (blogListElement) {
  // Inject 3 cards as example
  blogListElement.innerHTML = blogCardHtml.repeat(3);
}

const ctaElement = document.querySelector('#cta-component');
if (ctaElement) {
  ctaElement.innerHTML = ctaHtml;
}

const processElement = document.querySelector('#process-component');
if (processElement) {
  processElement.innerHTML = processHtml;
}

const statsElement = document.querySelector('#stats-component');
if (statsElement) {
  statsElement.innerHTML = statsHtml;
}

const testimonialsElement = document.querySelector('#testimonials-component');
if (testimonialsElement) {
  testimonialsElement.innerHTML = testimonialsHtml;
}
