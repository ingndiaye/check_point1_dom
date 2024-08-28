
function Produit(id, nom, prix, qte, aim) {
    this.id = id;
    this.nom = nom;
    this.prix = prix;
    this.qte = qte;
    this.aim = aim;
}


// ajouter les articles au panier
let cart = [];
cart.push(new Produit("001", "Ordinateur", 60000, 2, "oui"));
cart.push(new Produit("002", "Souris", 2000, 1, "non"));
cart.push(new Produit("003", "Uniter centrale", 40000, 3, "oui"));
console.log(cart);

// Fonction pour afficher le panier
function afficherPanier() { 
    const cartItemsContainer = document.getElementById('tbbody');
    cartItemsContainer.innerHTML = '';
    var tt = 0;
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Votre panier est vide</p>';
        document.getElementById("prixTotal").innerHTML = "";
        return;
    }

    cart.forEach((item, index) => {
        var im = "";
        if (item.aim == "oui") im = "img/cr.png";
        else im = "img/cn.png";

        console.log(item.aim);
        tt += item.prix * item.qte;
        const tableTr = document.createElement('tr');
        tableTr.classList.add('border-b'); tableTr.classList.add('border-neutral-200');
        tableTr.classList.add('bg-white'); tableTr.classList.add('hover:bg-gray-50');
        tableTr.classList.add('text-center');

        tableTr.innerHTML = `  
                    <td>${item.id}</td>
                    <td>${item.nom}</td>
                    <td>${item.prix}</td>
                    <td>
                    <button class="bg-blue-700 ml-2 mr-2 h-[25px] w-[25px] rounded-lg text-white" type="button" onclick="click_touch_plus(${index})">+</button>
                     ${item.qte}
                    <button class="bg-red-700 ml-2 mr-2 h-[25px] w-[25px] rounded-lg text-white"  type="button" onclick="click_touch_moins(${index})"  >-</button>
                    </td> 
                    <td> 
                    <img src="${im}" onclick="aimer(${index})" class="mx-auto" alt="dev web"> 
                    </td> 
                    <td> 
                    <button class="bg-red-700 rounded-lg px-4 py-1 text-white" type="button" onclick="removeFromCart(${index})">Supprimer</button> 
                    </td>             
        `;
        console.log(im);
        console.log(tableTr);
        cartItemsContainer.appendChild(tableTr);
    });
    console.log(tt);
    document.getElementById("prixTotal").innerHTML = "Prix total du panier : "+tt+ "FCFA";

}

// Fonction pour supprimer un article du panier
function removeFromCart(index) {
    cart.splice(index, 1);
    afficherPanier();
}

function aimer(index) {
    if (cart[index].aim == "oui") cart[index].aim="non";
    else cart[index].aim="oui";
    afficherPanier();
}

function click_touch_plus(index) {
    cart[index].qte += 1;
    afficherPanier();
}
function click_touch_moins(index) {
    if (cart[index].qte <= 1) {
        //removeFromCart(index);
        //displayCart();
    } else {
        cart[index].qte -= 1;
        afficherPanier();
    }
}