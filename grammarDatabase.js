// =================================
// GRAMMAR VIDEO DATABASE
// =================================


const GRAMMAR_DB = "grammarVideos";




// GET ALL GRAMMAR VIDEOS

async function getGrammarVideos(){


let data =

localStorage.getItem(GRAMMAR_DB);



if(!data){

return [];

}



return JSON.parse(data);



}







// SAVE GRAMMAR VIDEO

async function saveGrammarVideo(item){



let data =

await getGrammarVideos();




item.id = Date.now();




data.push(item);




localStorage.setItem(

GRAMMAR_DB,

JSON.stringify(data)

);



}







// DELETE GRAMMAR VIDEO

async function deleteGrammarVideo(id){



let data =

await getGrammarVideos();




data = data.filter(

item => item.id != id

);



localStorage.setItem(

GRAMMAR_DB,

JSON.stringify(data)

);



}