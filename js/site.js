(function(){ 

	"use strict";

	var arrayAllowedFood = [ "poultry", "turkey","bison", "meat", "red meat", "pig", "beef", "elk", "kangaroo", "beef jerky", "wild boar", "reindeer", "veal", "chicken", "chicken breast", "pork tenderloin", "pork chops", "steak", "bacon", "pork", "ground beef", "grass fed beef", "chicken thigh", "chicken leg", "chicken wings", "lamb rack", "shrimp", "shrimps", "prawn", "prawns", "lobster", "clams", "mussels", "salmon", "fish", "catfish", "makrel", "cod", "haddock", "sardines", "tuna", "snapper", "shark", "swordfish", "talapia", "oysters", "crayfish", "deer", "venison", "lamb chops", "rabbit", "goat", "bear", "eggs", "egg", "chicken eggs", "chicken egg", "duck egg", "duck eggs", "goose egg", "goose eggs", "asparagus", "avocado", "artichoke hearts", "brussels sprouts", "carrots", "spinach","celery", "broccoli", "zucchini", "cabbage", "peppers", "cauliflower","parsley", "eggplant", "green onions", "butternut squash", "yam", "sweet potato", "beetroot", "coconut oil", "olive oil", "macadamia oil", "avocado oil", "grass fed butter", "almonds", "almond", "cashews", "cashew", "hazelnuts", "hazelnut", "pecans", "pecan", "pine nuts", "pumpkin seeds", "sunflower seeds", "macadamia nut", "walnuts", "walnut", "apple", "apples", "avocado", "blackberries", "papaya", "peaches", "plums", "mango", "lychee", "blueberries", "grapes","lemon", "strawberries", "watermelon", "pineapple", "guava", "lime", "raspberries", "clementine","cantaloupe", "tangerine", "apracot", "figs", "oranges", "bananas", "honey", "dates" ];
	// var arrayNonAllowedFood = ["butter", "cheese", "cottage cheese", "creamer", "milk", "skim milk", "2% milk", "whole milk", "semi skimmed milk", "skimmed milk", "fat free milk", "cream cheese", "powdered milk", "yogurt", "greek yogurt", "pudding", "frozen yogurt", "ice milk", "low fat milk", "ice cream", "soda", "pop", "soft drinks", "coke", "sprite", "fanta", "dr pepper", "pepsi", "mountain dew", "fizzy drinks", "fruit juice", "apple juice", "orange juice", "grape juice", "mango juice", "cereals", "bread", "muffins", "toast", "sandwiches", "crackers", "oatmeal", "corn", "wheat", "beans", "black beans", "broad beans", "butter beans", "fava beans", "green beans", "kidney beans", "peas", "chickpeas", "peanuts", "peanut butter", "miso", "lentils", "soybeans", "tofu", "spam", "hot dogs", "processed meats", "snickers", "milky way", "boost", "milk chocolate", "white chocolate", "m&m's", "sugar", "white sugar", "processed sugar", "cake"];

	$(function(){

		// This will run the check if the enter key is pressed
		$("#textBoxInput").keypress(function(e) {
	    	
	    	if(e.which == 13) {

	        var input = $("#textBoxInput").val().toLowerCase();

		        if ($.inArray(input, arrayAllowedFood) != -1) {

		            $("#spanAnswer").text(input + " " + " = " + "is paleo").css({"color": "green", "textTransform":"capitalize"});
		        }
		        else {
		            $("#spanAnswer").html(input + " " + " = " + "is not paleo").css({ "color": "red", "textTransform":"capitalize" });
		        }

	        	$("#textBoxInput").val("");
	    	}
		});

		// This will run the check if the button is clicked
		$("#buttonCheckFood").click(function(e){

			var input = $("#textBoxInput").val().toLowerCase();

	        if ($.inArray(input, arrayAllowedFood) != -1) {

	            $("#spanAnswer").text(input + " " + " = " + "is paelo").css({"color": "green", "textTransform":"capitalize"});
	        }
	        else {
	            $("#spanAnswer").html(input + " " + " = " + "is not paleo").css({ "color": "red", "textTransform":"capitalize" });
	        }

	        $("#textBoxInput").val("");

		});

	});

})();