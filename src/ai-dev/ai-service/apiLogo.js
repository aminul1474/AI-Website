import supabase from "../../services/supabase";

export async function getLogo(){
let { data: logo, error } = await supabase
.from('logo')
.select('*')

if(error){
    //console.error(error);
    throw new Error('Logo could not be loaded')
}
return logo;
}