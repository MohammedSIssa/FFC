var defaultSlots = 1007
var slots = document.querySelector('#slots')
var defaultColors = document.querySelector('.color.default')
var nightColors = document.querySelector('.color.night')
var colorfulColors = document.querySelector('.color.colorful')
var purpleColors = document.querySelector('.color.purple')
var searchBox = document.querySelector('#search')

var themesBtn = document.querySelector('.themes')
var profitPoint = 0

//Themes Controls Section Start
// themesBtn.addEventListener('click', () => {
//     themesBtn.classList.toggle('shown')
// })

themesBtn.addEventListener('mouseover', () => {
    themesBtn.classList.add('shown')
})

themesBtn.addEventListener('mouseleave', () => {
    themesBtn.classList.remove('shown')
})

defaultColors.addEventListener('click', ()=> {
    document.body.className = ""
    localStorage.setItem('bg-color', "")
})

nightColors.addEventListener('click', ()=> {
    document.body.className = "night"
    localStorage.setItem('bg-color', "night")
})

colorfulColors.addEventListener('click', ()=> {
    document.body.className = "contrast-high"
    localStorage.setItem('bg-color', "contrast-high")
})

purpleColors.addEventListener('click', ()=> {
    document.body.className = "purple"
    localStorage.setItem('bg-color', "purple")
})

document.body.className = localStorage.getItem('bg-color')
// Themes Controls Section End

var Machines = [
    "Pizza Machine", 
    "Pie Machine", 
    "BBQ Machine",
    "Hotdog Machine",
    "Baker",
    "Can Machine",
    "Hat Machine",
    "Oil Press",
    "Perfume Machine",
    "Tea Master",
    "Sauce Machine",
    "Envelope Machine",
    "Garden Kneeter Machine",
    "Jacket Machine",
    "Bouquet Machine",
    "Sausage Machine",
    "Jam Machine",
    "Coffee Cup Sleeve Machine",
    "Dutch Mill",
    "Sugar Machine",
    "Wine Maker"
]

