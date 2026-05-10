const properties = [
  {
    title: "Apartamento 3 quartos",
    location: "Vila Mariana, São Paulo",
    type: "apartamento",
    deal: "venda",
    price: "R$ 890.000",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Casa com quintal",
    location: "Campinas, Jardim Chapadão",
    type: "casa",
    deal: "venda",
    price: "R$ 1.250.000",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Sala comercial moderna",
    location: "Belo Horizonte, Savassi",
    type: "comercial",
    deal: "aluguel",
    price: "R$ 4.800/mês",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Apartamento compacto",
    location: "Curitiba, Batel",
    type: "apartamento",
    deal: "aluguel",
    price: "R$ 2.600/mês",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=60"
  }
];

const propertyGrid = document.getElementById("propertyGrid");
const searchForm = document.getElementById("searchForm");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

function renderCards(list) {
  propertyGrid.innerHTML = list.map((property) => `
    <article class="card">
      <img src="${property.image}" alt="${property.title}" loading="lazy" />
      <div class="card-content">
        <h3>${property.title}</h3>
        <p class="meta">${property.location}</p>
        <p class="meta">${property.deal.toUpperCase()} • ${property.type}</p>
        <p class="price">${property.price}</p>
      </div>
    </article>
  `).join("");
}

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const type = document.getElementById("tipo").value;
  const deal = document.getElementById("negocio").value;
  const city = document.getElementById("cidade").value.toLowerCase().trim();

  const filtered = properties.filter((property) => {
    const typeMatch = !type || property.type === type;
    const dealMatch = !deal || property.deal === deal;
    const cityMatch = !city || property.location.toLowerCase().includes(city);

    return typeMatch && dealMatch && cityMatch;
  });

  renderCards(filtered);
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formStatus.textContent = "Mensagem enviada com sucesso! Em breve entraremos em contato.";
  contactForm.reset();
});

renderCards(properties);
