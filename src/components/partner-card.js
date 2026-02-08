export function createPartnerCard(data) {
  return `
    <div class="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all group overflow-hidden flex flex-col">
        <div class="bg-gray-50 p-8 h-56 flex items-center justify-center relative">
            <div class="absolute top-4 left-4 bg-white px-3 py-1 rounded-2xl border border-gray-100  z-10">
                <span class="text-xs font-bold text-gray-700">${data.type}</span>
            </div>
            <div class="flex items-center gap-3">
                ${data.logoHtml}
                <span class="text-2xl font-bold text-gray-900 uppercase tracking-wide">${data.name}</span>
            </div>
        </div>
        <div class="p-6 pt-4 flex-1 flex flex-col">
            <h3 class="text-xl font-bold text-gray-900 mb-4">${data.name}</h3>
            <p class="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-3">
                ${data.description}
            </p>
            <button class="btn btn-secondary btn-md w-full">
                Learn more
            </button>
        </div>
    </div>
  `;
}