var data = {
    "Machines": {
        "Baker": {
            "ToolImage"           : "./images/machines/baker.png",
            "ToolName"            : "Baker",
            "ToolTime"            : "60s",
            "Products"            : ["Wheat Bread", "Black Bread", "Corn Bread", "Oat Bread", "Kamut Bread"],
            "ProductsImages"      : ["./images/products/wheatBread.png", "./images/products/blackBread.png", "./images/products/cornBread.png", "./images/products/oatBread.png", "./images/products/kamutBread.png"],
            "ProductPrice"        : [248, 276, 265, 240, 225],
            "Required"            : ["Wheat Flour", "Rye Flour", "Cornmeal", "Oat Flour", null],
            "RequiredImages"      : ["./images/products/wheatFlour.png", "./images/products/ryeFlour.png", "./images/products/cornmeal.png", "./images/products/oatFlour.png", null],
            "RequiredTool"        : [
                "./images/machines/mill.png", 
                "./images/machines/mill.png", 
                "./images/machines/mill.png", 
                "./images/machines/mill.png", 
                null
            ],
            "RequiredToolName"    : [
                "Mill",
                "Mill",
                "Mill",
                "Mill",
                null
            ],
            "RequiredToolTime"    : [
                "45s",
                "45s",
                "45s",
                "45s",
                null
            ],
            "RequiredPrice"       : [62, 84, 100, 63, null],
            "SeedRequired"        : ["Wheat",       "Rye",         "Corn",       "Oat",       "Kamut"],
            "SeedRequiredImages"  : ["./images/seeds/wheat.png", "./images/seeds/rye.png", "./images/seeds/corn.png", "./images/seeds/oat.png", "./images/seeds/kamut.png"],
            "SeedPrice"           : [42, 54, 76, 43, 70],
            "PreRequired"         : ["Egg", "Milk"],
            "PreRequiredProductImages": ["./images/products/egg.png", "./images/products/milk.png"],
            "PreRequiredTool"     : ["./images/animals/chicken.png", "./images/animals/cow.png"],
            "PreRequiredToolTime" : ["20s", "50s"],
            "PreRequiredToolName" : ["Chicken", "Cow"],
            "PreRequiredPrice"    : [102, 23],
            "PreRequiredSeed"     : ["Corn", "Clover"],
            "PreRequiredImages"   : ["./images/seeds/corn.png", "./images/seeds/clover.png"],
            "PreRequiredSeedPrice": [76, 19],
            //"Profit"              : [
            //                            248 - 42 - sumArr("PreRequiredSeedPrice"),
            //                            276 - 54 - sumArr("PreRequiredSeedPrice"),
            //                            265 - 76 - sumArr("PreRequiredSeedPrice"),
            //                            240 - 43 - sumArr("PreRequiredSeedPrice"),
            //                            225 - 74 - sumArr("PreRequiredSeedPrice")
            //],
        },
        "Pizza Machine": {
            "ToolImage"           : "./images/machines/pizzaMachine.png",
            "ToolName"            : "Pizza Machine",
            "ToolTime"            : "80s",
            "Products"            : ["Red Pepper Pizza", "Mushroom Pizza", "Onion Pizza", "Baby Summer Pizza", "Eggplant Pizza"],
            "ProductsImages"      : ["./images/products/redPepperPizza.png", "./images/products/mushroomPizza.png", "./images/products/onionPizza.png", "./images/products/babySummerPizza.png", "./images/products/eggplantPizza.png"],
            "ProductPrice"        : [560, 586, 618, 340, 1095],
            "Required"            : [null, null, null, null, null],
            "RequiredImages"      : [null, null, null, null, null],
            "SeedRequired"        : ["Red Pepper", "Mushroom", "Onion", "Baby Summer", "Eggplant"],
            "SeedRequiredImages"  : ["./images/seeds/redPepper.png", "./images/seeds/mushroom.png", "./images/seeds/onion.png", "./images/seeds/babySummer.png", "./images/seeds/eggplant.png"],
            "RequiredTool"        : [null, null, null, null, null],
            "SeedPrice"           : [229, 248, 280, 80, 748],
            "PreRequired"         : ["Ketchup", "Cornmeal"],
            "PreRequiredProductImages"   : ["./images/products/ketchup.png", "./images/products/cornmeal.png"],
            "PreRequiredTool"     : ["./images/machines/sauceMachine.png", "./images/machines/mill.png"],
            "PreRequiredToolTime" : ["45s", "45s"],
            "PreRequiredToolName" : ["Sauce Machine", "Mill"],
            "PreRequiredPrice"    : [55, 100],
            "PreRequiredSeed"     : ["Tomato", "Corn"],
            "PreRequiredImages"   : ["./images/seeds/tomato.png", "./images/seeds/corn.png"],
            "PreRequiredSeedPrice": [26, 76]
        },
        "Pie Machine": {
            "ToolImage" : "./images/machines/pieMachine.png",
            "ToolName"  : "Pie Machine",
            "ToolTime"  : "75s",
            "Products"  : ["Apple Pie", "Chocolate Pie", "Love Fruit Pie", "Banana Pie", "Blueberry Pie", "Raspberry Pie", "Strawberry Pie", "Pumpkin Pie", "Green Zebra Pie"],
            "ProductsImages" : [
                "./images/products/applePie.png",
                "./images/products/chocolatePie.png",
                "./images/products/loveFruitePie.png",
                "./images/products/bananaPie.png",
                "./images/products/blueBerryPie.png",
                "./images/products/raspberryPie.png",
                "./images/products/strawberryPie.png",
                "./images/products/pumpkinPie.png",
                "./images/products/greenZebraPie.png"
            ],
            "ProductPrice" : [
                150, 
                232, 
                382, 
                207, 
                178, 
                203, 
                306, 
                439, 
                177
            ],
            "Required" : [null, null, null, null, null, null, null, null, null],
            "RequiredImages" : [null, null, null, null, null, null, null, null, null],
            "RequiredTool" : [null, null, null, null, null, null, null, null, null],
            "SeedRequired" : [
                "Apple", 
                "Chocolate",
                "Love Fruit",
                "Banana",
                "Blueberry",
                "Raspberry",
                "Strawberry",
                "Pumpkin",
                "Green Zebra"
            ],
            "SeedRequiredImages" : [
                "./images/trees/apple.png",
                "./images/trees/chocolate.png",
                "./images/seeds/loveFruit.png",
                "./images/trees/banana.png",
                "./images/seeds/blueBerry.png",
                "./images/seeds/raspberry.png",
                "./images/seeds/strawberry.png",
                "./images/seeds/pumpkin.png",
                "./images/seeds/greenZebra.png"
            ],
            "SeedPrice" : [
                0,
                0,
                222,
                0,
                85,
                95,
                185,
                265,
                75
            ],
            "PreRequired" : ["Wheat Flour", "Honey"],
            "PreRequiredProductImages" : ["./images/products/wheatFlour.png", "./images/products/honey.png"],
            "PreRequiredPrice" : [62, 5],
            "PreRequiredTool"  : ["./images/machines/mill.png", "./images/animals/beehive.png"],
            "PreRequiredToolName" : ["Mill", "Beehive"],
            "PreRequiredSeed" : ["Wheat", "Clover"],
            "PreRequiredImages" : ["./images/seeds/wheat.png", "./images/seeds/clover.png"],
            "PreRequiredSeedPrice" : [42, -1],
            "PreRequiredToolTime" : ["45s", "25s"]
        },
        "Sauce Machine": {
            "ToolImage" : "./images/machines/sauceMachine.png",
            "ToolName"  : "Sauce Machine",
            "ToolTime"  : "45s",
            "Products" : [
                "Ketchup",
                "Apple Sauce",
                "Cranberry Sauce",
                "Garlic Sauce",
                "Mustard Sauce",
                "Parsley Sauce",
                "Red Pepper Sauce",
                "Red Currant Sauce",
                "Peanut Sauce",
                "Mushroom Sauce",
                "Chocolate Sauce"
            ],
            "ProductPrice" : [
                55,
                26,
                90, 
                113,
                171,
                108,
                265,
                175,
                205,
                278,
                75
            ],
            "ProductsImages" : [
                "./images/products/ketchup.png",
                "./images/products/appleSauce.png",
                "./images/products/cranberrySauce.png",
                "./images/products/garlicSauce.png",
                "./images/products/mustardSauce.png",
                "./images/products/parsleySauce.png",
                "./images/products/redPepperSauce.png",
                "./images/products/redCurrantSauce.png",
                "./images/products/peanutSauce.png",
                "./images/products/mushroomSauce.png",
                "./images/products/chocolateSauce.png"
            ],
            "SeedRequired" : [
                "Tomato",
                "Apple",
                "Cranberry",
                "Garlic",
                "Mustard",
                "Parsley",
                "Red Pepper",
                "Red Currant",
                "Peanut",
                "Mushroom",
                "Chocolate"
            ],
            "SeedPrice" : [
                26,
                0,
                65,
                88,
                148,
                90,
                229,
                163,
                165,
                248,
                0
            ],
            "SeedRequiredImages" : [
                "./images/seeds/tomato.png",
                "./images/trees/apple.png",
                "./images/seeds/cranBerry.png",
                "./images/seeds/garlic.png",
                "./images/seeds/mustard.png",
                "./images/seeds/parsley.png",
                "./images/seeds/redPepper.png",
                "./images/seeds/redCurrant.png",
                "./images/seeds/peanut.png",
                "./images/seeds/mushroom.png",
                "./images/trees/chocolate.png"
            ],
            "PreRequired" : null
        },
        "Bouquet Machine": {
            "ToolImage": "./images/machines/bouquetMachine.png",
            "ToolName" : "Flower Packing Machine",
            "ToolTime": "60s",
            "Products": [
                "Lavender Bouquet", 
                "Sunflower Bouquet", 
                "Blue Cornflower Bouquet", 
                "Blue Rose Bouquet", 
                "Carnation Bouquet", 
                "Crocus Bouquet",
                "Daisy Bouquet",  
                "Daffodil Bouquet",
                "Forget-me-not Bouquet", 
                "Jasmine Bouquet", 
                "Iris Bouquet", 
                "Lily Bouquet", 
                "Pink Rose Bouquet",
                "Purple Rose Bouquet",
                "Red Rose Bouquet",
                "Tulip Bouquet",
                "Yellow Tulip Bouquet",
                "Yellow Rose Bouquet",
                "Peony Bouquet",
                "Orchid Flower Bouquet",
                "Voilet Bouquet"
            ],
            "ProductsImages": [
                "./images/products/lavenderBouquet.png", 
                "./images/products/sunflowerBouquet.png",
                "./images/products/blueCornFlowerBouquet.png",
                "./images/products/blueRoseBouquet.png",
                "./images/products/carnationBouquet.png",
                "./images/products/crocusBouquet.png",
                "./images/products/daisyBouquet.png",
                "./images/products/daffodilBouquet.png",
                "./images/products/forgetMeNotBouquet.png",
                "./images/products/jasmineBouquet.png",
                "./images/products/irisBouquet.png",
                "./images/products/lilyBouquet.png",
                "./images/products/pinkRoseBouquet.png",
                "./images/products/purpleRoseBouquet.png",
                "./images/products/redRoseBouquet.png",
                "./images/products/tulipBouquet.png",
                "./images/products/yellowTulipBouquet.png",
                "./images/products/yellowRoseBouquet.png",
                "./images/products/peonyBouquet.png",
                "./images/products/orchidBouquet.png",
                "./images/products/violetBouquet.png"
            ],
            "ProductPrice": [
                75, 
                369,
                58,
                145,
                55,
                36,
                52,
                115,
                57,
                72,
                78,
                319,
                218,
                62,
                251,
                158,
                325,
                158,
                319,
                80,
                121
            ],
            "SeedRequired"       : [
                "Lavender", 
                "Sunflower", 
                "Blue Cornflower", 
                "Blue Rose", 
                "Carnation", 
                "Crocus", 
                "Daisy", 
                "Daffodil", 
                "Forget-me-not", 
                "Jasmine", 
                "Iris", 
                "Lily", 
                "Pink Rose", 
                "Purple Rose", 
                "Red Rose", 
                "Tulip", 
                "Yellow Tulip", 
                "Yellow Rose", 
                "Peony", 
                "Orchid Flower",
                "Violet"
            ],
            "SeedPrice": [
                50, 
                309,
                35,
                118,
                35,
                25,
                25,
                85,
                30,
                50,
                55,
                270,
                180,
                45,
                220,
                113,
                300,
                125,
                270,
                61,
                99
            ],
            "SeedRequiredImages" : [
                "./images/seeds/lavender.png", 
                "./images/seeds/sunflower.png",
                "./images/seeds/blueCornFlower.png",
                "./images/seeds/blueRose.png",
                "./images/seeds/carnation.png",
                "./images/seeds/crocus.png",
                "./images/seeds/daisy.png",
                "./images/seeds/daffodil.png",
                "./images/seeds/forgetMeNot.png",
                "./images/seeds/jasmine.png",
                "./images/seeds/iris.png",
                "./images/seeds/lily.png",
                "./images/seeds/pinkRose.png",
                "./images/seeds/purpleRose.png",
                "./images/seeds/redRose.png",
                "./images/seeds/tulip.png",
                "./images/seeds/yellowTulip.png",
                "./images/seeds/yellowRose.png",
                "./images/seeds/peony.png",
                "./images/seeds/orchidFlower.png",
                "./images/seeds/violet.png"
            ],
            "PreRequired"        : null
        },
        "Oil Press": {
            "PreRequired" : null,
            "ToolImage" : "./images/machines/oilPress.png",
            "ToolName"  : "Oil Press",
            "ToolTime"  : "45s",
            "Products" : [
                "Walnut Oil",
                "Bean Oil",
                "Olive Oil",
                "Sunflower Oil",
                "Peanut Oil",
                "Cotton Oil",
                "Canola Oil",
                "Mustard Oil"
            ],
            "ProductPrice" : [
                26,
                393,
                95,
                373,
                220,
                280,
                96,
                175
            ],
            "ProductsImages" : [
                "./images/products/walnutOil.png",
                "./images/products/beanOil.png",
                "./images/products/oliveOil.png",
                "./images/products/sunflowerOil.png",
                "./images/products/peanutOil.png",
                "./images/products/cottonOil.png",
                "./images/products/canolaOil.png",
                "./images/products/mustardOil.png"
            ],
            "SeedRequired" : [
                "Walnut",
                "Bean",
                "Olive",
                "Sunflower",
                "Peanut",
                "Cotton",
                "Canola",
                "Mustard"
            ],
            "SeedRequiredImages" : [
                "./images/trees/walnut.png",
                "./images/seeds/bean.png",
                "./images/trees/olive.png",
                "./images/seeds/sunflower.png",
                "./images/seeds/peanut.png",
                "./images/seeds/cotton.png",
                "./images/seeds/canola.png",
                "./images/seeds/mustard.png"
            ],
            "SeedPrice" : [
                0,
                373,
                0,
                309,
                165,
                250,
                70,
                148
            ]
        },
        "Envelope Machine": {
            "ToolTime" : "60s",
            "PreRequired" : ["Wood"],
            "PreRequiredProductImages" : ["./images/trees/wood.png"],
            "PreRequiredPrice" : [0],
            "PreRequiredTool" : null,
            "PreRequiredToolTime" : null,
            "PreRequiredToolName" : null,
            "PreRequiredSeed" : ["Wood"],
            "PreRequiredImages" : ["./images/trees/wood.png"],
            "PreRequiredSeedPrice" : [0],
            "ToolImage" : "./images/machines/envelopeMachine.png",
            "ToolName" : "Envelope Machine",
            "Products": [
                "Classic Envelope",
                "Fancy Envelope",
                "Pink Cherry Envelope",
                "Halloween Envelope",
                "Christmas Envelope",
                "Valentine Envelope",
                "Sunny Themed Envelope",

            ],
            "ProductPrice" : [
                307,
                307,
                63,
                137,
                163,
                296,
                377
            ],
            "ProductsImages" : [
                "./images/products/cottonEnvelope.png",
                "./images/products/redRoseEnvelope.png",
                "./images/products/cherryEnvelope.png",
                "./images/products/halloweenPumpkinEnvelope.png",
                "./images/products/christmasChocolateEnvelope.png",
                "./images/products/loveFruitEnvelope.png",
                "./images/products/sunflowerEnvelope.png",
            ],
            "Required" : [null, null, null, null, null, null, null],
            "RequiredImages" : [null, null, null, null, null, null, null],
            "RequiredTool" : [null, null, null, null, null, null, null],
            "SeedRequired" : [
                "Cotton",
                "Red Rose",
                "Cherry",
                "Halloween Pumpkin",
                "Christmas Chocolate",
                "Love Fruit",
                "Sunflower",
            ],
            "SeedRequiredImages" : [
                "./images/seeds/cotton.png",
                "./images/seeds/redRose.png",
                "./images/trees/cherry.png",
                "./images/seeds/halloweenPumpkin.png",
                "./images/seeds/christmasChocolate.png",
                "./images/seeds/loveFruit.png",
                "./images/seeds/sunflower.png",
            ],
            "SeedPrice" : [
                250,
                250,
                0,
                86,
                112,
                222,
                309
            ]
        },
        "Jacket Machine": {
            "PreRequired" : ["Wool"],
            "PreRequiredProductImages" : ["./images/products/wool.png"],
            "PreRequiredPrice" : [63],
            "PreRequiredTool" : ["./images/animals/sheep.png"],
            "PreRequiredToolTime" : ["50s"],
            "PreRequiredToolName" : ["Sheep"],
            "PreRequiredSeed" : ["Wheat"],
            "PreRequiredImages" : ["./images/seeds/wheat.png"],
            "PreRequiredSeedPrice" : [42],
            "ToolTime" : "60s",
            "ToolImage" : "./images/machines/jacketMachine.png",
            "ToolName" : "Jacket Machine",
            "Products" : [
                "Buffalo Milk Jacket Patch",
                "Cherry Jacket Patch"
            ],
            "ProductPrice" : [
                131,
                113
            ],
            "ProductsImages" : [
                "./images/products/buffaloJacketPatch.png",
                "./images/products/cherryJacketPatch.png"
            ],
            "Required" : [
                "Buffalo Milk",
                null
            ],
            "RequiredToolName" : [
                "Buffalo",
                null
            ],
            "RequiredToolTime" : [
                "48s",
                null
            ],
            "RequiredPrice" : [
                49,
                null
            ],
            "RequiredImages" : [
                "./images/products/buffaloMilk.png",
                null
            ],
            "RequiredTool" : ["./images/animals/buffalo.png", null],
            "SeedRequired" : [
                "Cucumber",
                "Cherry"
            ],
            "SeedRequiredImages" : [
                "./images/seeds/cucumber.png",
                "./images/trees/cherry.png"
            ],
            "SeedPrice" : [
                42,
                0
            ],
        },
        "Coffee Cup Sleeve Machine": {
            "ToolTime" : "60s",
            "PreRequired" : ["Wood"],
            "PreRequiredProductImages" : ["./images/trees/wood.png"],
            "PreRequiredPrice" : [0],
            "PreRequiredTool" : null,
            "PreRequiredToolTime" : null,
            "PreRequiredToolName" : null,
            "PreRequiredSeed" : ["Wood"],
            "PreRequiredImages" : ["./images/trees/wood.png"],
            "PreRequiredSeedPrice" : [0],
            "ToolImage" : "./images/machines/coffeeCupSleeveMachine.png",
            "ToolName" : "Coffee Cup Sleeve Machine",
            "Products": [
                "Love Coffee Cup Sleeve",
                "Coffee Bean Coffee Cup Sleeve",
                "Halloween Coffee Cup Sleeve",
            ],
            "ProductPrice" : [
                265,
                140,
                118,
            ],
            "ProductsImages" : [
                "./images/products/loveFruitCoffeeCup.png",
                "./images/products/coffeeBreanCoffeeCup.png",
                "./images/products/halloweenCoffeeCup.png",
            ],
            "Required" : [null, null, null],
            "RequiredImages" : [null, null, null],
            "RequiredTool" : [null, null, null],
            "SeedRequired" : [
                "Love Fruit",
                "Coffee Bean",
                "Halloween Pumpkin",
            ],
            "SeedRequiredImages" : [
                "./images/seeds/loveFruit.png",
                "./images/seeds/coffeeBrean.png",
                "./images/seeds/halloweenPumpkin.png",
            ],
            "SeedPrice" : [
                222,
                110,
                86,
            ]
        },
        "Garden Kneeter Machine": {
            "ToolTime" : "60s",
            "PreRequired" : ["Rubber"],
            "PreRequiredProductImages" : ["./images/trees/rubber.png"],
            "PreRequiredPrice" : [0],
            "PreRequiredTool" : null,
            "PreRequiredToolTime" : null,
            "PreRequiredToolName" : null,
            "PreRequiredSeed" : ["Rubber"],
            "PreRequiredImages" : ["./images/trees/rubber.png"],
            "PreRequiredSeedPrice" : [0],
            "ToolImage" : "./images/machines/gardenKneeterMachine.png",
            "ToolName" : "Garden Kneeter Machine",
            "Products": [
                "Peony Garden Kneeter",
                "Daisy Garden Kneeter",
                "Sunflower Garden Kneeter",
                "Lavender Garden Kneeter",
                "Cherry Garden Kneeter",
                "Orange Garden Kneeter",
                "Milk Garden Kneeter",
                "Egg Garden Kneeter",
            ],
            "ProductPrice" : [
                332,
                77,
                374,
                80,
                65,
                74,
                52,
                139
            ],
            "ProductsImages" : [
                "./images/products/peonyGardenKneeter.png",
                "./images/products/daisyGardenKneeter.png",
                "./images/products/sunflowerGardenKneeter.png",
                "./images/products/lavenderGardenKneeter.png",
                "./images/products/cherryGardenKneeter.png",
                "./images/products/orangeGardenKneeter.png",
                "./images/products/milkGardenKneeter.png",
                "./images/products/eggGardenKneeter.png",
            ],
            "Required" : [null, null, null, null, null, null, 
                "Milk", 
                "Egg"],
            "RequiredImages" : [null, null, null, null, null, null, 
                "./images/products/milk.png", 
                "./images/products/egg.png"
            ],
            "RequiredTool" : [null, null, null, null, null, null, 
                "./images/animals/cow.png", 
                "./images/animals/chicken.png"
            ],
            "RequiredToolName" : [null, null, null, null, null, null,
                "Cow",
                "Chicken"
            ],
            "RequiredToolTime" : [null, null, null, null, null, null,
                "50s",
                "24s"
            ],
            "RequiredPrice" : [null, null, null, null, null, null,
                23,
                102
            ],
            "SeedRequired" : [
                "Peony",
                "Daisy",
                "Sunflower",
                "Lavender",
                "Cherry",
                "Orange",
                "Clover",
                "Corn"
            ],
            "SeedRequiredImages" : [
                "./images/seeds/peony.png",
                "./images/seeds/daisy.png",
                "./images/seeds/sunflower.png",
                "./images/seeds/lavender.png",
                "./images/trees/cherry.png",
                "./images/trees/orange.png",
                "./images/seeds/clover.png",
                "./images/seeds/corn.png"
            ],
            "SeedPrice" : [
                270,
                25,
                309,
                50,
                0,
                0,
                19,
                76
            ]
        },
        "Sausage Machine": {
            "PreRequired" : null,
            "ToolTime" : "60s",
            "ToolImage" : "./images/machines/sausageMachine.png",
            "ToolName" : "Sausage Machine",
            "Products" : [
                "Beef Sausage",
                "Pork Sausage",
                "Vension Sausage"
            ],
            "ProductPrice" : [
                24,
                201,
                432
            ],
            "ProductsImages" : [
                "./images/products/beefSausage.png",
                "./images/products/porkSausage.png",
                "./images/products/vensionSausage.png"
            ],
            "SeedRequired" : [
                "Beef",
                "Pork",
                "Vension"
            ],
            "SeedPrice" : [
                15,
                150,
                373
            ],
            "SeedRequiredImages" : [
                "./images/products/beef.png",
                "./images/products/pork.png",
                "./images/products/vension.png"
            ]
        },
        "Jam Machine": {
            "PreRequired" : ["Honey"],
            "PreRequiredProductImages" : ["./images/products/honey.png"],
            "PreRequiredPrice" : [5],
            "PreRequiredTool" : ["./images/animals/beehive.png"],
            "PreRequiredToolTime" : ["25s"],
            "PreRequiredToolName" : ["Beehive"],
            "PreRequiredSeed" : ["Clover"],
            "PreRequiredImages" : ["./images/seeds/clover.png"],
            "PreRequiredSeedPrice" : [-1],
            "ToolTime" : "60s",
            "ToolImage" : "./images/machines/jamMachine.png",
            "ToolName" : "Jam Machine",
            "Products": [
                "Apple Jam",
                "Grape Jam",
                "Cherry Jam",
                "Orange Jam",
                "Blueberry Jam",
                "Strawberry Jam",
                "Halloween Pumpkin Jam",
                "Watermelon Jam",
                "Kiwi Jam",
                "Blackberry Jam",
                "Raspberry Jam",
                "Pitaya Jam",
                "Pineapple Jam"
            ],
            "ProductPrice" : [
                37,
                135,
                45,
                57,
                97,
                214,
                112,
                281,
                165,
                145,
                113,
                122,
                209
            ],
            "ProductsImages" : [
                "./images/products/appleJam.png",
                "./images/products/grapeJam.png",
                "./images/products/cherryJam.png",
                "./images/products/orangeJam.png",
                "./images/products/blueBerryJam.png",
                "./images/products/strawberryJam.png",
                "./images/products/halloweenJam.png",
                "./images/products/watermelonJam.png",
                "./images/products/kiwiJam.png",
                "./images/products/blackBerryJam.png",
                "./images/products/raspberryJam.png",
                "./images/products/pitayaJam.png",
                "./images/products/pineappleJam.png"
            ],
            "Required" : [null, null, null, null, null, null, null, null, null, null, null, null, null],
            "RequiredImages" : [null, null, null, null, null, null, null, null, null, null, null, null, null],
            "RequiredTool" : [null, null, null, null, null, null, null, null, null, null, null, null, null],
            "SeedRequired" : [
                "Apple",
                "Grape",
                "Cherry",
                "Orange",
                "Blueberry",
                "Strawberry",
                "Halloween Pumpkin",
                "Watermelon",
                "Kiwi",
                "Blackberry",
                "Raspberry",
                "Pitaya",
                "Pineapple"
            ],
            "SeedRequiredImages" : [
                "./images/trees/apple.png",
                "./images/seeds/grape.png",
                "./images/trees/cherry.png",
                "./images/trees/orange.png",
                "./images/seeds/blueberry.png",
                "./images/seeds/strawberry.png",
                "./images/seeds/halloweenPumpkin.png",
                "./images/seeds/watermelon.png",
                "./images/seeds/kiwi.png",
                "./images/seeds/blackberry.png",
                "./images/seeds/raspberry.png",
                "./images/seeds/pitaya.png",
                "./images/seeds/pineapple.png"
            ],
            "SeedPrice" : [
                0,
                112,
                0,
                0,
                85,
                185,
                86,
                255,
                133,
                125,
                95,
                100,
                200
            ]
        },
        "Dutch Mill": {
            "PreRequired" : null,
            "ToolImage" : "./images/machines/mill.png",
            "ToolName"  : "Mill",
            "ToolTime"  : "45s",
            "Products" : [
                "Wheat Flour",
                "Rye Flour",
                "Cornmeal",
                "Oat Flour",
                "Barley Flour",
                "Celeriac Flour",
                "Potato Flour"
            ],
            "ProductPrice" : [
                62,
                84,
                100,
                63,
                83,
                67,
                152
            ],
            "ProductsImages" : [
                "./images/products/wheatFlour.png",
                "./images/products/ryeFlour.png",
                "./images/products/cornmeal.png",
                "./images/products/oatFlour.png",
                "./images/products/barleyFlour.png",
                "./images/products/celeriacFlour.png",
                "./images/products/potatoFlour.png"
            ],
            "SeedRequired" : [
                "Wheat",
                "Rye",
                "Corn",
                "Oat",
                "Barley",
                "Celeriac",
                "Potato"
            ],
            "SeedRequiredImages" : [
                "./images/seeds/wheat.png",
                "./images/seeds/rye.png",
                "./images/seeds/corn.png",
                "./images/seeds/oat.png",
                "./images/seeds/barley.png",
                "./images/seeds/celeriac.png",
                "./images/seeds/potato.png"
            ],
            "SeedPrice" : [
                42,
                54,
                76,
                43,
                65,
                50,
                122
            ]
        },
        "Perfume Machine": {
            // Provence Honey from "forget-me-not flower 30 : 42 : -12"
            "PreRequired" : ["Provence Honey"],
            "PreRequiredProductImages" : ["./images/products/provenceHoney.png"],
            "PreRequiredPrice" : [6],
            "PreRequiredTool" : ["./images/animals/provBeehive.png"],
            "PreRequiredToolTime" : ["20s"],
            "PreRequiredToolName" : ["Provence Beehive"],
            "PreRequiredSeed" : ["Forget-me-not"],
            "PreRequiredImages" : ["./images/seeds/forgetMeNot.png"],
            "PreRequiredSeedPrice" : [-12],
            "ToolTime" : "45s",
            "ToolImage" : "./images/machines/perfumeMachine.png",
            "ToolName" : "Perfume Machine",
            "Products" : [
                "Lavender Perfume",
                "Daisy Perfume",
                "Love Perfume",
                "Daffodil Perfume",
                "Iris Perfume",
                "Blue Rose Perfume",
                "Red Rose Perfume",
                "Orchid Flower Perfume",
                "Tulip Perfume",
                "Jasmine Perfume",
                "Lily Perfume"
            ],
            "ProductPrice" : [
                76,
                70,
                124,
                126,
                97,
                180,
                290,
                95,
                183,
                86,
                332
            ],
            "ProductsImages": [
                "./images/products/lavenderPerfume.png",
                "./images/products/daisyPerfume.png",
                "./images/products/loveRosePerfume.png",
                "./images/products/daffodilPerfume.png",
                "./images/products/irisPerfume.png",
                "./images/products/blueRosePerfume.png",
                "./images/products/redRosePerfume.png",
                "./images/products/orchidPerfume.png",
                "./images/products/tulipPerfume.png",
                "./images/products/jasminePerfume.png",
                "./images/products/lilyPerfume.png"
            ],
            "Required": [null,null,null,null,null,null,null,null,null,null,null],
            "RequiredImages" : [null,null,null,null,null,null,null,null,null,null,null],
            "RequiredTool" : [null,null,null,null,null,null,null,null,null,null,null],
            "SeedRequired" : [
                "Lavender",
                "Daisy",
                "Love Rose",
                "Daffodil",
                "Iris",
                "Blue Rose",
                "Red Rose",
                "Orchid Flower",
                "Tulip",
                "Jasmine",
                "Lily"
            ],
            "SeedRequiredImages" : [
                "./images/seeds/lavender.png",
                "./images/seeds/daisy.png",
                "./images/seeds/loveRose.png",
                "./images/seeds/daffodil.png",
                "./images/seeds/iris.png",
                "./images/seeds/blueRose.png",
                "./images/seeds/redRose.png",
                "./images/seeds/orchidFlower.png",
                "./images/seeds/tulip.png",
                "./images/seeds/jasmine.png",
                "./images/seeds/lily.png"
            ],
            "SeedPrice" : [
                50,
                25,
                73,
                85,
                55,
                118,
                220,
                61,
                113,
                50,
                270
            ]
        },
        "Sugar Machine": {
            "ToolTime" : "70s",
            "ToolImage" : "./images/machines/sugarMachine.png",
            "ToolName" : "Sugar Machine",
            "PreRequired" : null,
            "Products" : [
                "Sugar",
                "Lavender Sugar",
                "Maple Sugar",
                "Caramel",
            ],
            "ProductPrice" : [
                138,
                55,
                29,
                390
            ],
            "ProductsImages" : [
                "./images/products/caneSugar.png",
                "./images/products/lavenderSugar.png",
                "./images/products/mapleSugar.png",
                "./images/products/sugarBeetSugar.png"
            ],
            "SeedRequired" : [
                "Cane",
                "Lavender",
                "Maple Syrup",
                "Sugar Beet"
            ],
            "SeedRequiredImages" : [
                "./images/seeds/cane.png",
                "./images/seeds/lavender.png",
                "./images/trees/maple.png",
                "./images/seeds/sugarBeet.png"
            ],
            "SeedPrice" : [
                110,
                50,
                0,
                360,
            ]
        },
        "Cool Packer": {
            "PreRequired" : null,
            "ToolTime" : "45s"
        },
        "Weaver": {
            "PreRequired" : null,
            "ToolTime" : "60s"
        },
        "Can Machine": {
            "PreRequired" : ["Sugar"],
            "PreRequiredPrice" : [138],
            "PreRequiredProductImages" : ["./images/products/caneSugar.png"],
            "PreRequiredTool" : ["./images/machines/sugarMachine.png"],
            "PreRequiredToolTime" : ["70s"],
            "PreRequiredSeed" : ["Cane"],
            "PreRequiredImages" : ["./images/seeds/cane.png"],
            "PreRequiredSeedPrice" : [110],
            "PreRequiredToolName" : ["Sugar Machine"],
            "ToolTime" : "65s",
            "ToolImage" : "./images/machines/canMachine.png",
            "ToolName" : "Can Machine",
            "Products" : [
                "Grape Can",
                "Cherry Can",
                "Orange Can",
                "Peach Can",
                "Bean Can",
                "Pineapple Can",
                "Potato Can",
                "Olive Can",
                "Artichoke Can"
            ],
            "SeedRequired" : [
                "Grape",
                "Cherry",
                "Orange",
                "Peach",
                "Bean",
                "Pineapple",
                "Potato",
                "Olive",
                "Artichoke"
            ],
            "SeedRequiredImages" : [
                "./images/seeds/grape.png",
                "./images/trees/cherry.png",
                "./images/trees/orange.png",
                "./images/trees/peach.png",
                "./images/seeds/bean.png",
                "./images/seeds/pineapple.png",
                "./images/seeds/potato.png",
                "./images/trees/olive.png",
                "./images/seeds/artichoke.png"
            ],
            "SeedPrice" : [
                112,
                0,
                0,
                0,
                373,
                200,
                122,
                0,
                135
            ],
            "ProductPrice" : [
                277,
                194,
                205,
                225,
                554,
                356,
                312,
                222,
                298
            ],
            "ProductsImages" : [
                "./images/products/grapeCan.png",
                "./images/products/cherryCan.png",
                "./images/products/orangeCan.png",
                "./images/products/peachCan.png",
                "./images/products/beanCan.png",
                "./images/products/pineappleCan.png",
                "./images/products/potatoCan.png",
                "./images/products/oliveCan.png",
                "./images/products/artichokeCan.png"
            ],
            "Required" : [
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null
            ],
            "RequiredImages" : [
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null
            ],
            "RequiredTool" : [
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null
            ],
            "RequiredToolTime" : [
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null
            ],
            "RequiredToolImage" : [
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null
            ]
        },
        "Hotdog Machine": {
            "ToolImage": "./images/machines/hotdogMachine.png",
            "ToolName": "Hotdog Machine",
            "ToolTime": "60s",
            "Products": [
                "Beef Hotdog",
                "Pork Hotdog",
                "Vension Hotdog"
            ],
            "ProductsImages": [
                "./images/products/beefHotdog.png",
                "./images/products/porkHotdog.png",
                "./images/products/vensionHotdog.png"
            ],
            "ProductPrice": [
                190,
                361,
                577
            ],
            "Required": [
                "Beef Sausae",
                "Pork Sausage",
                "Vension Sausage"
            ],
            "RequiredImages": [
                "./images/products/beefSausage.png",
                "./images/products/porkSausage.png",
                "./images/products/vensionSausage.png"
            ],
            "RequiredTool": [
                "./images/machines/sausageMachine.png",
                "./images/machines/sausageMachine.png",
                "./images/machines/sausageMachine.png"
            ],
            "RequiredToolName": [
                "Sausage Machine",
                "Sausage Machine",
                "Sausage Machine"
            ],
            "RequiredToolTime": [
                "60s", "60s", "60s"
            ],
            "RequiredPrice": [
                24,
                201,
                432
            ],
            "SeedRequired": [
                "Beef",
                "Pork",
                "Vension"
            ],
            "SeedRequiredImages": [
                "./images/products/beef.png",
                "./images/products/pork.png",
                "./images/products/vension.png"
            ],
            "SeedPrice": [
                15,
                150,
                373
            ],
            "PreRequired": [
                "Wheat Flour",
                "Ketchup"
            ],
            "PreRequiredProductImages": [
                "./images/products/wheatFlour.png",
                "./images/products/ketchup.png"
            ],
            "PreRequiredTool": [
                "./images/machines/mill.png",
                "./images/machines/sauceMachine.png"
            ],
            "PreRequiredToolTime": [
                "45s",
                "45s"
            ],
            "PreRequiredToolName": [
                "Mill",
                "Sauce Machine"
            ],
            "PreRequiredPrice": [
                62,
                55
            ],
            "PreRequiredSeed" : [
                "Wheat",
                "Tomato"
            ],
            "PreRequiredImages": [
                "./images/seeds/wheat.png",
                "./images/seeds/tomato.png"
            ],
            "PreRequiredSeedPrice": [
                42,
                26
            ]
        },
        "Hat Machine": {
            "PreRequired" : ["Horse Hair"],
            "ToolTime" : "60s",
            "PreRequiredPrice" : [107],
            "PreRequiredProductImages" : ["./images/products/horseHair.png"],
            "PreRequiredTool" : ["./images/animals/horse.png"],
            "PreRequiredToolTime" : ["75s"],
            "PreRequiredSeed" : ["Carrot"],
            "PreRequiredImages" : ["./images/seeds/carrot.png"],
            "PreRequiredSeedPrice" : [75],
            "PreRequiredToolName" : ["Horse"],
            "ToolImage" : "./images/machines/hatMachine.png",
            "ToolName" : "Hat Machine",
            "Products" : [
                "Pasture Hat",
                "Ostrich Hat",
                "Peacock Hat"
            ],
            "SeedRequired" : [
                "Pasture",
                "Daisy",
                "Rice"
            ],
            "SeedRequiredImages" : [
                "./images/seeds/pasture.png",
                "./images/seeds/daisy.png",
                "./images/seeds/rice.png"
            ],
            "SeedPrice" : [
                15,
                25,
                105
            ],
            "ProductPrice" : [
                136,
                188,
                275
            ],
            "ProductsImages" : [
                "./images/products/pastureHat.png",
                "./images/products/ostrichHat.png",
                "./images/products/peacockHat.png"
            ],
            "Required" : [
                null,
                "Ostrich Feather",
                "Peacock Feather"
            ],
            "RequiredPrice" : [
                null,
                45,
                132
            ],
            "RequiredImages" : [
                null,
                "./images/products/ostrichFeather.png",
                "./images/products/peacockFeather.png",
            ],
            "RequiredTool" : [
                null,
                "./images/animals/ostrich.png",
                "./images/animals/peacock.png"
            ],
            "RequiredToolTime" : [
                null,
                "90s",
                "90s"
            ],
            "RequiredToolName" : [
                null,
                "Black Ostrich",
                "Peacock"
            ],
        },
        "Smoke House": {
            "PreRequired" : ["Salt"],
            "ToolTime" : "100s"
        },
        "BBQ Machine": {
            "ToolImage" : "./images/machines/BBQMachine.png",
            "ToolName" : "BBQ Machine",
            "ToolTime": "60s",
            "Products": [
                "Roast Beef",
                "Roast Pork",
                "Roast Vension",
                "Roast Mutton"
            ],
            "ProductPrice": [
                260,
                441,
                685,
                318
            ],
            "ProductsImages": [
                "./images/products/roastBeef.png",
                "./images/products/roastPork.png",
                "./images/products/roastVension.png",
                "./images/products/roastMutton.png"
            ],
            "SeedRequired": [
                "Pasture",
                "Sweet Potato",
                "Bean",
                "Wheat"
            ],
            "SeedPrice" : [
                15,
                150,
                373,
                42
            ],
            "SeedRequiredImages": [
                "./images/seeds/pasture.png",
                "./images/seeds/sweetPotato.png",
                "./images/seeds/bean.png",
                "./images/seeds/wheat.png"
            ],
            "Required": [
                "Beef",
                "Pork",
                "Vension",
                "Mutton"
            ],
            "RequiredImages" : [
                "./images/products/beef.png",
                "./images/products/pork.png",
                "./images/products/vension.png",
                "./images/products/mutton.png"
            ],
            "RequiredPrice" : [
                20,
                181,
                423,
                70
            ],
            "RequiredTool": [
                "./images/animals/cattle.png",
                "./images/animals/pig.png",
                "./images/animals/deer.png",
                "./images/animals/merinoSheep.png"
            ],
            "RequiredToolName": [
                "Limousin Cattle",
                "Pig",
                "Deer",
                "Merino Sheep"
            ],
            "RequiredToolTime": [
                "55s",
                "36s",
                "36s",
                "110s"
            ],
            "PreRequired" : ["Peanut Oil"],
            "PreRequiredImages" : ["./images/seeds/peanut.png"],
            "PreRequiredPrice" : [220],
            "PreRequiredSeed" : ["Peanut"],
            "PreRequiredSeedPrice" : [165],
            "PreRequiredProductImages" : ["./images/products/peanutOil.png"],
            "PreRequiredTool" : ["./images/machines/oilPress.png"],
            "PreRequiredToolName" : ["Oil Press"],
            "PreRequiredToolTime" : ["60s"]
        },
        "Tea Master": {
            "ToolImage" : "./images/machines/teaMaster.png",
            "ToolName"  : "Tea Master",
            "ToolTime"  : "60s",
            "Products"  : [
                "Honey Tea",
                "Milk Tea",
                "Maple Tea",
                "Ginger Tea",
                "Sugar Tea",
                "Jasmine Tea",
                "Lemon Grass Tea",
                "Artichoke Tea",
                "Mint Tea"
            ],
            "ProductPrice" : [
                160,
                182,
                184,
                397,
                301,
                200,
                265,
                285,
                443
            ],
            "ProductsImages" : [
                "./images/products/honeyTea.png",
                "./images/products/milkTea.png",
                "./images/products/mapleTea.png",
                "./images/products/gingerTea.png",
                "./images/products/caneSugarTea.png",
                "./images/products/jasmineTea.png",
                "./images/products/lemonGrassTea.png",
                "./images/products/artichokeTea.png",
                "./images/products/mintTea.png"
            ],
            "SeedRequired" : [
                "Clover",
                "Clover",
                "Maple",
                "Ginger",
                "Cane",
                "Jasmine",
                "Lemon Grass",
                "Artichoke",
                "Mint"
            ],
            "SeedPrice" : [
                -1,
                19,
                0,
                206,
                110,
                50,
                120,
                135,
                265
            ],
            "SeedRequiredImages" : [
                "./images/seeds/clover.png",
                "./images/seeds/clover.png",
                "./images/trees/maple.png",
                "./images/seeds/ginger.png",
                "./images/seeds/cane.png",
                "./images/seeds/jasmine.png",
                "./images/seeds/lemonGrass.png",
                "./images/seeds/artichoke.png",
                "./images/seeds/mint.png"
            ],
            "Required" : [
                "Honey",
                "Milk",
                "Maple Sugar",
                "Ginger",
                "Sugar",
                "Jasmine",
                "Lemon Grass",
                "Artichoke",
                "Mint"
            ],
            "RequiredTool" : [
                "./images/animals/beehive.png",
                "./images/animals/cow.png",
                "./images/machines/sugarMachine.png",
                null,
                "./images/machines/sugarMachine.png",
                null,
                null,
                null,
                null
            ],
            "RequiredToolName" : [
                "Beehive",
                "Cow",
                "Sugar Machine",
                null,
                "Sugar Machine",
                null,
                null,
                null,
                null
            ],
            "RequiredToolTime" : [
                "25s",
                "50s",
                "70s",
                null,
                "70s",
                null,
                null,
                null,
                null
            ],
            "RequiredImages" : [
                "./images/products/honey.png",
                "./images/products/milk.png",
                "./images/products/mapleSugar.png",
                null,
                "./images/products/caneSugar.png",
                null,
                null,
                null,
                null
            ],
            "RequiredPrice" : [
                5,
                23,
                29,
                null,
                138,
                null,
                null,
                null,
                null
            ],
            "PreRequired" : ["Tea"],
            "PreRequiredPrice" : [115],
            "PreRequiredSeed" : ["Tea"],
            "PreRequiredImages" : ["./images/seeds/tea.png"],
            "PreRequiredSeedPrice" : [115],
            "PreRequiredProductImages" : null,
            "PreRequiredTool" : null,
            "PreRequiredToolName" : null,
            "PreRequiredToolTime" : null
        },
        "Wine Maker": {
            "PreRequired" : null,
            "ToolImage" : "./images/machines/wineMaker.png",
            "ToolName"  : "Wine Maker",
            "ToolTime" : "40s",
            "Products" : [
                "Wine",
                "Chardonnay Wine",
                "White Grape Wine",
                "Cane Rum"
            ],
            "ProductPrice" : [
                124,
                81,
                86,
                132
            ],
            "ProductsImages" : [
                "./images/products/grapeWine.png",
                "./images/products/chardonnayWine.png",
                "./images/products/whiteGrapeWine.png",
                "./images/products/caneWine.png"
            ],
            "SeedRequired" : [
                "Grape",
                "Chardonnay",
                "White Grape",
                "Cane"
            ],
            "SeedRequiredImages" : [
                "./images/seeds/grape.png",
                "./images/seeds/chardonnay.png",
                "./images/seeds/whiteGrape.png",
                "./images/seeds/cane.png"
            ],
            "SeedPrice" : [
                112,
                60,
                65,
                110
            ]
        }
    },
    "Animals" : {
        "Cow" : {
            "ToolImage": "./images/animals/cow.png",
            "ToolName": "Cow",
            "ToolTime": "50s",
            "Products": ["Milk"],
            "ProductsImages": ["./images/products/milk.png"],
            "ProductPrice": [23],
            "SeedRequired": ["Clover"],
            "SeedRequiredImages": ["./images/seeds/clover.png"],
            "SeedPrice": [19],
            "PreRequired": null
        },
        "Chicken" : {
            "ToolImage": "./images/animals/chicken.png",
            "ToolName": "Chicken",
            "ToolTime": "24s",
            "Products": ["Egg"],
            "ProductsImages": ["./images/products/egg.png"],
            "ProductPrice": [102],
            "SeedRequired": ["Corn"],
            "SeedRequiredImages": ["./images/seeds/corn.png"],
            "SeedPrice": [76],
            "PreRequired": null
        },
        "Pig" : {
            "ToolImage": "./images/animals/pig.png",
            "ToolName": "Pig",
            "ToolTime": "36s",
            "Products": ["Pork"],
            "ProductsImages": ["./images/products/pork.png"],
            "ProductPrice": [181],
            "SeedRequired": ["Sweet Potato"],
            "SeedRequiredImages": ["./images/seeds/sweetPotato.png"],
            "SeedPrice": [150],
            "PreRequired": null
        },
        "Horse" : {
            "ToolImage": "./images/animals/horse.png",
            "ToolName": "Horse",
            "ToolTime": "45s",
            "Products": ["Horse Hair"],
            "ProductsImages": ["./images/products/horseHair.png"],
            "ProductPrice": [107],
            "SeedRequired": ["Carrot"],
            "SeedRequiredImages": ["./images/seeds/carrot.png"],
            "SeedPrice": [75],
            "PreRequired": null
        },
        "Deer" : {
            "ToolImage": "./images/animals/deer.png",
            "ToolName": "Deer",
            "ToolTime": "36s",
            "Products": ["Vension"],
            "ProductsImages": ["./images/products/vension.png"],
            "ProductPrice": [423],
            "SeedRequired": ["Bean"],
            "SeedRequiredImages": ["./images/seeds/bean.png"],
            "SeedPrice": [373],
            "PreRequired": null
        },
        "Buffalo" : {
            "ToolImage": "./images/animals/buffalo.png",
            "ToolName": "Buffalo",
            "ToolTime": "48s",
            "Products": ["Buffalo Milk"],
            "ProductsImages": ["./images/products/buffaloMilk.png"],
            "ProductPrice": [49],
            "SeedRequired": ["Cucumber"],
            "SeedRequiredImages": ["./images/seeds/cucumber.png"],
            "SeedPrice": [42],
            "PreRequired": null
        },
        "Peacock" : {
            "ToolImage": "./images/animals/peacock.png",
            "ToolName": "Peacock",
            "ToolTime": "90s",
            "Products": ["Peacock Feather"],
            "ProductsImages": ["./images/products/peacockFeather.png"],
            "ProductPrice": [132],
            "SeedRequired": ["Rice"],
            "SeedRequiredImages": ["./images/seeds/rice.png"],
            "SeedPrice": [105],
            "PreRequired": null
        },
        "White Alpaca" : {
            "ToolImage": "./images/animals/whiteAlpaca.png",
            "ToolName": "White Alpaca",
            "ToolTime": "90s",
            "Products": ["Alpaca Hair"],
            "ProductsImages": ["./images/products/alpacaHair.png"],
            "ProductPrice": [193],
            "SeedRequired": ["Green Lettuce"],
            "SeedRequiredImages": ["./images/seeds/greenLettuce.png"],
            "SeedPrice": [160],
            "PreRequired": null
        },
        "Sheep" : {
            "ToolImage": "./images/animals/sheep.png",
            "ToolName": "Sheep",
            "ToolTime": "50s",
            "Products": ["Wool"],
            "ProductsImages": ["./images/products/wool.png"],
            "ProductPrice": [63],
            "SeedRequired": ["Wheat"],
            "SeedRequiredImages": ["./images/seeds/wheat.png"],
            "SeedPrice": [42],
            "PreRequired": null
        },
        "Red Chicken" : {
            "ToolImage": "./images/animals/redChicken.png",
            "ToolName": "Red Chicken",
            "ToolTime": "15s",
            "Products": ["Red Egg"],
            "ProductsImages": ["./images/products/redEgg.png"],
            "ProductPrice": [110],
            "SeedRequired": ["Corn"],
            "SeedRequiredImages": ["./images/seeds/corn.png"],
            "SeedPrice": [76],
            "PreRequired": null
        },
        "African Domerdary" : {
            "ToolImage": "./images/animals/africanDomedary.png",
            "ToolName": "African Dromedary",
            "ToolTime": "70s",
            "Products": ["Dromedary Milk"],
            "ProductsImages": ["./images/products/dromedaryMilk.png"],
            "ProductPrice": [115],
            "SeedRequired": ["Cactus"],
            "SeedRequiredImages": ["./images/seeds/cactus.png"],
            "SeedPrice": [60],
            "PreRequired": null
        },
        "Angora Rabbit" : {
            "ToolImage": "./images/animals/rabbit.png",
            "ToolName": "Angora Rabbit",
            "ToolTime": "50s",
            "Products": ["Angora Hair"],
            "ProductsImages": ["./images/products/angoraHair.png"],
            "ProductPrice": [94],
            "SeedRequired": ["Carrot"],
            "SeedRequiredImages": ["./images/seeds/carrot.png"],
            "SeedPrice": [76],
            "PreRequired": null
        },
        "Black Ostrich" : {
            "ToolImage": "./images/animals/ostrich.png",
            "ToolName": "Black Ostrich",
            "ToolTime": "90s",
            "Products": ["Ostrich Feather"],
            "ProductsImages": ["./images/products/ostrichFeather.png"],
            "ProductPrice": [45],
            "SeedRequired": ["Daisy"],
            "SeedRequiredImages": ["./images/seeds/daisy.png"],
            "SeedPrice": [25],
            "PreRequired": null
        },
        "Merino Sheep": {
            "ToolImage": "./images/animals/merinoSheep.png",
            "ToolName": "Merino Sheep",
            "ToolTime": "110s",
            "Products": ["Mutton"],
            "ProductsImages": ["./images/products/mutton.png"],
            "ProductPrice": [70],
            "SeedRequired": ["Wheat"],
            "SeedRequiredImages": ["./images/seeds/wheat.png"],
            "SeedPrice": [42],
            "PreRequired": null
        },
        "Cattle" : {
            "ToolImage": "./images/animals/cattle.png",
            "ToolName": "Limousin Cattle",
            "ToolTime": "45s",
            "Products": ["Beef"],
            "ProductsImages": ["./images/products/beef.png"],
            "ProductPrice": [20],
            "SeedRequired": ["Pasture"],
            "SeedRequiredImages": ["./images/seeds/pasture.png"],
            "SeedPrice": [15],
            "PreRequired": null
        },
        "Proverince Beehive" : {
            "ToolImage": "./images/animals/provBeehive.png",
            "ToolName": "Provence Beehive",
            "ToolTime": "20s",
            "Products": ["Provence Honey"],
            "ProductsImages": ["./images/products/provenceHoney.png"],
            "ProductPrice": [6],
            "SeedRequired": ["Forget-me-not"],
            "SeedRequiredImages": ["./images/seeds/forgetMeNot.png"],
            "SeedPrice": [-12],
            "PreRequired": null
        },
        "Beehive" : {
            "ToolImage": "./images/animals/beehive.png",
            "ToolName": "Beehive",
            "ToolTime": "25s",
            "Products": ["Honey"],
            "ProductsImages": ["./images/products/honey.png"],
            "ProductPrice": [5],
            "SeedRequired": ["Clover"],
            "SeedRequiredImages": ["./images/seeds/clover.png"],
            "SeedPrice": [-1],
            "PreRequired": null
        }
    }
}

