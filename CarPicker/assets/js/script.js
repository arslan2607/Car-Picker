// Arslan Khayrullin 
// ISTE-340 
// Project 1 - Car Picker 
// 02/23/2020

// Holds all select data
var selectLists; //used to hold node array list for all "Select" controls on HTML page

// Gets information from DATA file
var data = choices.choices;
console.log(data);

// Creates image element
let photo = document.createElement("img");

// Creates div tags for select elements
var selectDiv = document.createElement("div");

// All information loaded on start up
function init() {
    // Adds information to lists based on whether data exists
	selectLists = document.getElementsByTagName("select");
	// Sets div information
	selectDiv.id = "myDiv1";
	// Adds divs to page
	document.body.appendChild(selectDiv);

	// Creates button for removing images that are currently being displayed 
	let but = document.createElement("BUTTON");
	but.type = "button";
	but.appendChild(document.createTextNode("Remove Current Image"));
	but.id = "remove image";
	but.onclick = removeImage;
	document.body.appendChild(but);

	// Attempt on making a button to remove cookies

	// let cb = document.createElement("BUTTON");
	// cb.type = "button";
	// cb.appendChild(document.createTextNode("Remove Cookies"));
	// cb.id = "clear button";
	// cb.onclick = clearCookies;
	// document.body.appendChild(cb);

	// Initial creation of the dropdown menu
    selectChanged("Car Price");
}

// Removes or Adds the dropdown menus | Displays or removes images
function newSelect() {
    console.log(this.name);
    console.log(selectLists);
    removeElements(this.name);
	document.cookie = this.name + "=" + this.value;
	localStorage.setItem = this.name + "=" + this.value;
	selectChanged(this.value);
	
	console.log(data);
	// COUPES
	if(selectLists[2].value == "Speed" && selectLists[0].value == ("$0 - $20,000") ){
		removeImage;
		image("Nissan_370z");
	}
	if(selectLists[2].value == "Speed" && selectLists[0].value == ("$20,000 - $40,000") ){
		removeImage;
		image("Corvette_Stingray");
	}
	if(selectLists[2].value == "Speed" && selectLists[0].value == ("$40,000 - $60,000") ){
		removeImage;
		image("Mustang_Shelby");
	}
	if(selectLists[2].value == "Handling" && selectLists[0].value == ("$0 - $20,000") ){
		removeImage;
		image("Subaru_BRZ");
	}
	if(selectLists[2].value == "Handling" && selectLists[0].value == ("$20,000 - $40,000") ){
		removeImage;
		image("Jaguar_FType");
	}
	if(selectLists[2].value == "Handling" && selectLists[0].value == ("$40,000 - $60,000") ){
		removeImage;
		image("BMW_m2");
	}
	// ------------------------------------------
	// SEDANS
	if(selectLists[2].value == "Economy" && selectLists[0].value == ("$0 - $20,000") ){
		removeImage;
		image("Toyota_Prius");
	}
	if(selectLists[2].value == "Luxury" && selectLists[0].value == ("$0 - $20,000") ){
		removeImage;
		image("Audi_A4");
	}
	if(selectLists[2].value == "Sport" && selectLists[0].value == ("$0 - $20,000") ){
		removeImage;
		image("Audi_S3");
	}
	if(selectLists[2].value == "Economy" && selectLists[0].value == ("$20,000 - $40,000") ){
		removeImage;
		image("Lexus_GS350");
	}
	if(selectLists[2].value == "Luxury" && selectLists[0].value == ("$20,000 - $40,000") ){
		removeImage;
		image("Alfa_Giulia");
	}
	if(selectLists[2].value == "Sport" && selectLists[0].value == ("$20,000 - $40,000") ){
		removeImage;
		image("Dodge_ChargerRTScatPack");
	}
	if(selectLists[2].value == "Economy" && selectLists[0].value == ("$40,000 - $60,000") ){
		removeImage;
		image("Tesla_Model3");
	}
	if(selectLists[2].value == "Luxury" && selectLists[0].value == ("$40,000 - $60,000") ){
		removeImage;
		image("Jaguar_XJL");
	}
	if(selectLists[2].value == "Sport" && selectLists[0].value == ("$40,000 - $60,000") ){
		removeImage;
		image("BMW_m6");
	}
	// ------------------------------------------
	// SUVS
	if(selectLists[2].value == "Practical and Roomy" && selectLists[0].value == ("$0 - $20,000") ){
		removeImage;
		image("Nissan_Rogue");
	}
	if(selectLists[2].value == "Luxurious and Quick" && selectLists[0].value == ("$0 - $20,000") ){
		removeImage;
		image("BMW_x3");
	}
	if(selectLists[2].value == "Practical and Roomy" && selectLists[0].value == ("$20,000 - $40,000") ){
		removeImage;
		image("Lexus_RX350");
	}
	if(selectLists[2].value == "Luxurious and Quick" && selectLists[0].value == ("$20,000 - $40,000") ){
		removeImage;
		image("Lincoln_Corsair");
	}
	if(selectLists[2].value == "Practical and Roomy" && selectLists[0].value == ("$40,000 - $60,000") ){
		removeImage;
		image("Lexus_GX460");
	}
	if(selectLists[2].value == "Luxurious and Quick" && selectLists[0].value == ("$40,000 - $60,000") ){
		removeImage;
		image("Mercedes_GLS550");
	}
}

// Accepts a key and creates a dropdown menu based on the key
function selectChanged(key) {
    console.log(key);

	// Mostly class code that helped with the project
    for (var i = 0; i < data.length; i++) {
        if (data[i].key == key) {
            console.log(data[i]);
            var selectDivs = document.createElement("div");
            selectDivs.id = "div"+i;
            selectDiv.appendChild(selectDivs);

            let selectList = document.createElement("select");
            selectList.id = "select"+i;
            selectList.name = data[i].depth;
            selectList.className = data[i].depth;
            selectList.onchange = newSelect;
            selectDivs.appendChild(selectList);

            let option = document.createElement("option");
            option.value = data[i].description;
            option.textContent = data[i].description;

            selectList.appendChild(option);

            for (var x = 0; x < data[i].options.length; x++) {
                option = document.createElement("option");
                option.value = data[i].options[x];
                option.textContent = data[i].options[x];
				option.onchange = newSelect;
                selectList.appendChild(option);
            }
        }
    }
};

// Removes elements based on the depth of the question
function removeElements(className){

	console.log(className);
	
	removeImage;
    for (var i = selectLists.length - 1; i > 0; i--) {
        if (i == parseInt(className)) {
            break;
        }
        else {
            var toDelete = document.getElementsByClassName(i);
            console.log(toDelete);
            for (j = toDelete.length - 1; j >= 0; j--) {
                console.log(toDelete[j].parentNode);
                toDelete[j].parentNode.removeChild(toDelete[j]);
            }
        }
    }
};

window.onload = init;

// Function taking in image name to display on screen
function image(imgsrc) {
	let imgdiv = document.createElement("div");
	imgdiv.id = "car image";
	document.body.appendChild(imgdiv);

	photo.id = "imagecar";
	// Adds an image title if the user hovers over it 
	photo.title = imgsrc;
	imgdiv.appendChild(photo);
	document.getElementById("imagecar").src="assets/img/" + imgsrc + ".png";

	
	photo.height = 300;
	photo.width = 500;
	photo.border = 3;
} 

// Function to remove the image currently being displayed
function removeImage() {
	var photograph = document.getElementById("car image");
	photograph.parentNode.removeChild(photograph);
}



