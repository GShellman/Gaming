const storageKey = 'airlineManagerFlights';

function loadFlights() {
  return JSON.parse(localStorage.getItem(storageKey)) || [];
}

function saveFlights(flights) {
  localStorage.setItem(storageKey, JSON.stringify(flights));
}

function renderFlights() {
  const flights = loadFlights();
  const tbody = document.getElementById('flights-table');
  tbody.innerHTML = '';
  flights.forEach((flight, index) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${flight.number}</td>
      <td>${flight.origin}</td>
      <td>${flight.destination}</td>
      <td>${flight.aircraft}</td>
      <td>${flight.date}</td>
      <td><button data-index="${index}" class="delete">Delete</button></td>
    `;
    tbody.appendChild(tr);
  });
}

document.getElementById('flight-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const flight = {
    number: document.getElementById('flight-number').value.trim(),
    origin: document.getElementById('origin').value.trim(),
    destination: document.getElementById('destination').value.trim(),
    aircraft: document.getElementById('aircraft').value.trim(),
    date: document.getElementById('date').value
  };
  const flights = loadFlights();
  flights.push(flight);
  saveFlights(flights);
  e.target.reset();
  renderFlights();
});

document.getElementById('flights-table').addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    const index = e.target.getAttribute('data-index');
    const flights = loadFlights();
    flights.splice(index, 1);
    saveFlights(flights);
    renderFlights();
  }
});

renderFlights();
