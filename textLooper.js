var text = "this is the text whose letters loop fonts and colours";
var fonts = ["Times New Roman", "lucida console", "Book Antiqua"]; //css attribute font-family
var colours = ["green", "blue", "red"]; //css attribute color
var textChangeSpeed = 1000; //time before the next change takes place in miliseconds


function loopText()
{
    var div = $("#div"); //the place where you want your text
    div.empty();
    var array = new Array(text.length);
    
    for(i=0;i<text.length;i++)
    {
        var letter = $('<span></span>');
        letter.css("font-family", fonts[Math.floor(Math.random() * fonts.length)]);
        letter.css("color", colours[Math.floor(Math.random() * colours.length)]);
        letter.append(text.charAt(i));
        array[i] = letter;
    }
    
    
    div.append(array);
    setTimeout(function() {loopText(); }, textChangeSpeed);
}
