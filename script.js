function onFormSubmit(e){
    event.preventDefault();
    var tableref = document.getElementById("showdata").getElementsByTagName('tbody')[0];

    var listdata = {};

    listdata["Name"] = document.getElementById("Name").value;
    listdata["Email"] = document.getElementById("Email").value;
    listdata["Website"] = document.getElementById("Website").value;
    listdata["Image"] = document.getElementById("Image").value;
    listdata["Gender"] = document.getElementById("Gender").value;

    var java = document.getElementById("Java");
    var html = document.getElementById("HTML");
    var css = document.getElementById("CSS");

        
    var s = "";
    if(java.checked == true){
        s = s + java.value;
    }

    if(html.checked == true){
        if(java.checked == true){
            s = s + ",";
        }
        s = s + html.value;
    }

    if(css.checked == true){
        if(java.checked == true || html.checked == true){
            s = s + ",";
        }
        s = s + css.value;
    }

    listdata["Skills"] = s;

    var web = "<a href=\"" + listdata.Website + "\" target=\"_blank\" style=\"target-new: tab;\">" + listdata.Website + "</a>";

    var k = "<b>" + listdata.Name + "</b>" + "<br>" + listdata.Gender + "<br>" + listdata.Email + "<br>" + web + "<br>" + listdata.Skills;
    
    var img2 = "<img src=\"" + listdata.Image + "\" >";
    var newrow = tableref.insertRow(tableref.length);
    newrow.insertCell(0).innerHTML = k;
    newrow.insertCell(1).innerHTML = img2;

    document.getElementById('Form').reset();
}