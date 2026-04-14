  // ===== DATA =====
        const newsData = [
            {
                id: 1,
                category: 'aviso',
                icon: '📢',
                title: 'Reunião de Pais e Encarregados de Educação',
                excerpt: 'Comunicamos a todos os encarregados de educação que no próximo dia 22 de dezembro haverá reunião para discussão do aproveitamento escolar do 1º trimestre.',
                date: '18 de Dezembro, 2025'
            },
            {
                id: 2,
                category: 'evento',
                icon: '🎭',
                title: 'Festival Cultural Bankazi 2025',
                excerpt: 'Acontece nos dias 20 e 21 de dezembro o nosso tradicional Festival Cultural com apresentações de dança, teatro, música e exposições artísticas dos nossos alunos.',
                date: '17 de Dezembro, 2025'
            },
            {
                id: 3,
                category: 'comunicado',
                icon: '📋',
                title: 'Calendário de Provas Finais',
                excerpt: 'Já está disponível o calendário completo das provas finais do 1º trimestre. As avaliações iniciam no dia 8 de janeiro. Consulte os horários no portal.',
                date: '15 de Dezembro, 2025'
            },
            {
                id: 4,
                category: 'evento',
                icon: '🏆',
                title: 'Bankazi Campeão no Torneio Interescolar',
                excerpt: 'Nossa equipe de basquetebol conquistou o 1º lugar no Torneio Interescolar de Benguela 2025. Parabéns aos atletas e ao professor de Educação Física!',
                date: '14 de Dezembro, 2025'
            },
            {
                id: 5,
                category: 'urgente',
                icon: '🚨',
                title: 'Alteração no Horário de Saída - Sexta-feira',
                excerpt: 'Informamos que nesta sexta-feira, dia 20, devido ao Festival Cultural, a saída dos alunos será às 16h30. Pedimos atenção dos encarregados de educação.',
                date: '18 de Dezembro, 2025'
            },
            {
                id: 6,
                category: 'aviso',
                icon: '🎒',
                title: 'Férias Escolares de Fim de Ano',
                excerpt: 'As férias escolares iniciam no dia 23 de dezembro e as aulas retornam no dia 20 de janeiro de 2026. Desejamos a todos excelentes festas e um merecido descanso!',
                date: '12 de Dezembro, 2025'
            },
            {
                id: 7,
                category: 'comunicado',
                icon: '📚',
                title: 'Nova Biblioteca Digital Disponível',
                excerpt: 'Temos o prazer de anunciar o lançamento da nossa biblioteca digital com mais de 5.000 títulos disponíveis para consulta online. Acesso gratuito para todos os alunos.',
                date: '10 de Dezembro, 2025'
            },
            {
                id: 8,
                category: 'evento',
                icon: '🎨',
                title: 'Exposição de Arte dos Alunos',
                excerpt: 'De 20 a 22 de dezembro, nossa escola receberá uma exposição com os melhores trabalhos artísticos produzidos pelos alunos durante o ano letivo.',
                date: '09 de Dezembro, 2025'
            },
            {
                id: 9,
                category: 'aviso',
                icon: '💳',
                title: 'Prazo para Pagamento de Janeiro',
                excerpt: 'Informamos que o prazo para pagamento das mensalidades de janeiro termina no dia 10. Após esta data, haverá acréscimo de multa conforme contrato.',
                date: '08 de Dezembro, 2025'
            }
        ];

        const eventsData = [
            { day: '20', month: 'DEZ', title: 'Festival Cultural - Dia 1', time: '14h00 - Auditório Principal' },
            { day: '21', month: 'DEZ', title: 'Festival Cultural - Dia 2', time: '14h00 - Auditório Principal' },
            { day: '22', month: 'DEZ', title: 'Reunião de Pais', time: '15h00 - Salas de Aula' },
            { day: '23', month: 'DEZ', title: 'Início das Férias', time: 'Boas Festas!' },
            { day: '08', month: 'JAN', title: 'Início das Provas Finais', time: 'Conforme calendário' }
        ];

        // ===== CURRENT DATE =====
        function updateCurrentDate() {
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const date = new Date().toLocaleDateString('pt-BR', options);
            const capitalizedDate = date.charAt(0).toUpperCase() + date.slice(1);
            document.getElementById('currentDate').innerHTML = `📅 ${capitalizedDate}`;
        }

        // ===== PROGRESS BAR =====
        function updateProgressBar() {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            document.getElementById('progressBar').style.width = scrolled + '%';
        }

        // ===== HERO SLIDER =====
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        const sliderControls = document.getElementById('sliderControls');

        function createSliderDots() {
            slides.forEach((_, index) => {
                const dot = document.createElement('div');
                dot.classList.add('slider-dot');
                if (index === 0) dot.classList.add('active');
                dot.addEventListener('click', () => goToSlide(index));
                sliderControls.appendChild(dot);
            });
        }

        function goToSlide(n) {
            slides[currentSlide].classList.remove('active');
            document.querySelectorAll('.slider-dot')[currentSlide].classList.remove('active');
            
            currentSlide = n;
            if (currentSlide >= slides.length) currentSlide = 0;
            if (currentSlide < 0) currentSlide = slides.length - 1;
            
            slides[currentSlide].classList.add('active');
            document.querySelectorAll('.slider-dot')[currentSlide].classList.add('active');
        }

        function nextSlide() {
            goToSlide(currentSlide + 1);
        }

        // Auto slide
        setInterval(nextSlide, 5000);

        // ===== NEWS RENDERING =====
        function renderNews(category = 'todas') {
            const newsGrid = document.getElementById('newsGrid');
            newsGrid.innerHTML = '';

            const filteredNews = category === 'todas' 
                ? newsData 
                : newsData.filter(news => news.category === category);

            if (filteredNews.length === 0) {
                newsGrid.innerHTML = '<div class="loading">Nenhuma notícia encontrada nesta categoria.</div>';
                return;
            }

            filteredNews.forEach((news, index) => {
                const card = document.createElement('article');
                card.classList.add('news-card');
                card.style.setProperty('--index', index);
                
                const gradients = [
                    'linear-gradient(135deg, #0f4c81, #ff6b35)',
                    'linear-gradient(135deg, #2a9d8f, #e63946)',
                    'linear-gradient(135deg, #8b5cf6, #ec4899)',
                    'linear-gradient(135deg, #06b6d4, #3b82f6)',
                    'linear-gradient(135deg, #f59e0b, #ef4444)',
                    'linear-gradient(135deg, #10b981, #059669)'
                ];
                
                const gradient = gradients[index % gradients.length];
                
                card.innerHTML = `
                    <div class="news-image" style="background: ${gradient};">
                        <span class="category-badge ${news.category}">${news.category}</span>
                        ${news.icon}
                    </div>
                    <div class="news-content">
                        <div class="news-date">
                            <span>🕐</span>
                            <span>${news.date}</span>
                        </div>
                        <h3 class="news-title">${news.title}</h3>
                        <p class="news-excerpt">${news.excerpt}</p>
                        <div class="news-footer">
                            <a href="#" class="read-more" onclick="showNewsDetail(${news.id}); return false;">Ler mais →</a>
                            <button class="share-btn" onclick="shareNews(${news.id})">📤 Partilhar</button>
                        </div>
                    </div>
                `;
                
                newsGrid.appendChild(card);
            });
        }

        // ===== CATEGORY FILTER =====
        function setupCategoryFilter() {
            const filterButtons = document.querySelectorAll('.filter-btn');
            
            filterButtons.forEach(btn => {
                btn.addEventListener('click', () => {
                    filterButtons.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    
                    const category = btn.getAttribute('data-category');
                    renderNews(category);
                });
            });
        }

        // ===== SEARCH FUNCTIONALITY =====
       function setupSearch() {
    const searchInput = document.getElementById('searchInput');

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const newsCards = document.querySelectorAll('.news-card');

        let firstMatch = null;

        newsCards.forEach(card => {
            const title = card.querySelector('.news-title').textContent.toLowerCase();
            const excerpt = card.querySelector('.news-excerpt').textContent.toLowerCase();

            // 🔥 NOW includes category
            if (
                title.includes(searchTerm) ||
                excerpt.includes(searchTerm) 
            ) {
                card.style.display = 'block';

                if (!firstMatch) {
                    firstMatch = card;
                }

            } else {
                card.style.display = 'none';
            }
        });

        // scroll to first result
        if (firstMatch && searchTerm.length > 0) {
            firstMatch.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    });
}

        // ===== RENDER EVENTS =====
        function renderEvents() {
            const eventList = document.getElementById('eventList');
            
            eventsData.forEach(event => {
                const eventItem = document.createElement('div');
                eventItem.classList.add('event-item');
                
                eventItem.innerHTML = `
                    <div class="event-date">
                        <div class="event-day">${event.day}</div>
                        <div class="event-month">${event.month}</div>
                    </div>
                    <div class="event-details">
                        <h4>${event.title}</h4>
                        <p>${event.time}</p>
                    </div>
                `;
                
                eventList.appendChild(eventItem);
            });
        }

        // ===== STATS COUNTER ANIMATION =====
        function animateStats() {
            const stats = document.querySelectorAll('.stat-number');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const target = parseInt(entry.target.getAttribute('data-target'));
                        let current = 0;
                        const increment = target / 50;
                        
                        const timer = setInterval(() => {
                            current += increment;
                            if (current >= target) {
                                entry.target.textContent = target;
                                clearInterval(timer);
                            } else {
                                entry.target.textContent = Math.floor(current);
                            }
                        }, 30);
                        
                        observer.unobserve(entry.target);
                    }
                });
            });
            
            stats.forEach(stat => observer.observe(stat));
        }

        // ===== BACK TO TOP =====
        function updateBackToTop() {
            const backToTop = document.getElementById('backToTop');
            if (window.pageYOffset > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }

        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // ===== MOBILE MENU =====
        function toggleMobileMenu() {
            const navMenu = document.getElementById('navMenu');
            navMenu.classList.toggle('mobile-active');
        }

        // ===== NEWS DETAIL (Modal) =====
        function showNewsDetail(id) {
            const news = newsData.find(n => n.id === id);
            if (news) {
                alert(`${news.title}\n\n${news.excerpt}\n\nEsta funcionalidade abriria um modal com o conteúdo completo da notícia.`);
            }
        }

        // ===== SHARE NEWS =====
        function shareNews(id) {
            const news = newsData.find(n => n.id === id);
            if (news) {
                if (navigator.share) {
                    navigator.share({
                        title: news.title,
                        text: news.excerpt,
                        url: window.location.href
                    }).catch(err => console.log('Erro ao partilhar:', err));
                } else {
                    alert('Função de partilha: ' + news.title);
                }
            }
        }

        // ===== NEWSLETTER =====
        function subscribeNewsletter(event) {
            event.preventDefault();
            const email = event.target.querySelector('input').value;
            alert(`✅ Obrigado por se inscrever!\n\nVocê receberá nossas notícias no e-mail: ${email}`);
            event.target.reset();
        }

        // ===== SCROLL EVENTS =====
        window.addEventListener('scroll', () => {
            updateProgressBar();
            updateBackToTop();
        });

        // ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // ===== INITIALIZATION =====
        document.addEventListener('DOMContentLoaded', () => {
            updateCurrentDate();
            createSliderDots();
            renderNews();
            renderEvents();
            setupCategoryFilter();
            setupSearch();
            animateStats();
            updateProgressBar();
        });
