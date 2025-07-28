const apiKey = 'YOUR_API_KEY';
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const moviesContainer = document.getElementById('moviesContainer');
const message = document.getElementById('message');

searchButton.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (!query) return;
  fetchMovies(query);
});

async function fetchMovies(query) {
  moviesContainer.innerHTML = '';
  message.textContent = 'Loading...';
  try {
    const res = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(query)}`);
    const data = await res.json();
    if (data.Response === 'True') {
      renderMovies(data.Search);
      message.textContent = '';
    } else {
      message.textContent = 'No results found.';
    }
  } catch (err) {
    message.textContent = 'Error fetching data.';
    console.error(err);
  }
}

function renderMovies(movies) {
  movies.forEach(movie => {
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = movie.Poster !== 'N/A' ? movie.Poster : 'placeholder.png';
    card.appendChild(img);

    const title = document.createElement('h3');
    title.textContent = movie.Title;
    card.appendChild(title);

    const year = document.createElement('p');
    year.textContent = movie.Year;
    card.appendChild(year);

    const link = document.createElement('a');
    link.href = `https://www.imdb.com/title/${movie.imdbID}`;
    link.target = '_blank';
    link.textContent = 'More Info';
    card.appendChild(link);

    moviesContainer.appendChild(card);
  });
}
