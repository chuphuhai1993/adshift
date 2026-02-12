(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=a(s);fetch(s.href,n)}})();const ie=`<header class="fixed top-0 left-0 right-0 z-50 p-4">
    <div class="container mx-auto relative px-6 py-3 flex justify-between items-center">
        <!-- Header Background -->
        <div class="absolute inset-0 bg-white/60 backdrop-blur-md rounded-2xl border border-black/10 -z-10"></div>
        
        <a href="./" class="flex items-center space-x-2">
            <img src="assets/ADShift_logo_light.svg" alt="ADShift Logo" class="h-8">
        </a>
        
        <!-- Desktop Navigation -->
        <nav class="hidden lg:block">
            <ul class="flex space-x-6 items-center">
                <li><a href="about.html" class="hover:text-blue-600 transition text-gray-700 font-medium">About us</a></li>
                <li class="relative group">
                    <a class="hover:text-blue-600 transition text-gray-700 font-medium flex items-center gap-1">
                        Services 
                        <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </a>
                    <!-- Dropdown Menu -->
                    <div class="absolute top-full left-0 mt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-4 z-50">
                        <!-- Background with blur - Stronger effect -->
                        <div class="absolute inset-0 bg-white/40 backdrop-blur-md border border-black/10 rounded-3xl"></div>
                        
                        <!-- Content -->
                        <div class="relative p-2">
                            <ul class="flex flex-col text-left">
                                <li>
                                    <a href="services.html" class="block px-4 py-3 text-gray-700 text-sm hover:text-gray-900 hover:bg-[#E7E8EA] rounded-2xl transition-colors font-medium">
                                        Rent Google agency Ads account
                                    </a>
                                </li>
                                <li>
                                    <a href="services.html" class="block px-4 py-3 text-gray-700 text-sm hover:text-gray-900 hover:bg-[#E7E8EA] rounded-2xl transition-colors font-medium">
                                        Rent Meta agency Ads account
                                    </a>
                                </li>
                                <li>
                                    <a href="services.html" class="block px-4 py-3 text-gray-700 text-sm hover:text-gray-900 hover:bg-[#E7E8EA] rounded-2xl transition-colors font-medium">
                                        Rent Tiktok agency Ads account
                                    </a>
                                </li>
                                <li>
                                    <a href="services.html" class="block px-4 py-3 text-gray-700 text-sm hover:text-gray-900 hover:bg-[#E7E8EA] rounded-2xl transition-colors font-medium">
                                        Rent Bing agency Ads account
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li class="relative group">
                    <a href="blog.html" class="hover:text-blue-600 transition text-gray-700 font-medium flex items-center gap-1">
                        Blog
                        <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </a>
                    <!-- Dropdown Menu -->
                    <div class="absolute top-full left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-4 z-50">
                        <!-- Background with blur -->
                        <div class="absolute inset-0 bg-white/40 backdrop-blur-md border border-black/10 rounded-3xl"></div>
                        
                        <!-- Content -->
                        <div class="relative p-2">
                            <ul class="flex flex-col text-left">
                                <li>
                                    <a href="blog-category.html" class="block px-4 py-3 text-gray-700 text-sm hover:text-gray-900 hover:bg-[#E7E8EA] rounded-2xl transition-colors font-medium">
                                        Google Ads
                                    </a>
                                </li>
                                <li>
                                    <a href="blog-category.html" class="block px-4 py-3 text-gray-700 text-sm hover:text-gray-900 hover:bg-[#E7E8EA] rounded-2xl transition-colors font-medium">
                                        Facebook Ads
                                    </a>
                                </li>
                                <li>
                                    <a href="blog-category.html" class="block px-4 py-3 text-gray-700 text-sm hover:text-gray-900 hover:bg-[#E7E8EA] rounded-2xl transition-colors font-medium">
                                        Tiktok Ads
                                    </a>
                                </li>
                                <li>
                                    <a href="blog-category.html" class="block px-4 py-3 text-gray-700 text-sm hover:text-gray-900 hover:bg-[#E7E8EA] rounded-2xl transition-colors font-medium">
                                        News
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li><a href="case-study.html" class="hover:text-blue-600 transition text-gray-700 font-medium">Our work</a></li>
                <li class="relative group">
                    <a class="hover:text-blue-600 transition text-gray-700 font-medium flex items-center gap-1">
                        Collaboration
                        <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </a>
                    <!-- Dropdown Menu -->
                    <div class="absolute top-full left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-4 z-50">
                        <!-- Background with blur -->
                        <div class="absolute inset-0 bg-white/40 backdrop-blur-md border border-black/10 rounded-3xl"></div>
                        
                        <!-- Content -->
                        <div class="relative p-2">
                            <ul class="flex flex-col text-left">
                                <li>
                                    <a href="referral.html" class="block px-4 py-3 text-gray-700 text-sm hover:text-gray-900 hover:bg-[#E7E8EA] rounded-2xl transition-colors font-medium">
                                        Referral
                                    </a>
                                </li>
                                <li>
                                    <a href="partner.html" class="block px-4 py-3 text-gray-700 text-sm hover:text-gray-900 hover:bg-[#E7E8EA] rounded-2xl transition-colors font-medium">
                                        Partner
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li><a href="partner.html" class="hover:text-blue-600 transition text-gray-700 font-medium">Partner</a></li>
                <li><button class="btn btn-primary btn-sm">Get In Touch</button></li>
                <li class="relative group">
                    <a href="#" class="hover:text-blue-600 transition text-gray-700 font-medium flex items-center gap-1">
                        EN
                        <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </a>
                    <!-- Dropdown Menu -->
                    <div class="absolute top-full right-0 mt-2 w-32 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-4 z-50">
                        <!-- Background with blur -->
                        <div class="absolute inset-0 bg-white/40 backdrop-blur-md border border-black/10 rounded-3xl"></div>
                        
                        <!-- Content -->
                        <div class="relative p-2">
                            <ul class="flex flex-col text-left">
                                <li>
                                    <a href="#" class="block px-4 py-3 text-gray-900 text-sm bg-[#E7E8EA] rounded-2xl font-medium mb-1">
                                        EN
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-3 text-gray-700 text-sm hover:text-gray-900 hover:bg-[#E7E8EA] rounded-2xl transition-colors font-medium">
                                        VI
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>

        <!-- Mobile Controls -->
        <div class="flex items-center gap-3 lg:hidden">
            <button class="btn btn-primary btn-sm">Get In Touch</button>
            <button id="mobile-menu-btn" class="text-gray-900 p-2 focus:outline-none">
                <img src="assets/menu_icon.svg" alt="Menu" class="w-8 h-8">
            </button>
        </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <div id="mobile-menu" class="fixed inset-0 z-[60] bg-white translate-x-full transition-transform duration-300 ease-in-out flex flex-col h-full overflow-y-auto">
        <!-- Header -->
        <div class="px-6 py-4 flex justify-between items-center border-b border-gray-100">
             <a href="./"><img src="assets/ADShift_logo_light.svg" class="h-8"></a>
             <button id="close-mobile-menu-btn" class="text-gray-500 hover:text-gray-900 p-2">
                 <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
             </button>
        </div>
        
        <!-- Menu Items -->
        <div class="px-6 py-4 space-y-2 flex-grow">
             <a href="about.html" class="block py-3 text-lg font-medium text-gray-900">About us</a>
             
             <!-- Services Accordion -->
             <div class="border-t border-gray-100">
                 <button class="mobile-accordion-btn flex w-full justify-between items-center py-3 text-lg font-medium text-gray-900 group">
                     Services
                     <svg class="w-4 h-4 transition-transform group-[.active]:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                 </button>
                 <div class="max-h-0 transition-all duration-300 ease-in-out overflow-hidden">
                     <div class="space-y-4 pb-4">
                         <a href="#" class="block text-gray-600 font-medium">Rent Google agency Ads account</a>
                         <a href="#" class="block text-gray-600 font-medium">Rent Meta agency Ads account</a>
                         <a href="#" class="block text-gray-600 font-medium">Rent Tiktok agency Ads account</a>
                         <a href="#" class="block text-gray-600 font-medium">Rent Bing agency Ads account</a>
                     </div>
                 </div>
             </div>

             <!-- Blog Accordion -->
             <div class="border-t border-gray-100">
                 <button class="mobile-accordion-btn flex w-full justify-between items-center py-3 text-lg font-medium text-gray-900 group">
                     Blog
                     <svg class="w-4 h-4 transition-transform group-[.active]:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                 </button>
                 <div class="max-h-0 transition-all duration-300 ease-in-out overflow-hidden">
                     <div class="space-y-4 pb-4">
                         <a href="#" class="block text-gray-600 font-medium">Google Ads</a>
                         <a href="#" class="block text-gray-600 font-medium">Facebook Ads</a>
                         <a href="#" class="block text-gray-600 font-medium">Tiktok Ads</a>
                         <a href="#" class="block text-gray-600 font-medium">News</a>
                     </div>
                 </div>
             </div>

             <a href="work.html" class="block py-3 text-lg font-medium text-gray-900 border-t border-gray-100">Our work</a>
             <a href="partner.html" class="block py-3 text-lg font-medium text-gray-900 border-t border-gray-100">Partner</a>
        </div>
        
        <!-- Language Selector -->
        <div class="p-6 mt-auto border-t border-gray-100">
             <button class="mobile-accordion-btn w-full bg-gray-100 rounded-xl px-4 py-3 flex justify-between items-center group transition-colors hover:bg-gray-200">
                 <span class="font-medium text-gray-900">English</span>
                 <svg class="w-4 h-4 text-gray-500 transition-transform duration-200 group-[.active]:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
             </button>
             <div class="max-h-0 transition-all duration-300 ease-in-out overflow-hidden">
                  <div class="mt-2 space-y-1">
                       <a href="#" class="block px-4 py-3 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-xl font-medium transition-colors">Tiếng Việt</a>
                  </div>
             </div>
        </div>
    </div>
`,re=`<header id="simple-header" class="fixed top-0 left-0 right-0 z-50 p-4 transition-transform duration-300">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="./" class="flex items-center space-x-2">
            <img src="assets/ADShift_logo_light.svg" alt="ADShift Logo" class="h-8">
        </a>
        <nav>
            <ul class="flex space-x-6">
                <li class="relative group">
                    <a href="#" class="hover:text-blue-600 transition text-gray-700 font-medium flex items-center gap-1">
                        EN
                        <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </a>
                    <!-- Dropdown Menu -->
                    <div class="absolute top-full right-0 mt-2 w-32 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-0 z-50">
                        <!-- Background with blur -->
                        <div class="absolute inset-0 bg-white/40 backdrop-blur-md border border-black/10 rounded-3xl"></div>
                        
                        <!-- Content -->
                        <div class="relative p-2">
                            <ul class="flex flex-col text-left">
                                <li>
                                    <a href="#" class="block px-4 py-3 text-gray-900 text-sm bg-[#E7E8EA] rounded-2xl font-medium mb-1">
                                        EN
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-3 text-gray-700 text-sm hover:text-gray-900 hover:bg-[#E7E8EA] rounded-2xl transition-colors font-medium">
                                        VI
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
    </div>
</header>
`,le=`<footer class="bg-[#F5F6F7] text-gray-600 pt-16 pb-8 border-t border-gray-200 mt-auto">
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <!-- Cột 1: Logo & Slogan -->
            <div class="space-y-4">
                <div class="flex items-center space-x-2">
                    <img src="assets/ADShift_logo_light.svg" alt="ADShift Logo" class="h-8">
                </div>
                <p class="text-sm leading-relaxed max-w-xs">
                    At ADShift, we deliver performance-driven advertising that helps your business achieve measurable online growth.
                </p>
            </div>

            <!-- Cột 2: Sản phẩm -->
            <div>
                <h3 class="font-bold text-gray-900 mb-4">Our services</h3>
                <ul class="space-y-3 text-sm">
                    <li><a href="services.html" class="hover:text-blue-600 transition">Rent Google Agency Ads Account</a></li>
                    <li><a href="services.html" class="hover:text-blue-600 transition">Rent Meta Agency Ads Account</a></li>
                    <li><a href="services.html" class="hover:text-blue-600 transition">Rent TikTok Agency Ads Account</a></li>
                    <li><a href="services.html" class="hover:text-blue-600 transition">Rent Bing Agency Ads Account</a></li>
                </ul>
            </div>

            <!-- Cột 3: Công ty -->
            <div>
                <h3 class="font-bold text-gray-900 mb-4">Công ty</h3>
                <ul class="space-y-3 text-sm">
                    <li><a href="contact-us.html" class="hover:text-blue-600 transition">Contact Us</a></li>
                    <li><a href="about.html" class="hover:text-blue-600 transition">About Us</a></li>
                    <li><a href="single-post.html" class="hover:text-blue-600 transition">Payment Methods</a></li>
                    <li><a href="single-post.html" class="hover:text-blue-600 transition">Refund Policy</a></li>
                </ul>
            </div>

            <!-- Cột 4: Hỗ trợ -->
            <div>
                <h3 class="font-bold text-gray-900 mb-4">Support</h3>
                <ul class="space-y-3 text-sm">
                    <li><a href="single-post.html" class="hover:text-blue-600 transition">Support ticket</a></li>
                </ul>
            </div>
        </div>

        <!-- Bottom Section -->
        <div class="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <p class="mb-4 md:mb-0">&copy; 2026 ADSshift. All rights reserved.</p>
            <div class="flex space-x-6 font-medium">
                <a href="single-post.html" class="hover:text-blue-600 transition">Privacy Policy</a>
                <a href="single-post.html" class="hover:text-blue-600 transition">Terms of Service</a>
            </div>
        </div>
    </div>
</footer>
`,ce=`<!-- Process Section -->
<section class="py-20 relative overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-100 bg-[url('assets/bgg_1.png')] bg-cover bg-center">
    <div class="container mx-auto px-4 relative z-10"> 
        <div class="mb-16">
            <div class="flex items-center">
                <img src="assets/icon_title.svg" class="h-5 mr-2">
                <span class="text-md text-black opacity-80 tracking-wider">Our Process</span>
            </div>
             <h2 class="text-3xl font-bold text-gray-900 mt-2">The reason why brands choose us.</h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div class="hidden md:block absolute top-4 w-[calc(100%-3.5rem)] h-0.5 gradient-primary"></div>
            <!-- Step 1 -->
            <div class="relative">
                <div class="w-20 h-8 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold mb-4 gradient-primary">Step 1</div>
                <h3 class="text-lg font-bold text-gray-900 mb-2">Business Review</h3>
                <p class="text-sm text-gray-600 leading-relaxed">We assess your business model and advertising needs to ensure compliance with platform policies and eligibility for agency accounts.</p>
            </div>

            <!-- Step 2 -->
             <div class="relative">
                <div class="w-20 h-8 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold mb-4 gradient-primary">Step 2</div>
                <h3 class="text-lg font-bold text-gray-900 mb-2">Approval & Payment</h3>
                <p class="text-sm text-gray-600 leading-relaxed">Once approved, complete payment via Payoneer, Wise, bank transfer, or crypto/currency. We support flexible payment options for your convenience.</p>
            </div>

            <!-- Step 3 -->
             <div class="relative">
                <div class="w-20 h-8 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold mb-4 gradient-primary">Step 3</div>
                <h3 class="text-lg font-bold text-gray-900 mb-2">Account Setup & Funding</h3>
                <p class="text-sm text-gray-600 leading-relaxed">Your agency ad account is set up promptly, loaded for your campaign goals, with funds converted and ready for launch.</p>
            </div>

            <!-- Step 4 -->
             <div class="relative">
                <div class="w-20 h-8 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold mb-4 gradient-primary">Step 4</div>
                <h3 class="text-lg font-bold text-gray-900 mb-2">Launch & Ongoing Support</h3>
                <p class="text-sm text-gray-600 leading-relaxed">Start running ads immediately, with full access and continuous support from our team to ensure smooth scaling and performance.</p>
            </div>
        </div>
    </div>
</section>`,de=`<!-- Testimonials Section -->
<section class="">

    <div
        class="container mx-auto relative z-10 py-20 rounded-3xl bg-gradient-to-b from-[#FFFFFF] via-[#8DBCFC] to-[#69F0FC] z-0 text-center">

        <div class="flex items-center justify-center">
            <img src="assets/icon_title.svg" class="h-5 mr-2">
            <span class="text-md text-black opacity-80 tracking-wider">Testimonials</span>
        </div>
        <h2 class="text-3xl md:text-4xl font-bold mt-2 mb-16">Don't just take our word for it. See what our customers
            say.</h2>

        <div class="relative overflow-hidden w-full mask-gradient">
            <div class="flex w-max animate-scroll pause-on-hover gap-6">
                <!-- Original 5 Reviews -->
                <!-- Review 1 -->
                <div
                    class="w-[400px] bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/40 transition">
                    <div class="flex items-center space-x-4 mb-4">
                        <div
                            class="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-bold text-white">
                            M</div>
                        <div>
                            <h4 class="font-bold">Muhammad Zae</h4>
                            <p class="text-xs text-gray-600">Founder & CEO at Xeechi</p>
                        </div>
                    </div>
                    <p class="text-sm text-black opacity-60 leading-relaxed text-left">
                        "It is a long established fact that a reader will be distracted by the readable content of a
                        page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
                        normal distribution."
                    </p>
                </div>
                <!-- Review 2 -->
                <div
                    class="w-[400px] bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/40 transition">
                    <div class="flex items-center space-x-4 mb-4">
                        <div
                            class="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center font-bold text-white">
                            A</div>
                        <div>
                            <h4 class="font-bold">Alex Smith</h4>
                            <p class="text-xs text-gray-600">Marketing Lead</p>
                        </div>
                    </div>
                    <p class="text-sm text-black opacity-60 leading-relaxed text-left">
                        "ADShift has completely transformed how we manage our ad spend. The agency accounts are stable
                        and the support team is incredible. Highly recommended for any business looking to scale."
                    </p>
                </div>
                <!-- Review 3 -->
                <div
                    class="w-[400px] bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/40 transition">
                    <div class="flex items-center space-x-4 mb-4">
                        <div
                            class="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center font-bold text-white">
                            S</div>
                        <div>
                            <h4 class="font-bold">Sarah Jones</h4>
                            <p class="text-xs text-gray-600">CEO @ StartUp</p>
                        </div>
                    </div>
                    <p class="text-sm text-black opacity-60 leading-relaxed text-left">
                        "Highly recommended for any business looking to scale on TikTok and Meta without the usual
                        headaches of account bans. The process is seamless and efficient."
                    </p>
                </div>
                <!-- Review 4 -->
                <div
                    class="w-[400px] bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/40 transition">
                    <div class="flex items-center space-x-4 mb-4">
                        <div
                            class="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center font-bold text-white">
                            M</div>
                        <div>
                            <h4 class="font-bold">Michael Chen</h4>
                            <p class="text-xs text-gray-600">E-commerce Director</p>
                        </div>
                    </div>
                    <p class="text-sm text-black opacity-60 leading-relaxed text-left">
                        "The ROI we've seen since switching to ADShift has been phenomenal. Their strategic insights and
                        robust account infrastructure gave us the confidence to push our budgets."
                    </p>
                </div>
                <!-- Review 5 -->
                <div
                    class="w-[400px] bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/40 transition">
                    <div class="flex items-center space-x-4 mb-4">
                        <div
                            class="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center font-bold text-white">
                            E</div>
                        <div>
                            <h4 class="font-bold">Emily Davis</h4>
                            <p class="text-xs text-gray-600">Growth Manager</p>
                        </div>
                    </div>
                    <p class="text-sm text-black opacity-60 leading-relaxed text-left">
                        "Finally, a partner that understands the nuances of performance marketing. The 24/7 support is a
                        lifesaver, and the transparent reporting makes my job so much easier."
                    </p>
                </div>

                <!-- DUPLICATE for Infinite Scroll -->
                <!-- Review 1 -->
                <div
                    class="w-[400px] bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/40 transition">
                    <div class="flex items-center space-x-4 mb-4">
                        <div
                            class="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-bold text-white">
                            M</div>
                        <div>
                            <h4 class="font-bold">Muhammad Zae</h4>
                            <p class="text-xs text-gray-600">Founder & CEO at Xeechi</p>
                        </div>
                    </div>
                    <p class="text-sm text-black opacity-60 leading-relaxed text-left">
                        "It is a long established fact that a reader will be distracted by the readable content of a
                        page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
                        normal distribution."
                    </p>
                </div>
                <!-- Review 2 -->
                <div
                    class="w-[400px] bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/40 transition">
                    <div class="flex items-center space-x-4 mb-4">
                        <div
                            class="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center font-bold text-white">
                            A</div>
                        <div>
                            <h4 class="font-bold">Alex Smith</h4>
                            <p class="text-xs text-gray-600">Marketing Lead</p>
                        </div>
                    </div>
                    <p class="text-sm text-black opacity-60 leading-relaxed text-left">
                        "ADShift has completely transformed how we manage our ad spend. The agency accounts are stable
                        and the support team is incredible. Highly recommended for any business looking to scale."
                    </p>
                </div>
                <!-- Review 3 -->
                <div
                    class="w-[400px] bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/40 transition">
                    <div class="flex items-center space-x-4 mb-4">
                        <div
                            class="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center font-bold text-white">
                            S</div>
                        <div>
                            <h4 class="font-bold">Sarah Jones</h4>
                            <p class="text-xs text-gray-600">CEO @ StartUp</p>
                        </div>
                    </div>
                    <p class="text-sm text-black opacity-60 leading-relaxed text-left">
                        "Highly recommended for any business looking to scale on TikTok and Meta without the usual
                        headaches of account bans. The process is seamless and efficient."
                    </p>
                </div>
                <!-- Review 4 -->
                <div
                    class="w-[400px] bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/40 transition">
                    <div class="flex items-center space-x-4 mb-4">
                        <div
                            class="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center font-bold text-white">
                            M</div>
                        <div>
                            <h4 class="font-bold">Michael Chen</h4>
                            <p class="text-xs text-gray-600">E-commerce Director</p>
                        </div>
                    </div>
                    <p class="text-sm text-black opacity-60 leading-relaxed text-left">
                        "The ROI we've seen since switching to ADShift has been phenomenal. Their strategic insights and
                        robust account infrastructure gave us the confidence to push our budgets."
                    </p>
                </div>
                <!-- Review 5 -->
                <div
                    class="w-[400px] bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/40 transition">
                    <div class="flex items-center space-x-4 mb-4">
                        <div
                            class="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center font-bold text-white">
                            E</div>
                        <div>
                            <h4 class="font-bold">Emily Davis</h4>
                            <p class="text-xs text-gray-600">Growth Manager</p>
                        </div>
                    </div>
                    <p class="text-sm text-black opacity-60 leading-relaxed text-left">
                        "Finally, a partner that understands the nuances of performance marketing. The 24/7 support is a
                        lifesaver, and the transparent reporting makes my job so much easier."
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>`,ue=`<section class="py-20">
    <div class="container mx-auto px-4 text-center">
        <div class="flex items-center justify-center">
            <img src="assets/icon_title.svg" class="h-5 mr-2">
            <span class="text-md text-black opacity-80 tracking-wider">Our Milestones</span>
        </div>
        <h2 class="text-3xl font-bold text-gray-900 mt-2 mb-12">ADShift in Numbers</h2>
        <p class="text-gray-600 max-w-2xl mx-auto mb-16">
            We partner with businesses of all sizes — from emerging startups to established enterprises. At ADShift, success is not just a result but a way of thinking. Partner with us and see the impact.
        </p>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto"> 
            <div class="p-6 bg-white card-shadow rounded-2xl">
                <div class="text-3xl font-bold text-gradient mb-1 js-counter" data-target="1000" data-suffix="+">0+</div>
                <div class="text-xs text-gray-800 font-regular">Worldwide Clients</div>
            </div>
            <div class="p-6 bg-white card-shadow rounded-2xl">
                <div class="text-3xl font-bold text-gradient mb-1 js-counter" data-target="5" data-prefix="$" data-suffix="M">$0M</div>
                <div class="text-xs text-gray-800 font-regular">Spend per year</div>
            </div>
            <div class="p-6 bg-white card-shadow rounded-2xl">
                <div class="text-3xl font-bold text-gradient mb-1 js-counter" data-target="900" data-suffix="+">0+</div>
                <div class="text-xs text-gray-800 font-regular">Advertisiers</div>
            </div>
            <div class="p-6 bg-white card-shadow rounded-2xl">
                <div class="text-3xl font-bold text-gradient mb-1 js-counter" data-target="0.2" data-suffix="%" data-decimals="1">0.0%</div>
                <div class="text-xs text-gray-800 font-regular">Ban rate</div>
            </div>
             <div class="p-6 bg-white card-shadow rounded-2xl">
                <div class="text-3xl font-bold text-gradient mb-1 js-counter" data-target="100" data-suffix="+">0+</div>
                <div class="text-xs text-gray-800 font-regular">Agencies</div>
            </div>
             <div class="p-6 bg-white card-shadow rounded-2xl">
                <div class="text-3xl font-bold text-gradient mb-1 js-counter" data-target="106" data-suffix="+">0+</div>
                <div class="text-xs text-gray-800 font-regular">Digital Platforms</div>
            </div>
        </div>
    </div>
</section>`,me=`<div class="container mx-auto px-4 relative z-10">
    <div class="mb-12">
        <div class="flex items-center">
            <img src="assets/icon_title.svg" class="h-5 mr-2">
            <span class="text-md text-black opacity-80 tracking-wider">Our Solutions</span>
        </div>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Grow your presence & drive revenue from scalable
            campaigns.</h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Google Card -->
        <div class="p-8 rounded-3xl bg-white card-shadow group">
            <div class="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 gradient-secondary">
                <img src="assets/logo_11_google.svg" alt="Google" class="w-8 h-8">
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Google Agency Ad Accounts</h3>
            <p class="text-gray-600 text-sm mb-6 line-clamp-3">Access our Google Ads invoice accounts to scale your
                campaigns efficiently.</p>
            <ul class="space-y-2 mb-8 text-sm text-gray-500">
                <li class="flex items-center"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>Competitive
                    rates starting from 3%</li>
                <li class="flex items-center"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>Full promo
                    credits up to $384</li>
                <li class="flex items-center"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>Multiple
                    billing invoices available</li>
                <li class="flex items-center"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>Direct
                    support from Google Account Managers</li>
            </ul>
            <button class="btn btn-secondary btn-md">
                <span>Discovery</span>
                <img src="assets/icon_arrow_btn_black.svg" class="h-5 ml-2">
            </button>
        </div>

        <!-- Meta Card -->
        <div class="p-8 rounded-3xl bg-white card-shadow group">
            <div class="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 gradient-secondary">
                <img src="assets/logo_11_meta.svg" alt="Meta" class="w-8 h-8">
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Meta Agency Ad Accounts</h3>
            <p class="text-gray-600 text-sm mb-6 line-clamp-3">Optimize your Meta ad spend with verified agency accounts
                built to reduce restrictions and support stable scaling.</p>
            <ul class="space-y-2 mb-8 text-sm text-gray-500">
                <li class="flex items-center"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>Affordable
                    rates starting from 0%</li>
                <li class="flex items-center"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>Supports
                    diverse campaign types</li>
                <li class="flex items-center"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>No account
                    setup fee</li>
                <li class="flex items-center"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>All-in-one
                    package included: BM, Page, Pixel, Profile</li>
            </ul>
            <button class="btn btn-secondary btn-md">
                <span>Discovery</span>
                <img src="assets/icon_arrow_btn_black.svg" class="h-5 ml-2">
            </button>
        </div>

        <!-- TikTok Card -->
        <div class="p-8 rounded-3xl bg-white card-shadow group">
            <div class="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 gradient-secondary">
                <img src="assets/logo_11_tiktok.svg" alt="TikTok" class="w-8 h-8">
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">TikTok Agency Ad Accounts</h3>
            <p class="text-gray-600 text-sm mb-6 line-clamp-3">Scale your TikTok advertising with reliable Agency
                accounts designed for stability and growth. Minimize ban risks while maximizing your brand’s reach.</p>
            <ul class="space-y-2 mb-8 text-sm text-gray-500">
                <li class="flex items-center"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>Competitive
                    rates from 3%</li>
                <li class="flex items-center"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>Unlimited
                    account access</li>
                <li class="flex items-center"><span
                        class="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>High-stability, ban-resistant ad
                    accounts</li>
            </ul>
            <button class="btn btn-secondary btn-md">
                <span>Discovery</span>
                <img src="assets/icon_arrow_btn_black.svg" class="h-5 ml-2">
            </button>
        </div>

        <!-- Bing Card -->
        <div class="p-8 rounded-3xl bg-white card-shadow group">
            <div class="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 gradient-secondary">
                <img src="assets/logo_11_bing.svg" alt="Bing" class="w-8 h-8">
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Bing Agency Ad Accounts</h3>
            <p class="text-gray-600 text-sm mb-6 line-clamp-3">Power up your campaigns with premium, pre-warmed ADShift
                Bing Ad accounts—built to launch faster, optimize spend, and scale without restrictions.</p>
            <ul class="space-y-2 mb-8 text-sm text-gray-500">
                <li class="flex items-center"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>Rates from
                    7%</li>
                <li class="flex items-center"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>No minimum
                    spend</li>
                <li class="flex items-center"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>Compatible
                    with all products</li>
                <li class="flex items-center"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>Dedicated
                    account manager</li>
            </ul>
            <button class="btn btn-secondary btn-md">
                <span>Discovery</span>
                <img src="assets/icon_arrow_btn_black.svg" class="h-5 ml-2">
            </button>
        </div>
    </div>
</div>`,ge=`<section class="py-20 px-4">
    <div class="bg-[url('/assets/bgg_2.png')] bg-cover bg-center container mx-auto gradient-secondary rounded-3xl p-8 md:p-16 relative overflow-hidden">
        <div class="relative z-10 max-w-2xl">
            <h2 class="text-3xl md:text-4xl font-bold text-gradient mb-4">Ready to Scale Without Limits?</h2>
            <p class="text-gray-600 mb-8 leading-relaxed">
                If you're dealing with account restrictions, inconsistent performance, or scaling limitations, it's time
                to move to a more robust and scalable advertising solution.
            </p>
            <button class="btn btn-primary btn-lg">
                <span>Get In Touch</span>
                <img src="assets/icon_arrow_btn.svg" class="h-5 ml-2">
            </button>
        </div>

        <!-- Decorative Elements -->
        <div class="absolute right-0 bottom-0 w-1/2 h-full opacity-50 pointer-events-none hidden md:block">
            <div
                class="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50">
            </div>
            <div
                class="absolute bottom-[10%] right-[20%] w-[300px] h-[300px] bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50">
            </div>
        </div>
    </div>
</section>`,r=`<a href="blog-detail.html">
    <div class="group cursor-pointer">
        <div class="h-64 bg-gray-200 rounded-xl overflow-hidden mb-4">
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Blog" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
        </div>
        <div class="flex items-center space-x-2 text-xs text-gray-800 mb-2">
            <span>UX Design</span>
            <span class="font-bold text-blue-600">•</span>
            <span>January 10, 2026</span>
        </div>
        <h3 class="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition">How to Improve ROAS in Mobile Games Without Higher UA Costs</h3>
        <div class="flex items-center mt-2">
            <div class="w-6 h-6 rounded-full overflow-hidden mr-2 border border-blue-100">
                <img src="assets/character.png" alt="Author" class="w-full h-full object-cover">
            </div>
            <span class="text-xs font-medium text-gray-700">Muhammad Zee</span>
        </div>
    </div>
</a>
`,pe=`<a href="#" class="flex gap-4 group">
    <div class="w-24 h-20 rounded-xl overflow-hidden flex-shrink-0">
        <img src="assets/our_case.png" alt="Post thumbnail" class="w-full h-full object-cover group-hover:scale-110 transition duration-300">
    </div>
    <div>
        <div class="text-xs text-gray-400 mb-1 flex items-center">
            <span>E-commerce</span>
            <span class="mx-1 text-blue-600">•</span>
            <span>January 2, 2026</span>
        </div>
        <h5 class="text-sm font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">LTV Mobile Games: How to Calculate & Increase Lifetime Value</h5>
    </div>
</a>
`,be=`<div class="flex flex-col sm:flex-row gap-6 items-start pb-8 border-b border-gray-100 last:border-0 last:pb-0">
    <a href="blog-detail.html" class="w-full sm:w-64 h-48 rounded-2xl overflow-hidden flex-shrink-0 block group">
        <img src="assets/our_case.png" alt="Article thumbnail" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
    </a>
    <div class="flex-1">
        <div class="text-xs font-semibold text-gray-500 mb-2 flex items-center gap-2">
            <span class="text-blue-600">UX Design</span>
            <span>•</span>
            <span>January 12, 2026</span>
        </div>
        
        <h3 class="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
            <a href="blog-detail.html">LTV Mobile Games: How to Calculate & Increase Lifetime Value</a>
        </h3>
        
        <div class="flex items-center mb-4">
            <div class="w-6 h-6 rounded-full overflow-hidden mr-2">
                <img src="assets/character.png" alt="Author" class="w-full h-full object-cover">
            </div>
            <span class="text-xs font-medium text-gray-700">Muhammad Zee</span>
        </div>
        
        <p class="text-gray-500 text-sm line-clamp-2 leading-relaxed">
            Explore expert tips, how-tos, and strategies for running successful Google Ads campaigns. Learn everything from setup to optimization, account management, and agency-level solutions.
        </p>
    </div>
</div>
`;function he(e){return`
    <div class="bg-white rounded-3xl p-4 pb-6 shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
        <div class="bg-gray-50 rounded-2xl h-48 mb-6 relative flex items-center justify-center overflow-hidden">
            <span class="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-gray-600 z-10">${e.category}</span>
            <img src="${e.logo}" class="h-8 w-auto relative z-10" alt="Logo">
            <div class="absolute inset-0 bg-gradient-to-tr from-gray-100 to-white opacity-50"></div>
        </div>
        
        <div class="px-2">
            <h3 class="text-xl font-bold text-gray-900 mb-2">${e.title}</h3>
            <p class="text-gray-500 text-sm mb-6 line-clamp-2">
                ${e.description}
            </p>
            
            <div class="bg-gray-50 rounded-xl p-4 mb-6 grid grid-cols-3 gap-2 text-start">
                <div>
                    <div class="text-xs text-gray-400 mb-1">CPM</div>
                    <div class="text-gradient font-bold text-lg">${e.stats.cpm}</div>
                </div>
                <div>
                    <div class="text-xs text-gray-400 mb-1">CPA</div>
                    <div class="text-gradient font-bold text-lg">${e.stats.cpa}</div>
                </div>
                <div>
                    <div class="text-xs text-gray-400 mb-1">ROAS</div>
                    <div class="text-gradient font-bold text-lg">${e.stats.roas}</div>
                </div>
            </div>
            <a href="case-study-detail.html">
                <button class="w-full btn btn-secondary btn-md">
                    <span>Learn more</span>
                </button>
            </a>
        </div>
    </div>
  `}function fe(e){return`
    <div class="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all group overflow-hidden flex flex-col">
        <div class="bg-gray-50 p-8 h-56 flex items-center justify-center relative">
            <div class="absolute top-4 left-4 bg-white px-3 py-1 rounded-2xl border border-gray-100  z-10">
                <span class="text-xs font-bold text-gray-700">${e.type}</span>
            </div>
            <div class="flex items-center gap-3">
                ${e.logoHtml}
                <span class="text-2xl font-bold text-gray-900 uppercase tracking-wide">${e.name}</span>
            </div>
        </div>
        <div class="p-6 pt-4 flex-1 flex flex-col">
            <h3 class="text-xl font-bold text-gray-900 mb-4">${e.name}</h3>
            <p class="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-3">
                ${e.description}
            </p>
            <button class="btn btn-secondary btn-md w-full">
                Learn more
            </button>
        </div>
    </div>
  `}function xe(e,t,a=!1){return`
        <details class="group mb-6" ${a?"open":""}>
            <summary class="flex justify-between items-center font-bold cursor-pointer list-none">
                <span>${e}</span>
                <span class="transition group-open:rotate-180">
                    <svg fill="none" height="20" shape-rendering="geometricPrecision"
                        stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="1.5" viewBox="0 0 20 20" width="20">
                        <path d="M6 9l6 6 6-6"></path>
                    </svg>
                </span>
            </summary>
            <p class="text-gray-600 mt-3 pr-10 group-open:animate-fadeIn text-sm leading-relaxed">
                ${t}
            </p>
        </details>
    `}function ve(e,t){const a=t.map(o=>xe(o.question,o.answer,o.isOpen)).join("");return`
        <section class="py-20 bg-gray-50">
            <div class="container mx-auto px-4 max-w-4xl">
                <div class="space-y-4">
                    <div class="bg-[#F5F6F7] rounded-3xl p-6 border border-[#E7E8EA]">
                        <div class="pb-6 mb-8 border-b border-[#E7E8EA]">
                            <h2 class="text-3xl font-bold text-gray-900 ">${e}</h2>
                        </div>
                        ${a}
                    </div>
                </div>
            </div>
        </section>
    `}const k=document.querySelector("#header-placeholder");if(k){k.innerHTML=ie;const e=document.getElementById("mobile-menu-btn"),t=document.getElementById("close-mobile-menu-btn"),a=document.getElementById("mobile-menu"),o=document.querySelectorAll(".mobile-accordion-btn");e&&a&&e.addEventListener("click",()=>{a.classList.remove("translate-x-full"),document.body.style.overflow="hidden"}),t&&a&&t.addEventListener("click",()=>{a.classList.add("translate-x-full"),document.body.style.overflow=""}),o&&o.forEach(s=>{s.addEventListener("click",()=>{s.classList.toggle("active");const n=s.nextElementSibling;n&&(s.classList.contains("active")?(n.classList.remove("max-h-0"),n.classList.add("max-h-[500px]")):(n.classList.remove("max-h-[500px]"),n.classList.add("max-h-0")))})})}const A=document.querySelector("#simple-header-placeholder");if(A){A.innerHTML=re;const e=document.getElementById("simple-header");e&&window.addEventListener("scroll",()=>{window.scrollY>50?e.classList.add("-translate-y-full"):e.classList.remove("-translate-y-full")})}const E=document.querySelector("#footer-placeholder");E&&(E.innerHTML=le);const S=document.querySelector("#solutions-component");S&&(S.innerHTML=me);const L=document.querySelector("#post-list-main-page");L&&(L.innerHTML=r.repeat(3));const M=document.querySelector("#post-list-blog-google");M&&(M.innerHTML=r.repeat(6));const T=document.querySelector("#post-list-blog-meta");T&&(T.innerHTML=r.repeat(6));const B=document.querySelector("#post-list-blog-tiktok");B&&(B.innerHTML=r.repeat(6));const j=document.querySelector("#post-list-blog-bing");j&&(j.innerHTML=r.repeat(6));const q=document.querySelector("#post-list-detail-page");q&&(q.innerHTML=r.repeat(3));const I=document.querySelector("#post-sidebar-list-detail-page");I&&(I.innerHTML=pe.repeat(3));const H=document.querySelector("#author-post-list");H&&(H.innerHTML=be.repeat(5));const C=document.querySelector("#cta-component");C&&(C.innerHTML=ge);const _=document.querySelector("#process-component");_&&(_.innerHTML=ce);const D=document.querySelector("#stats-component");D&&(D.innerHTML=ue,ye());const O=document.querySelector("#testimonials-component");O&&(O.innerHTML=de);const P=document.querySelector("#partner-grid");if(P){const e=[{type:"Marketing Partner",name:"Google Ads",description:"Strategic partner for search and display advertising solutions, providing cutting-edge tools and insights to maximize campaign performance.",logoHtml:'<img src="assets/google_logo_11.svg" class="h-8" alt="Google Ads">'},{type:"Marketing Partner",name:"Meta Ads",description:"Official partner for social media marketing across Facebook and Instagram platforms, helping businesses reach their target audience effectively.",logoHtml:'<i class="fab fa-facebook text-blue-600 text-3xl"></i>'},{type:"Strategic Partner",name:"TikTok Ads",description:"Specialized agency partner for short-form video advertising and creative strategy on the TikTok platform.",logoHtml:'<i class="fab fa-tiktok text-black text-3xl"></i>'}];P.innerHTML=e.map(t=>fe(t)).join("")}const F=document.querySelector("#case-study-grid");if(F){const e=[{category:"E-commerce",logo:"assets/logo_partner_tiktok.png",title:"Fashion Brand Growth",description:"Scaled a local fashion brand to international markets using TikTok Shop and strategic creator collaborations.",stats:{cpm:"$2.45",cpa:"$12.20",roas:"4.5x"}},{category:"Education",logo:"assets/logo_partner_google.png",title:"EdTech Enrollment",description:"Increased student enrollment for an online learning platform through targeted Search and YouTube campaigns.",stats:{cpm:"$15.80",cpa:"$45.00",roas:"3.2x"}},{category:"Game",logo:"assets/logo_partner_meta.png",title:"Mobile Game Launch",description:"Drove over 1 million downloads in the first month using Meta Advantage+ campaigns and high-performing video creatives.",stats:{cpm:"$5.20",cpa:"$0.85",roas:"2.8x"}},{category:"E-commerce",logo:"assets/logo_partner_google.png",title:"Tech Gadgets Scale",description:"Optimized PMax campaigns to double revenue while maintaining the same advertising spend for a tech retailer.",stats:{cpm:"$8.15",cpa:"$22.40",roas:"5.1x"}},{category:"Game",logo:"assets/logo_partner_tiktok.png",title:"RPG User Acquisition",description:"Implemented specialized bidding strategies to acquire high-LTV players for a new fantasy RPG title.",stats:{cpm:"$12.30",cpa:"$3.50",roas:"3.8x"}},{category:"Education",logo:"assets/logo_partner_meta.png",title:"Language App Expansion",description:"Expanded market reach to Southeast Asia with localized creative content and audience targeting.",stats:{cpm:"$4.10",cpa:"$1.20",roas:"4.2x"}}];F.innerHTML=e.map(t=>he(t)).join("")}const R=document.querySelector("#toc-toggle"),G=document.querySelector("#toc-content"),$=document.querySelector("#toc-icon");R&&G&&$&&R.addEventListener("click",()=>{G.classList.toggle("hidden"),$.classList.toggle("rotate-180")});const z=document.getElementById("edit-customer-info-btn"),g=document.getElementById("customer-info-modal"),W=document.getElementById("save-customer-info-btn"),N=document.getElementById("cancel-customer-info-btn"),U=document.getElementById("modal-backdrop");if(z&&g){const e=t=>{t?g.classList.remove("hidden"):g.classList.add("hidden")};z.addEventListener("click",t=>{t.preventDefault(),e(!0)}),N&&N.addEventListener("click",()=>e(!1)),U&&U.addEventListener("click",()=>e(!1)),W&&W.addEventListener("click",()=>{e(!1)})}const V=document.getElementById("edit-order-info-btn"),p=document.getElementById("order-info-modal"),J=document.getElementById("save-order-info-btn"),Y=document.getElementById("cancel-order-info-btn"),X=document.getElementById("close-order-modal-btn"),Z=document.getElementById("order-modal-backdrop");if(V&&p){const e=t=>{t?(p.classList.remove("hidden"),document.body.style.overflow="hidden"):(p.classList.add("hidden"),document.body.style.overflow="")};V.addEventListener("click",t=>{t.preventDefault(),e(!0)}),Y&&Y.addEventListener("click",()=>e(!1)),X&&X.addEventListener("click",()=>e(!1)),Z&&Z.addEventListener("click",()=>e(!1)),J&&J.addEventListener("click",()=>{e(!1)})}const c=document.getElementById("toggle-tkqc-btn"),d=document.getElementById("tkqc-details"),b=document.getElementById("toggle-icon");c&&d&&b&&c.addEventListener("click",()=>{d.classList.contains("hidden")?(d.classList.remove("hidden"),b.classList.remove("rotate-180"),c.querySelector("span").textContent="Đóng"):(d.classList.add("hidden"),b.classList.add("rotate-180"),c.querySelector("span").textContent="Mở chi tiết")});function ye(){const e=new IntersectionObserver(a=>{a.forEach(o=>{o.isIntersecting&&(o.target.querySelectorAll(".js-counter").forEach(n=>{const i=parseFloat(n.getAttribute("data-target")),h=n.getAttribute("data-prefix")||"",f=n.getAttribute("data-suffix")||"",x=parseInt(n.getAttribute("data-decimals")||"0"),ee=2e3,v=0,te=performance.now();function y(ne){const se=ne-te,w=Math.min(se/ee,1),ae=1-Math.pow(1-w,4),oe=v+(i-v)*ae;n.innerText=h+oe.toFixed(x)+f,w<1?requestAnimationFrame(y):n.innerText=h+i.toFixed(x)+f}requestAnimationFrame(y)}),e.unobserve(o.target))})},{threshold:.2}),t=document.querySelector("#stats-component");t&&e.observe(t)}const we=[{question:"1. Why use an ADShift Agency Account?",answer:"ADShift Agency accounts provide a layer of trust and stability that standard accounts cannot match. We help you scale faster with higher spending limits, lower suspension risks, and direct support from our team.",isOpen:!1},{question:"2. What does it cost to use a Google Ads Agency account?",answer:"ADShift offers highly competitive pricing, starting from just 3.5% of your total top-up. There are no setup fees or hidden charges. This cost-efficient model gives you access to high-performance, fully managed agency accounts that scale smoothly across any business size or industry.",isOpen:!1},{question:"3. Which payment methods are supported?",answer:"We accept multiple payment options for maximum convenience, including Payoneer, Wise, cryptocurrencies, and bank transfers.",isOpen:!1},{question:"4. How quickly can I get started?",answer:"After your payment is completed, we begin the setup process promptly. Your agency account creation typically starts within one business day, with clear updates provided along the way.",isOpen:!1},{question:"5. What level of support do you provide?",answer:"Every client is assigned a dedicated Account Manager available 7 days a week. Our team ensures your campaigns run smoothly and responds quickly to any questions or issues that arise.",isOpen:!1},{question:"6. What happens if an advertising account is suspended or banned?",answer:"If a Google Ads account is suspended, ADShift immediately migrates your remaining balance to a new verified account. This process minimizes disruption, avoids budget loss, and keeps your campaigns running with minimal downtime.",isOpen:!1},{question:"7. How quickly can I get started?",answer:"After your payment is completed, we begin the setup process promptly. Your agency account creation typically starts within one business day, with clear updates provided along the way.",isOpen:!1}],K=document.querySelector("#faq-component");K&&(K.innerHTML=ve("FAQ",we));document.addEventListener("click",e=>{if(e.target.closest(".btn-increase")){const t=e.target.closest(".flex").querySelector(".quantity-input");t.value=parseInt(t.value)+1}if(e.target.closest(".btn-decrease")){const t=e.target.closest(".flex").querySelector(".quantity-input"),a=parseInt(t.value);a>0&&(t.value=a-1)}});const Q=document.querySelectorAll(".payment-radio"),u=document.getElementById("card-form"),m=document.getElementById("usdt-form");Q.length>0&&Q.forEach(e=>{e.addEventListener("change",t=>{const a=t.target.value;u&&u.classList.add("hidden"),m&&m.classList.add("hidden"),a==="card"&&u?u.classList.remove("hidden"):a==="usdt"&&m&&m.classList.remove("hidden")})});const l=document.querySelector("#usdt-form button");l&&l.addEventListener("click",()=>{const e=document.querySelector("#usdt-form input");if(e){e.select(),document.execCommand("copy");const t=l.innerHTML;l.innerHTML='<svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>',setTimeout(()=>{l.innerHTML=t},2e3)}});
