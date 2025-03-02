function clearAll() {

    document.querySelectorAll(".left-panel input[type='checkbox']").forEach(cb => cb.checked = false);
    document.getElementById("selectedTeachersTable").innerHTML = `
        <tr>
            <th>Adı Soyadı</th>
            <th>1. Ders</th>
            <th>2. Ders</th>
            <th>3. Ders</th>
            <th>4. Ders</th>
            <th>5. Ders</th>
            <th>6. Ders</th>
            <th>7. Ders</th>
            <th>8. Ders</th>
        </tr>
    `;

    document.querySelector(".right-panel").innerHTML = "<h2>Görevlendirmeler</h2>";
}

function printSection() {
    let content = document.querySelector(".schedule").innerHTML; 
    let assignments = document.querySelector(".right-panel").innerHTML; 

    let newWindow = window.open("", "_blank");
    newWindow.document.write(`
        <html>
        <head>
            <title>Yazdır</title>
            <style>
                body { font-family: Arial, sans-serif; }
                table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
                th, td { border: 1px solid black; padding: 8px; text-align: center; }
                th { background-color: #f4f4f4; }
            </style>
        </head>
        <body>
            <h1>Nöbetçi Öğretmen Listesi</h1>
            ${content}
            ${assignments} <!-- İkinci "Görevlendirmeler" başlığını eklemiyoruz -->
        </body>
        </html>
    `);

    newWindow.document.close();
    newWindow.print();
}

function adminPanel() {
    window.location.href = "admin.html";
}
