// Main JavaScript file for NewsPortal 2025

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize any additional functionality here
    
    // Set current year in footer if needed
    const yearElement = document.querySelector('.current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Handle video play buttons
    document.addEventListener('click', function(e) {
        if (e.target.closest('.play-button') || e.target.classList.contains('play-button')) {
            const videoCard = e.target.closest('.video-card');
            if (videoCard) {
                const title = videoCard.querySelector('h5').textContent;
                alert(`Memutar video: ${title}\n\n(Fitur ini akan membuka pemutar video dalam implementasi lengkap)`);
            }
        }
    });
    
    // Add animation to category chips on hover
    const categoryChips = document.querySelectorAll('.category-chip');
    categoryChips.forEach(chip => {
        chip.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
        });
        
        chip.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') {
                e.preventDefault();
                return;
            }
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Simulate live updating of view counts
    setInterval(() => {
        const viewCounts = document.querySelectorAll('.stat-number');
        viewCounts.forEach(count => {
            if (Math.random() > 0.7) { // 30% chance to update
                const current = parseInt(count.textContent.replace(/,/g, ''));
                const increment = Math.floor(Math.random() * 10) + 1;
                count.textContent = (current + increment).toLocaleString();
            }
        });
    }, 10000); // Update every 10 seconds
    
    // Weather simulation
    function updateWeather() {
        const tempElement = document.querySelector('.temp');
        const conditionElement = document.querySelector('.condition');
        
        if (tempElement && conditionElement) {
            // Randomize weather slightly
            const hour = new Date().getHours();
            let baseTemp = 32;
            let condition = 'Sebagian Berawan';
            
            if (hour >= 6 && hour < 12) {
                baseTemp = 28;
                condition = 'Cerah';
            } else if (hour >= 12 && hour < 18) {
                baseTemp = 34;
                condition = 'Cerah Berawan';
            } else if (hour >= 18 && hour < 24) {
                baseTemp = 29;
                condition = 'Berawan';
            } else {
                baseTemp = 27;
                condition = 'Cerah';
            }
            
            // Add slight variation
            const variation = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
            const currentTemp = baseTemp + variation;
            
            tempElement.textContent = `${currentTemp}°C`;
            conditionElement.textContent = condition;
        }
    }
    
    // Update weather on load and periodically
    updateWeather();
    setInterval(updateWeather, 300000); // Update every 5 minutes
    
    // Breaking news ticker updates
    function updateBreakingNews() {
        const breakingNews = [
            "Indonesia Resmi Luncurkan Satelit Nusantara-5, Tingkatkan Konektivitas 5G Nasional",
            "Harga BBM Turun Lagi, Pertamax Kini Rp12.500 per Liter",
            "Gempa 5.8 SR Guncang Jawa Barat, Tidak Berpotensi Tsunami",
            "Timnas U-23 Kalahkan Vietnam 3-1 di Kualifikasi Piala Asia",
            "Tes Kendaraan Listrik Nasional Siap Diproduksi Massal"
        ];
        
        const tickerText = document.getElementById('breakingNewsText');
        if (tickerText) {
            const currentIndex = breakingNews.indexOf(tickerText.textContent);
            const nextIndex = (currentIndex + 1) % breakingNews.length;
            
            // Animate change
            tickerText.style.opacity = '0';
            setTimeout(() => {
                tickerText.textContent = breakingNews[nextIndex];
                tickerText.style.opacity = '1';
            }, 500);
        }
    }
    
    // Update breaking news every 30 seconds
    setInterval(updateBreakingNews, 30000);
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + F to focus search
        if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
            e.preventDefault();
            document.getElementById('searchInput').focus();
        }
        
        // Escape to close modal
        if (e.key === 'Escape') {
            const modal = bootstrap.Modal.getInstance(document.getElementById('newsModal'));
            if (modal) {
                modal.hide();
            }
        }
    });
    
    // Performance monitoring
    const perfEntries = performance.getEntriesByType("navigation");
    if (perfEntries.length > 0) {
        const navTiming = perfEntries[0];
        console.log(`Halaman dimuat dalam ${Math.round(navTiming.domContentLoadedEventEnd)}ms`);
    }
    
    // Service Worker registration for PWA (in production)
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            // navigator.serviceWorker.register('/sw.js');
        });
    }
    
    // Offline detection
    window.addEventListener('online', function() {
        console.log('Anda kembali online');
        // Could show a notification here
    });
    
    window.addEventListener('offline', function() {
        console.log('Anda sedang offline');
        // Could show a notification here
    });
});

// Export for module usage if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {};
}