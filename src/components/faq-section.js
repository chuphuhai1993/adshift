export function createFaqItem(question, answer, isOpen = false) {
    return `
        <details class="group mb-6" ${isOpen ? 'open' : ''}>
            <summary class="flex justify-between items-center font-bold cursor-pointer list-none">
                <span>${question}</span>
                <span class="transition group-open:rotate-180">
                    <svg fill="none" height="20" shape-rendering="geometricPrecision"
                        stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="1.5" viewBox="0 0 20 20" width="20">
                        <path d="M6 9l6 6 6-6"></path>
                    </svg>
                </span>
            </summary>
            <p class="text-gray-600 mt-3 pr-10 group-open:animate-fadeIn text-sm leading-relaxed">
                ${answer}
            </p>
        </details>
    `;
}

export function createFaqSection(title, faqItems) {
    const itemsHtml = faqItems.map(item => createFaqItem(item.question, item.answer, item.isOpen)).join('');
    
    return `
        <section class="py-20 bg-gray-50">
            <div class="container mx-auto px-4 max-w-4xl">
                <div class="space-y-4">
                    <div class="bg-[#F5F6F7] rounded-3xl p-6 border border-[#E7E8EA]">
                        <div class="pb-6 mb-8 border-b border-[#E7E8EA]">
                            <h2 class="text-3xl font-bold text-gray-900 ">${title}</h2>
                        </div>
                        ${itemsHtml}
                    </div>
                </div>
            </div>
        </section>
    `;
}
