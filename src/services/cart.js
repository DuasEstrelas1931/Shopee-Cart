// quais ações o carrinho pode fazer

// ✔ adicionar item no carrinho
async function addItem(userCart, item) {
   userCart.push(item)

};
// deletar um item do carrinho 🛒
async function deletItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if(index !== -1){
        userCart.splice(index, 1);
    };
};

//remover um item - diminuir um item
async function removeItem(userCart, item) {
    //encontrar o index doitem
    const indexFound = userCart.findIndex((p) => p.name === item.name)
   

    //caso não enconte o item
    if (indexFound === -1) {  
        console.log("Item não encontrado");
        return;
    };

    //item > 1 subtrai um item
    if(userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
    };    
    // caso o item seja igual a 1, remove o item do carrinho
    if(userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1);
        return;
    };
};    
// Reove item by index      
// tranforma o indice visual do usuário, para o indice do backend
// const deleteIndex = index - 1;
    
// é maior que zero e se é menor do que o tamanho do carrinho
// if(index >= 0 && index < userCart.length) {
//     userCart.splice(deleteIndex, 1);
// };



// cálcular o total
async function calculateTotal(userCart) {
    console.log("\nShopee Cart TOTAL IS:");

    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`🎁 Total: ${result}`);

}
async function displayCart(userCart) {
    console.log("\nShopee cart list:")
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - ${item.price } | ${item.quantity} | Subtotal ${item.subtotal()}`);
    });
}

export {
    addItem,
    deletItem,
    removeItem,
    calculateTotal,
    displayCart
};