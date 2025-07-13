document.getElementById("tokenForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const amount = parseFloat(document.getElementById("amount").value);

  if (isNaN(amount) || amount <= 0) {
    document.getElementById("results").textContent =
      "Please enter a valid amount.";
    return;
  }

  const tariffs = [
    { name: "Homelight 20A", rate: 248.53 },
    { name: "Homelight 60A", rate: 315.93 }
  ];

  let html = `
    <table class="results-table">
      <thead>
        <tr>
          <th>Tariff</th>
          <th>Units you will receive</th>
        </tr>
      </thead>
      <tbody>
  `;

  tariffs.forEach(tariff => {
    const ratePerRand = tariff.rate / 100;
    const units = amount / ratePerRand;

    html += `
      <tr>
        <td>${tariff.name}</td>
        <td class="results-value">${units.toFixed(1)} kWh</td>
      </tr>
    `;
  });

  html += `
      </tbody>
    </table>
  `;

  document.getElementById("results").innerHTML = html;
});

// Set update date dynamically
document.getElementById("updateDate").textContent =
  "Updated: " + new Date().toISOString().slice(0, 10);

