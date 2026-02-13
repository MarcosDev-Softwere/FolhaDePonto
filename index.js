// Data extracted from the January 2026 timesheet
const funcionarios = [
    { nome: "Domingos", obs: "19 Dias" },
    { nome: "Antônio Soares", obs: "11 Dias" },
    { nome: "Betowem", obs: "13 Dias" },
    { nome: "Alberte", obs: "21 Dias" },
    { nome: "Genilson", obs: "26 Dias" },
    { nome: "Renilson", obs: "05 Dias" },
    { nome: "Rogério", obs: "07 até 12h e 17 todo" }, // Example with partial days
    { nome: "Cláudio", obs: "25 Dias" },
    { nome: "Florisvaldo", obs: "23 Dias" },
    { nome: "José Gersso", obs: "02 Dias" },
    { nome: "Alan", obs: "05 Dias" },
    { nome: "Humberto", obs: "18 Dias" },
    { nome: "Messias", obs: "24 e meio" }, // Example with fractional day
    { nome: "Evandro", obs: "22 Dias" }
];

// Reference to the table body element where rows will be rendered
const corpoTabela = document.getElementById('corpoTabela');

// Function to render the employee list into the table
function exibirFuncionarios(lista) {
    // Map each employee object into a table row string and join them together
    corpoTabela.innerHTML = lista.map(f => `
        <tr>
            <td>${f.nome}</td> <!-- Employee name -->
            <td>${f.obs}</td> <!-- Days/Observation -->
        </tr>
    `).join('');
}

// Function to filter employees based on search input
function filtrarFuncionarios() {
    // Get the search term and convert to lowercase for case-insensitive comparison
    const termo = document.getElementById('inputBusca').value.toLowerCase();

    // Filter employees whose names include the search term
    const filtrados = funcionarios.filter(f => 
        f.nome.toLowerCase().includes(termo)
    );

    // Render the filtered list
    exibirFuncionarios(filtrados);
}

// Initialize the table with the full employee list when the page loads
exibirFuncionarios(funcionarios);