var Animals = [
    "Beehive",
    "Buffalo",
    "Cattle",
    "Cow",
    "Deer",
    "Horse",
    "Merino Sheep",
    "Black Ostrich",
    "Peacock",
    "Pig",
    "Proverince Beehive",
    "Angora Rabbit",
    "African Domerdary",
    "Red Chicken",
    "Sheep",
    "White Alpaca"
]

var products = []
var productPrice = []
var seedPrice = []
var preSeedsPrice = []
var profit = []
getProductsPrices()
checkProductTheme()

// Saved local storage data for product-based theme Start
document.querySelector('input#no').addEventListener('click', () =>{
    localStorage.setItem('yes', false)
    document.querySelector('.colors').className = "colors"
    document.body.className = localStorage.getItem('bg-color')
    // console.log('no')
})

document.querySelector('input#yes').addEventListener('click', () => {
    checkProductTheme()
    document.querySelector('.colors').className = "colors hidden"
    // console.log('yes')
    localStorage.setItem('yes', true)
})

if(JSON.parse(localStorage.getItem('yes'))/* == true*/){
    //console.log('yes checked')
    document.querySelector('.colors').className = "colors hidden"
    document.querySelector('input#yes').setAttribute('checked','checked')
    document.querySelector('input#no').removeAttribute('checked')
}
if(!JSON.parse(localStorage.getItem('yes'))/* == false*/){
    //console.log('no checked')
    document.querySelector('.colors').className = "colors"
    document.querySelector('input#yes').removeAttribute('checked')
    document.querySelector('input#no').setAttribute('checked', 'checked') 
}
// Saved local storage data for product-based theme End

