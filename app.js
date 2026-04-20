document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("caseForm");
  const tableBody = document.getElementById("caseRows");

  let cases = [];

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const caseData = {
      caseNumber: document.getElementById("caseNumber").value,
      location: document.getElementById("locationDescription").value,
      gps: document.getElementById("gpsCoordinates").value,
      reporting: document.getElementById("reportingParty").value,
      violation: document.getElementById("violationType").value,
      narrative: document.getElementById("narrativeSummary").value,
      status: document.getElementById("status").value,
      deputy: document.getElementById("assignedDeputy").value,
      dateOpened: new Date().toLocaleDateString()
    };

    cases.push(caseData);
    renderCases();
    form.reset();
  });

  function renderCases() {
    tableBody.innerHTML = "";

    cases.forEach((c, index) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${c.caseNumber}</td>
        <td>${c.dateOpened}</td>
        <td>${c.location}</td>
        <td>${c.status}</td>
        <td>${c.violation}</td>
        <td>${c.deputy}</td>
        <td>
          <button onclick="deleteCase(${index})">Delete</button>
        </td>
      `;

      tableBody.appendChild(row);
    });
  }

  window.deleteCase = function(index) {
    cases.splice(index, 1);
    renderCases();
  };
});
