
var canvas = new fabric.Canvas('firstCanvas',  {
  preserveObjectStacking: true});


var myimg = fabric.Image.fromURL("awesomefab2.jpg", function(img) {
	canvas.add(img);
	img.sendToBack();

    }, {
      crossOrigin: 'Anonymous'
    });






var name = '';
var name2 = '';
var fonts = ['Monoton','Bungee Inline','Staatliches','Overlock','Fredericka the Great','Black Ops One','Audiowide','Unica One'];
var font = fonts[0];
var order = 0;

var imgData;

$("#orgName").keyup(function() {

	name = $("#orgName").val();
	console.log(name);

	lineOne.set('text', name);
	rect.set('width', lineOne.width +20);
	rect.set('height', lineOne.height +10);
	group.set('width', lineOne.width +20);
	group.set('height', lineOne.height +10);

	canvas.renderAll();

})
$("#orgName").change(function() {
	name = $("#orgName").val();

	canvas.renderAll();
})

$("#next").click(function() {

	//I think I need to preload fonts for this to work.. not sure what the problem is...

	console.log('clicked order');
	order = fonts.indexOf(font);

		if (order<fonts.length-1) {

			order = order + 1;

			console.log(order + ' ' + fonts.length);
		} else {
			order = 0;
		};

	font = fonts[order];
	lineOne.set('fontFamily', font);
	lineOne.set('originX', 'center');
	lineOne.set('originY', 'center')


	rect.set('width', lineOne.width +20);
	rect.set('height', lineOne.height +10);
	group.set('width', lineOne.width +20);
	group.set('height', lineOne.height +10);
	canvas.renderAll();

});




$("#export").click(function() {
	
	console.log("clicked export");

	imgData = $("#firstCanvas").get(0).toDataURL();
		
		$("#firstCanvas").get(0).toBlob(function(blob) {
			saveAs(blob, "testexport");
		})

});


$("#orgName2").keyup(function() {
name2 = $("#orgName2").val();
console.log(name);

lineTwo.set('text', name2);
rect2.set('width', lineTwo.width +20);
rect2.set('height', lineTwo.height +10);
group.set('width', lineTwo.width +20);
group.set('height', lineTwo.height +10);

canvas.renderAll();

})
$("#orgName2").change(function() {
name2 = $("#orgName2").val();

canvas.renderAll();

})


	$( "#backgroundColor" ).change(function(event) {
	$("#phoneDisplay").css("background-color", "#" + $("#backgroundColor").val());
});


var rect = new fabric.Rect({

	// left: 90,
	top: -30,

	originX: 'center',
    originY: 'center',
	fill: '#00a8ff',


});



var rect2 = new fabric.Rect({
	top: 35,

	originX: 'center',
    originY: 'center',
	fill: 'whitesmoke',

});

var lineOne = new fabric.Text(name, {
	// left: 100,
	// top: 160,

	top: -25,
	originX: 'center',
    originY: 'center',
	fill: 'whitesmoke',
	fontFamily: font,
	fontSize: 50,
	
});

var lineTwo = new fabric.Text(name2, {
	// left: 100,
	// top: 160,
	top: 40,
	originX: 'center',
    originY: 'center',
	fill: '#00a8ff',
	fontFamily: font,
	fontSize: 50,
	
});


var group = new fabric.Group([ rect , lineOne], {
  originX: 'center',
    originY: 'center',

});

var group2 = new fabric.Group([ rect2 , lineTwo], {
  	originX: 'center',
    originY: 'center',
  angle: -10
});


var masterGroup = new fabric.Group([group2, group ], {
  left: 0,
  top: 0,
  width:600,
	height:600,


});

canvas.add(masterGroup);
  
// canvas.sendToBack(myimg);

