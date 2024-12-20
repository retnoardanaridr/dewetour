fetch('/src/data/data-transaction.json')
.then(response => {
    if(!response.ok) {
        throw new Error('Failed to fetch JSON')
    }
    return response.json()
})
.then(data => {
    const table = document.getElementById('list_transaction');
    data.forEach((transaction, index) => {
        const tr = document.createElement('tr')
        tr.className = 'transaction';
        tr.innerHTML = `
            <tr>
                <td>${index+1}</td>
                <td>${transaction.name}</td>
                <td>${transaction.trip}</td>
                <td>${transaction.proof_transaction}</td>
                <td style="${transaction.payment_status == 'Pending' ? 'color:#F7941E;' : transaction.payment_status == 'Cancel' ? 'color:#FF0742;' : 'color:#0ACF83;'} font-weight: bold;">
                    ${transaction.payment_status}
                </td>
                <td>
                    <button onclick="openModal('modalActionTransaction')" id="approvalTransaction">
                        <img src="../src/img/Group 17.png" />
                    </button>
                </td>
            </tr>
        `;
        table.appendChild(tr)
    })
})