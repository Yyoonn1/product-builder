// Mock Data: 20 Movies
const movies = [
    {
        id: 1,
        title: "인셉션",
        genre: ["action", "scifi"],
        rating: 8.8,
        year: 2010,
        image: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKqJCZV3ULJvrriMCI.jpg" 
    },
    {
        id: 2,
        title: "어바웃 타임",
        genre: ["romance", "drama"],
        rating: 7.8,
        year: 2013,
        image: "https://image.tmdb.org/t/p/w500/bQ7451x3bZ5afJ9XN89y7w52.jpg"
    },
    {
        id: 3,
        title: "다크 나이트",
        genre: ["action", "drama"],
        rating: 9.0,
        year: 2008,
        image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
    },
    {
        id: 4,
        title: "인터스텔라",
        genre: ["scifi", "drama"],
        rating: 8.6,
        year: 2014,
        image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
    },
    {
        id: 5,
        title: "라라랜드",
        genre: ["romance", "drama"],
        rating: 8.0,
        year: 2016,
        image: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWz7x33Pq4D6UdVP1Hj.jpg"
    },
    {
        id: 6,
        title: "기생충",
        genre: ["drama", "thriller"],
        rating: 8.5,
        year: 2019,
        image: "https://image.tmdb.org/t/p/w500/7LnDBox4pFQb66WW94JbDtu9u9.jpg"
    },
    {
        id: 7,
        title: "어벤져스: 엔드게임",
        genre: ["action", "scifi"],
        rating: 8.4,
        year: 2019,
        image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
    },
    {
        id: 8,
        title: "코코",
        genre: ["animation", "family"],
        rating: 8.4,
        year: 2017,
        image: "https://image.tmdb.org/t/p/w500/eKi8dLCKSpbSTHBwAlkMCM3k83A.jpg"
    },
    {
        id: 9,
        title: "조커",
        genre: ["drama", "crime"],
        rating: 8.2,
        year: 2019,
        image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
    },
    {
        id: 10,
        title: "노트북",
        genre: ["romance", "drama"],
        rating: 7.9,
        year: 2004,
        image: "https://image.tmdb.org/t/p/w500/rNzQyW4f8B8cQeg7Dgj3nZfx50r.jpg"
    },
    {
        id: 11,
        title: "매트릭스",
        genre: ["action", "scifi"],
        rating: 8.7,
        year: 1999,
        image: "https://image.tmdb.org/t/p/w500/f89U3ADr1tn5AEn3AMGuItyP6PP.jpg"
    },
    {
        id: 12,
        title: "겟 아웃",
        genre: ["horror", "thriller"],
        rating: 7.7,
        year: 2017,
        image: "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg"
    },
    {
        id: 13,
        title: "부산행",
        genre: ["action", "horror"],
        rating: 7.6,
        year: 2016,
        image: "https://image.tmdb.org/t/p/w500/393lDFv3gM31dbFz63jXv324x.jpg" 
    },
    {
        id: 14,
        title: "써니",
        genre: ["comedy", "drama"],
        rating: 7.8,
        year: 2011,
        image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=500&q=60" 
    },
    {
        id: 15,
        title: "극한직업",
        genre: ["comedy", "action"],
        rating: 7.4,
        year: 2019,
        image: "https://images.unsplash.com/photo-1514328833-294b46c59b32?auto=format&fit=crop&w=500&q=60" 
    },
    {
        id: 16,
        title: "컨저링",
        genre: ["horror"],
        rating: 7.5,
        year: 2013,
        image: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6tuFwRpC24ur.jpg"
    },
    {
        id: 17,
        title: "이터널 선샤인",
        genre: ["romance", "scifi"],
        rating: 8.3,
        year: 2004,
        image: "https://image.tmdb.org/t/p/w500/5MwkWH9tYHv3mV9OdoveGaciSP1.jpg"
    },
    {
        id: 18,
        title: "미드소마",
        genre: ["horror", "drama"],
        rating: 7.1,
        year: 2019,
        image: "https://image.tmdb.org/t/p/w500/7LEI8ulZzO5gy9Ww2NjoUbW4Vfa.jpg"
    },
    {
        id: 19,
        title: "세 얼간이",
        genre: ["comedy", "drama"],
        rating: 8.4,
        year: 2009,
        image: "https://image.tmdb.org/t/p/w500/sC14loT1YdN0E97rOGjFq4V3f.jpg"
    },
    {
        id: 20,
        title: "탑건: 매버릭",
        genre: ["action"],
        rating: 8.3,
        year: 2022,
        image: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg"
    }
];

// Fallback image
const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=500&q=60";

document.addEventListener('DOMContentLoaded', () => {
    const movieGrid = document.getElementById('movie-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    // Modal Elements
    const modal = document.getElementById("subModal");
    const btn = document.getElementById("subscribeBtn");
    const span = document.getElementsByClassName("close-btn")[0];

    // Initial render (All movies)
    renderMovies(movies);

    // Filter Events
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const genre = btn.getAttribute('data-genre');
            filterMovies(genre);
        });
    });

    // Modal Events
    btn.onclick = function() {
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Prevent scrolling
    }

    span.onclick = function() {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }

    function filterMovies(genre) {
        if (genre === 'all') {
            renderMovies(movies);
        } else {
            const filtered = movies.filter(movie => movie.genre.includes(genre));
            renderMovies(filtered);
        }
    }

    function renderMovies(movieList) {
        movieGrid.innerHTML = '';
        if (movieList.length === 0) {
            movieGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 50px;">해당 장르의 영화가 없습니다.</div>';
            return;
        }

        movieList.forEach((movie, index) => {
            const card = document.createElement('div');
            card.className = 'movie-card';
            card.style.animationDelay = `${index * 0.05}s`;

            const imgElement = document.createElement('img');
            imgElement.src = movie.image;
            imgElement.alt = movie.title;
            imgElement.onerror = function() { this.src = FALLBACK_IMAGE; };

            const posterDiv = document.createElement('div');
            posterDiv.className = 'movie-poster';
            posterDiv.appendChild(imgElement);

            card.innerHTML = `
                <div class="movie-info">
                    <h3 class="movie-title">${movie.title}</h3>
                    <div class="movie-meta">
                        <span class="rating">★ ${movie.rating}</span>
                        <span class="genre-tag">${getMainGenre(movie.genre)}</span>
                    </div>
                </div>
            `;
            
            card.prepend(posterDiv);
            movieGrid.appendChild(card);
        });
    }

    function getMainGenre(genres) {
        const genreMap = {
            'action': '액션', 'romance': '로맨스', 'scifi': 'SF',
            'horror': '공포', 'comedy': '코미디', 'drama': '드라마',
            'animation': '애니', 'family': '가족', 'thriller': '스릴러',
            'crime': '범죄'
        };
        return genreMap[genres[0]] || genres[0];
    }
});

// Mock Subscription Function
function selectPlan(plan) {
    alert(`"${plan.toUpperCase()}" 플랜을 선택하셨습니다.\n(결제 기능은 준비 중입니다)`);
    document.getElementById("subModal").style.display = "none";
    document.body.style.overflow = "auto";
}