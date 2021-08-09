var docRef = app.activeDocument;

// Create and setup folder to save image
var desktopDir = "/Users/sebbelg/Desktop/DoneEmieCadre";
var folderName = "/image0101010222";
var currentFolder = Folder(desktopDir + folderName);
//Check if it exist, if not create it.
if(!currentFolder.exists) currentFolder.create();


var savedState = app.activeDocument.activeHistoryState


// Sauvegarde de l'image de coté
var bounds = [0, 0, 50, 50];
app.activeDocument.crop(bounds);

var fileName = "/contour D.png";
var fileNamePath = desktopDir + folderName + fileName;
var pngFile = new File(fileNamePath);

pngSaveOptions = new PNGSaveOptions();
pngSaveOptions.compression = 0;
pngSaveOptions.interlaced = false;

activeDocument.saveAs(pngFile, pngSaveOptions, true, Extension.LOWERCASE);

app.activeDocument.activeHistoryState = savedState


// Sauvegarde de l'image du coin
bounds = [0, 50, 50, 100];
app.activeDocument.crop(bounds);

fileName = "/coin BD.png";
fileNamePath = desktopDir + folderName + fileName;
pngFile = new File(fileNamePath);

pngSaveOptions = new PNGSaveOptions();
pngSaveOptions.compression = 0;
pngSaveOptions.interlaced = false;

activeDocument.saveAs(pngFile, pngSaveOptions, true, Extension.LOWERCASE);

app.activeDocument.activeHistoryState = savedState

function help() {
	try{
		var URL = new File("file:///Users/sebbelg/Desktop/DoneEmieCadre/image0101010222/Test.html");
		URL.execute();
	}catch(e){
		alert("Error, Can Not Open.");
	};
}
help();

// var dlg = new Window('dialog', 'My first script!',[100,100,480,250]);
// dlg.btnPnl = dlg.add('panel', [25,15,365,125], 'Hello world!');
// dlg.btnPnl.testBtn = dlg.btnPnl.add('button', [15,30,305,50], 'Finished', {name:'ok'});
// dlg.btnPnl.testBtn.onClick = dobuild;
// dlg.show();
// function dobuild() {
//    alert("Congratulations - it all worked!");
//    dlg.close();
// }