function sortPlantPrices(plants, plantsPrices) {
    
    // Combine the plants and prices into an array of objects
    const plantPriceData = plants.map((plant, index) => ({
      plant,
      price: plantsPrices[index]
    }));    
    
    // Sort the plantPriceData array by price in descending order
    plantPriceData.sort((a, b) => b.price - a.price);   
    
    // Extract the sorted plants and prices into separate arrays
    const sortedPlants = plantPriceData.map(item => item.plant);
    const sortedPrices = plantPriceData.map(item => item.price);    
    return [sortedPlants, sortedPrices];
}

var [sortedProducts, sortedProfit] = sortPlantPrices(products, profit)

function sumArr(a){
    sum = 0
    arr = a.slice()
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
}

updateMA()
document.querySelector('#type').addEventListener('change', updateMA)
document.querySelector('#MachineAnimal').addEventListener('change', getProducts)
document.querySelector('#products').addEventListener('change', getImages)
document.querySelector('#slots').addEventListener('change', calculate)
document.querySelector('#search').addEventListener('change', search)
document.querySelector("#top-products").addEventListener('change', searchTopProduct)
document.querySelector('#reset').addEventListener('click', updateMA)
document.querySelector('#top-amount').addEventListener('change', getTopProducts)
document.querySelector('#search').addEventListener('click', searchVisible)
document.querySelector('#search').addEventListener('focusout', searchHidden)

