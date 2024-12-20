fetch('/src/data/data-products.json')
.then(response => {
    if (!response.ok) {
        throw new Error('Failed to fetch JSON');
    }
    return response.json();
})
.then(data => {
    const container = document.getElementById('products-card');
    const searchInput = document.getElementById('find_places');
    const rupiah = (number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
        }).format(number);
    }
    function renderProducts(products) {
        container.innerHTML = '';
        products.forEach(product => {
            const div = document.createElement('div');
            div.className = 'product';
            div.innerHTML = `
                    <div class="card crd-size">
                        <img class="card-img-product" src="${product.imgUrl}" style="width: 100%;" />
                        <div class="text-sub-card">
                            <p style="font-size: 20px;"><span>${product.duration.day}</span>D/<span>${product.duration.night}</span>N ${product.titleTrip}</p>
                            <div style="display: flex; justify-content:space-between; font-weight:bold;">
                                <p style="color: #FFAF00;">${rupiah(product.price)}</p>
                                <p>${product.country}</p>
                            </div>
                        </div>
                    </div>`;
            container.appendChild(div);
        });
    }
    renderProducts(data);
    
    function myFilterSearch() {
        const searchT = searchInput.value.toLowerCase();
        const filterProduct = data.filter(product => 
            product.titleTrip.toLowerCase().includes(searchT) ||
            product.country.toLowerCase().includes(searchT)
        )
        renderProducts(filterProduct);
    }
    searchInput.addEventListener('input', myFilterSearch);
})
