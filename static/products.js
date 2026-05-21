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
            price: "€2159",
            image: "/static/lizbona-2.png",
            description: "Lizbona is a corner sofa with soft, timeless and elegant shapes that never go out of style. Thanks to the use of wave springs and high-resilience foam, it offers excellent comfort for everyday use. The unique high and soft backrest further enhances relaxation and support while sitting. The sofa also features a spacious storage compartment for bedding and a practical Dolphin-style (DELFIN) sleeping function, making it both stylish and highly functional.",
            width: "255 cm",
            depth: "205 cm",
            height: "100 cm",
            bedSize: "195 cm x 125 cm"
        },

        "lizbona-fotel": {
            name: "Lizbona Armchair",
            price: "€679",
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
            price: "€1669",
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
            price: "€1689",
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
            description: "This modern corner sofa combines functionality, comfort, and innovative design. It is equipped with an electric extension system that allows you to effortlessly adjust the seating depth, creating the perfect space for relaxation. The model also features a practical bedding storage compartment, offering extra convenience and helping to keep your living space organized. Available in two versions: Corner sofa with electric extension and bedding storage – €2539, Straight sofa with electric extension – €2349.  Designed with everyday comfort in mind, it is an ideal choice for those who value both practicality and modern living solutions."
        },
        "fiord_mini": {
            name: "Fiord Mini",
            price: "€1829",
            image: "/static/fiord_mini.png",
            description: "A compact and functional sofa designed for smaller spaces without compromising comfort. Its clean form and practical sleeping function make it ideal for everyday use. Upholstered in Opulence 11 fabric.",
            width: "230 cm",
            depth: "120 cm",
            height: "86 cm",
            bedSize: "200 cm x 160 cm"
        },

        "sofia_mini": {
            name: "Sofia Mini",
            price: "€1859",
            image: "/static/sofia_mini.png",
            description: "The Sofia Mini is a distinctive piece of furniture, perfect for relaxing with family during the day as well as unwinding with friends in the evening. It fits beautifully into a living room or lounge area. The seat is filled with soft silicone fiber, while the backrest is made of high-resilience foam. The loose, quilted cushions can be freely arranged to suit your comfort and style.",
            width: "230 cm",
            depth: "120 cm",
            height: "88 cm",
            bedSize: "195 cm x 170 cm"
        },
        
        "lyon": {
            name: "Lyon",
            price: "€2049",
            image: "/static/lyon.png",
            description: "The Lyon corner sofa is an elegant piece, crafted with great precision and attention to detail, sure to impress anyone who visits your home. Its clean, structured lines are softened by gently rounded backrests, armrests, and cushions, making it a versatile choice that works beautifully in a variety of interior styles. Wooden legs add a distinctive and stylish touch. Lyon also features a practical bedding storage compartment and a convenient PUMA folding mechanism. Inside, it is built with both wave springs and pocket springs, ensuring comfort and durability.",
            width: "235 cm",
            depth: "165 cm",
            height: "103 cm",
            bedSize: "195 cm x 130 cm"
        },
        
        "togo_box_right": {
            name: "Togo Box",
            price: "€2780",
            image: "/static/togo_box_right.jpg",
            description: "A practical and comfortable sofa with a simple, modern design. Upholstered in durable Sereno 692 fabric, suitable for everyday use.",
            width: "286 cm",
            depth: "207 cm",
            height: "72/77 cm",
            bedSize: "125 cm x 220 cm"
        },
        
        "togo_sofa_1": {
            name: "Togo Sofa",
            price: "€2380",
            image: "/static/togo_sofa.png",
            description: "A minimalist sofa design focused on comfort and versatility. Finished in Aphrodite 04 fabric for a soft and elegant appearance.",
            width: "302 cm",
            depth: "136 cm",
            height: "72/77 cm",
            bedSize: "125cm 220 cm"
        },
        

        
        "genua": {
            name:"Genua",
            price: "€1669",
            image: "/static/genua.png",
            description: "A spacious corner sofa designed for comfort and relaxation. Its left-sided configuration and Fancy 20 fabric provide both functionality and style.",
            width: "220cm",
            depth: "160cm",
            height: "90/97cm",
            bedSize: "195 cm x 130 cm"
        }
        "sofia_corner": {
            name:"Sofia Corner",
            price: "€___",
            image: "/static/sofia_sofa.png",
            description: "Sofia is a universal corner and original piece of furniture that will be perfect for relaxing during the day with the family, but also during the evening relaxation with friends, therefore it will fit perfectly into the living room or living room. The seat is made of a soft silicone ball, the backrest is made of highly elastic foam, and loose, quilted cushions can be freely arranged. ",
            width: "270cm",
            depth: "190cm",
            height: "88cm",
            bedSize: "230 cm x 170 cm"
        }
        "sofia": {
            name:"Sofia Sofa",
            price: "€___",
            image: "/static/sofia_corner.jpg",
            description: "Sofia is an original piece of furniture that will be perfect for relaxing during the day with the family, but also during the evening relaxation with friends, which is why it is perfect it will fit into the living room or living room. The seat is made of a soft silicone ball, the backrest is made of highly elastic foam, and loose, quilted cushions can be freely arranged.  ",
            width: "248cm",
            depth: "133cm",
            height: "98cm",
            bedSize: "200 cm x 180 cm"
        }

        "genewa_corner": {
            name:"Genewa Corner",
            price: "€___",
            image: "/static/genewa_corner.png",
            description:"Geneva corner is our proposition for large and medium-sized interiors. It has a fixed backrest and a modern PUMA folding system.The furniture is characterized by increased comfort thanks to the adjustable headrests and the highly elastic foam used.Chrome feet are an original decorative element.",
            width: "255cm",
            depth: "200cm",
            height: "95-104cm",
            bedSize: "205 cm x 140 cm"
        }
        "vertigo_corner": {
            name:"Veritgo Corner",
            price: "€___",
            image: "/static/vertigo.png",
            description:"Vertigo corner sofa bed is a proposition for a user who appreciates high quality and extraordinary comfort.The furniture has five independent adjustable headrests, an adjustable armrest, a bedding container and a Dolphin folding system.Wooden legs give it lightness.",
            width: "267cm",
            depth: "215cm",
            height: "90-105cm",
            bedSize: "200 cm x 130 cm"
        }
        "toronto_corner": {
            name:"Toronto Corner",
            price: "€___",
            image: "/static/toronto_corner.png",
            description: "Toronto is a piece of furniture that will make any interior look cozy. Its rounded sides and comfortable raised headrests are designed to ensure a comfortable rest. Delicate stitching adds a subtle expression, and chrome legs add elegance and lightness.The corner is made of highly elastic foam and wave springs, also in a “dolphin” pram.",
            width: "270cm",
            depth: "170cm",
            height: "90-95cm",
            bedSize: "210 cm x 130 cm"
        }
        "Cayenne_sofa": {
            name:"Cayenne Sofa",
            price: "€___",
            image: "/static/cayenne_sofa.png",
            description: "Cayenne sofa provides exceptional comfort of relaxation, thanks to the filling which is a corrugated spring and a system of “POCKET” type pocket springs.The gentle angle of the seat and the headrest increase the comfort of rest. A perfectly fitted side and a chrome leg increase the exclusivity of this model. An additional advantage of the Cayenne sofa is the use of additional legs extending when unfolding.",
            width: "228cm",
            depth: "100cm",
            height: "90-103cm",
            bedSize: "195 cm x 155 cm"
        }

        "cayenne_sofa": {
            name:"Cayenne Sofa",
            price: "€___",
            image: "/static/cayenne_sofa.png",
            description: "Cayenne sofa provides exceptional comfort of relaxation, thanks to the filling which is a corrugated spring and a system of “POCKET” type pocket springs.The gentle angle of the seat and the headrest increase the comfort of rest. A perfectly fitted side and a chrome leg increase the exclusivity of this model. An additional advantage of the Cayenne sofa is the use of additional legs extending when unfolding.",
            width: "228cm",
            depth: "100cm",
            height: "90-103cm",
            bedSize: "195 cm x 155 cm"
        }
        "cayenne_armchair": {
            name:"Cayenne Armchair",
            price: "€___",
            image: "/static/cayenne_armchair.png",
            description: "Cayenne sofa provides exceptional comfort of relaxation, thanks to the filling which is a corrugated spring and a system of “POCKET” type pocket springs.The gentle angle of the seat and the headrest increase the comfort of rest. A perfectly fitted side and a chrome leg increase the exclusivity of this model.",
            width: "80cm",
            depth: "90cm",
            height: "90cm",
            bedSize: ""
        }
        "macan_sofa": {
            name:"Macan Sofa",
            price: "€___",
            image: "/static/macan_sofa.png",
            description: "The Macan sofa is the perfect piece of furniture for family or social gatherings.Large back cushions and the high-resilience foam used make the piece of furniture very comfortable and cozy. Macan has a bedding container, it is distinguished by wooden accessories.",
            width: "230cm",
            depth: "100cm",
            height: "95-105cm",
            bedSize: "195 x 150 cm"
        }
        "macan_armchair": {
            name:"Macan Armchair",
            price: "€___",
            image: "/static/macan_armchair.png",
            description: "The Macan sofa is the perfect piece of furniture for family or social gatherings.Large back cushions and the high-resilience foam used make the piece of furniture very comfortable and cozy. Macan has a bedding container, it is distinguished by wooden accessories.",
            width: "80cm",
            depth: "90cm",
            height: "90cm",
            bedSize: ""
        }
        "asti_sofa": {
            name:"Asti Sofa",
            price: "€___",
            image: "/static/asti.png",
            description:"Asti is a compromise between functionality and a small footprint. A piece of furniture placed in the central place will look beautiful from every side. Highly elastic foam is responsible for the comfort of use. The automatic unfolding mechanism prevents the floor from scratching, just lift the seat up and lower it slightly into place. ",
            width: "255cm",
            depth: "99cm",
            height: "92cm",
            bedSize: ""
        }
        "yoko_sofa": {
            name:"Yoko Sofa",
            price: "€___",
            image: "/static/yoko.png",
            description: "Yoko is the essence of simplicity only complemented by trimming on the edges. The classic shapes of the sofa make it suitable for any room. The comfort of use is guaranteed by the use of highly flexible foams. Yoko has a spacious container for bedding, and when unfolded, it creates a large relaxation area for the whole family. It will be a great replacement for a corner, not less functional, and taking up much less valuable space.",
            width: "230cm",
            depth: "95cm",
            height: "93cm",
            bedSize: "200 x 145 cm"
        }
        "yoko_corner": {
            name:"Yoko Corner",
            price: "€___",
            image: "/static/yoko_corner.png",
            description: "During the day, the Yoko corner will be pleasing to the eye with an elegant decorative kedar finish, and in the evenings comfort and convenience will be provided by the seats made of highly resilient foam.The furniture has two containers for bedding and neat wooden legs.",
            width: "245cm",
            depth: "143cm",
            height: "90cm",
            bedSize: "200 x 145 cm"
        }

        "olsen_corner": {
            name:"Olsen Corner",
            price: "€___",
            image: "/static/olsen_corner.png",
            description: "Olsen’s modern look is provided by the vertical stripes on the cushions and sides.The corner sofa is universal – depending on your needs – it is easy to change the side on which the bed is located. The comfort of the seats is ensured by highly elastic foam, and the whole is complemented by wooden legs.",
            width: "225cm",
            depth: "150cm",
            height: "92cm",
            bedSize: "205 x 140 cm"
        }

        "pori_corner": {
            name:"Pori Corner",
            price: "€___",
            image: "/static/pori.png",
            description: "Pori is a stylish piece of furniture that will decorate any living room. It is very easy to disassemble thanks to a PUMA mechanism. The solid-looking corner has gained lightness thanks to the trimming and wooden legs.",
            width: "230cm",
            depth: "155cm",
            height: "90cm",
            bedSize: "140 x 195 cm"
        }

        "mediolan_corner": {
            name:"Mediolan Corner",
            price: "€___",
            image: "/static/mediolan.png",
            description: "This corner perfectly uses the available space, even in a small room. A characteristic element are backrest cushions and rollers supporting the lumbar spine. The corrugated spring and the “POCKET” pocket spring system are responsible for the high comfort of the seat. Its unquestionable advantage is the spacious bedding container and the easy to unfold “puma” sleeping function. ",
            width: "235cm",
            depth: "165cm",
            height: "90-102cm",
            bedSize: "195 x 130 cm"
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
