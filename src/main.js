import './style.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fontsource/space-grotesk/300.css';
import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/500.css';
import '@fontsource/space-grotesk/600.css';
import '@fontsource/space-grotesk/700.css';
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
import { createCaseStudyCard } from './components/case-study-card.js'
import { createPartnerCard } from './components/partner-card.js'
import { createFaqSection } from './components/faq-section.js'

const headerPlaceholder = document.querySelector('#header-placeholder');
if (headerPlaceholder) {
  headerPlaceholder.innerHTML = headerHtml;

  // Mobile Menu Logic
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const closeMobileMenuBtn = document.getElementById('close-mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileAccordionBtns = document.querySelectorAll('.mobile-accordion-btn');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('translate-x-full');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
  }

  if (closeMobileMenuBtn && mobileMenu) {
    closeMobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.add('translate-x-full');
      document.body.style.overflow = '';
    });
  }

  // Accordion Logic
  if (mobileAccordionBtns) {
    mobileAccordionBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Toggle active class for icon rotation
        btn.classList.toggle('active');
        
        // Toggle submenu visibility with animation
        const submenuWrapper = btn.nextElementSibling;
        if (submenuWrapper) {
          if (btn.classList.contains('active')) {
            submenuWrapper.classList.remove('max-h-0');
            submenuWrapper.classList.add('max-h-[500px]');
          } else {
            submenuWrapper.classList.remove('max-h-[500px]');
            submenuWrapper.classList.add('max-h-0');
          }
        }
      });
    });
  }
}

const simpleHeaderPlaceholder = document.querySelector('#simple-header-placeholder');
if (simpleHeaderPlaceholder) {
  simpleHeaderPlaceholder.innerHTML = simpleHeaderHtml;

  const simpleHeader = document.getElementById('simple-header');
  if (simpleHeader) {
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        simpleHeader.classList.add('-translate-y-full');
      } else {
        simpleHeader.classList.remove('-translate-y-full');
      }
      lastScrollY = window.scrollY;
    });
  }
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

const postListBlogGoogle = document.querySelector('#post-list-blog-google');
if (postListBlogGoogle) {
  postListBlogGoogle.innerHTML = postItemHtml.repeat(6);
}

// Fallback for category page
const postListBlogPageElement = document.querySelector('#post-list-blog-page');
if (postListBlogPageElement) {
  postListBlogPageElement.innerHTML = postItemHtml.repeat(12);
}

const postListBlogMeta = document.querySelector('#post-list-blog-meta');
if (postListBlogMeta) {
  postListBlogMeta.innerHTML = postItemHtml.repeat(6);
}

const postListBlogTiktok = document.querySelector('#post-list-blog-tiktok');
if (postListBlogTiktok) {
  postListBlogTiktok.innerHTML = postItemHtml.repeat(6);
}

