// UI Manager untuk Portal Berita 2025
class UIManager {
    constructor() {
        this.currentCategory = 'all';
        this.currentSort = 'latest';
        this.currentView = 'grid';
        this.currentPage = 1;
        this.itemsPerPage = 6;
        this.isDarkMode = false;
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.renderCategories();
        this.renderPopularNews();
        this.renderNews();
        this.renderVideoNews();
        this.setupBreakingNewsTicker();
        this.initializeAOS();
        this.loadTheme();
    }
    
    setupEventListeners() {
        // Category filtering
        document.querySelectorAll('[data-category]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.currentCategory = e.target.dataset.category;
                this.currentPage = 1;
                this.updateActiveCategory();
                this.renderNews();
            });
        });
        
        // Sort change
        document.getElementById('sortNews').addEventListener('change', (e) => {
            this.currentSort = e.target.value;
            this.renderNews();
        });
        
        // View toggle
        document.getElementById('gridViewBtn').addEventListener('click', () => {
            this.currentView = 'grid';
            this.updateViewButtons();
            this.renderNews();
        });
        
        document.getElementById('listViewBtn').addEventListener('click', () => {
            this.currentView = 'list';
            this.updateViewButtons();
            this.renderNews();
        });
        
        // Load more button
        document.getElementById('loadMoreBtn').addEventListener('click', () => {
            this.loadMoreNews();
        });
        
        // Theme toggle
        document.getElementById('themeToggle').addEventListener('click', () => {
            this.toggleTheme();
        });
        
        // Search functionality
        document.getElementById('searchBtn').addEventListener('click', () => {
            this.performSearch();
        });
        
        document.getElementById('searchInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.performSearch();
            }
        });
        
        // Mobile search toggle
        document.getElementById('searchMobileBtn').addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('mobileSearch').classList.toggle('d-none');
        });
        
        document.getElementById('closeSearchBtn').addEventListener('click', () => {
            document.getElementById('mobileSearch').classList.add('d-none');
        });
        
        // Scroll to top
        document.getElementById('scrollTopBtn').addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        
        window.addEventListener('scroll', () => {
            this.toggleScrollButton();
        });
        
        // Newsletter form
        document.getElementById('newsletterForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleNewsletterSubscription(e.target);
        });
    }
    
    updateActiveCategory() {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.dataset.category === this.currentCategory) {
                link.classList.add('active');
            }
        });
    }
    
    updateViewButtons() {
        const gridBtn = document.getElementById('gridViewBtn');
        const listBtn = document.getElementById('listViewBtn');
        
        if (this.currentView === 'grid') {
            gridBtn.classList.add('active');
            listBtn.classList.remove('active');
        } else {
            gridBtn.classList.remove('active');
            listBtn.classList.add('active');
        }
    }
    
    renderCategories() {
        const container = document.getElementById('quickCategories');
        if (!container) return;
        
        const categories = newsData2025.categories;
        let html = '';
        
        categories.forEach(category => {
            html += `
                <div class="col-6 col-md-4 col-lg" data-aos="fade-up">
                    <a href="#" class="category-chip" data-category="${category.id}">
                        <div class="category-icon" style="background: ${category.color}">
                            <i class="${category.icon}"></i>
                        </div>
                        <span>${category.name}</span>
                    </a>
                </div>
            `;
        });
        
        container.innerHTML = html;
        
        // Add event listeners to new category chips
        container.querySelectorAll('.category-chip').forEach(chip => {
            chip.addEventListener('click', (e) => {
                e.preventDefault();
                this.currentCategory = e.currentTarget.dataset.category;
                this.currentPage = 1;
                this.updateActiveCategory();
                this.renderNews();
                
                // Scroll to news section
                document.querySelector('.latest-news').scrollIntoView({ 
                    behavior: 'smooth' 
                });
            });
        });
    }
    
    renderPopularNews() {
        const container = document.getElementById('popularNewsList');
        if (!container) return;
        
        const popularNews = newsData2025.popularNews;
        let html = '';
        
        popularNews.forEach(item => {
            html += `
                <div class="popular-item">
                    <div class="popular-rank">${item.rank}</div>
                    <div class="popular-content">
                        <h6>${item.title}</h6>
                        <small>${item.time} • ${item.category}</small>
                    </div>
                </div>
            `;
        });
        
        container.innerHTML = html;
    }
    
    renderNews() {
        const container = document.getElementById('newsContainer');
        if (!container) return;
        
        // Show loading
        this.showLoading(true);
        
        // Filter articles based on category
        let articles = newsData2025.articles;
        
        if (this.currentCategory !== 'all') {
            articles = articles.filter(article => article.category === this.currentCategory);
        }
        
        // Sort articles
        articles = this.sortArticles(articles, this.currentSort);
        
        // Calculate pagination
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        const paginatedArticles = articles.slice(0, endIndex);
        
        // Clear container if it's the first page
        if (this.currentPage === 1) {
            container.innerHTML = '';
        }
        
        // Render articles
        paginatedArticles.forEach((article, index) => {
            const articleHTML = this.createArticleHTML(article, index);
            container.insertAdjacentHTML('beforeend', articleHTML);
        });
        
        // Hide/show load more button
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (endIndex >= articles.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-flex';
        }
        
        // Hide loading
        this.showLoading(false);
        
        // Initialize AOS for new elements
        AOS.refresh();
    }
    
    createArticleHTML(article, index) {
        const categoryInfo = newsData2025.categories.find(cat => cat.id === article.category);
        const delay = (index % 6) * 100;
        
        if (this.currentView === 'list') {
            return `
                <div class="col-12 mb-4" data-aos="fade-up" data-aos-delay="${delay}">
                    <div class="news-card list-view">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <div class="news-image">
                                    <img src="${article.image}" alt="${article.title}">
                                    ${article.video ? '<div class="play-button"><i class="fas fa-play"></i></div>' : ''}
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="news-content">
                                    <div class="news-category ${'bg-' + article.category}">
                                        <i class="${categoryInfo.icon}"></i>
                                        ${categoryInfo.name}
                                    </div>
                                    <h3 class="news-title">${article.title}</h3>
                                    <p class="news-excerpt">${article.excerpt}</p>
                                    <div class="news-meta">
                                        <div>
                                            <span><i class="far fa-calendar me-1"></i>${article.date}</span>
                                            <span class="ms-3"><i class="far fa-clock me-1"></i>${article.readTime}</span>
                                            ${article.trending ? '<span class="ms-3"><i class="fas fa-fire text-danger"></i> Trending</span>' : ''}
                                        </div>
                                        <div class="news-actions">
                                            <button class="btn-icon" onclick="uiManager.shareArticle(${article.id})">
                                                <i class="fas fa-share-alt"></i>
                                            </button>
                                            <button class="btn-icon" onclick="uiManager.saveArticle(${article.id})">
                                                <i class="far fa-bookmark"></i>
                                            </button>
                                            <button class="btn-icon" onclick="uiManager.viewArticle(${article.id})">
                                                <i class="fas fa-expand"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
        
        // Grid view (default)
        return `
            <div class="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="${delay}">
                <div class="news-card">
                    <div class="news-image">
                        <img src="${article.image}" alt="${article.title}">
                        ${article.video ? '<div class="play-button"><i class="fas fa-play"></i></div>' : ''}
                    </div>
                    <div class="news-content">
                        <div class="news-category ${'bg-' + article.category}">
                            <i class="${categoryInfo.icon}"></i>
                            ${categoryInfo.name}
                        </div>
                        <h3 class="news-title">${article.title}</h3>
                        <p class="news-excerpt">${article.excerpt}</p>
                        <div class="news-meta">
                            <div>
                                <span><i class="far fa-calendar me-1"></i>${article.date}</span>
                                <span class="ms-3"><i class="far fa-clock me-1"></i>${article.readTime}</span>
                            </div>
                            <div class="news-actions">
                                <button class="btn-icon" onclick="uiManager.shareArticle(${article.id})">
                                    <i class="fas fa-share-alt"></i>
                                </button>
                                <button class="btn-icon" onclick="uiManager.saveArticle(${article.id})">
                                    <i class="far fa-bookmark"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    renderVideoNews() {
        const container = document.getElementById('videoNewsContainer');
        if (!container) return;
        
        const videos = newsData2025.videoNews;
        let html = '';
        
        videos.forEach((video, index) => {
            html += `
                <div class="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="${index * 100}">
                    <div class="video-card">
                        <div class="video-thumbnail">
                            <img src="${video.thumbnail}" alt="${video.title}">
                            <div class="play-button">
                                <i class="fas fa-play"></i>
                            </div>
                            <div class="video-duration">${video.duration}</div>
                        </div>
                        <div class="video-content">
                            <h5>${video.title}</h5>
                            <div class="video-meta">
                                <span><i class="fas fa-eye me-1"></i>${video.views}</span>
                                <span>${video.date}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
        
        container.innerHTML = html;
    }
    
    sortArticles(articles, sortBy) {
        switch(sortBy) {
            case 'popular':
                return [...articles].sort((a, b) => b.views - a.views);
            case 'trending':
                return [...articles].filter(article => article.trending)
                    .sort((a, b) => b.views - a.views);
            case 'latest':
            default:
                return [...articles].sort((a, b) => new Date(b.date) - new Date(a.date));
        }
    }
    
    loadMoreNews() {
        this.currentPage++;
        this.renderNews();
    }
    
    showLoading(show) {
        const spinner = document.getElementById('loadingSpinner');
        if (show) {
            spinner.classList.remove('d-none');
        } else {
            spinner.classList.add('d-none');
        }
    }
    
    setupBreakingNewsTicker() {
        const tickerText = document.getElementById('breakingNewsText');
        if (tickerText) {
            tickerText.textContent = newsData2025.breakingNews;
        }
        
        // Animate the ticker
        const tickerContent = document.querySelector('.ticker-content');
        if (tickerContent) {
            const textWidth = tickerContent.scrollWidth;
            const containerWidth = tickerContent.clientWidth;
            
            if (textWidth > containerWidth) {
                const duration = (textWidth / 50) * 3; // 50px per second
                tickerContent.style.animation = `marquee ${duration}s linear infinite`;
                
                // Add CSS for marquee animation
                const style = document.createElement('style');
                style.textContent = `
                    @keyframes marquee {
                        0% { transform: translateX(100%); }
                        100% { transform: translateX(-${textWidth}px); }
                    }
                `;
                document.head.appendChild(style);
            }
        }
    }
    
    performSearch() {
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        if (!searchTerm.trim()) return;
        
        // Filter articles based on search term
        const filteredArticles = newsData2025.articles.filter(article => 
            article.title.toLowerCase().includes(searchTerm) ||
            article.excerpt.toLowerCase().includes(searchTerm) ||
            article.content.toLowerCase().includes(searchTerm) ||
            article.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
        
        // Update UI with search results
        this.displaySearchResults(filteredArticles, searchTerm);
    }
    
    displaySearchResults(articles, searchTerm) {
        const container = document.getElementById('newsContainer');
        if (!container) return;
        
        container.innerHTML = '';
        
        if (articles.length === 0) {
            container.innerHTML = `
                <div class="col-12 text-center py-5">
                    <i class="fas fa-search fa-3x text-muted mb-3"></i>
                    <h4>Tidak ditemukan hasil untuk "${searchTerm}"</h4>
                    <p class="text-muted">Coba dengan kata kunci lain atau periksa ejaan Anda.</p>
                </div>
            `;
            return;
        }
        
        articles.forEach((article, index) => {
            const articleHTML = this.createArticleHTML(article, index);
            container.insertAdjacentHTML('beforeend', articleHTML);
        });
        
        // Update section title
        const sectionTitle = document.querySelector('.section-title');
        if (sectionTitle) {
            sectionTitle.textContent = `Hasil Pencarian: "${searchTerm}"`;
        }
        
        // Hide load more button
        document.getElementById('loadMoreBtn').style.display = 'none';
    }
    
    viewArticle(articleId) {
        const article = newsData2025.articles.find(a => a.id === articleId);
        if (!article) return;
        
        const modalTitle = document.getElementById('newsModalTitle');
        const modalBody = document.getElementById('newsModalBody');
        
        const categoryInfo = newsData2025.categories.find(cat => cat.id === article.category);
        
        modalTitle.textContent = article.title;
        
        modalBody.innerHTML = `
            <div class="article-header mb-4">
                <div class="d-flex justify-content-between align-items-start">
                    <div>
                        <span class="badge ${'bg-' + article.category} mb-2">
                            <i class="${categoryInfo.icon} me-1"></i>${categoryInfo.name}
                        </span>
                        <div class="article-meta">
                            <div class="author-info d-flex align-items-center mb-2">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80" 
                                     alt="${article.author}" class="rounded-circle me-2" width="40" height="40">
                                <div>
                                    <strong>${article.author}</strong>
                                    <div class="text-muted small">
                                        <i class="far fa-calendar me-1"></i>${article.date} • 
                                        <i class="far fa-clock me-1"></i>${article.readTime} • 
                                        <i class="fas fa-eye me-1"></i>${article.views.toLocaleString()} dilihat
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="article-actions">
                        <button class="btn btn-outline-primary btn-sm me-1" onclick="uiManager.shareArticle(${article.id})">
                            <i class="fas fa-share-alt"></i>
                        </button>
                        <button class="btn btn-outline-primary btn-sm" onclick="uiManager.saveArticle(${article.id})">
                            <i class="far fa-bookmark"></i>
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="article-image mb-4">
                <img src="${article.image}" alt="${article.title}" class="img-fluid rounded">
                <div class="image-caption text-muted mt-2">${article.imageCaption}</div>
            </div>
            
            <div class="article-content">
                ${article.content}
            </div>
            
            ${article.tags ? `
            <div class="article-tags mt-4">
                <strong>Tags:</strong>
                ${article.tags.map(tag => `<span class="badge bg-light text-dark me-2">#${tag}</span>`).join('')}
            </div>
            ` : ''}
            
            <div class="article-stats mt-4 pt-4 border-top">
                <div class="row text-center">
                    <div class="col-4">
                        <div class="stat-number">${article.likes.toLocaleString()}</div>
                        <div class="stat-label text-muted small"><i class="fas fa-thumbs-up"></i> Suka</div>
                    </div>
                    <div class="col-4">
                        <div class="stat-number">${article.shares.toLocaleString()}</div>
                        <div class="stat-label text-muted small"><i class="fas fa-share"></i> Bagikan</div>
                    </div>
                    <div class="col-4">
                        <div class="stat-number">${article.views.toLocaleString()}</div>
                        <div class="stat-label text-muted small"><i class="fas fa-eye"></i> Dilihat</div>
                    </div>
                </div>
            </div>
        `;
        
        // Show modal
        const modal = new bootstrap.Modal(document.getElementById('newsModal'));
        modal.show();
    }
    
    shareArticle(articleId) {
        const article = newsData2025.articles.find(a => a.id === articleId);
        if (!article) return;
        
        if (navigator.share) {
            navigator.share({
                title: article.title,
                text: article.excerpt,
                url: window.location.href,
            })
            .then(() => console.log('Berhasil dibagikan'))
            .catch((error) => console.log('Error sharing:', error));
        } else {
            // Fallback: Copy to clipboard
            const textToCopy = `${article.title}\n\n${article.excerpt}\n\nBaca selengkapnya di NewsPortal 2025`;
            navigator.clipboard.writeText(textToCopy)
                .then(() => {
                    alert('Link berita berhasil disalin ke clipboard!');
                })
                .catch(err => {
                    console.error('Gagal menyalin: ', err);
                });
        }
    }
    
    saveArticle(articleId) {
        // Get saved articles from localStorage
        let savedArticles = JSON.parse(localStorage.getItem('savedArticles') || '[]');
        
        // Check if article is already saved
        if (savedArticles.includes(articleId)) {
            // Remove from saved
            savedArticles = savedArticles.filter(id => id !== articleId);
            alert('Berita dihapus dari daftar simpanan');
        } else {
            // Add to saved
            savedArticles.push(articleId);
            alert('Berita disimpan!');
        }
        
        // Save back to localStorage
        localStorage.setItem('savedArticles', JSON.stringify(savedArticles));
        
        // Update UI if needed
        this.updateSaveButton(articleId, savedArticles.includes(articleId));
    }
    
    updateSaveButton(articleId, isSaved) {
        // Find and update all save buttons for this article
        const saveButtons = document.querySelectorAll(`[onclick*="saveArticle(${articleId})"]`);
        saveButtons.forEach(button => {
            const icon = button.querySelector('i');
            if (icon) {
                if (isSaved) {
                    icon.className = 'fas fa-bookmark';
                    button.classList.add('text-primary');
                } else {
                    icon.className = 'far fa-bookmark';
                    button.classList.remove('text-primary');
                }
            }
        });
    }
    
    toggleTheme() {
        this.isDarkMode = !this.isDarkMode;
        
        if (this.isDarkMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            document.getElementById('themeToggle').innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            document.getElementById('themeToggle').innerHTML = '<i class="fas fa-moon"></i>';
        }
    }
    
    loadTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            this.isDarkMode = true;
            document.documentElement.setAttribute('data-theme', 'dark');
            document.getElementById('themeToggle').innerHTML = '<i class="fas fa-sun"></i>';
        }
    }
    
    toggleScrollButton() {
        const scrollBtn = document.getElementById('scrollTopBtn');
        if (window.scrollY > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    }
    
    handleNewsletterSubscription(form) {
        const email = form.querySelector('input[type="email"]').value;
        
        // Simulate API call
        setTimeout(() => {
            alert('Terima kasih! Anda telah berhasil berlangganan newsletter kami.');
            form.reset();
        }, 500);
    }
    
    initializeAOS() {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }
}

// Initialize UI Manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.uiManager = new UIManager();
});