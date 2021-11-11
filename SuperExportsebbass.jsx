function verifyResultWebPage() {
	try{
		var URL = new File("file:///~/Desktop/DoneEmieCadre/image0101010222/Test.html");
		URL.open("w");
		URL.writeln('x<!DOCTYPE html><html><head><style>.grid-container { display: inline-grid; grid-template-columns: auto auto auto auto; background-color: #FFFFFF; padding: 0px;}.grid-item { background-color: rgba(255, 255, 255, 0.8); border: 0px solid rgba(0, 0, 0, 0.8); padding: 0px; font-size: 30px; text-align: center;}</style></head><body><h1>The display Property:</h1><div class="grid-container"> <div class="grid-item"> <img src="coin BD.png" style="border:0; text-decoration:none; outline:none; transform:rotate(180deg)"> </div> <div class="grid-item"> <img src="contour D.png" style="border:0; text-decoration:none; outline:none; transform:rotate(270deg)"> </div> <div class="grid-item"> <img src="contour D.png" style="border:0; text-decoration:none; outline:none; transform:rotate(270deg)"> </div> <div class="grid-item"> <img src="coin BD.png" style="border:0; text-decoration:none; outline:none; transform:rotate(270deg)"> </div> <div class="grid-item"> <img src="contour D.png" style="border:0; text-decoration:none; outline:none; transform:rotate(180deg)"> </div> <div class="grid-item"> </div> <div class="grid-item"> </div> <div class="grid-item"> <img src="contour D.png" style="border:0; text-decoration:none; outline:none; transform:rotate(0deg)"> </div> <div class="grid-item"> <img src="contour D.png" style="border:0; text-decoration:none; outline:none; transform:rotate(180deg)"> </div> <div class="grid-item"> </div> <div class="grid-item"> </div> <div class="grid-item"> <img src="contour D.png" style="border:0; text-decoration:none; outline:none; transform:rotate(0deg)"> </div> <div class="grid-item"> <img src="coin BD.png" style="border:0; text-decoration:none; outline:none; transform:rotate(90deg)"> </div> <div class="grid-item"> <img src="contour D.png" style="border:0; text-decoration:none; outline:none; transform:rotate(90deg)"> </div> <div class="grid-item"> <img src="contour D.png" style="border:0; text-decoration:none; outline:none; transform:rotate(90deg)"> </div> <div class="grid-item"> <img src="coin BD.png" style="border:0; text-decoration:none; outline:none; transform:rotate(0deg)"> </div> </div><p>Set the <em>display</em> property to <em>inline-grid</em> to make an inline grid container.</p></body></html>');
		URL.close();
		URL.execute();
		$.sleep( 999 );
		URL.remove();
	}catch(e){
		alert("Error, Can Not Open.");
	};
}

function saveCurrentImage(fileName) {
	// Create and setup folder to save image
	var desktopDir = "~/Desktop/DoneEmieCadre";
	var folderName = "/image0101010222/";
	var currentFolder = Folder(desktopDir + folderName);
	//Check if it exist, if not create it.
	if(!currentFolder.exists) currentFolder.create();
	var fileNamePath = desktopDir + folderName + fileName;
	var pngFile = new File(fileNamePath);
	pngSaveOptions = new PNGSaveOptions();
	pngSaveOptions.compression = 0;
	pngSaveOptions.interlaced = false;
	activeDocument.saveAs(pngFile, pngSaveOptions, true, Extension.LOWERCASE);
}

//var text = activeDocument.path;
//alert(text);

var docRef = app.activeDocument;

var savedState = app.activeDocument.activeHistoryState

var width = app.activeDocument.width;
var height = app.activeDocument.height;

if (width * 2 != height) {
	width = width -1;
}

if (width % 2 == 1) {
	width = width -1;
}

// Sauvegarde de l'image de coté
var bounds = [0, 0, width, width];
app.activeDocument.crop(bounds);
saveCurrentImage("contour D.png");
app.activeDocument.activeHistoryState = savedState


// Sauvegarde de l'image du coin
bounds = [0, width, width, width*2];
app.activeDocument.crop(bounds);
saveCurrentImage("coin BD.png");
app.activeDocument.activeHistoryState = savedState

verifyResultWebPage();




// var dlg = new Window('dialog', 'My first script!',[100,100,480,250]);
// dlg.btnPnl = dlg.add('panel', [25,15,365,125], 'Hello world!');
// dlg.btnPnl.testBtn = dlg.btnPnl.add('button', [15,30,305,50], 'Finished', {name:'ok'});
// dlg.btnPnl.testBtn.onClick = dobuild;
// dlg.show();
// function dobuild() {
//    alert("Congratulations - it all worked!");
//    dlg.close();
// }