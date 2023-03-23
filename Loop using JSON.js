var json = [{
    "id" : "Pandi", 
    "msg"   : "I have stareted doing FSD course in Guvi",
    "task" : "zen portal task",
    "mail": "pandi6@gmail.com"
},
{
    "id" : "Hari", 
    "msg"   : "I have started doing the UI/UX couse in Guvi",
    "task" : "zen portal task",
    "mail": "hari6@gmail.com"
}];
//for loop
for(let i = 0; i < json.length; i++) {
    let obj = json[i];
    console.log(obj.id);
    console.log(obj.msg);
    console.log(obj.task);
    console.log(obj.mail);

}
//for...in loop
for(let x in json){
    console.log(json[x]);
}
// for...of loop
for(let key of json){
    console.log(key.id);
    console.log(key.msg);
    console.log(key.task);
    console.log(key.mail);
}
//for...each
json.forEach(function(obj){console.log(obj.task)});