function resultsHidden(){
    document.querySelector('.search-results').className = ".search-results hidden"
}

document.querySelector('#search').value = "Search"

function searchVisible(){
    document.querySelector('#search').className = "visible"
    document.querySelector('#search').value = ""
}

function searchHidden(){
    document.querySelector('#search').className = "hidden"
    document.querySelector('#search').value = "Search"
}

function getTopProducts(){
    document.querySelector("#top-products").innerHTML = "<option selected>Top Products</option>"
    for(let i = 0; i < Number(document.querySelector('#top-amount').value); i++){
    document.querySelector("#top-products").innerHTML += `<option>${sortedProducts[i]}</option>`
    }
}
getTopProducts()

// Populate the machinesAnimals select element
function updateMA(){
    let type = document.querySelector('#type').value
    let machineAnimal = document.querySelector('#MachineAnimal')
    if(slots.value == ""){
        slots.value = defaultSlots
    }
    machineAnimal.innerHTML = ""
    if(type === "Machines"){
        document.querySelector('#MA').textContent = "Machine"
        for(let i = 0; i < Machines.length; i++){
            machineAnimal.innerHTML += `<option>${Machines[i]}</option>`
        }
    }
    else if(type === "Animals"){
        document.querySelector('#MA').textContent = "Animal"
        for (let i = 0; i < Animals.length; i++){
            machineAnimal.innerHTML += `<option>${Animals[i]}</option>` 
        }
    }
    getProducts()
}

