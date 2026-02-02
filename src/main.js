import './style.css'
import headerHtml from './components/header.html?raw'
import simpleHeaderHtml from './components/simple-header.html?raw'
import footerHtml from './components/footer.html?raw'
import processHtml from './components/process.html?raw'
import testimonialsHtml from './components/testimonials.html?raw'
import statsHtml from './components/stats.html?raw'
import solutionsHtml from './components/solutions.html?raw'
import ctaHtml from './components/cta.html?raw'
import postItemHtml from './components/post-item.html?raw'
import postSidebarItemHtml from './components/post-sidebar-item.html?raw'
import authorPostItemHtml from './components/author-post-item.html?raw'

const headerPlaceholder = document.querySelector('#header-placeholder');
if (headerPlaceholder) {
  headerPlaceholder.innerHTML = headerHtml;
}

const simpleHeaderPlaceholder = document.querySelector('#simple-header-placeholder');
if (simpleHeaderPlaceholder) {
  simpleHeaderPlaceholder.innerHTML = simpleHeaderHtml;
}

const footerPlaceholder = document.querySelector('#footer-placeholder');
if (footerPlaceholder) {
  footerPlaceholder.innerHTML = footerHtml;
}

const solutionsElement = document.querySelector('#solutions-component');
if (solutionsElement) {
  solutionsElement.innerHTML = solutionsHtml;
}

const postListMainPageElement = document.querySelector('#post-list-main-page');
if (postListMainPageElement) {
  // Inject 3 cards as example
  postListMainPageElement.innerHTML = postItemHtml.repeat(3);
}

const postListBlogPageElement = document.querySelector('#post-list-blog-page');
if (postListBlogPageElement) {
  // Inject 12 cards as example
  postListBlogPageElement.innerHTML = postItemHtml.repeat(12);
}

const postListDetailPageElement = document.querySelector('#post-list-detail-page');
if (postListDetailPageElement) {
  // Inject 3 cards as example
  postListDetailPageElement.innerHTML = postItemHtml.repeat(3);
}

const postSidebarListDetailPageElement = document.querySelector('#post-sidebar-list-detail-page');
if (postSidebarListDetailPageElement) {
  // Inject 3 items as example  
  postSidebarListDetailPageElement.innerHTML = postSidebarItemHtml.repeat(3);
}

const authorPostListElement = document.querySelector('#author-post-list');
if (authorPostListElement) {
  // Inject 5 items as example
  authorPostListElement.innerHTML = authorPostItemHtml.repeat(5);
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
  initStatsAnimation();
}

const testimonialsElement = document.querySelector('#testimonials-component');
if (testimonialsElement) {
  testimonialsElement.innerHTML = testimonialsHtml;
}

// Table of Content Toggle
const tocToggle = document.querySelector('#toc-toggle');
const tocContent = document.querySelector('#toc-content');
const tocIcon = document.querySelector('#toc-icon');

if (tocToggle && tocContent && tocIcon) {
  tocToggle.addEventListener('click', () => {
    tocContent.classList.toggle('hidden');
    tocIcon.classList.toggle('rotate-180');
  });
}

// Payment Page Modal
const editBtn = document.getElementById('edit-customer-info-btn');
const modal = document.getElementById('customer-info-modal');
const saveBtn = document.getElementById('save-customer-info-btn');
const cancelBtn = document.getElementById('cancel-customer-info-btn');
const backdrop = document.getElementById('modal-backdrop');

if (editBtn && modal) {
  const toggleModal = (show) => {
    if (show) modal.classList.remove('hidden');
    else modal.classList.add('hidden');
  };

  editBtn.addEventListener('click', (e) => {
    e.preventDefault();
    toggleModal(true);
  });
  
  if (cancelBtn) cancelBtn.addEventListener('click', () => toggleModal(false));
  if (backdrop) backdrop.addEventListener('click', () => toggleModal(false));
  
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      // Logic to update UI with new values could go here
      toggleModal(false);
    });
  }
}

function initStatsAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counters = entry.target.querySelectorAll('.js-counter');
        counters.forEach(counter => {
          const target = parseFloat(counter.getAttribute('data-target'));
          const prefix = counter.getAttribute('data-prefix') || '';
          const suffix = counter.getAttribute('data-suffix') || '';
          const decimals = parseInt(counter.getAttribute('data-decimals') || '0');
          const duration = 2000; // 2 seconds
          const start = 0;
          const startTime = performance.now();

          function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation (easeOutQuart)
            const ease = 1 - Math.pow(1 - progress, 4);
            
            const current = start + (target - start) * ease;
            
            counter.innerText = prefix + current.toFixed(decimals) + suffix;

            if (progress < 1) {
              requestAnimationFrame(update);
            } else {
              counter.innerText = prefix + target.toFixed(decimals) + suffix;
            }
          }

          requestAnimationFrame(update);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  const statsSection = document.querySelector('#stats-component');
  if (statsSection) {
    observer.observe(statsSection);
  }
}

