
var fs = require('fs');
var http = require('http');
var path = require('path');
var basePath = __dirname;

// Replaces all white space in all filenames of this folder.
(function removeSpaces(){
	var fname = fs.readdirSync('./');
	for (i = 0; i < fname.length; i++) {
	    if(fname[i] !== 'doc.js') {
	        if(fname[i].charAt(0) !== '.') {
		    fs.rename(fname[i], fname[i].replace(/\s+/g, "-"), function (err) {
		        if (err) {
			    console.log(err);
			    return; 
		        }});
		}
	    }
	}
	console.log('Removing Spaces from filenames in this folder......');
	setTimeout(function(){console.log('Starting Server...................\n..................................');},2000);
	setTimeout(function(){startServer();},3000);
})();

function rdfile() {
	// Set the Image size here, "auto" in width or height will keep the images aspect ratio locked.
	var  width = '800px', height = 'auto';
	var loc = fs.readdirSync('./');
	var htmlOutput = "";
	var listings = [
		"",
		"Listing_2-1_Hello-World.html",
		"Listing_2-2_Hello-World.html",
		"Listing_2-3_Live-Updates.html",
		"Listing_2-4_A-First-Look-at-ngShow.html",
		"Listing_2-5_Demonstrating-ngClick.html",
		"Listing_2-6_A-Quick-Look-at-AngularJS-Expressions.html",
		"Listing_3-1_Singleton-Pattern.js",
		"Listing_3-2_MVC-in-Action.js",
		"Listing_3-3_A-Complete-MVC-Example.html",
		"Listing_3-4_Displaying-the-Employee-Names.html",
		"Listing_4-1_Raw-Sample-Data.html",
		"Listing_4-2_Angular-Filter-Example.html",
		"Listing_4-3_Achieving-Same-Result-Without-Filter.html",
		"Listing_4-4_Rounding-Up-Values-with-the-Number-Filter.html",
		"Listing_4-5_The-Date-Filter-in-Action.html",
		"Listing_4-6_Adding-Historical-Data-to-the-Data-Source.html",
		"Listing_4-6_and_Listing_4-7_combined.html",
		"Listing_4-7_Displaying-a-Subset-of-the-monthlyUsageHistory-Data.html",
		"Listing_4-8_myAppModule.js",
		"Listing_4-9_Referring-to-the-Module-by-Name.js",
		"Listing_4-10_An-index.html-File-Set-Up-to-Use-myAppModule.html",
		"Listing_4-11_A-Simple-Replace-Dashes-Function.html",
		"Listing_4-12_An-Angular-Filter-Implementation.js",
		"Listing_4-13_Trying-Out-the-stripDashes-Filter.html",
		"Listing_4-14_A-Basic-Title-Casing-Function.html",
		"Listing_4-15_A-Better-Title-Casing-Function.html",
		"Listing_4-16_An-Angular-Filter-Implementation.js",
		"Listing_4-17_Using-the-toTitleCase-Filter.html"
		];
	for (i = 0; i < loc.length; i++) {
	    if(loc[i] !== 'doc.js') {
		if(loc[i].charAt(0) !== '.') {
		    // Using the WYSIWYG editor: "PageEdit" in Google Chrome, a paragraph will be added between images
		    // if the below html line starts with a "<br>" tag. Uncomment it if that is the desired behavior.
		    var htmlOutput = htmlOutput + '<br><div id="id' + [i] + '" class="img-wrappers"><br><h1>' + listings[i] + '</h1>\n<img src="' + loc[i] + '" alt="Screen-Shot-' + [i] + '" style="width:' + width + ';height:' + height + ';" />\n</div>\n';
		}
	    }
	}
	return htmlOutput;
};

function startServer() {
	var htmlOutput = rdfile();
	http.createServer(function(req, res) {
	    var stream = fs.createReadStream(path.join(basePath, req.url));
	    stream.on('error', function() {
		// The html document properties can be customized with html/css here.
		// Edit any HTML page in Chrome with this powerful WYSIWYG editor
		// Get "PageEdit" WYSIWYG editor:  https://chrome.google.com/webstore/detail/pageedit/ebkclgoaabaibghklgknnjdemknjaeic?utm_source=chrome-ntp-icon
	        res.write('<!DOCTYPE html>\n<html>\n<head>\n<title>Doc</title>\n<style>\nbody {margin: 0 auto; max-width: 808px; font-family: Arial,"Helvetica Neue",Helvetica,sans-serif; font-size: 12pt;} \np {text-indent: 2em;}\n.img-wrappers   { text-align: center; font-style: italic;}\n</style>\n</head>\n<body>\n' + htmlOutput + '</body>\n</html>\n');
	        res.end();
	    });
	    stream.pipe(res);
	}).listen(3000);
	console.log('Live on http://localhost:3000/ ');
	console.log('## Press: Ctrl-C to stop server ##');
};
