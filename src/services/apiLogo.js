import supabase from "./supabase";

export async function getMenu(){
let { data: logo, error } = await supabase
.from('logo')
.select('*')

if(error){
    //console.error(error);
    throw new Error('Logo could not be loaded')
}
return logo;
}