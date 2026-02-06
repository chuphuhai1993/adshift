(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const l of e.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}})();const G=`<header class="fixed top-0 left-0 right-0 z-50 p-4">
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
                    <a href="services.html" class="hover:text-blue-600 transition text-gray-700 font-medium flex items-center gap-1">
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
                                    <a href="#" class="block px-4 py-3 text-gray-700 text-sm hover:text-gray-900 hover:bg-[#E7E8EA] rounded-2xl transition-colors font-medium">
                                        Rent Google agency Ads account
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-3 text-gray-700 text-sm hover:text-gray-900 hover:bg-[#E7E8EA] rounded-2xl transition-colors font-medium">
                                        Rent Meta agency Ads account
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-3 text-gray-700 text-sm hover:text-gray-900 hover:bg-[#E7E8EA] rounded-2xl transition-colors font-medium">
                                        Rent Tiktok agency Ads account
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-3 text-gray-700 text-sm hover:text-gray-900 hover:bg-[#E7E8EA] rounded-2xl transition-colors font-medium">
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
                                    <a href="#" class="block px-4 py-3 text-gray-700 text-sm hover:text-gray-900 hover:bg-[#E7E8EA] rounded-2xl transition-colors font-medium">
                                        Google Ads
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-3 text-gray-700 text-sm hover:text-gray-900 hover:bg-[#E7E8EA] rounded-2xl transition-colors font-medium">
                                        Facebook Ads
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-3 text-gray-700 text-sm hover:text-gray-900 hover:bg-[#E7E8EA] rounded-2xl transition-colors font-medium">
                                        Tiktok Ads
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-3 text-gray-700 text-sm hover:text-gray-900 hover:bg-[#E7E8EA] rounded-2xl transition-colors font-medium">
                                        News
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li><a href="work.html" class="hover:text-blue-600 transition text-gray-700 font-medium">Our work</a></li>
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
    <div id="mobile-menu" class="fixed inset-0 z-[60] bg-white hidden flex flex-col h-full overflow-y-auto">
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
                 <div class="hidden space-y-4 pb-4 pl-2">
                     <a href="#" class="block text-gray-600 font-medium">Rent Google agency Ads account</a>
                     <a href="#" class="block text-gray-600 font-medium">Rent Meta agency Ads account</a>
                     <a href="#" class="block text-gray-600 font-medium">Rent Tiktok agency Ads account</a>
                     <a href="#" class="block text-gray-600 font-medium">Rent Bing agency Ads account</a>
                 </div>
             </div>

             <!-- Blog Accordion -->
             <div class="border-t border-gray-100">
                 <button class="mobile-accordion-btn flex w-full justify-between items-center py-3 text-lg font-medium text-gray-900 group">
                     Blog
                     <svg class="w-4 h-4 transition-transform group-[.active]:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                 </button>
                 <div class="hidden space-y-4 pb-4 pl-2">
                     <a href="#" class="block text-gray-600 font-medium">Google Ads</a>
                     <a href="#" class="block text-gray-600 font-medium">Facebook Ads</a>
                     <a href="#" class="block text-gray-600 font-medium">Tiktok Ads</a>
                     <a href="#" class="block text-gray-600 font-medium">News</a>
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
             <div class="hidden mt-2 space-y-1">
                  <a href="#" class="block px-4 py-3 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-xl font-medium transition-colors">Tiếng Việt</a>
             </div>
        </div>
    </div>
`,z=`<header class="fixed top-0 left-0 right-0 z-50 p-4">
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
`,N=`<footer class="bg-[#F5F6F7] text-gray-600 pt-16 pb-8 border-t border-gray-200 mt-auto">
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <!-- Cột 1: Logo & Slogan -->
            <div class="space-y-4">
                <div class="flex items-center space-x-2">
                    <img src="assets/ADShift_logo_light.svg" alt="ADShift Logo" class="h-8">
                </div>
                <p class="text-sm leading-relaxed max-w-xs">
                    Always in Motion - Luôn luôn chuyển động cùng sự phát triển của bạn
                </p>
            </div>

            <!-- Cột 2: Sản phẩm -->
            <div>
                <h3 class="font-bold text-gray-900 mb-4">Sản phẩm</h3>
                <ul class="space-y-3 text-sm">
                    <li><a href="#" class="hover:text-blue-600 transition">Tính năng</a></li>
                    <li><a href="#" class="hover:text-blue-600 transition">Giá cả</a></li>
                    <li><a href="#" class="hover:text-blue-600 transition">Tích hợp</a></li>
                    <li><a href="#" class="hover:text-blue-600 transition">API</a></li>
                </ul>
            </div>

            <!-- Cột 3: Công ty -->
            <div>
                <h3 class="font-bold text-gray-900 mb-4">Công ty</h3>
                <ul class="space-y-3 text-sm">
                    <li><a href="about.html" class="hover:text-blue-600 transition">Về chúng tôi</a></li>
                    <li><a href="blog.html" class="hover:text-blue-600 transition">Blog</a></li>
                    <li><a href="#" class="hover:text-blue-600 transition">Careers</a></li>
                    <li><a href="#" class="hover:text-blue-600 transition">Liên hệ</a></li>
                </ul>
            </div>

            <!-- Cột 4: Hỗ trợ -->
            <div>
                <h3 class="font-bold text-gray-900 mb-4">Hỗ trợ</h3>
                <ul class="space-y-3 text-sm">
                    <li><a href="#" class="hover:text-blue-600 transition">Trung tâm trợ giúp</a></li>
                    <li><a href="#" class="hover:text-blue-600 transition">Tài liệu</a></li>
                    <li><a href="#" class="hover:text-blue-600 transition">Cộng đồng</a></li>
                    <li><a href="#" class="hover:text-blue-600 transition">Status</a></li>
                </ul>
            </div>
        </div>

        <!-- Bottom Section -->
        <div class="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <p class="mb-4 md:mb-0">&copy; 2026 ADSshift. All rights reserved.</p>
            <div class="flex space-x-6 font-medium">
                <a href="#" class="hover:text-blue-600 transition">Điều khoản</a>
                <a href="#" class="hover:text-blue-600 transition">Bảo mật</a>
                <a href="#" class="hover:text-blue-600 transition">Cookies</a>
            </div>
        </div>
    </div>
</footer>
`,V=`<!-- Process Section -->
<section class="py-20 relative overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-100">
    <!-- Decorative Background Image -->
    <div class="absolute top-0 right-2 h-full w-1/2 pointer-events-none">
        <img src="assets/ADShift_decorative.png" alt="" class="w-full h-full object-cover object-left opacity-60 mix-blend-multiply">
    </div>

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
</section>`,U=`<!-- Testimonials Section -->
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
</section>`,W=`<section class="py-20">
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
</section>`,J=`<div class="container mx-auto px-4 relative z-10">
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
</div>`,X=`<section class="py-20 px-4">
    <div class="container mx-auto gradient-secondary rounded-3xl p-8 md:p-16 relative overflow-hidden">
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
</section>`,r=`<div class="group cursor-pointer">
    <div class="h-64 bg-gray-200 rounded-xl overflow-hidden mb-4">
        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Blog" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
    </div>
    <div class="flex items-center space-x-2 text-xs text-gray-800 mb-2">
        <span>UX Design</span>
        <span class="font-bold text-blue-600">•</span>
        <span>January 10, 2026</span>
    </div>
    <h3 class="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition">How to Improve ROAS in Mobile Games Without Higher UA Costs</h3>
</div>`,Z=`<a href="#" class="flex gap-4 group">
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
`,$=`<div class="flex flex-col sm:flex-row gap-6 items-start pb-8 border-b border-gray-100 last:border-0 last:pb-0">
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
`,p=document.querySelector("#header-placeholder");if(p){p.innerHTML=G;const s=document.getElementById("mobile-menu-btn"),n=document.getElementById("close-mobile-menu-btn"),i=document.getElementById("mobile-menu"),a=document.querySelectorAll(".mobile-accordion-btn");s&&i&&s.addEventListener("click",()=>{i.classList.remove("hidden"),document.body.style.overflow="hidden"}),n&&i&&n.addEventListener("click",()=>{i.classList.add("hidden"),document.body.style.overflow=""}),a&&a.forEach(t=>{t.addEventListener("click",()=>{t.classList.toggle("active");const e=t.nextElementSibling;e&&e.classList.toggle("hidden")})})}const x=document.querySelector("#simple-header-placeholder");x&&(x.innerHTML=z);const h=document.querySelector("#footer-placeholder");h&&(h.innerHTML=N);const f=document.querySelector("#solutions-component");f&&(f.innerHTML=J);const v=document.querySelector("#post-list-main-page");v&&(v.innerHTML=r.repeat(3));const y=document.querySelector("#post-list-blog-page");y&&(y.innerHTML=r.repeat(12));const w=document.querySelector("#post-list-detail-page");w&&(w.innerHTML=r.repeat(3));const k=document.querySelector("#post-sidebar-list-detail-page");k&&(k.innerHTML=Z.repeat(3));const A=document.querySelector("#author-post-list");A&&(A.innerHTML=$.repeat(5));const E=document.querySelector("#cta-component");E&&(E.innerHTML=X);const S=document.querySelector("#process-component");S&&(S.innerHTML=V);const M=document.querySelector("#stats-component");M&&(M.innerHTML=W,K());const L=document.querySelector("#testimonials-component");L&&(L.innerHTML=U);const T=document.querySelector("#toc-toggle"),j=document.querySelector("#toc-content"),B=document.querySelector("#toc-icon");T&&j&&B&&T.addEventListener("click",()=>{j.classList.toggle("hidden"),B.classList.toggle("rotate-180")});const C=document.getElementById("edit-customer-info-btn"),o=document.getElementById("customer-info-modal"),D=document.getElementById("save-customer-info-btn"),H=document.getElementById("cancel-customer-info-btn"),_=document.getElementById("modal-backdrop");if(C&&o){const s=n=>{n?o.classList.remove("hidden"):o.classList.add("hidden")};C.addEventListener("click",n=>{n.preventDefault(),s(!0)}),H&&H.addEventListener("click",()=>s(!1)),_&&_.addEventListener("click",()=>s(!1)),D&&D.addEventListener("click",()=>{s(!1)})}function K(){const s=new IntersectionObserver(i=>{i.forEach(a=>{a.isIntersecting&&(a.target.querySelectorAll(".js-counter").forEach(e=>{const l=parseFloat(e.getAttribute("data-target")),c=e.getAttribute("data-prefix")||"",d=e.getAttribute("data-suffix")||"",u=parseInt(e.getAttribute("data-decimals")||"0"),I=2e3,m=0,P=performance.now();function g(F){const R=F-P,b=Math.min(R/I,1),O=1-Math.pow(1-b,4),q=m+(l-m)*O;e.innerText=c+q.toFixed(u)+d,b<1?requestAnimationFrame(g):e.innerText=c+l.toFixed(u)+d}requestAnimationFrame(g)}),s.unobserve(a.target))})},{threshold:.2}),n=document.querySelector("#stats-component");n&&s.observe(n)}