function getProducts(){
    // console.log('Get Products')
    let type = document.querySelector('#type')
    let products = document.querySelector('#products')
    let MachineOrAnimal = document.querySelector('#MachineAnimal')
    let MachineProducts = data[type.value][MachineOrAnimal.value].Products
    // let productPrices = data[type.value][MachineOrAnimal.value].ProductPrice
    let productsIndices = []

    for(let i = 0; i < MachineProducts.length; i++){
        let idx = sortedProducts.indexOf(MachineProducts[i])
        productsIndices.push(idx)
    }
    let [sortedP, sortedProfit] = sortPlantPrices(MachineProducts, productsIndices)
    let actullaySorted = sortedP.reverse()

    products.innerHTML = ""
    for(let i = 0; i < actullaySorted.length; i++){
        products.innerHTML += `<option>${actullaySorted[i]}</option>`
        // products.innerHTML += `<option>${sortedProducts[i]}</option>`
    }
    getImages()
    checkProductTheme()
}

var profitPerUnit

function getImages(){
    checkProductTheme()
    let requirementsBox = document.querySelector('.requirements')
    let requirementsContainer = document.querySelector('.tool-product')
    let type = document.querySelector('#type').value
    let machineAnimal = document.querySelector('#MachineAnimal').value
    let product = document.querySelector('#products').value

    requirementsBox.innerHTML = ""
    requirementsContainer.innerHTML = ""
    
    // Main Seed Addition
    let idx = data[type][machineAnimal].Products.indexOf(product)
    let divContainer = document.createElement('div')
    divContainer.className = 'requirements-container flex'
    
    if(data[type][machineAnimal].PreRequired == null){
        // Handle non pre requiring productions
        
        // get selected product
        let selectedProduct = document.querySelector('#products').value
        let idx = data[type][machineAnimal].Products.indexOf(selectedProduct)

        // Add Selected Seed
        let seedDiv = document.createElement('div')
        seedDiv.className = "flex flex-col font-bold"
        let seedImg = document.createElement('img')
        seedImg.src = data[type][machineAnimal].SeedRequiredImages[idx]
        seedImg.title = data[type][machineAnimal].SeedRequired[idx]
        let seedPrice = document.createElement('p')
        seedPrice.textContent = data[type][machineAnimal].SeedPrice[idx]
        seedDiv.append(seedImg)
        seedDiv.append(seedPrice)

        divContainer.append(seedDiv)

        // Add arrow
        let arrowDiv = document.createElement('div')
        // arrowDiv.className = "arrow"
        let arrowImg = document.createElement('img')
        arrowImg.className = "arrow"
        arrowImg.src = "./images/arrow.png"
        arrowDiv.append(arrowImg)
        divContainer.append(arrowDiv)

        // Add Machine Image
        let machineDiv = document.createElement('div')
        machineDiv.className = "flex flex-col font-bold"
        let machineImg = document.createElement('img')
        machineImg.src = data[type][machineAnimal].ToolImage
        machineImg.title = data[type][machineAnimal].ToolName
        machineDiv.append(machineImg)

        let machineTime = document.createElement('p')
        machineTime.textContent = data[type][machineAnimal].ToolTime
        machineDiv.append(machineTime)

        divContainer.append(machineDiv)
        
        // Add one final arrow
        let arrowDivNew = document.createElement('div')
        // arrowDivNew.className = "arrow"
        let arrowImgNew = document.createElement('img')
        arrowImgNew.src = "./images/arrow.png"
        arrowImgNew.className = "arrow"
        arrowDivNew.append(arrowImgNew)
        divContainer.append(arrowDivNew)

        // Product image and price
        let productDiv = document.createElement('div')
        productDiv.className = "flex flex-col font-bold"
        let product = document.createElement('img')
        product.src = data[type][machineAnimal].ProductsImages[idx]
        product.title = data[type][machineAnimal].Products[idx]
        productDiv.append(product)

        let productPrice = document.createElement('p') 
        productPrice.textContent = data[type][machineAnimal].ProductPrice[idx]
        profitPerUnit = data[type][machineAnimal].ProductPrice[idx] - data[type][machineAnimal].SeedPrice[idx]
        productPrice.textContent += ` (#${sortedProducts.indexOf(data[type][machineAnimal].Products[idx]) + 1})`
        productDiv.append(productPrice)

        divContainer.append(productDiv)
        requirementsBox.append(divContainer)
    }
    else{
        // Handle pre requiring productions
        if(data[type][machineAnimal].SeedRequiredImages[idx] != null){
        let Div = document.createElement('div')
        Div.className = 'flex flex-col font-bold'
        let newItem = document.createElement('img')
        newItem.src = data[type][machineAnimal].SeedRequiredImages[idx]
        newItem.title = data[type][machineAnimal].SeedRequired[idx]
        Div.append(newItem)
        let productPrice = document.createElement('p')
        productPrice.textContent = data[type][machineAnimal].SeedPrice[idx]
        Div.append(productPrice)
        divContainer.append(Div)
        
        if(data[type][machineAnimal].Required[idx] != null && data[type][machineAnimal].RequiredTool[idx] != null){
            let anotherDiv = document.createElement('div')
            // anotherDiv.className = "arrow"
            let arrowImg = document.createElement('img')
            arrowImg.src = "./images/arrow.png"
            arrowImg.className = "arrow"
            anotherDiv.append(arrowImg)
            divContainer.append(anotherDiv)
        }
    }
    if(data[type][machineAnimal].RequiredTool[idx] != null){
        let div = document.createElement('div')
        div.className = 'flex flex-col font-bold'
        let itemTool = document.createElement('img')
        itemTool.src = data[type][machineAnimal].RequiredTool[idx]
        itemTool.title = data[type][machineAnimal].RequiredToolName[idx]
        div.append(itemTool)
        let reqToolTime = document.createElement('p')
        reqToolTime.textContent = data[type][machineAnimal].RequiredToolTime[idx]
        div.append(reqToolTime)
        divContainer.append(div)

        let anotherDiv = document.createElement('div')
        // anotherDiv.className = "arrow"
        let newArrowImg = document.createElement('img')
        newArrowImg.src = "./images/arrow.png"
        newArrowImg.className = "arrow"
        anotherDiv.append(newArrowImg)
        divContainer.append(anotherDiv)
    }
    if(data[type][machineAnimal].RequiredImages[idx] != null){
        let div = document.createElement('div')
        div.className = 'flex flex-col font-bold'
        let itemTool = document.createElement('img')
        itemTool.src = data[type][machineAnimal].RequiredImages[idx]
        itemTool.title = data[type][machineAnimal].Required[idx]
        itemTool.alt = `${data[type][machineAnimal].Required[idx]} Image`
        div.append(itemTool)
        let productPrice = document.createElement('p')
        profitPerUnit = data[type][machineAnimal].RequiredPrice[idx] - data[type][machineAnimal].SeedPrice[idx]
        productPrice.textContent = `${data[type][machineAnimal].RequiredPrice[idx]}`
        div.append(productPrice)
        divContainer.append(div)
    }
    requirementsBox.append(divContainer)

    // Pre Required Seeds Addition
    let preRequiredSeedsLength = data[type][machineAnimal].PreRequiredSeed.length
    //let preRequiredSeeds = data[type][machineAnimal].PreRequiredSeed
    let preRequiredSeedPrices = data[type][machineAnimal].PreRequiredSeedPrice
    let preRequiredProducts = data[type][machineAnimal].PreRequired
    //let preRequiredProductsPrices = data[type][machineAnimal].PreRequiredPrice
    
    if(preRequiredProducts != null){

        // Pre Required Seeds Addition
        for(let i = 0; i < preRequiredSeedsLength; i++){
            let divContainer = document.createElement('div')
            divContainer.className = "requirements-container flex"
            
            let newDiv = document.createElement('div')
            newDiv.className = 'flex flex-col font-bold'
            
            let seedImg = document.createElement('img')
            seedImg.src = data[type][machineAnimal].PreRequiredImages[i]
            seedImg.title = data[type][machineAnimal].PreRequiredSeed[i]
            newDiv.append(seedImg)

            let seedPrice = document.createElement('p')
            seedPrice.textContent = preRequiredSeedPrices[i]
            newDiv.append(seedPrice)

            divContainer.append(newDiv)
            if(data[type][machineAnimal].PreRequiredTool != null){
                let arrowDiv = document.createElement('div')
                // arrowDiv.className = "arrow"
                let arrowImg = document.createElement('img')
                arrowImg.src = "./images/arrow.png"
                arrowImg.className = "arrow"
                arrowDiv.append(arrowImg)
                divContainer.append(arrowDiv)
    
                // Pre Required Seeds Tools Addition
                let newnewDiv = document.createElement('div')
                newnewDiv.className = "flex flex-col font-bold"
    
                let toolImg = document.createElement('img')
                toolImg.src = data[type][machineAnimal].PreRequiredTool[i]
                toolImg.title = data[type][machineAnimal].PreRequiredToolName[i]
    
                let tTime = document.createElement('p')
                tTime.textContent = data[type][machineAnimal].PreRequiredToolTime[i]
                newnewDiv.append(toolImg)
                newnewDiv.append(tTime)
                divContainer.append(newnewDiv)
    
                let anotherArrow = document.createElement('div')
                // anotherArrow.className = "arrow"
                let arrowImage = document.createElement('img')
                arrowImage.src = "./images/arrow.png"
                arrowImage.className = "arrow"
                anotherArrow.append(arrowImage)
                divContainer.append(anotherArrow)
                
                // Pre Required Product Addition
                let productDiv = document.createElement('div')
                productDiv.className = "flex flex-col font-bold"
                let productImg = document.createElement('img')
                productImg.src = data[type][machineAnimal].PreRequiredProductImages[i]
                productImg.title = data[type][machineAnimal].PreRequired[i]
                productImg.alt = `Image of ${data[type][machineAnimal].PreRequired[i]}`
                let productPrice = document.createElement('p')
                let profitPerUnit = data[type][machineAnimal].PreRequiredPrice[i] - data[type][machineAnimal].PreRequiredSeedPrice[i]
                productPrice.textContent = `${data[type][machineAnimal].PreRequiredPrice[i]}`
                productDiv.append(productImg)
                productDiv.append(productPrice)

                divContainer.append(productDiv)
            }
            requirementsBox.append(divContainer)
        }
    }
        // Tool & Product Addition
        let arrowDiv = document.createElement('div')
        arrowDiv.className = "m-10"
        let arrowImg = document.createElement('img')
        arrowImg.src = "./images/arrow.png"
        arrowImg.className = "arrow"
        arrowDiv.append(arrowImg)

        requirementsContainer.append(arrowDiv)

        let toolDiv = document.createElement('div')
        toolDiv.className = "flex flex-col font-bold"
        let toolImg = document.createElement('img')
        let toolTime = document.createElement('p')
        toolImg.src = data[type][machineAnimal].ToolImage
        toolImg.title = data[type][machineAnimal].ToolName
        toolDiv.append(toolImg)

        toolTime.textContent = data[type][machineAnimal].ToolTime

        toolDiv.append(toolTime)
        requirementsContainer.append(toolDiv)
        // Tool Image Added.
    
        // Product Addition
        let arrow = document.createElement('div')
        arrow.className = "m-10"
        let arrowImage = document.createElement('img')
        arrowImage.src = "./images/arrow.png"
        arrowImage.className = "arrow"
        arrow.append(arrowImage)

        requirementsContainer.append(arrow)

        let selectedProduct = document.querySelector('#products').value
        let currentProductIndex = data[type][machineAnimal].Products.indexOf(selectedProduct)
        let productDiv = document.createElement('div')
        productDiv.className = "flex flex-col font-bold"
        let productImg = document.createElement('img')
        productImg.src = data[type][machineAnimal].ProductsImages[currentProductIndex]
        productImg.title = selectedProduct
        productImg.alt = `IMG ${selectedProduct}`
        productDiv.append(productImg)

        let productPrice = document.createElement('p')
        profitPerUnit = data[type][machineAnimal].ProductPrice[currentProductIndex] - sumArr(preRequiredSeedPrices) - data[type][machineAnimal].SeedPrice[idx]
        productPrice.textContent = `${data[type][machineAnimal].ProductPrice[currentProductIndex]} (#${sortedProducts.indexOf(selectedProduct) + 1})`
        productDiv.append(productPrice)

        requirementsContainer.append(productDiv)
    
    }
    calculate()
}

