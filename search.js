function replaceSpaceChar(text){
    let TabSpec = {"à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","è":"e","é":"e","ê":"e","ë":"e","ç":"c","ì":"i","í":"i","î":"i","ï":"i","ù":"u","ú":"u","û":"u","ü":"u","ÿ":"y","ñ":"n","-":" ","_":" "}; 
	let reg=/[àáäâèéêëçìíîïòóôõöøùúûüÿñ_-]/gi; 
	return text.replace(reg,function(){ return TabSpec[arguments[0].toLowerCase()];}).toLowerCase();
 	}
['a','aaa','bab','bb'].filter(item => replaceSpaceChar(item).toLowerCase().includes('aaa'))