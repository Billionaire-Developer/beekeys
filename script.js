document.addEventListener("DOMContentLoaded", () => {
  fetch("businesses.json")
    .then(response => {
      if (!response.ok) throw new Error("Failed to fetch data");
      return response.json();
    })
    .then(businesses => {
      const container = document.getElementById("listing-grid");

      businesses.forEach(biz => {
        const card = document.createElement("div");
        card.className = "business-card";
        card.innerHTML = `
          <img src="${biz.image}" alt="${biz.name}" />
          <div class="card-body">
            <h3>${biz.name}</h3>
            <p><strong>Category:</strong> ${biz.category}</p>
            <p><strong>Location:</strong> ${biz.location}</p>
            <p><strong>Rating:</strong> ⭐ ${biz.rating}</p>
          </div>
        `;
        container.appendChild(card);
      });
    })
    .catch(error => {
      console.error("Error fetching businesses:", error);
    });
});
