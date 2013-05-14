var data = { shell:v1 };

//var start_tag = /[Start]/;
//var end_tag = /[End]/;
var body_tag = document.getElementsByTagName("body");
var div = document.createElement('div');
div.setAttribute('id', 'lilypond');
div.setAttribute('style', 'display:none');

var tab = document.createElement('div');
tab.setAttribute('id', 'tab');
tab.setAttribute('style', 'display:block;');

var form = document.createElement('form');
form.setAttribute('name', 'lily');
form.setAttribute('action', 'javascript:;');
form.setAttribute('onsumbit', "call('http://lambdaweb.com/app/lilypond/translate.php')");
form.setAttribute('method', 'POST');
form.setAttribute('style', 'display:none;');

var textarea = document.createElement('textarea');
textarea.setAttribute('name', 'pond');
textarea.setAttribute('rows', '90');
textarea.setAttribute('cols', '90');
textarea.setAttribute('style', 'display:none');
textarea.setAttribute('onsubmit', '"data.shell = this.value"');

var input = document.createElement('input');
input.setAttribute('type', 'submit');
input.setAttribute('name', 'send');
input.setAttribute('style', 'display:none');

form.appendChild(textarea);
form.appendChild(input)
div.appendChild(form);


function trigger(){

}

function lilyConvert(){
		
    
}

function sendToSite(site, code){
GM_xmlhttpRequest({
  method: "POST",
  url: site,
  data: "pond="+ code,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  onload: function(response) {
    if (response.responseText.indexOf("Logged in as") > -1) {
      location.href = "http://www.example.net/dashboard";
    }
  }
});

}