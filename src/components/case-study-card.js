
export function createCaseStudyCard(data) {
  return `
    <div class="bg-white rounded-3xl p-4 pb-6 shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
        <div class="bg-gray-50 rounded-2xl h-48 mb-6 relative flex items-center justify-center overflow-hidden">
            <span class="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-gray-600 z-10">${data.category}</span>
            <img src="${data.logo}" class="h-8 w-auto relative z-10" alt="Logo">
            <div class="absolute inset-0 bg-gradient-to-tr from-gray-100 to-white opacity-50"></div>
        </div>
        
        <div class="px-2">
            <h3 class="text-xl font-bold text-gray-900 mb-2">${data.title}</h3>
            <p class="text-gray-500 text-sm mb-6 line-clamp-2">
                ${data.description}
            </p>
            
            <div class="bg-gray-50 rounded-xl p-4 mb-6 grid grid-cols-3 gap-2 text-start">
                <div>
                    <div class="text-xs text-gray-400 mb-1">CPM</div>
                    <div class="text-gradient font-bold text-lg">${data.stats.cpm}</div>
                </div>
                <div>
                    <div class="text-xs text-gray-400 mb-1">CPA</div>
                    <div class="text-gradient font-bold text-lg">${data.stats.cpa}</div>
                </div>
                <div>
                    <div class="text-xs text-gray-400 mb-1">ROAS</div>
                    <div class="text-gradient font-bold text-lg">${data.stats.roas}</div>
                </div>
            </div>

            <button class="w-full btn btn-secondary btn-md">
                Learn more
            </button>
        </div>
    </div>
  `;
}
