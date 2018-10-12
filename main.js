/*
var url = "https://api.pushbullet.com/v2/devices";
const Http = new XMLHttpRequest();
Http.open("GET", url);
*/
let token = "o.Moyr7JEu0XjwfJKnxynkQIJ0mv3cOn7q";
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


// push history
var pushHis =  PushBullet.pushHistory();

for(var i=0 ; i < pushHis.pushes.length ; i=i+1){
  var his_iden = pushHis.pushes[i].sender_email;
  var his_title = pushHis.pushes[i].title;
  var his_body = pushHis.pushes[i].body;
  addHis(his_iden, his_title,his_body);
}

function addHis(his_iden,his_title, his_body){
  console.log(his_body);
  var list = document.getElementById('histories');
  var item = document.createElement('li');
  item.innerText = his_iden + " : " +his_title+"\n"+ his_body;

  list.insertBefore(item, list.childNodes[0]);
}

//send text 
document.getElementById('send').addEventListener('click',function(){
    var value = document.getElementById('sending_text').value;
    if(value) {
   /*   sendText(value);*/
      PushBullet.push("note",devID,null,{title:"text by webOS", body:value});
      document.getElementById('sending_text').value='';
    }   
});

document.getElementById('sending_text').addEventListener('keydown',function(e){
  var value = this.value;
  if(value&&e.code === 'Enter') {
    PushBullet.push("note",devID,null,{title:"text by webOS", body:value});
    document.getElementById('sending_text').value='';
  }   
});

//send file but now it has error
document.getElementById('send_files').addEventListener('click',function(){
    var file = document.getElementById('files')[0];
    var text = document.getElementById('sending_text').value;
 //  if(file) {
      PushBullet.pushFile(devID, PushBullet.user().email,file.type[0],text,function(err,res){
        if(err){
          throw err;
        }
        else{
          console.log(res);
        }
      });
  //  }   
});

