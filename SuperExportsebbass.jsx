var docRef = app.activeDocument;


var savedState = app.activeDocument.activeHistoryState

//var bounds = [0, 0, 250, 250];
//app.activeDocument.crop(bounds);



// var dlg = new Window('dialog', 'My first script!',[100,100,480,250]);
// dlg.btnPnl = dlg.add('panel', [25,15,365,125], 'Hello world!');
// dlg.btnPnl.testBtn = dlg.btnPnl.add('button', [15,30,305,50], 'Finished', {name:'ok'});
// dlg.btnPnl.testBtn.onClick = dobuild;
// dlg.show();
// function dobuild() {
//    alert("Congratulations - it all worked!");
//    dlg.close();
// }

//activeDocument.saveAs("contour D_testScript");


var desktopDir = "/Users/sebbelg/Desktop/DoneEmieCadre";
var folderName = "/image0101010";
var currentFolder = Folder(desktopDir + folderName);
//Check if it exist, if not create it.
if(!currentFolder.exists) currentFolder.create();
var fileName = "/contourDroit.png";
var path22 = desktopDir + folderName + fileName;
alert(path22);
var pngFile = new File(path22);

pngSaveOptions = new PNGSaveOptions();
pngSaveOptions.compression = 0;
pngSaveOptions.interlaced = false;

activeDocument.saveAs(pngFile, pngSaveOptions, true, Extension.LOWERCASE);

app.activeDocument.activeHistoryState = savedState