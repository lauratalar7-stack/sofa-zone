document.addEventListener("DOMContentLoaded", () => {
    const products = {
        "lizbona-l": {
            name: "Lizbona I",
            price: "€1880",
            image: "/static/lizbona/lizbona-1.png",
            description: "Lizbona is a corner sofa with soft, timeless and always modern shapes.Thanks to the use of wave springs and high-resilience foam, it is extremely comfortable. Its unique, high and soft backrest further enhances the feeling of comfort while sitting. The sofa includes a large storage compartment for bedding and a Dolphin-style (DELFIN) pull-out sleeping function, making it both practical and functional for everyday use.",
            width: "260 cm",
            depth: "170 cm",
            height: "100 cm",
            bedSize: "210 cm x 125 cm",
            gallery: [
                "/static/lizbona/lizbona-1b.png",
                "/static/lizbona/lizbona-1c.png"
            ]
        },

        "lizbona-ll": {
            name: "Lizbona II",
            price: "€2159",
            image: "/static/lizbona/lizbona-2.png",
            description: "Lizbona is a corner sofa with soft, timeless and elegant shapes that never go out of style. Thanks to the use of wave springs and high-resilience foam, it offers excellent comfort for everyday use. The unique high and soft backrest further enhances relaxation and support while sitting. The sofa also features a spacious storage compartment for bedding and a practical Dolphin-style (DELFIN) sleeping function, making it both stylish and highly functional.",
            width: "255 cm",
            depth: "205 cm",
            height: "100 cm",
            bedSize: "195 cm x 125 cm",
            gallery: [
                "/static/lizbona/lizbona-2b.png",
                "/static/lizbona/lizbona-2c.png"
            ]
        },

        "lizbona-fotel": {
            name: "Lizbona Armchair",
            price: "€670",
            image: "/static/lizbona/lizbona-armchair.png",
            description: "Soft cushioning and a generously padded seat ensure exceptional comfort, while the contoured backrest provides proper support for relaxed sitting throughout the day. Subtly curved armrests add a touch of elegance and enhance the overall comfort of use. Designed to complement the Lisbon sofa set, the armchair combines style and functionality, making it a perfect addition to both modern living rooms and more classic interiors. Its stable construction and refined finish ensure durability, while its compact form allows it to fit seamlessly into any space, whether used as a standalone piece or part of a larger set.",
            width: "92 cm",
            depth: "96 cm",
            height: "100cm",
            gallery: [
                "/static/lizbona/lizbona-armchair-b.png"
            ]
        },

        "lizbona-2os": {
            name: "Lizbona 2 people sofa",
            price: "€1010",
            image: "/static/lizbona/lizbona-2ppl.png",
            description: "Soft and comfortable seats, ergonomically shaped backrests, and gently rounded armrests make this set perfect for everyday use as well as for hosting guests. Thanks to the Dolphin-style pull-out function in the larger sofa, the Lisbon set can also serve as a comfortable bed for daytime rest. The two-seater sofa is equipped with a practical storage compartment for bedding, further enhancing its functionality.",
            width: "172 cm",
            depth: "96 cm",
            height: "100 cm",
            gallery: [
                "/static/lizbona/lizbona-2ppl-b.png"
            ]
        },

        "lizbona-3os": {
            name: "Lizbona 3 people sofa",
            price: "€1420",
            image: "/static/lizbona/lizbona-3ppl.png",
            description: "Soft and comfortable seats, ergonomically shaped backrests, and gently rounded armrests make this set perfect for everyday use as well as for hosting guests. Thanks to the Dolphin-style pull-out function in the larger sofa, the Lisbon set can also serve as a comfortable bed for daytime rest. The two-seater sofa is equipped with a practical storage compartment for bedding, further enhancing its functionality.",
            width: "237 cm",
            depth: "96 cm",
            height: "100 cm",
            gallery: [
                "/static/lizbona/lizbona-3ppl-b.png"
            ]
        },

        "rio": {
            name: "Rio",
            price: "€2180",
            image: "/static/rio/rio.png",
            description: "The Rio corner sofa offers optimal comfort thanks to its simple yet striking design. It features five manually adjustable headrests, bold piping details, a spacious bedding storage compartment, and a PUMA-style fold-out sleeping mechanism. An optional extra pouf can be added, which extends the chaise section when attached, or can be used separately as an additional standalone seat. It also includes a storage compartment. Available in both left-hand and right-hand configurations to suit different room layouts and individual needs.",
            width: "255 cm",
            depth: "175 cm, 220cm with pouf",
            height: "97-110 cm",
            bedSize: "205 cm x 140 cm",
            gallery: [
                "/static/rio/rio-b.png",
                "/static/rio/rio-c.png",
                "/static/rio/rio-d.png",
                "/static/rio/rio-e.png"
            ]
        },

        "ottawa": {
            name: "Ottawa",
            price: "€2290",
            image: "/static/ottawa/ottawa.png",
            description: "Ottawa is a model that enters a completely new dimension of design. Its metal legs give the piece a light visual feel and a timeless aesthetic. In addition, it is equipped with a spacious bedding storage compartment, five adjustable headrests, and a “dolphin” type folding mechanism. Available in both left-hand and right-hand configurations to suit different room layouts and individual needs.",
            width: "255 cm",
            depth: "210 cm",
            height: "95 cm",
            bedSize: "200 cm x 130 cm",
            leg: "8 cm, metal, matte black.",
            gallery: [
                "/static/ottawa/ottawa-b.png",
                "/static/ottawa/ottawa-c.png"
            ]
        },

        "bari": {
            name: "Bari",
            price: "€1680",
            image: "/static/bari/bari.png",
            description: "Ottawa is a model that enters a completely new dimension of design. Its metal legs give the piece a light, elegant look and a timeless, modern aesthetic. Additionally, it features a spacious bedding storage compartment, five adjustable headrests, and a “dolphin” folding mechanism. Available in both left-hand and right-hand configurations to suit different room layouts and individual needs.",
            width: "235 cm",
            depth: "185 cm",
            height: "90/97 cm",
            bedSize: "190 cm x 130 cm",
            leg: "8 cm, wood",
            gallery: [
                "/static/bari/bari-b.png",
                "/static/bari/bari-c.png"
            ]
        },

        "tokio": {
            name: "Tokio",
            price: "€2220",
            image: "/static/tokio/tokio.png",
            description: "The Tokio corner sofa is a response to the needs of customers who value style, quality, and comfort. Vertical stripes on the backrest and side add an elegant touch, while the PUMA folding mechanism allows for relaxed family time in front of a favorite series or solo lounging with a book. Tokio also includes a spacious storage compartment, ideal for keeping various small items. An optional extra pouf extends the chaise section when attached, or can be used separately as an additional standalone seat. It also includes a storage compartment. Available in both left-hand and right-hand configurations to suit different room layouts and individual needs.",
            width: "255 cm",
            depth: "173 cm, 220cm with pouf",
            height: "90-105 cm",
            bedSize: "205 cm x 140 cm",
            leg: "6 cm, wood",
            gallery: [
                "/static/tokio/tokio-b.png",
                "/static/tokio/tokio-c.png",
                "/static/tokio/tokio-d.png"
            ]
        },

        "malmo": {
            name: "Malmo",
            price: "€1620",
            image: "/static/malmo/malmo.png",
            description: "The Malmo corner sofa is an excellent choice for smaller spaces, offering great comfort thanks to the high-resilience foam used in its construction. It features elegant quilted cushions and a practical side magazine rack, while its wooden legs add a warm and distinctive character. The sofa is also equipped with a modern PUMA-type folding mechanism for everyday convenience. Available in both left-hand and right-hand configurations to suit different room layouts and individual needs.",
            width: "230 cm",
            depth: "156 cm",
            height: "90 cm",
            bedSize: "195 cm x 140 cm",
            leg: "10 cm, wood",
            gallery: [
                "/static/malmo/malmo-b.png",
                "/static/malmo/malmo-c.png"
            ]
        },

        "angus": {
            name: "Angus",
            price: "€890",
            image: "/static/angus/angus.png",
            description: "Tasteful stitching, chrome legs, and exceptionally soft cushions create a stylish and lightweight overall look. The Angus sofa is a combination of functionality and elegance.",
            width: "190 cm",
            depth: "90 cm",
            height: "80 cm",
            bedSize: "190 cm x 140 cm",
            gallery: [
                "/static/angus/angus-b.png",
                "/static/angus/angus-c.png",
                "/static/angus/angus-d.png"
            ]
        },

        "boston": {
            name: "Boston",
            price: "€1610",
            image: "/static/boston/boston.png",
            description: "The Boston sofa has been designed with attention to detail, standing out not only for its beautiful appearance but also for its unmatched comfort. Its soft upholstered cushions provide ideal support for the back and seat, creating a perfect place to relax after a long day. The solid construction ensures durability and stability, allowing you to enjoy its charm for many years.",
            width: "240 cm",
            depth: "110 cm",
            height: "90 cm",
            bedSize: "200 cm x 160 cm",
            gallery: [
                "/static/boston/boston-b.png"
            ]
        },

        "bella": {
            name: "Bella",
            price: "€1720",
            image: "/static/bella/bella.png",
            description: "A sofa with a distinctive character and bold design. Its soft shapes, filled with high-resilience foam and silicone fiber, are enhanced by refined tailoring details such as piping and quilting, which further emphasize the strong personality of the BELLA sofa. Its uniquely shaped wooden legs, quilted lumbar cushions, and DL-type folding mechanism make this sofa a complete and perfectly designed piece.",
            width: "235 cm",
            depth: "115 cm",
            height: "98 cm",
            bedSize: "200 cm x 160 cm",
            gallery: [
                "/static/bella/bella-b.png",
                "/static/bella/bella-c.png",
                "/static/bella/bella-d.png"
            ]
        },

        "napoli": {
            name: "Napoli",
            price: "€2349",
            image: "/static/napoli/napoli.png",
            description: "This modern corner sofa combines functionality, comfort, and innovative design. It is equipped with an electric extension system that allows you to effortlessly adjust the seating depth, creating the perfect space for relaxation. The model also features a practical bedding storage compartment, offering extra convenience and helping to keep your living space organized. Available in two versions: Corner sofa with electric extension and bedding storage – €2539, Straight sofa with electric extension – €2349.  Designed with everyday comfort in mind, it is an ideal choice for those who value both practicality and modern living solutions.",
            gallery: [
                "/static/napoli/napoli-b.png",
                "/static/napoli/napoli-c.png",
                "/static/napoli/napoli-d.png"
            ]
        },
        "fiord_mini": {
            name: "Fiord Mini",
            price: "€1510",
            image: "/static/fiord_mini/fiord_mini.png",
            description: "A compact and functional sofa designed for smaller spaces without compromising comfort. Its clean form and practical sleeping function make it ideal for everyday use. Upholstered in Opulence 11 fabric.",
            width: "230 cm",
            depth: "120 cm",
            height: "86 cm",
            bedSize: "200 cm x 160 cm",
            gallery: [
                "/static/fiord_mini/fiord_mini-b.png",
                "/static/fiord_mini/fiord_mini-c.png",
                "/static/fiord_mini/fiord_mini-d.png",
                "/static/fiord_mini/fiord_mini-e.png"
            ]
        },

        "sofia_mini": {
            name: "Sofia Mini",
            price: "€1650",
            image: "/static/sofia/sofia_mini.png",
            description: "The Sofia Mini is a distinctive piece of furniture, perfect for relaxing with family during the day as well as unwinding with friends in the evening. It fits beautifully into a living room or lounge area. The seat is filled with soft silicone fiber, while the backrest is made of high-resilience foam. The loose, quilted cushions can be freely arranged to suit your comfort and style.",
            width: "230 cm",
            depth: "120 cm",
            height: "88 cm",
            bedSize: "195 cm x 170 cm",
            gallery: [
                "/static/sofia/sofia_mini-b.png",
                "/static/sofia/sofia_mini-c.png",
                "/static/sofia/sofia_mini-d.png",
                "/static/sofia/sofia_mini-d.png"
            ]
        },

        "lyon": {
            name: "Lyon",
            price: "€1820",
            image: "/static/lyon/lyon.png",
            description: "The Lyon corner sofa is an elegant piece, crafted with great precision and attention to detail, sure to impress anyone who visits your home. Its clean, structured lines are softened by gently rounded backrests, armrests, and cushions, making it a versatile choice that works beautifully in a variety of interior styles. Wooden legs add a distinctive and stylish touch. Lyon also features a practical bedding storage compartment and a convenient PUMA folding mechanism. Inside, it is built with both wave springs and pocket springs, ensuring comfort and durability.",
            width: "235 cm",
            depth: "165 cm",
            height: "103 cm",
            bedSize: "195 cm x 130 cm",
            gallery: [
                "/static/lyon/lyon-b.png"
            ]
        },

        "togo_box_right": {
            name: "Togo Box",
            price: "€2780",
            image: "/static/togo/togo_box_right.jpg",
            description: "A practical and comfortable sofa with a simple, modern design. Upholstered in durable Sereno 692 fabric, suitable for everyday use.",
            width: "286 cm",
            depth: "207 cm",
            height: "72/77 cm",
            bedSize: "125 cm x 220 cm",
            gallery: [
                "/static/togo/togo_box-b.png"
            ]
        },

        "togo_sofa_1": {
            name: "Togo Sofa",
            price: "€2380",
            image: "/static/togo/togo_sofa.png",
            description: "A minimalist sofa design focused on comfort and versatility. Finished in Aphrodite 04 fabric for a soft and elegant appearance.",
            width: "302 cm",
            depth: "136 cm",
            height: "72/77 cm",
            bedSize: "125cm 220 cm",
            gallery: [
                "/static/togo/togo-b.png"
            ]
        },


        "genua": {
            name:"Genua",
            price: "€1490",
            image: "/static/genua/genua.png",
            description: "A spacious corner sofa designed for comfort and relaxation. Its left-sided configuration and Fancy 20 fabric provide both functionality and style.",
            width: "220cm",
            depth: "160cm",
            height: "90/97cm",
            bedSize: "195 cm x 130 cm",
            gallery: [
                "/static/genua/genua-b.png",
                "/static/genua/genua-c.png"
            ]
        },
        "sofia_corner": {
            name:"Sofia Corner",
            price: "€2100",
            image: "/static/sofia/sofia_corner.png",
            description: "Sofia is a universal corner and original piece of furniture that will be perfect for relaxing during the day with the family, but also during the evening relaxation with friends, therefore it will fit perfectly into the living room or living room. The seat is made of a soft silicone ball, the backrest is made of highly elastic foam, and loose, quilted cushions can be freely arranged. ",
            width: "270cm",
            depth: "190cm",
            height: "88cm",
            bedSize: "230 cm x 170 cm",
            gallery: [
                "/static/sofia/sofia_corner-b.png",
                "/static/sofia/sofia_corner-c.png",
                "/static/sofia/sofia_corner-d.png"
            ]
        },
        "sofia": {
            name:"Sofia Sofa",
            price: "€1760",
            image: "/static/sofia/sofia_sofa.png",
            description: "Sofia is an original piece of furniture that will be perfect for relaxing during the day with the family, but also during the evening relaxation with friends, which is why it is perfect it will fit into the living room or living room. The seat is made of a soft silicone ball, the backrest is made of highly elastic foam, and loose, quilted cushions can be freely arranged.  ",
            width: "248cm",
            depth: "133cm",
            height: "98cm",
            bedSize: "200 cm x 180 cm",
            gallery: [
                "/static/sofia/sofia_sofa-b.png",
                "/static/sofia/sofia_sofa-c.png"
            ]
        },

        "genewa_corner": {
            name:"Genewa Corner",
            price: "€2295",
            image: "/static/genewa/genewa_corner.png",
            description:"Geneva corner is our proposition for large and medium-sized interiors. It has a fixed backrest and a modern PUMA folding system.The furniture is characterized by increased comfort thanks to the adjustable headrests and the highly elastic foam used.Chrome feet are an original decorative element.",
            width: "255cm",
            depth: "200cm",
            height: "95-104cm",
            bedSize: "205 cm x 140 cm",
            gallery: [
                "/static/genewa/genewa_corner.png"
            ]
        },
        "vertigo_corner": {
            name:"Veritgo Corner",
            price: "€2300",
            image: "/static/vertigo/vertigo.png",
            description:"Vertigo corner sofa bed is a proposition for a user who appreciates high quality and extraordinary comfort.The furniture has five independent adjustable headrests, an adjustable armrest, a bedding container and a Dolphin folding system.Wooden legs give it lightness.",
            width: "267cm",
            depth: "215cm",
            height: "90-105cm",
            bedSize: "200 cm x 130 cm",
            gallery: [
                "/static/vertigo/vertigo-b.png",
                "/static/vertigo/vertigo-c.png"
            ]
        },
        "toronto_corner": {
            name:"Toronto Corner",
            price: "€2150",
            image: "/static/toronto/toronto_corner.png",
            description: "Toronto is a piece of furniture that will make any interior look cozy. Its rounded sides and comfortable raised headrests are designed to ensure a comfortable rest. Delicate stitching adds a subtle expression, and chrome legs add elegance and lightness.The corner is made of highly elastic foam and wave springs, also in a “dolphin” pram.",
            width: "270cm",
            depth: "170cm",
            height: "90-95cm",
            bedSize: "210 cm x 130 cm",
            gallery: [
                "/static/toronto/toronto-b.png"
            ]
        },
        "cayenne_sofa": {
            name:"Cayenne Sofa",
            price: "€1395",
            image: "/static/cayenne/cayenne_sofa.png",
            description: "Cayenne sofa provides exceptional comfort of relaxation, thanks to the filling which is a corrugated spring and a system of “POCKET” type pocket springs.The gentle angle of the seat and the headrest increase the comfort of rest. A perfectly fitted side and a chrome leg increase the exclusivity of this model. An additional advantage of the Cayenne sofa is the use of additional legs extending when unfolding.",
            width: "228cm",
            depth: "100cm",
            height: "90-103cm",
            bedSize: "195 cm x 155 cm",
            gallery: [
                "/static/cayenne/cayenne-b.png"
            ]
        },

        "cayenne_armchair": {
            name:"Cayenne Armchair",
            price: "€680",
            image: "/static/cayenne/cayenne_armchair.png",
            description: "Cayenne sofa provides exceptional comfort of relaxation, thanks to the filling which is a corrugated spring and a system of “POCKET” type pocket springs.The gentle angle of the seat and the headrest increase the comfort of rest. A perfectly fitted side and a chrome leg increase the exclusivity of this model.",
            width: "80cm",
            depth: "90cm",
            height: "90cm",
            bedSize: "",
            gallery: [
                "/static/cayenne/cayenne_armchair-b.png"
            ]
        },

        "macan_sofa": {
            name:"Macan Sofa",
            price: "€1440",
            image: "/static/macan/macan_sofa.png",
            description: "The Macan sofa is the perfect piece of furniture for family or social gatherings.Large back cushions and the high-resilience foam used make the piece of furniture very comfortable and cozy. Macan has a bedding container, it is distinguished by wooden accessories.",
            width: "230cm",
            depth: "100cm",
            height: "95-105cm",
            bedSize: "195 x 150 cm",
            gallery: [
                "/static/macan/macan-b.png",
                "/static/macan/macan-c.png"
            ]

        },
        "macan_armchair": {
            name:"Macan Armchair",
            price: "€680",
            image: "/static/macan/macan_armchair.png",
            description: "The Macan sofa is the perfect piece of furniture for family or social gatherings.Large back cushions and the high-resilience foam used make the piece of furniture very comfortable and cozy. Macan has a bedding container, it is distinguished by wooden accessories.",
            width: "80cm",
            depth: "90cm",
            height: "90cm",
            bedSize: "",
            gallery: [
                "/static/macan/macan_armchair-b.png"
            ]
        },

        "asti_sofa": {
            name:"Asti Sofa",
            price: "€1235",
            image: "/static/asti/asti.png",
            description:"Asti is a compromise between functionality and a small footprint. A piece of furniture placed in the central place will look beautiful from every side. Highly elastic foam is responsible for the comfort of use. The automatic unfolding mechanism prevents the floor from scratching, just lift the seat up and lower it slightly into place. ",
            width: "255cm",
            depth: "99cm",
            height: "92cm",
            bedSize: "",
            gallery: [
                "/static/asti/asti-b.png",
                "/static/asti/asti-c.png"
            ]
        },

        "yoko_sofa": {
            name:"Yoko Sofa",
            price: "€1280",
            image: "/static/yoko/yoko.png",
            description: "Yoko is the essence of simplicity only complemented by trimming on the edges. The classic shapes of the sofa make it suitable for any room. The comfort of use is guaranteed by the use of highly flexible foams. Yoko has a spacious container for bedding, and when unfolded, it creates a large relaxation area for the whole family. It will be a great replacement for a corner, not less functional, and taking up much less valuable space.",
            width: "230cm",
            depth: "95cm",
            height: "93cm",
            bedSize: "200 x 145 cm",
            gallery: [
                "/static/yoko/yoko-b.png"
            ]
        },

        "yoko_corner": {
            name:"Yoko Corner",
            price: "€1500",
            image: "/static/yoko/yoko_corner.png",
            description: "During the day, the Yoko corner will be pleasing to the eye with an elegant decorative kedar finish, and in the evenings comfort and convenience will be provided by the seats made of highly resilient foam.The furniture has two containers for bedding and neat wooden legs.",
            width: "245cm",
            depth: "143cm",
            height: "90cm",
            bedSize: "200 x 145 cm",
            gallery: [
                "/static/yoko/yoko_corner-b.png",
                "/static/yoko/yoko_corner-c.png",
                "/static/yoko/yoko_corner-d.png"
            ]
        },

        "olsen_corner": {
            name:"Olsen Corner",
            price: "€1490",
            image: "/static/olsen/olsen_corner.png",
            description: "Olsen’s modern look is provided by the vertical stripes on the cushions and sides.The corner sofa is universal – depending on your needs – it is easy to change the side on which the bed is located. The comfort of the seats is ensured by highly elastic foam, and the whole is complemented by wooden legs.",
            width: "225cm",
            depth: "150cm",
            height: "92cm",
            bedSize: "205 x 140 cm",
            gallery: [
                "/static/olsen/olsen-b.png",
                "/static/olsen/olsen-c.png"
            ]
        },

        "pori_corner": {
            name:"Pori Corner",
            price: "€1640",
            image: "/static/pori/pori.png",
            description: "Pori is a stylish piece of furniture that will decorate any living room. It is very easy to disassemble thanks to a PUMA mechanism. The solid-looking corner has gained lightness thanks to the trimming and wooden legs.",
            width: "230cm",
            depth: "155cm",
            height: "90cm",
            bedSize: "140 x 195 cm",
            gallery: [
                "/static/pori/pori-b.png",
                "/static/pori/pori-c.png"
            ]
        },

        "mediolan_corner": {
            name:"Mediolan Corner",
            price: "€1899",
            image: "/static/mediolan/mediolan.png",
            description: "This corner perfectly uses the available space, even in a small room. A characteristic element are backrest cushions and rollers supporting the lumbar spine. The corrugated spring and the “POCKET” pocket spring system are responsible for the high comfort of the seat. Its unquestionable advantage is the spacious bedding container and the easy to unfold “puma” sleeping function. ",
            width: "235cm",
            depth: "165cm",
            height: "90-102cm",
            bedSize: "195 x 130 cm",
            gallery: [
                "/static/mediolan/mediolan-b.png",
                "/static/mediolan/mediolan-c.png",
                "/static/mediolan/mediolan-d.png"
            ]
        },

        "bergamo_corner": {
            name:"Bergamo Corner",
            price: "€1900",
            image: "/static/bergamo/bergamo.png",
            description: "Bergamo  has been equipped with a modern folding system, where by lifting the seat you automatically obtain the entire seating area. It has a bedding container with easy access. A characteristic element are raised backrest cushions and “rollers” supporting the lumbar part of the spine. The corrugated spring and the “POCKET” pocket spring system are responsible for the high comfort of the seat.",
            width: "235 cm",
            depth: "85 cm",
            height: "90-102cm",
            bedSize: "195 x 130 cm",
            gallery: [
                "/static/bergamo/bergamo-b.png",
                "/static/bergamo/bergamo-c.png"
            ]
        },

        "matera": {
            name:"Matera",
            price: "€1140",
            image: "/static/matera/matera.png",
            description: "Matera is a piece of furniture designed with a passion for simple forms. The sofa’s character is given by quilting with buttons sewn into the backrest and wooden slats on the sides. It has a container for bedding and a classic unfolding system for sofa beds.",
            width: "225 cm",
            depth: "85 cm",
            height: "95 cm",
            bedSize: "195 x 120 cm",
            gallery: [
                "/static/matera/matera-b.png",
                "/static/matera/matera-c.png"
            ]
        },

         "matera_armchair": {
            name:"Matera Armchair",
            price: "€615",
            image: "/static/matera/matera_armchair.png",
            description: "Matera is a piece of furniture designed with a passion for simple forms. The armchair’s character is given by quilting with buttons sewn into the backrest and wooden slats on the sides.",
            width: "75 cm",
            depth: "80 cm",
            height: "90 cm",
            gallery: [
                "/static/matera/matera_armchair-b.png"
            ]

        },
         "katania": {
            name:"Katania Sofa",
            price: "€1070",
            image: "/static/katania/katania.png",
            description: "The Katania sofa bed guarantees a unique character to each room thanks to its unusual shape and regular stitching. Wooden legs give the furniture naturalness and the highly elastic foam used in the seat makes the sofa very comfortable.",
            width: "230 cm",
            depth: "90 cm",
            height: "95 cm",
            bedSize: "195 x 120 cm",
             gallery: [
                "/static/katania/katania-b.png",
                "/static/katania/katania-c.png",
                "/static/katania/katania-d.png"
            ]
        },

        "latina": {
            name:"Latina Sofa",
            price: "€1060",
            image: "/static/latina/latina.png",
            description: "The style of the Latina sofa is inspired by the popular Scandinavian style. Beech wood legs give the furniture lightness, and subtle stitching on the backrest adds a unique, and at the same time devoid of flashiness, beauty. The corrugated spring and the “POCKET” pocket spring system are responsible for the exceptional comfort of relaxation. Latina folds down to sleep in the classic sofa way.",
            width: "223 cm",
            depth: "92 cm",
            height: "97 cm",
            bedSize: "195 x 120 cm",
            gallery: [
                "/static/latina/latina-b.png",
                "/static/latina/latina-c.png"
            ]
        },

        "latina_armchair": {
            name:"Latina Armchair",
            price: "€520",
            image: "/static/latina/latina_armchair.png",
            description: "The style of the Latina armchair is inspired by the popular Scandinavian style. Beech wood legs give the furniture lightness, and subtle stitching on the backrest adds a unique, and at the same time devoid of flashiness, beauty. The corrugated spring and the “POCKET” pocket spring system are responsible for the exceptional comfort of relaxation. ",
            width: "",
            depth: "83 cm",
            height: "97 cm",
            bedSize: "",
            gallery: [
                "/static/latina/latina_armchair-b.png"
            ]
        },

        "carrera": {
            name:"Carrera Sofa",
            price: "€1430",
            image: "/static/carerra/carrera.png",
            description: "The character of the furniture is emphasized by the stitching on the edges of the sofa. The simple design of the furniture has been subtly diversified with delicate quilting on the backrest cushions and the seat. The corrugated spring and the “POCKET” pocket spring system and the gentle seat inclination angle are responsible for the outstanding comfort of the seat.An additional advantage is the use of additional legs extending when unfolding.",
            width: "228 cm",
            depth: "100 cm",
            height: "93-103 cm",
            bedSize: "195 x 155 cm",
            gallery: [
                "/static/carerra/carrera-b.png",
                "/static/carerra/carrera-c.png"
            ]
        },

        "venus": {
            name:"Venus Sofa",
            price: "€2400",
            image: "/static/venus/venus.png",
            description: "Venus sofa means comfort and functionality in one piece of furniture. Bonell springs used in the mattress and in the seat of highly elastic foam guarantee full comfort of rest.The Italian frame that allows you to unfold the sleeping function is the optimal solution for people who appreciate ergonomics and practicality.The area os 217 x 198 cm when unfolded and the sleeping are is 197 x 140 cm.",
            width: "196 cm",
            depth: "98 cm",
            height: "87 cm",
            bedSize: "217 x 198 cm",
            gallery: [
                "/static/venus/venus-b.png"
            ]
        },

        "mars": {
            name:"Mars Sofa",
            price: "€2330",
            image: "/static/mars/mars.png",
            description: "Mars sofa means comfort and functionality in one piece of furniture. Bonell springs used in the filling and the highly elastic foam in the seat guarantee full comfort of rest. Italian frame that allows to unfold the sleeping function is an optimal solution for people who appreciate ergonomics and practicality.",
            width: "196 cm",
            depth: "98 cm",
            height: "87 cm",
            bedSize: "217 x 198 cm",
            gallery: [
                "/static/mars/mars-b.png"
            ]
        },

        "capri": {
            name:"Capri Sofa",
            price: "€1420",
            image: "/static/capri/capri.png",
            description: "Capri is a casual sofa which, thanks to its universal form, will fit into any interior. Corrugated springs and the “POCKET” pocket spring system are responsible for the exceptional comfort of relaxation.",
            width: "230 cm",
            depth: "85 cm",
            height: "100 cm",
            bedSize: "195 x 155 cm",
            gallery: [
                "/static/capri/capri-b.png"
            ]
        },

        "lugano": {
            name:"Lugano Sofa",
            price: "€1199",
            image: "/static/lugano/lugano.png",
            description: "The traditional and modern shapes of the Lugano sofa emphasize its soft and numerous cushions.A large seating area and small external dimensions will fit in any interior. Length spreading system",
            width: "235 cm",
            depth: "100 cm",
            height: "85 cm",
            bedSize: "195 x 150 cm",
            gallery: [
                "/static/lugano/lugano-b.png",
                "/static/lugano/lugano-c.png"
            ]
        },

        "tuscany": {
            name:"Tuscany Corner",
            price: "€",
            image: "/static/tuscany/tuscany.png",
            description: "The Tuscany corner is primarily about comfort. It is provided by a seat made of a corrugated spring and a system of pocket springs of the “POCKET” type. Additionally, spacious and soft silicone fiber cushions fit perfectly to the shape of the body. The option also includes a headrest. The dolphin unfolding system is also enriched with “POCKET” type pocket springs, which has a great impact on the comfort of relaxation.",
            width: "270 cm",
            depth: "165 cm",
            height: "100-115 cm",
            bedSize: "200 x 130 cm",
            gallery: [
                "/static/tuscany/tuscany-b.png",
                "/static/tuscany/tuscany-c.png"
            ]
        },
        "venice": {
            name:"Venice Corner",
            price: "€1800",
            image: "/static/venice/venice.png",
            description: "A corner with a simple line and modern form with original stitching that makes the piece of furniture look light. It is characterized by high seating comfort thanks to the corrugated spring and the “POCKET” pocket spring system. Its unquestionable advantage is the spacious bedding container and the easy to unfold “puma” sleeping function.",
            width: "235 cm",
            depth: "165 cm",
            height: "90 cm",
            bedSize: "195 x 140 cm",
            gallery: [
                "/static/venice/venice-b.png",
                "/static/venice/venice-c.png"
            ]
        },
        "torino": {
            name:"Torino Corner",
            price: "€1890",
            image: "/static/torino/torino.png",
            description:"The contemporary and timeless design of the Torino corner, highlighted with wooden legs, can blend in with any interior arrangement. A characteristic element are raised back cushions and “rollers” supporting the lumbar spine. The “POCKET” pocket spring system and the corrugated spring are responsible for the high comfort of the seat. Its unquestionable advantage is a spacious bedding container and an easy-to-unfold “puma” lounge function.",
            width: "243 cm",
            depth: "182 cm",
            height: "102 cm",
            bedSize: "190 x 130 cm",
            gallery: [
                "/static/torino/torino-b.png",
                "/static/torino/torino-c.png"
            ]
        },
        "oslo": {
            name:"Oslo Corner",
            price: "€1600",
            image: "/static/oslo/oslo.png",
            description: "Oslo is a piece of furniture that meets all the requirements of rooms with small living areas. The corner sofa is universal, it has three independent adjustable headrests, a bedding container and a “dolphin” folding mechanism. ",
            width: "235 cm",
            depth: "160 cm",
            height: "115 cm",
            bedSize: "195 x 125 cm",
            gallery: [
                "/static/oslo/oslo-b.png",
                "/static/oslo/oslo-c.png"
            ]
        },
        "andoria": {
            name:"Andoria Sofa",
            price: "€1445",
            image: "/static/andoria/andoria.png",
            description: "Andoria is a proposition for rooms in a contemporary style. The rounded shapes are emphasized with a decorative pocket, giving a distinctive character without interfering with its neutral aesthetics. A very practical solution is the fact that the sofa has a spacious seating area 210 cm long and 160 cm unfolded.",
            width: "210 cm",
            depth: "102 cm",
            height: "96 cm",
            bedSize: "210 x 160 cm",
            gallery: [
                "/static/andoria/andoria-b.png"
            ]
        },
        "pheonix": {
            name:"Pheonix Sofa",
            price: "€1320",
            image: "/static/pheonix/pheonix.png",
            description: "Phoenix – do you need an original accent in your interior? The Phoenix sofa is a piece of subtly selected design and an irresistible temptation of comfort. Mega Sofa Feniks offers a very large seating area.",
            width: "210 cm",
            depth: "105 cm",
            height: "86 cm",
            bedSize: "210 x 160 cm",
            gallery: [
                "/static/pheonix/pheonix-b.png",
                "/static/pheonix/pheonix-c.png"
            ]
        },
        "murano": {
            name:"Murano Corner",
            price: "€1910",
            image: "/static/murano/murano.png",
            description: "Due to the use of highly elastic foams in the seat and cushions, the Murano corner sofa is a very comfortable model with great seating comfort.It also has a modern unfolding system that allows easy and quick unfolding of the furniture. It comes with a large and easily accessible bedding container. Interesting and modern design gives this model its character.",
            width: "270 cm",
            depth: "170 cm",
            height: "95 cm",
            bedSize: "230 x 150 cm",
            gallery: [
                "/static/murano/murano-b.png",
                "/static/murano/murano-c.png",
                "/static/murano/murano-d.png"
            ]
        },
         "carerra_corner": {
            name:"Carerra Corner",
            price: "€1430",
            image: "/static/carerra/carerra_corner.png",
            description: "The character of the furniture is emphasized by the stitching on the edges of the corner. The simple design of the furniture has been subtly diversified with delicate quilting on the backrest cushions and the seat. The corrugated spring and the “POCKET” pocket spring system and the gentle seat inclination angle are responsible for the outstanding comfort of the seat. An additional advantage is the use of additional legs extending when unfolding and the possibility of ordering a corner with a side or an island.",
            width: "315 cm",
            depth: "220 cm",
            height: "92 cm",
            bedSize: "275 x 155 cm",
             gallery: [
                "/static/carerra/carrera_corner-b.png",
                "/static/carerra/carrera_corner-c.png"
            ]
        },
        "szezlong": {
            name:"Szezlong Armchair",
            price: "€920",
            image: "/static/szezlong/szezlong.png",
            description: "To the library, SPA salons, offices, your living room or bedroom. The chaise longue is universal – it fits into any room – even in the garden after using the appropriate outdoor fabric. The backrest of the couch is adjustable depending on the user’s needs, the highly elastic foam is responsible for the comfort of rest, and the whole perfectly harmonizes with each other. designer look.",
            width: "60 cm",
            depth: "150 cm",
            height: "70-85 cm",
            bedSize: "",
            gallery: [
                "/static/szezlong/szezlong-b.png"
            ]
        },
        "relax": {
            name:"Relax Armchair",
            price: "€700",
            image: "/static/relax/relax.png",
            description: "A bit of relaxation on your favorite armchair is a little pleasure during the day. Thanks to the reclining backrest and extendable footrest, it will allow you to put yourself in a position suitable for reading a book, watching your favorite movie or napping.",
            width: "80 cm",
            depth: "84 cm",
            height: "105 cm",
            bedSize: "",
            gallery: [
                "/static/relax/relax-b.png",
                "/static/relax/relax-c.png"
            ]
        },

        "kreta": {
            name:"Kreta Sofa",
            price: "€950",
            image: "/static/kreta/kreta.png",
            description: "The Crete sofa is primarily a modern style and small external dimensions. The characteristic “quilt” enhances the comfort of sitting. The room in which it is located gives an atmosphere of modern elegance.",
            width: "190 cm",
            depth: "90 cm",
            height: "80 cm",
            bedSize: "190 x 140 cm",
            gallery: [
                "/static/kreta/kreta-b.png",
                "/static/kreta/kreta-c.png"
            ]
        },
        "kameleon": {
            name:"Kameleon Sofa",
            price: "€",
            image: "/static/kameleon/kameleon.png",
            description: "The chameleon, as the name suggests, has the possibility of using many solutions. It can be used as a comfortable sofa or bed by using pillows and quilts that have been matched to this model. By adding these elements, the sofa is aimed at people who value comfort and functionality.",
            width: "195 cm",
            depth: "95 cm",
            height: "85 cm",
            bedSize: "195 x 140 cm",
            gallery: [
                "/static/kameleon/kameleon-b.png",
                "/static/kameleon/kameleon-c.png"
            ]
        },
        "kama": {
            name:"Kama Corner",
            price: "€1050",
            image: "/static/kama/kama.png",
            description: "Kama – small dimensions and universal form of this piece of furniture will allow you to fill even a small room. This small corner has a very large surface area when unfolded. Universal corner, automatic folding. The whole is made of a corrugated spring and polyurethane foam.",
            width: "203 cm",
            depth: "140 cm",
            height: "85 cm",
            bedSize: "200 x 140 cm",
            gallery: [
                "/static/kama/kama-b.png",
                "/static/kama/kama-c.png",
                "/static/kama/kama-d.png",
                "/static/kama/kama-e.png"
            ]
        },
        "gama": {
            name:"Gama Sofa",
            price: "€920",
            image: "/static/gama/gama.png",
            description: "The range – a combination of the pleasure of sitting and relaxing. The filling of the sofa consists of a high-quality bonnell spring and a solid wood frame on both the seat and the backrest. The sofa has a large, aesthetic container for bedding. Automatic opening aid.",
            width: "195 cm",
            depth: "85 cm",
            height: "95 cm",
            bedSize: "195 x 140 cm",
            gallery: [
                "/static/gama/gama-b.png",
                "/static/gama/gama-c.png"
            ]
        },
        "costa": {
            name:"Costa Sofa",
            price: "€870",
            image: "/static/costa/costa.png",
            description: "A modern, comfortable sofa. Thanks to its small dimensions, it takes up little space, so it fits into small interiors.Perfect for youth rooms. A wide range of upholstery fabrics allows you to play with colors and patterns, and decorative stitching emphasizes its elegance.The sofa has a DL folding system.",
            width: "190 cm",
            depth: "90 cm",
            height: "80 cm",
            bedSize: "190 x 140 cm",
            gallery: [
                "/static/costa/costa-b.png",
                "/static/costa/costa-c.png"
            ]
        },
        "korfu": {
            name:"Korfu Corner",
            price: "€___",
            image: "/static/korfu/korfu.png",
            description: "The Corfu corner, due to its small dimensions, is intended for small apartments.It has two containers for bedding and is a universal piece of furniture.By combining fabric with ecological leather it acquires originality and interesting appearance.The corner includes a DL type unfolding system.",
            width: "230 cm",
            depth: "155 cm",
            height: "85 cm",
            bedSize: "195 x 145 cm",
            gallery: [
                "/static/korfu/korfu-b.png",
                "/static/korfu/korfu-c.png"
            ]
        },
        "tulum": {
            name:"Tulum Sofa",
            price: "€1200",
            image: "/static/tulum/tulum.png",
            description: "Minimalism, comfort, and functionality come together in the Tulum sofa. Its simple, geometric form fits perfectly into modern interiors. Tulum is an excellent choice for those who appreciate spacious relaxation — when unfolded, it offers an exceptionally large and comfortable surface, ideal for everyday lounging. The model is equipped with a roomy storage compartment that can easily accommodate blankets, pillows, and other household textiles, helping to keep the living room tidy. The combination of high-resilience foam filling and springs ensures durability and long-lasting comfort for years to come. Tulum is a sofa that impresses with its simplicity of form while surprising with its practical solutions.",
            width: "200 cm",
            depth: "102 cm",
            height: "92 cm",
            bedSize: "",
            gallery: [
                "/static/tulum/tulum-b.png"
            ]
        },
        "polia": {
            name:"Polia Sofa",
            price: "€1235",
            image: "/static/polia/polia.png",
            description: "Polia is a compact sofa that works perfectly in smaller spaces. Its sturdy construction is supported by wooden legs. Soft back cushions with decorative detailing, combined with the armrests, create an exceptionally comfortable place to relax.",
            width: "225 cm",
            depth: "99 cm",
            height: "93 cm",
            bedSize: "200 cm x 145 cm",
            gallery: [
                "/static/polia/polia-b.png",
                "/static/polia/polia-c.png",
                "/static/polia/polia-d.png"
            ]
        },
        "mataro": {
            name:"Mataro Corner",
            price: "€1840",
            image: "/static/mataro/mataro.png",
            description:"An elegant corner sofa with a soft, modern form that perfectly combines design with everyday comfort. Its rounded shapes and refined details make it the focal point of any interior, bringing a cozy atmosphere to the space. The use of wave springs and HR foam guarantees comfort, resilience, and long-lasting durability. The puma-style mechanism allows for quick and effortless unfolding, providing additional space for relaxation. An ideal choice for those who value modern style, functionality, and exceptional comfort.",
            width: "255 cm",
            depth: "190 cm",
            height: "90-97 cm",
            bedSize: "196 cm x 140 cm",
            gallery: [
                "/static/mataro/mataro-b.png",
                "/static/mataro/mataro-c.png",
                "/static/mataro/mataro-d.png"
            ]
        },
        "bodo": {
            name:"Bodo Corner",
            price: "€1530",
            image: "/static/bodo/bodo.png",
            description: "A stylish corner sofa with a soft, cozy shape that fits perfectly into modern and natural interior arrangements. The construction features wave springs and HR foam, ensuring proper support, resilience, and long-lasting durability for years to come. The DL unfolding system allows for quick and convenient preparation of additional resting space. The sofa is equipped with a practical bedding storage compartment that enhances its functionality, while the option to choose the left- or right-hand configuration makes it easy to adapt the piece to any room layout. Wooden elements emphasize the solid craftsmanship and add a natural touch to the overall design. It is a perfect combination of comfort, aesthetics, and practical solutions for any living room.",
            width: "240 cm",
            depth: "170 cm",
            height: "90 cm",
            bedSize: "205 cm x 160 cm",
            gallery: [
                "/static/bodo/bodo-b.png",
                "/static/bodo/bodo-c.png"
            ]
        },
        "spello_armchair": {
            name:"Spello Armchair",
            price: "€240",
            image: "/static/spello/spello_armchair.png",
            description: "Its modern form, gently rounded lines, and carefully refined details give the piece a light yet highly stylish appearance. The combination of wave springs and HR foam filling ensures exceptional comfort, proper support, and long-lasting durability for years to come. Adjustable headrests allow the seating position to be tailored to individual needs, enhancing comfort during relaxation.",
            width: "95 cm",
            depth: "90 cm",
            height: "92-110 cm",
            bedSize: "",
            gallery: [
                "/static/spello/spello_armchair-b.png",
                "/static/spello/spello_armchair-c.png"
            ]
        },
        "spello_2ppl": {
            name:"Spello Sofa II",
            price: "€1100",
            image: "/static/spello/spello_2ppl.png",
            description:"Its modern form, gently rounded lines, and carefully refined details give the piece a light yet highly stylish appearance. The combination of wave springs and HR foam filling ensures exceptional comfort, proper support, and long-lasting durability for years to come. Adjustable headrests allow the seating position to be tailored to individual needs, enhancing comfort during relaxation.The two-seater sofa features a practical bedding storage compartment, enhancing the functionality of the entire set.",
            width: "140 cm",
            depth: "102 cm",
            height: "92-110 cm",
            bedSize: "",
            gallery: [
                "/static/spello/spello_2ppl-b.png",
                "/static/spello/spello_2ppl-c.png"
            ]
        },
        "spello_3ppl": {
            name:"Spello Sofa III",
            price: "€1420",
            image: "/static/spello/spello_3ppl.png",
            description:"Its modern form, gently rounded lines, and carefully refined details give the piece a light yet highly stylish appearance. The combination of wave springs and HR foam filling ensures exceptional comfort, proper support, and long-lasting durability for years to come. Adjustable headrests allow the seating position to be tailored to individual needs, enhancing comfort during relaxation.The three-seater sofa is equipped with a puma-style mechanism that allows for quick and convenient unfolding.",
            width: "230 cm",
            depth: "102 cm",
            height: "92-110 cm",
            bedSize: "195 cm x 140 cm",
            gallery: [
                "/static/spello/spello_3ppl-b.png",
                "/static/spello/spello_3ppl-c.png"
            ]
        },
        "spello_corner": {
            name:"Spello Corner",
            price: "€2330",
            image: "/static/spello/spello_corner.png",
            description: "Spello is a corner sofa that combines modern elegance with maximum comfort. Its adjustable headrests allow the backrest to be tailored to individual preferences, providing exceptional comfort both while sitting and relaxing. Thanks to the puma-style unfolding function, the sofa can be transformed into a spacious resting area in just moments. The built-in bedding storage compartment makes organization easy, helping to keep the living room tidy. High-resilience foam filling ensures durability and optimal body support, delivering long-lasting comfort for years to come. Stylish wooden legs add lightness to the design and emphasize the elegant character of the furniture. An optional ottoman can serve as an additional seat or a comfortable footrest, further enhancing the functionality of the sofa.",
            width: "265 cm",
            depth: "180 cm (230 cm with ottoman)",
            height: "97-110 cm",
            bedSize: "140 cm x 230 cm",
            gallery: [
                "/static/spello/spello_corner-b.png"
            ]
        },
        "nevada": {
            name:"Nevada Corner",
            price: "€2246",
            image: "/static/nevada/nevada.png",
            description: "Nevada is an exceptional corner sofa that combines modern design with maximum comfort. Its elegant form, set on wooden legs, adds lightness and style to the interior, blending perfectly with a variety of arrangements. Thanks to the adjustable headrests, Nevada allows the backrest to be tailored to individual needs, providing even greater comfort during relaxation. The dolphin-style unfolding function enables the sofa to be quickly and conveniently transformed into a spacious sleeping area, while the practical bedding storage compartment offers easy and efficient storage. An additional advantage is the optional ottoman, which can serve as an extra seat or a comfortable footrest. Its stylish appearance, high-quality materials, and attention to detail make the Nevada corner sofa an excellent choice for any modern interior.",
            width: "260 cm",
            depth: "170 cm (220 cm with ottoman)",
            height: "95 cm",
            bedSize: "125 cm x 198 cm",
            gallery: [
                "/static/nevada/nevada-b.png"
            ]
        },
        "lahti": {
            name:"Lahti Corner",
            price: "€2150",
            image: "/static/lahti/lahti.png",
            description: "The new version of the Lahti model offers even greater freedom of arrangement. Thanks to its modular design, you can adapt the sofa to your interior — regardless of the layout or size of the space. Choose from a variety of modules and create classic, corner, or more open configurations, perfect for larger interiors. Lahti in its modular version retains all the features our customers love — exceptional comfort, careful craftsmanship, and generous space for everyday relaxation. Each module has been designed with both comfort and aesthetics in mind. It is the perfect solution for those looking for flexible options for modern, functional interiors. ",
            width: "268 cm",
            depth: "207 cm",
            height: "86 cm",
            bedSize: "235 cm x 152 cm",
            gallery: [
                "/static/lahti/lahti-b.png"
            ]
        },

        "akaso_1": {
            name:"Akaso I Corner",
            price: "€1310",
            image: "/static/akaso/akaso_1.png",
            description: "Create a unique atmosphere in your living room with our modern corner sofa. Its minimalist design, enhanced with a sleeping function, ensures both comfort and flexibility of use. Available in a variety of upholstery colors, it can be perfectly matched to your individual style. Let our corner sofa become the heart of your living space, inspiring memorable moments spent together with your loved ones.",
            width: "220 cm",
            depth: "105 cm",
            height: "90 cm",
            bedSize: "195 cm x 150 cm",
            gallery: [
                "/static/akaso/akaso_1-b.png"
            ]
        },
         "akaso_2": {
            name:"Akaso II Corner",
            price: "€1350",
            image: "/static/akaso/akaso_2.png",
            description: "The Akaso corner sofa is a functional and stylish solution for any living room or lounge area. Designed with maximum comfort in mind, it provides the perfect place to relax after a long day. Made from high-quality materials, its solid construction ensures durability and stability for many years of use.",
            width: "220 cm",
            depth: "165 cm",
            height: "90 cm",
            bedSize: "195 cm x 150 cm",
             gallery: [
                "/static/akaso/akaso_2-b.png"
            ]
        },
        "akaso_miz_l": {
            name:"Akaso Mix L",
            price: "€1990",
            image: "/static/akaso/akaso_mix_l.png",
            description:"Thanks to its distinctive shape, the Akaso corner sofa makes excellent use of space, fitting perfectly into the corners of a room. Available in a variety of sizes and colors, it allows the furniture to be tailored to individual preferences and interior décor. With its unfolding function, the sofa also becomes an ideal sleeping space for guests.",
            width: "287 cm",
            depth: "165 cm",
            height: "90 cm",
            bedSize: "263 cm x 150 cm",
            gallery: [
                "/static/akaso/akaso_mix_l-b.png"
            ]
        },
        "akaso_3": {
            name:"Akaso III",
            price: "€1310",
            image: "/static/akaso/akaso_3.png",
            description: "It is the perfect solution for those who value functionality without compromising on style. The upholstered furniture is made from high-quality materials that ensure durability and comfort. The Akaso sofa is equipped with a DL unfolding mechanism, allowing it to quickly and conveniently provide a sleeping space for unexpected guests.",
            width: "220cm",
            depth: "102 cm",
            height: "90 cm",
            bedSize: "195 cm x 150 cm",
            gallery: [
                "/static/akaso/akaso_3-b.png"
            ]
        },
        "akaso_armchair": {
            name:"Akaso Armchair",
            price: "€642",
            image: "/static/akaso/akaso_armchair.png",
            description: "It is the perfect solution for those who value functionality without compromising on style. The upholstered furniture is made from high-quality materials that ensure durability and comfort.",
            width: " ",
            depth: " ",
            height: " ",
            bedSize: "",
            gallery: [
                "/static/akaso/akaso_armchair-b.png"
            ]
        },
        "akaso_ottoman": {
            name:"Akaso Ottoman",
            price: "€190",
            image: "/static/akaso/akaso_ottoman.png",
            description: "It is the perfect solution for those who value functionality without compromising on style. The upholstered furniture is made from high-quality materials that ensure durability and comfort.",
            width: " ",
            depth: " ",
            height: " ",
            bedSize: "",
            gallery: [
                "/static/akaso/akaso_ottoman-b.png"
            ]
        },
        "akaso": {
            name:"Akaso ",
            price: "€1190",
            image: "/static/akaso/akaso.png",
            description:"Akaso is a modern sofa with a minimalist character that fits perfectly into interiors inspired by any style. Its simple silhouette, low seating, and compact form create the perfect combination of comfort and aesthetics. When unfolded, the sofa offers an exceptionally large lounging space that easily meets the needs of everyday relaxation. Inside, there is a spacious storage compartment – a practical solution for keeping everything you want close at hand, yet out of sight. The high-resilience foam filling and sturdy construction ensure comfort and durability. Akaso is a model that combines functionality with modern design without overwhelming the interior.",
            width: "197 cm ",
            depth: "100 cm ",
            height: "90 cm ",
            bedSize: "200 cm x 150 cm",
            gallery: [
                "/static/akaso/akaso-b.png"
            ]
        },
        "espo": {
            name:"Espo Corner ",
            price: "€2220",
            image: "/static/espo/espo.png",
            description: "The Espo corner sofa is a perfect choice for those who appreciate versatile furniture that combines comfort, functionality, and stylish design. This model features a simple shape and minimalist legs that highlight its modern character. Espo also includes a spacious storage compartment, providing extra room for keeping everyday essentials neatly tucked away. An additional ottoman, available as an option, can extend the chaise section or be used separately as an independent seating space.",
            width: "255 cm ",
            depth: "165 cm (210 cm with ottoman) ",
            height: "89 cm ",
            bedSize: "205 cm x 140 cm",
            gallery: [
                "/static/espo/espo-b.png"
            ]
        },
        "ronda": {
            name:"Ronda Sofa ",
            price: "€1460",
            image: "/static/ronda/ronda.png",
            description:"The comfortable, refined, yet effortlessly versatile Ronda sofa brings style and elegance to any interior. With its simple form, Ronda fits perfectly into any space. Its distinctive features include higher-than-standard armrests and firm back cushions. An additional advantage is the large storage compartment for bedding and the even sleeping surface when unfolded.",
            width: "232 cm ",
            depth: "100 cm ",
            height: "92 cm ",
            bedSize: "200 cm x 145 cm",
            gallery: [
                "/static/ronda/ronda-b.png",
                "/static/ronda/ronda-c.png",
                "/static/ronda/ronda-d.png"
            ]
        },
        "vertigo_2": {
            name:"Vertigo Corner 2",
            price: "€2100",
            image: "/static/vertigo/vertigo_2.png",
            description:"Vertigo corner sofa bed is a proposition for a user who appreciates high quality and extraordinary comfort.The furniture has five independent adjustable headrests, an adjustable armrest, a bedding container and a Dolphin folding system.Wooden legs give it lightness.",
            width: "170 cm ",
            depth: "265 cm ",
            height: "90-107 cm ",
            bedSize: "215 cm x 130 cm",
            gallery: [
                "/static/vertigo/vertigo_2-b.png"
            ]
        },
        "gordon": {
            name:"Gordon Corner ",
            price: "€2090",
            image: "/static/gordon/gordon.png",
            description:"Designed for those who appreciate simple forms, the Gordon corner sofa combines comfort with minimalist style. Its soft seating and additional cushions provide exceptional relaxation, while the simple legs add a sense of lightness and modern elegance to the piece.",
            width: "255 cm ",
            depth: "180 cm ",
            height: "95 cm ",
            bedSize: "210 cm x 150 cm",
            gallery: [
                "/static/gordon/gordon-b.png",
                "/static/gordon/gordon-c.png",
                "/static/gordon/gordon-d.png"
            ]
        },
        "davos": {
            name:"Davos Sofa ",
            price: "€1345",
            image: "/static/davos/davos.png",
            description: "The Davos sofa captivates with its unique stitching and tufting, bringing a touch of timeless elegance to any interior. Additional cushions adapt to the shape of the body, creating the perfect space for relaxation and rest.",
            width: "204 cm ",
            depth: "110 cm ",
            height: "93 cm ",
            bedSize: "204 cm x 155 cm",
            gallery: [
                "/static/davos/davos-b.png",
                "/static/davos/davos-c.png"
            ]
        },

        "gustavo": {
            name:"Gustavo Sofa ",
            price: "€1480",
            image: "/static/gustavo/gustavo.png",
            description: "The Gustavo sofa combines a timeless design with stylish finishing details. Soft seats, together with additional cushions and side supports, ensure exceptional comfort during family gatherings or evenings spent watching your favorite TV series.",
            width: "235 cm ",
            depth: "106 cm ",
            height: "92 cm ",
            bedSize: "195 cm x 160 cm",
            gallery: [
                "/static/gustavo/gustavo-b.png",
                "/static/gustavo/gustavo-c.png"
            ]
        },
        "amalfi": {
            name:"Amalfi Sofa ",
            price: "€1864",
            image: "/static/amalfi/amalfi.png",
            description: "The Amalfi Sofa combines modern style with everyday comfort, making it a perfect addition to any living space. Upholstered in a warm, textured fabric, it features plush cushioning and a clean, contemporary design. Its neutral tones blend effortlessly with a variety of interior styles, from minimalist to classic. Durable and inviting, this sofa is ideal for relaxing, entertaining, or simply unwinding at the end of the day.",
            width: "175 cm ",
            depth: "105 cm ",
            height: "86 cm ",
            bedSize: "215 cm x 175 cm",
            gallery: [
                "/static/amalfi/amalfi.png"
            ]
        },
        "haga": {
            name:"Haga Sofa ",
            price: "€1480",
            image: "/static/haga/haga.png",
            description: "The Haga Sofa showcases a sleek, minimalist design with soft curves and deep, inviting seating. Upholstered in a light neutral fabric, it brings a sense of warmth and modern elegance to any living space. Its low-profile silhouette creates a relaxed, contemporary look while maximizing comfort. Perfect for lounging, entertaining, or creating a stylish focal point in your home.",
            width: "265 cm ",
            depth: "-",
            height: "112 cm ",
            bedSize: "195 cm x 160 cm",
            gallery: [
                "/static/haga/haga.png"
            ]
        },


    };

    const params = new URLSearchParams(window.location.search);
    const productID = params.get("id");
    const product = products[productID];
    console.log(productID);
    console.log(product);

    console.log("JavaScript is running");
    if (product) {
        document.getElementById("product-name").textContent = product.name;
        document.getElementById("product-price").textContent = product.price;
        document.getElementById("product-image").src = product.image;
        document.getElementById("product-description").textContent = product.description;

        document.getElementById("product-width").textContent = "Width: " + product.width;
        document.getElementById("product-depth").textContent = "Depth: " + product.depth;
        document.getElementById("product-height").textContent = "Height: " + product.height;
        document.getElementById("product-bedSize").textContent = "Bed Size: " + product.bedSize;
            // Gallery
        const galleryContainer = document.getElementById("product-gallery");
        galleryContainer.innerHTML = "";

        if (product.gallery) {
            product.gallery.forEach(image => {
                const img = document.createElement("img");
                img.src = image;
                img.alt = product.name;
                img.classList.add("gallery-image");

                // Change the main image when a thumbnail is clicked
                img.addEventListener("click", () => {
                    document.getElementById("product-image").src = image;
                });

                galleryContainer.appendChild(img);
            });
        }
    }
});