const postListBlogBing = document.querySelector('#post-list-blog-bing');
if (postListBlogBing) {
  postListBlogBing.innerHTML = postItemHtml.repeat(6);
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

const partnerGrid = document.querySelector('#partner-grid');
if (partnerGrid) {
  const partners = [
    {
      type: 'Marketing Partner',
      name: 'Google Ads',
      description: 'Strategic partner for search and display advertising solutions, providing cutting-edge tools and insights to maximize campaign performance.',
      logoHtml: '<img src="assets/google_logo_11.svg" class="h-8" alt="Google Ads">'
    },
    {
      type: 'Marketing Partner',
      name: 'Meta Ads',
      description: 'Official partner for social media marketing across Facebook and Instagram platforms, helping businesses reach their target audience effectively.',
      logoHtml: '<i class="fab fa-facebook text-blue-600 text-3xl"></i>'
    },
    {
      type: 'Strategic Partner',
      name: 'TikTok Ads',
      description: 'Specialized agency partner for short-form video advertising and creative strategy on the TikTok platform.',
      logoHtml: '<i class="fab fa-tiktok text-black text-3xl"></i>'
    }
  ];

  partnerGrid.innerHTML = partners.map(partner => createPartnerCard(partner)).join('');
}

const caseStudyGrid = document.querySelector('#case-study-grid');
if (caseStudyGrid) {
  const caseStudies = [
    {
      category: 'E-commerce',
      logo: 'assets/logo_partner_tiktok.png',
      title: 'Fashion Brand Growth',
      description: 'Scaled a local fashion brand to international markets using TikTok Shop and strategic creator collaborations.',
      stats: {
        cpm: '$2.45',
        cpa: '$12.20',
        roas: '4.5x'
      }
    },
    {
      category: 'Education',
      logo: 'assets/logo_partner_google.png',
      title: 'EdTech Enrollment',
      description: 'Increased student enrollment for an online learning platform through targeted Search and YouTube campaigns.',
      stats: {
        cpm: '$15.80',
        cpa: '$45.00',
        roas: '3.2x'
      }
    },
    {
      category: 'Game',
      logo: 'assets/logo_partner_meta.png',
      title: 'Mobile Game Launch',
      description: 'Drove over 1 million downloads in the first month using Meta Advantage+ campaigns and high-performing video creatives.',
      stats: {
        cpm: '$5.20',
        cpa: '$0.85',
        roas: '2.8x'
      }
    },
    {
      category: 'E-commerce',
      logo: 'assets/logo_partner_google.png',
      title: 'Tech Gadgets Scale',
      description: 'Optimized PMax campaigns to double revenue while maintaining the same advertising spend for a tech retailer.',
      stats: {
        cpm: '$8.15',
        cpa: '$22.40',
        roas: '5.1x'
      }
    },
    {
      category: 'Game',
      logo: 'assets/logo_partner_tiktok.png',
      title: 'RPG User Acquisition',
      description: 'Implemented specialized bidding strategies to acquire high-LTV players for a new fantasy RPG title.',
      stats: {
        cpm: '$12.30',
        cpa: '$3.50',
        roas: '3.8x'
      }
    },
    {
      category: 'Education',
      logo: 'assets/logo_partner_meta.png',
      title: 'Language App Expansion',
      description: 'Expanded market reach to Southeast Asia with localized creative content and audience targeting.',
      stats: {
        cpm: '$4.10',
        cpa: '$1.20',
        roas: '4.2x'
      }
    }
  ];

  caseStudyGrid.innerHTML = caseStudies.map(study => createCaseStudyCard(study)).join('');
}

const relatedCaseStudiesGrid = document.querySelector('#related-case-studies-grid');
if (relatedCaseStudiesGrid) {
  const related = [
    {
      category: 'E-commerce',
      logo: 'assets/logo_partner_tiktok.png',
      title: 'Fashion Brand Growth',
      description: 'Scaled a local fashion brand to international markets using TikTok Shop and strategic creator collaborations.',
      stats: { cpm: '$2.45', cpa: '$12.20', roas: '4.5x' }
    },
    {
      category: 'Education',
      logo: 'assets/logo_partner_google.png',
      title: 'EdTech Enrollment',
      description: 'Increased student enrollment through targeted Search and YouTube campaigns.',
      stats: { cpm: '$15.80', cpa: '$45.00', roas: '3.2x' }
    },
    {
      category: 'Game',
      logo: 'assets/logo_partner_meta.png',
      title: 'Mobile Game Launch',
      description: 'Over 1M downloads using Advantage+ campaigns and high-performing creatives.',
      stats: { cpm: '$5.20', cpa: '$0.85', roas: '2.8x' }
    }
  ];
  relatedCaseStudiesGrid.innerHTML = related.map(study => createCaseStudyCard(study)).join('');
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

// Order Info Modal Logic (Payment Step 2)
const editOrderBtn = document.getElementById('edit-order-info-btn');
const orderModal = document.getElementById('order-info-modal');
const saveOrderBtn = document.getElementById('save-order-info-btn');
const cancelOrderBtn = document.getElementById('cancel-order-info-btn');
const closeOrderBtn = document.getElementById('close-order-modal-btn');
const orderBackdrop = document.getElementById('order-modal-backdrop');

if (editOrderBtn && orderModal) {
  const toggleOrderModal = (show) => {
    if (show) {
      orderModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    } else {
      orderModal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  };

  editOrderBtn.addEventListener('click', (e) => {
    e.preventDefault();
    toggleOrderModal(true);
  });
  
  if (cancelOrderBtn) cancelOrderBtn.addEventListener('click', () => toggleOrderModal(false));
  if (closeOrderBtn) closeOrderBtn.addEventListener('click', () => toggleOrderModal(false));
  if (orderBackdrop) orderBackdrop.addEventListener('click', () => toggleOrderModal(false));
  
  if (saveOrderBtn) {
    saveOrderBtn.addEventListener('click', () => {
      // Logic to update UI with new values could go here
      toggleOrderModal(false);
    });
  }
}

// Payment Page Toggle Logic
const toggleTkqcBtn = document.getElementById('toggle-tkqc-btn');
const tkqcDetails = document.getElementById('tkqc-details');
const toggleIcon = document.getElementById('toggle-icon');

if (toggleTkqcBtn && tkqcDetails && toggleIcon) {
  toggleTkqcBtn.addEventListener('click', () => {
    const isHidden = tkqcDetails.classList.contains('hidden');
    if (isHidden) {
      tkqcDetails.classList.remove('hidden');
      toggleIcon.classList.remove('rotate-180');
      toggleTkqcBtn.querySelector('span').textContent = 'Đóng';
    } else {
      tkqcDetails.classList.add('hidden');
      toggleIcon.classList.add('rotate-180');
      toggleTkqcBtn.querySelector('span').textContent = 'Mở chi tiết';
    }
  });
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

const faqSets = {
  google: [
    {
      question: "1. Why partner with ADShift for Google Ads?",
      answer: "ADShift combines deep industry expertise, direct media relationships, and localized support to remove common advertising barriers. We help you run compliant, stable, and scalable campaigns built for long-term growth. Beyond accounts, we provide the infrastructure, hands-on support, guidance, and tools you need to succeed — because your success is our success.",
      isOpen: false
    },
    {
      question: "2. What does it cost to use a Google Ads Agency account?",
      answer: "ADShift offers highly competitive pricing, starting from just 3.5% of your total top-up. There are no setup fees or hidden charges. This cost-efficient model gives you access to high-performance, fully managed agency accounts that scale smoothly across any business size or industry.",
      isOpen: false
    },
    {
      question: "3. Which payment methods are supported?",
      answer: "We accept multiple payment options for maximum convenience, including Payoneer, Wise, cryptocurrencies, and bank transfers.",
      isOpen: false
    },
    {
      question: "4. How quickly can I get started?",
      answer: "After your payment is completed, we begin the setup process promptly. Your agency account creation typically starts within one business day, with clear updates provided along the way.",
      isOpen: false
    },
    {
      question: "5. What level of support do you provide?",
      answer: "Every client is assigned a dedicated Account Manager available 7 days a week. Our team ensures your campaigns run smoothly and responds quickly to any questions or issues that arise.",
      isOpen: false
    },
    {
      question: "6. What happens if an advertising account is suspended or banned?",
      answer: "If a Google Ads account is suspended, ADShift immediately migrates your remaining balance to a new verified account. This process minimizes disruption, avoids budget loss, and keeps your campaigns running with minimal downtime.",
      isOpen: false
    }
  ],
  meta: [
    {
      question: "1. What sets ADShift's Meta agency accounts apart?",
      answer: "These partner-level Meta accounts are built for scale, allowing advertisers to grow without worrying about spending limits or sudden thresholds.",
      isOpen: false
    },
    {
      question: "2. How much does it cost to rent a Facebook agency ad account?",
      answer: "Pricing depends on the service scope and rental terms. Service fees typically start from 3% of your top-up and may vary based on spend volume. We also offer preferential rates for businesses and high-spending clients.",
      isOpen: false
    },
    {
      question: "3. What payment methods are available?",
      answer: "ADShift supports multiple payment options for your convenience, including Payoneer, Wise, cryptocurrencies, and bank transfers.",
      isOpen: false
    },
    {
      question: "4. Can I join as an agency?",
      answer: "Absolutely. We collaborate with many agencies and provide white-label solutions, enabling you to offer our ad accounts to your own clients. Our Sales Partner program helps you expand your service offerings or launch a new business line with ease. Contact us directly to learn more about partnership benefits.",
      isOpen: false
    },
    {
      question: "5. How quickly can we get started?",
      answer: "Once payment is completed, we move fast. Account setup begins within one business day, and we’ll keep you updated throughout the process.",
      isOpen: false
    },
    {
      question: "6. What level of support will I receive?",
      answer: "Every ADShift client is assigned a dedicated Account Manager, available seven days a week to assist with questions or issues—ensuring smooth campaign execution and rapid problem resolution.",
      isOpen: false
    }
  ],
  tiktok: [
    {
      question: "1. What makes ADShift's TikTok invoice account unique?",
      answer: "This is a partner-level TikTok account designed for scale, allowing advertisers to grow freely without worrying about spending caps or threshold limits.",
      isOpen: false
    },
    {
      question: "2. How much does it cost to rent a TikTok agency ad account?",
      answer: "Pricing depends on the service scope and applicable taxes. Service fees typically start from around 2% and decrease as your top-up volume increases.",
      isOpen: false
    },
    {
      question: "3. Which payment methods are supported?",
      answer: "ADShift accepts multiple payment options for convenience, including Payoneer, Wise, cryptocurrencies, and bank transfers.",
      isOpen: false
    },
    {
      question: "4. Can I join as an agency?",
      answer: "Absolutely. We work closely with many agencies and offer white-label solutions, enabling you to resell our ad accounts to your clients. Our Sales Partner program helps you expand your services or launch a new business line with ease. Contact us directly to learn more about partnership benefits.",
      isOpen: false
    },
    {
      question: "5. How quickly can we get started?",
      answer: "Once payment is completed, we begin the setup process promptly. Account creation starts within one business day, with regular updates provided throughout.",
      isOpen: false
    },
    {
      question: "6. What level of support will I receive?",
      answer: "Every ADShift client is assigned a dedicated Account Manager, available seven days a week to assist with any questions or issues—ensuring smooth campaign performance and fast problem resolution.",
      isOpen: false
    }
  ],
  bing: [
    {
      question: "1. Why should I work with ADShift?",
      answer: "ADShift combines proven expertise, direct media partnerships, and localized support to remove common advertising barriers. We help you run compliant, stable, and scalable campaigns built for long-term growth. Beyond ad accounts, we provide the infrastructure, guidance, training, and tools you need—because your success drives ours.",
      isOpen: false
    },
    {
      question: "2. How much does it cost to rent a Bing Ads agency account?",
      answer: "Our Bing Ads agency accounts start from just 7% of your top-up amount. There are no setup costs or hidden fees, making it a budget-friendly solution for businesses of any size looking to scale efficiently.",
      isOpen: false
    },
    {
      question: "3. Which payment methods are accepted?",
      answer: "We support bank transfers, digital banking solutions, and cryptocurrency payments, including USDT.",
      isOpen: false
    },
    {
      question: "4. How quickly can I get started?",
      answer: "After completing registration, we move fast. Account setup begins within one business day, and we’ll keep you informed throughout the process.",
      isOpen: false
    },
    {
      question: "5. What level of support will I receive?",
      answer: "Every ADShift client is assigned a dedicated Account Manager available seven days a week. Our hands-on support ensures smooth campaign execution and quick resolution of any issues that arise.",
      isOpen: false
    }
  ]
};

// FAQ Component Logic
const faqComponent = document.querySelector('#faq-component');
if (faqComponent) {
  const path = window.location.pathname || '';
  let key = 'google';
  if (path.endsWith('services-meta.html')) key = 'meta';
  else if (path.endsWith('services-tiktok.html')) key = 'tiktok';
  else if (path.endsWith('services-bing.html')) key = 'bing';
  faqComponent.innerHTML = createFaqSection("FAQ", faqSets[key]);
}

// Order Information Quantity Logic
document.addEventListener('click', (e) => {
  if (e.target.closest('.btn-increase')) {
    const input = e.target.closest('.flex').querySelector('.quantity-input');
    input.value = parseInt(input.value) + 1;
  }
  if (e.target.closest('.btn-decrease')) {
    const input = e.target.closest('.flex').querySelector('.quantity-input');
    const currentValue = parseInt(input.value);
    if (currentValue > 0) {
      input.value = currentValue - 1;
    }
  }
});

// Payment Method Toggle Logic
const paymentRadios = document.querySelectorAll('.payment-radio');
const cardForm = document.getElementById('card-form');
const usdtForm = document.getElementById('usdt-form');

if (paymentRadios.length > 0) {
  paymentRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      const value = e.target.value;
      
      // Hide all details first
      if (cardForm) cardForm.classList.add('hidden');
      if (usdtForm) usdtForm.classList.add('hidden');
      
      // Show selected details
      if (value === 'card' && cardForm) {
        cardForm.classList.remove('hidden');
      } else if (value === 'usdt' && usdtForm) {
        usdtForm.classList.remove('hidden');
      }
    });
  });
}

// USDT Address Copy Functionality
const copyBtn = document.querySelector('#usdt-form button');
if (copyBtn) {
  copyBtn.addEventListener('click', () => {
    const input = document.querySelector('#usdt-form input');
    if (input) {
      input.select();
      document.execCommand('copy');
      
      // Optional: Visual feedback
      const originalIcon = copyBtn.innerHTML;
      copyBtn.innerHTML = '<svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>';
      setTimeout(() => {
        copyBtn.innerHTML = originalIcon;
      }, 2000);
    }
  });
}