function calculate(){
    let calculationContainer = document.querySelector('.calculation-container')
    calculationContainer.innerHTML = ""

    // Total Profit Calculations
    let totalProfit = profitPerUnit * slots.value
    

    // console.log(totalProfit, slots.value, profitPerUnit)
    
    let para = document.createElement('p')
    para.textContent = `Total Profit: ${beautifyNumber(totalProfit)}`

    calculationContainer.append(para)
    calculationContainer.append(document.createElement('hr'))
    calculationContainer.append(document.createElement('br'))

    // Cost Calculations
    let selectedMA = document.querySelector('#MachineAnimal').value
    //console.log(selectedMA)
    let type = document.querySelector('#type').value
    if(data[type][selectedMA].PreRequired != null){
        let selectedProduct = document.querySelector('#products').value
        let idx = data[type][selectedMA].Products.indexOf(selectedProduct)
        let seedCost = data[type][selectedMA].SeedPrice[idx]
        let preReqCost = sumArr(data[type][selectedMA].PreRequiredSeedPrice)
        preReqCost += seedCost
        let totalCost = preReqCost * slots.value
        // console.log(totalProfit, data[type][selectedMA].ProductPrice[idx]);
        let n = totalProfit / data[type][selectedMA].ProductPrice[idx]
        let m = slots.value - n
        profitPoint = Math.ceil(m)

        console.log(profitPoint);
        let para = document.createElement('p')
        para.textContent = `Total Cost: ${beautifyNumber(totalCost)}`
        calculationContainer.append(para)
        calculationContainer.append(document.createElement('hr'))
        calculationContainer.append(document.createElement('br'))

        let para2 = document.createElement('p')
        para2.textContent = `Profit Point: ${profitPoint}`
        calculationContainer.append(para2)
        calculationContainer.append(document.createElement('hr'))
        calculationContainer.append(document.createElement('br'))
    }
    else{
        let selectedProduct = document.querySelector('#products').value
        let idx = data[type][selectedMA].Products.indexOf(selectedProduct)
        let seedCost = data[type][selectedMA].SeedPrice[idx]

        let totalCost = seedCost * slots.value
        let para = document.createElement('p')
        para.textContent = `Total Cost: ${beautifyNumber(totalCost)}`

        let n = totalProfit / data[type][selectedMA].ProductPrice[idx]
        let m = slots.value - n
        profitPoint = Math.ceil(m)
        console.log(profitPoint);

        calculationContainer.append(para)
        calculationContainer.append(document.createElement('hr'))
        calculationContainer.append(document.createElement('br'))
        let para2 = document.createElement('p')
        para2.textContent = `Profit Point: ${profitPoint}`
        calculationContainer.append(para2)
        calculationContainer.append(document.createElement('hr'))
        calculationContainer.append(document.createElement('br'))
    }
    checkProductTheme()
    // Calculate Total Earnings
    let selectedProduct = document.querySelector('#products').value
    let idx = data[type][selectedMA].Products.indexOf(selectedProduct)
    let productPrice = data[type][selectedMA].ProductPrice[idx]

    let totalEarnings = productPrice * slots.value
    //console.log(productPrice, totalEarnings)
    let earningPara = document.createElement('p')
    earningPara.textContent = `Total Earnings: ${beautifyNumber(totalEarnings)}`
    calculationContainer.append(earningPara)
    calculationContainer.append(document.createElement('hr'))
}

