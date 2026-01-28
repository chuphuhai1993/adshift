(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function b(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=b(e);fetch(e.href,t)}})();const p=`<header class="fixed top-0 left-0 right-0 z-50 p-4">
    <div class="container mx-auto bg-white/60 backdrop-blur-md rounded-2xl px-6 py-4 flex justify-between items-center border border-black/10">
        <a href="./" class="flex items-center space-x-2">
            <img src="assets/ADShift_logo_light.svg" alt="ADShift Logo" class="h-8">
        </a>
        <nav>
            <ul class="flex space-x-6">
                <li><a href="./" class="hover:text-blue-600 transition text-gray-700 font-medium">Home</a></li>
                <li><a href="about.html" class="hover:text-blue-600 transition text-gray-700 font-medium">About us</a></li>
                <li><a href="services.html" class="hover:text-blue-600 transition text-gray-700 font-medium">Services</a></li>
                <li><a href="blog.html" class="hover:text-blue-600 transition text-gray-700 font-medium">Blog</a></li>
                <li><a href="work.html" class="hover:text-blue-600 transition text-gray-700 font-medium">Our work</a></li>
                <li><a href="partner.html" class="hover:text-blue-600 transition text-gray-700 font-medium">Partner</a></li>
            </ul>
        </nav>
    </div>
</header>
`,x=`<footer class="bg-[#F5F6F7] text-gray-600 pt-16 pb-8 border-t border-gray-200 mt-auto">
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
`,h=`<!-- Process Section -->
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
</section>`,g=`<!-- Testimonials Section -->
<section class="">

    <div
        class="container mx-auto relative z-10 py-20 rounded-3xl bg-gradient-to-b from-[#FFFFFF] via-[#8DBCFC]  to-[#69F0FC] z-0 text-center">

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
</section>`,v=`<section class="py-20">
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
                <div class="text-3xl font-bold text-gradient mb-1">1000+</div>
                <div class="text-xs text-gray-800 font-regular">Worldwide Clients</div>
            </div>
            <div class="p-6 bg-white card-shadow rounded-2xl">
                <div class="text-3xl font-bold text-gradient mb-1">$5M</div>
                <div class="text-xs text-gray-800 font-regular">Spend per year</div>
            </div>
            <div class="p-6 bg-white card-shadow rounded-2xl">
                <div class="text-3xl font-bold text-gradient mb-1">900+</div>
                <div class="text-xs text-gray-800 font-regular">Advertisiers</div>
            </div>
            <div class="p-6 bg-white card-shadow rounded-2xl">
                <div class="text-3xl font-bold text-gradient mb-1">0.2%</div>
                <div class="text-xs text-gray-800 font-regular">Ban rate</div>
            </div>
             <div class="p-6 bg-white card-shadow rounded-2xl">
                <div class="text-3xl font-bold text-gradient mb-1">100+</div>
                <div class="text-xs text-gray-800 font-regular">Agencies</div>
            </div>
             <div class="p-6 bg-white card-shadow rounded-2xl">
                <div class="text-3xl font-bold text-gradient mb-1">106+</div>
                <div class="text-xs text-gray-800 font-regular">Digital Platforms</div>
            </div>
        </div>
    </div>
</section>`,f=`<div class="container mx-auto px-4 relative z-10">
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
</div>`,y=`<section class="py-20 px-4">
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
</section>`,m=`<div class="group cursor-pointer">
    <div class="h-64 bg-gray-200 rounded-xl overflow-hidden mb-4">
        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Blog" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
    </div>
    <div class="flex items-center space-x-2 text-xs text-gray-800 mb-2">
        <span>UX Design</span>
        <span class="font-bold text-blue-600">•</span>
        <span>January 10, 2026</span>
    </div>
    <h3 class="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition">How to Improve ROAS in Mobile Games Without Higher UA Costs</h3>
</div>`;document.querySelector("#header-placeholder").innerHTML=p;document.querySelector("#footer-placeholder").innerHTML=x;const i=document.querySelector("#solutions-component");i&&(i.innerHTML=f);const l=document.querySelector("#blog-list");l&&(l.innerHTML=m.repeat(3));const r=document.querySelector("#blog-page-list");r&&(r.innerHTML=m.repeat(12));const o=document.querySelector("#cta-component");o&&(o.innerHTML=y);const c=document.querySelector("#process-component");c&&(c.innerHTML=h);const d=document.querySelector("#stats-component");d&&(d.innerHTML=v);const u=document.querySelector("#testimonials-component");u&&(u.innerHTML=g);
