let productList = [];

function displayTableHeader() {
    let counter = productList.length
    let tableHeader = ' <tr>\n' +
        '        <th colspan="2" width="80%">Product Name</th>\n' +
        '        <th colspan="2">'+counter+' Product</th>\n' +
        '    </tr>';

    return tableHeader
}


function displayProducts() {
    let table = document.getElementById('product_list');
    let tableContent = displayTableHeader();
        for (let i = 0; i < productList.length; i++ ){
            tableContent += '<tr>\n' +
                '        <td width="10%">'+(+i + 1)+'</td>\n' +
                '        <td width="70%"><span>'+productList[i]+'</span></td>\n' +
                '        <td width="10%"><button class="edit" onclick="editProduct('+i+')">Edit</button></td>\n' +
                '        <td width="10%"><button class="delete" onclick="deleteProduct('+i+')">Delete</button></td>\n' +
                '    </tr>'

        }
        return table.innerHTML  = tableContent;
}
function addProduct() {
    let productName = document.getElementById('product_name').value;
    if (productName === '') return false
    productList.push(productName);
    displayProducts()
}
function editProduct(i) {
    let editData = prompt('',productList[i])
    productList[i]  = editData;
    displayProducts()
}
function deleteProduct(index) {
    for (let i = index; i < productList.length; i ++){
        productList[i]  = productList[i + 1];
    }
    productList.length --;
    displayProducts()
}


