document.addEventListener("DOMContentLoaded", () => {
    const products = {
        "lizbona-l": {
            name: "Lizbona I",
            price: "€1879",
            image: "/static/lizbona-1.png",
            description: "Lizbona is a corner sofa with soft, timeless and always modern shapes.Thanks to the use of wave springs and high-resilience foam, it is extremely comfortable. Its unique, high and soft backrest further enhances the feeling of comfort while sitting. The sofa includes a large storage compartment for bedding and a Dolphin-style (DELFIN) pull-out sleeping function, making it both practical and functional for everyday use.",
            width: "260 cm",
            depth: "170 cm",
            height: "100 cm",
            bedSize: "210 cm x 125 cm"
        },

        "lizbona-ll": {
            name: "Lizbona II",
            price: "€2158",
            image: "/static/lizbona-2.png",
            description: "Lizbona is a corner sofa with soft, timeless and elegant shapes that never go out of style. Thanks to the use of wave springs and high-resilience foam, it offers excellent comfort for everyday use. The unique high and soft backrest further enhances relaxation and support while sitting. The sofa also features a spacious storage compartment for bedding and a practical Dolphin-style (DELFIN) sleeping function, making it both stylish and highly functional.",
            width: "255 cm",
            depth: "205 cm",
            height: "100 cm",
            bedSize: "195 cm x 125 cm"
        },

        "lizbona-fotel": {
            name: "Lizbona Armchair",
            price: "€669",
            image: "/static/lizbona-armchair.png",
            description: "Soft cushioning and a generously padded seat ensure exceptional comfort, while the contoured backrest provides proper support for relaxed sitting throughout the day. Subtly curved armrests add a touch of elegance and enhance the overall comfort of use. Designed to complement the Lisbon sofa set, the armchair combines style and functionality, making it a perfect addition to both modern living rooms and more classic interiors. Its stable construction and refined finish ensure durability, while its compact form allows it to fit seamlessly into any space, whether used as a standalone piece or part of a larger set.",
            width: "92 cm",
            depth: "96 cm",
            height: "100cm"
        },

        "lizbona-2os": {
            name: "Lizbona 2 people sofa",
            price: "€1079",
            image: "/static/lizbona-2ppl.png",
            description: "Soft and comfortable seats, ergonomically shaped backrests, and gently rounded armrests make this set perfect for everyday use as well as for hosting guests. Thanks to the Dolphin-style pull-out function in the larger sofa, the Lisbon set can also serve as a comfortable bed for daytime rest. The two-seater sofa is equipped with a practical storage compartment for bedding, further enhancing its functionality.",
            width: "172 cm",
            depth: "96 cm",
            height: "100 cm"
        },

        "lizbona-3os": {
            name: "Lizbona 3 people sofa",
            price: "€1419",
            image: "/static/lizbona-3ppl.png",
            description: "Soft and comfortable seats, ergonomically shaped backrests, and gently rounded armrests make this set perfect for everyday use as well as for hosting guests. Thanks to the Dolphin-style pull-out function in the larger sofa, the Lisbon set can also serve as a comfortable bed for daytime rest. The two-seater sofa is equipped with a practical storage compartment for bedding, further enhancing its functionality.",
            width: "237 cm",
            depth: "96 cm",
            height: "100 cm"
        },

        "rio": {
            name: "Rio",
            price: "€2179",
            image: "/static/rio.png",
            description: "The Rio corner sofa offers optimal comfort thanks to its simple yet striking design. It features five manually adjustable headrests, bold piping details, a spacious bedding storage compartment, and a PUMA-style fold-out sleeping mechanism. An optional extra pouf can be added, which extends the chaise section when attached, or can be used separately as an additional standalone seat. It also includes a storage compartment. Available in both left-hand and right-hand configurations to suit different room layouts and individual needs.",
            width: "255 cm",
            depth: "175 cm, 220cm with pouf",
            height: "97-110 cm",
            bedSize: "205 cm x 140 cm"
        },

        "ottawa": {
            name: "Ottawa",
            price: "€2289",
            image: "/static/ottawa.png",
            description: "Ottawa is a model that enters a completely new dimension of design. Its metal legs give the piece a light visual feel and a timeless aesthetic. In addition, it is equipped with a spacious bedding storage compartment, five adjustable headrests, and a “dolphin” type folding mechanism. Available in both left-hand and right-hand configurations to suit different room layouts and individual needs.",
            width: "255 cm",
            depth: "210 cm",
            height: "95 cm",
            bedSize: "200 cm x 130 cm",
            leg: "8 cm, metal, matte black."
        },

        "bari": {
            name: "Bari",
            price: "€1689",
            image: "/static/bari.png",
            description: "Ottawa is a model that enters a completely new dimension of design. Its metal legs give the piece a light, elegant look and a timeless, modern aesthetic. Additionally, it features a spacious bedding storage compartment, five adjustable headrests, and a “dolphin” folding mechanism. Available in both left-hand and right-hand configurations to suit different room layouts and individual needs.",
            width: "235 cm",
            depth: "185 cm",
            height: "90/97 cm",
            bedSize: "190 cm x 130 cm",
            leg: "8 cm, wood"
        },

        "tokio": {
            name: "Tokio",
            price: "€2219",
            image: "/static/tokio.png",
            description: "The Tokio corner sofa is a response to the needs of customers who value style, quality, and comfort. Vertical stripes on the backrest and side add an elegant touch, while the PUMA folding mechanism allows for relaxed family time in front of a favorite series or solo lounging with a book. Tokio also includes a spacious storage compartment, ideal for keeping various small items. An optional extra pouf extends the chaise section when attached, or can be used separately as an additional standalone seat. It also includes a storage compartment. Available in both left-hand and right-hand configurations to suit different room layouts and individual needs.",
            width: "255 cm",
            depth: "173 cm, 220cm with pouf",
            height: "90-105 cm",
            bedSize: "205 cm x 140 cm",
            leg: "6 cm, wood"
        },

        "malmo": {
            name: "Malmo",
            price: "€1619",
            image: "/static/malmo.png",
            description: "The Malmo corner sofa is an excellent choice for smaller spaces, offering great comfort thanks to the high-resilience foam used in its construction. It features elegant quilted cushions and a practical side magazine rack, while its wooden legs add a warm and distinctive character. The sofa is also equipped with a modern PUMA-type folding mechanism for everyday convenience. Available in both left-hand and right-hand configurations to suit different room layouts and individual needs.",
            width: "230 cm",
            depth: "156 cm",
            height: "90 cm",
            bedSize: "195 cm x 140 cm",
            leg: "10 cm, wood"
        },

        "angus": {
            name: "Angus",
            price: "€889",
            image: "/static/angus.png",
            description: "Tasteful stitching, chrome legs, and exceptionally soft cushions create a stylish and lightweight overall look. The Angus sofa is a combination of functionality and elegance.",
            width: "190 cm",
            depth: "90 cm",
            height: "80 cm",
            bedSize: "190 cm x 140 cm"
        },

        "boston": {
            name: "Boston",
            price: "€1609",
            image: "/static/boston.png",
            description: "The Boston sofa has been designed with attention to detail, standing out not only for its beautiful appearance but also for its unmatched comfort. Its soft upholstered cushions provide ideal support for the back and seat, creating a perfect place to relax after a long day. The solid construction ensures durability and stability, allowing you to enjoy its charm for many years.",
            width: "240 cm",
            depth: "110 cm",
            height: "90 cm",
            bedSize: "200 cm x 160 cm"
        },

        "bella": {
            name: "Bella",
            price: "€1709",
            image: "/static/bella.png",
            description: "A sofa with a distinctive character and bold design. Its soft shapes, filled with high-resilience foam and silicone fiber, are enhanced by refined tailoring details such as piping and quilting, which further emphasize the strong personality of the BELLA sofa. Its uniquely shaped wooden legs, quilted lumbar cushions, and DL-type folding mechanism make this sofa a complete and perfectly designed piece.",
            width: "235 cm",
            depth: "115 cm",
            height: "98 cm",
            bedSize: "200 cm x 160 cm"
        },

        "napoli": {
            name: "Napoli",
            price: "€2349",
            image: "/static/napoli.png",
            description: "This modern corner sofa combines functionality, comfort, and innovative design. It is equipped with an electric extension system that allows you to effortlessly adjust the seating depth, creating the perfect space for relaxation. The model also features a practical bedding storage compartment, offering extra convenience and helping to keep your living space organized. Available in two versions: Corner sofa with electric extension and bedding storage – €2699, Straight sofa with electric extension – €2349.  Designed with everyday comfort in mind, it is an ideal choice for those who value both practicality and modern living solutions."
        }
    };

    const params = new URLSearchParams(window.location.search);
    const productID = params.get("id");
    const product = products[productID];

    if (product) {
        document.getElementById("product-name").textContent = product.name;
        document.getElementById("product-price").textContent = product.price;
        document.getElementById("product-image").src = product.image;
        document.getElementById("product-description").textContent = product.description;
        document.getElementById("product-width").textContent = "Width: " + product.width;
        document.getElementById("product-depth").textContent = "Depth: " + product.depth;
        document.getElementById("product-height").textContent = "Height: " + product.height;
        document.getElementById("product-bedSize").textContent = "Bed Size: " + product.bedSize;
    }
});