function beautifyNumber(num){
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function search(){
    let productSearched = document.querySelector('#search').value
    if(productSearched != ""){
        let selectedProduct = document.querySelector('#products')
        let type = document.querySelector('#type').value
        // Search code for Machines
        for(let i = 0; i < Machines.length; i++){
            for(let j = 0; j < data.Machines[Machines[i]].Products.length; j++){
                if(capitalized(productSearched) == data.Machines[Machines[i]].Products[j]){
                    document.querySelector('#type').value = "Machines"
                    document.querySelector('#MachineAnimal').innerHTML = `<option>${Machines[i]}</option>`
                    selectedProduct.innerHTML = `<option>${capitalized(productSearched)}</option>`
                    document.querySelector('#products').value = data.Machines[Machines[i]].Products[j]
                    //console.log(productSearched, selectedTool.value, document.querySelector('#products').value, i, data.Machines[Machines[i]].Products[j])
                    type.value = "Machines"
                    getImages()
                    calculate()
                    document.querySelector('#search').value = ""
                    break
                }
            }
        }
        // Search code for animals
        for(let i = 0; i < Animals.length; i++){
            for(let j = 0; j < data.Animals[Animals[i]].Products.length; j++){
                if(capitalized(productSearched) == data.Animals[Animals[i]].Products[j]){
                    //console.log("searching...")
                    document.querySelector('#type').value = "Animals"
                    document.querySelector('#MachineAnimal').innerHTML = `<option>${Animals[i]}</option>`
                    selectedProduct.innerHTML = `<option>${capitalized(productSearched)}</option>`
                    document.querySelector('#products').value = data.Animals[Animals[i]].Products[j]
                    //console.log(productSearched, selectedTool.value, document.querySelector('#products').value, i, data.Animals[Animals[i]].Products[j])
                    //document.querySelector('#search').className = "success"
                    getImages()
                    calculate()
                    document.querySelector('#search').value = ""
                    break
                }
            }
        }
    } 
}

function searchTopProduct(){
    let productSearched = document.querySelector('#top-products').value
    let selectedProduct = document.querySelector('#products')
    for(let i = 0; i < Machines.length; i++){
        for(let j = 0; j < data.Machines[Machines[i]].Products.length; j++){
            if(capitalized(productSearched) == data.Machines[Machines[i]].Products[j]){
                document.querySelector('#type').value = "Machines"
                document.querySelector('#MachineAnimal').innerHTML = `<option>${Machines[i]}</option>`
                selectedProduct.innerHTML = `<option>${capitalized(productSearched)}</option>`
                document.querySelector('#products').value = data.Machines[Machines[i]].Products[j]
                //console.log(productSearched, selectedTool.value, document.querySelector('#products').value, i, data.Machines[Machines[i]].Products[j])
                type.value = "Machines"
                getImages()
                calculate()
                document.querySelector('#search').value = ""
                document.querySelector('#search').value = "Search"
                break
            }
        }
    }
}

function capitalized(str){
    const words = str.split(' ')
    const capWords = words.map(word =>{
        return word.charAt(0).toUpperCase() + word.slice(1)
    })

    return capWords.join(' ')
}

function getProductsPrices(){
    for(let i = 0; i < Machines.length; i++){
        for(let j = 0; j < data.Machines[Machines[i]].Products.length; j++){
            if(data.Machines[Machines[i]].PreRequired != null){
                products.push(data.Machines[Machines[i]].Products[j])
                //console.log("Adding stuff into arrays!")
                productPrice.push(data.Machines[Machines[i]].ProductPrice[j])
                seedPrice.push(data.Machines[Machines[i]].SeedPrice[j])
                preSeedsPrice.push(sumArr(data.Machines[Machines[i]].PreRequiredSeedPrice))
                profit.push(data.Machines[Machines[i]].ProductPrice[j] - data.Machines[Machines[i]].SeedPrice[j] - sumArr(data.Machines[Machines[i]].PreRequiredSeedPrice))
                //console.log(sumArr(data.Machines[Machines[i]].preRequiredSeedPrices))
            }
            else{
                //console.log(data.Machines[Machines[i]].ToolName)
                products.push(data.Machines[Machines[i]].Products[j])
                productPrice.push(data.Machines[Machines[i]].ProductPrice[j])
                seedPrice.push(data.Machines[Machines[i]].SeedPrice[j])
                profit.push(data.Machines[Machines[i]].ProductPrice[j] - data.Machines[Machines[i]].SeedPrice[j])
            }
        }
    }
    for(let i = 0; i < Animals.length; i++){
        for(let j = 0; j < data.Animals[Animals[i]].Products.length; j++){
            products.push(data.Animals[Animals[i]].Products[j])
            productPrice.push(data.Animals[Animals[i]].ProductPrice[j])
            seedPrice.push(data.Animals[Animals[i]].SeedPrice[j])
            profit.push(data.Animals[Animals[i]].ProductPrice[j] - data.Animals[Animals[i]].SeedPrice[j])
        }
    }
}

function checkProductTheme(){
    let defaultThemeProducts = [
        "Peach Can", 
        "Red Pepper Pizza", 
        "Black Bread",
        "Wheat Bread",
        "Corn Bread",
        "Oat Bread",
        "Kamut Bread",
        "Baby Summer Pizza",
        "Banana Pie",
        "Mushroom Pizza",
        "Roast Beef",
        "Roast Vension",
        "Roast Mutton",
        "Pumpkin Pie",
        "Peanut Sauce",
        "Mushroom Sauce",
        "Orange Can",
        "Daffodil Perfume",
        "Christmas Envelope",
        "Sunny Themed Envelope",
        "Sunflower Garden Kneeter",
        "Orange Garden Kneeter",
        "Sunflower Bouquet",
        "Yellow Tulip Bouquet",
        "Yellow Rose Bouquet",
        "Walnut Oil",
        "Sunflower Oil",
        "Peanut Oil",
        "Wheat Flour",
        "Rye Flour",
        "Cornmeal",
        "Barley Flour",
        "Potato Flour",
        "Orange Jam",
        "Pineapple Jam"
    ]

    let nightThemeProducts = [
        "Chocolate Pie",
        "Green Zebra Pie",
        "Blueberry Pie",
        "Roast Pork",
        "Chocolate Sauce",
        "Blue Rose Perfume",
        "Blue Cornflower Bouquet",
        "Celeriac Flour"
    ]

    let purpleThemeProducts = [
        "Eggplant Pizza",
        "Onion Pizza",
        "Pork Hotdog",
        "Grape Can",
        "Lavender Perfume",
        "Iris Perfume",
        "Peony Garden Kneeter",
        "Lavender Garden Kneeter",
        "Sugar Tea",
        "Lavender Sugar",
        "Lavender Bouquet",
        "Crocus Bouquet",
        "Iris Bouquet",
        "Pink Rose Bouquet",
        "Purple Rose Bouquet",
        "Peony Bouquet",
        "Violet Bouquet",
        "Wine",
        "Cane Rum",
        "Grape Jam",
        "Blueberry Jam"
    ]

    let highContrastThemeProducts = [
        "Apple Pie",
        "Love Fruit Pie",
        "Raspberry Pie",
        "Strawberry Pie",
        "Valentine Envelope",
        "Carnation Bouquet",
        "Strawberry Jam",
        "Halloween Pumpkin Jam",
        "Blackberry Jam",
        "Raspberry Jam",
        "Pitaya Jam"
    ]
    let yesCheck = document.querySelector('input#yes')
    let productShown = document.querySelector('#products').value
    //console.log(yesCheck.checked)
    if(yesCheck.checked){
        defaultThemeProducts.forEach((product) => {
            if(productShown == product){
                document.body.className = ""
            }
        })
        nightThemeProducts.forEach((product) => {
            if(productShown == product){
                document.body.className = "night"
            }
        })
        highContrastThemeProducts.forEach((product) => {
            if(productShown == product){
                document.body.className = "contrast-high"
            }
        })
        purpleThemeProducts.forEach((product) => {
            if(productShown == product){
                document.body.className = "purple"
            }
        })
    }
}
