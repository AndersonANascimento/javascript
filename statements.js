var texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam auctor augue, eget scelerisque sapien condimentum ac. Fusce tempus odio mauris. Nam metus ex, consequat id ullamcorper ac, viverra egestas nisi. Nunc venenatis vel dolor ac egestas. In massa nisi, vulputate nec ex vitae, ultrices ultricies diam. In facilisis vitae quam in volutpat. In nec eros non ex blandit accumsan a ut turpis.";

var HackerTextError = function (message) {
    this.message = message;
    this.name = "HackerTextError";
};

var toHackerCase = function (texto) {
    if (!texto) throw new HackerTextError("Texto inválido!");
    if (typeof texto !== "string") throw new HackerTextError("Tipo inválido!");
    var hackerTextArray = [];
    var i = 0;
    while (i <= texto.length) {
        switch (texto.charAt(i)) {
            case "o":
                hackerTextArray.push(0);
                break;
            case "l":
                hackerTextArray.push(1);
                break;
            case "e":
                hackerTextArray.push(3);
                break;
            case "a":
                hackerTextArray.push(4);
                break;
            case "s":
                hackerTextArray.push(5);
                break;
            case "t":
                hackerTextArray.push(7);
                break;
            default:
                hackerTextArray.push(texto.charAt(i));
        }
        i++;
    }
    return hackerTextArray.join("");
};

try {
    console.log(toHackerCase());
} catch (e) {
    console.log("Error: " + e.message + " " + e.name);
}
try {
    console.log(toHackerCase(10));
} catch (e) {
    console.log("Error: " + e.message + " " + e.name);
}
console.log(toHackerCase(texto));