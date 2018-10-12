/*
var url = "https://api.pushbullet.com/v2/devices";
const Http = new XMLHttpRequest();
Http.open("GET", url);
*/
let token = "";
/*
Http.setRequestHeader("Access-Token", token);
Http.send();

Http.onreadystatechange=(e)=>{
  ///  document.getElementById("token").innerHTML = Http.responseText;
}
*/
  PushBullet.APIKey=token;

  let dev = PushBullet.devices();
  let devID = dev.devices[0].iden;

document.getElementById("token").innerHTML = devID;



document.getElementById('send').addEventListener('click',function(){
    var value = document.getElementById('sending_text').value;
    if(value) {
   /*   sendText(value);*/
      PushBullet.push("note",devID,null,{title:"text by webOS", body:value});
    }   
});

document.getElementById('sending_text').addEventListener('keydown',function(e){
  var value = this.value;
  if(value&&e.code === 'Enter') {
    sendText(value);
  }   
});

function sendText(text){
  

}
