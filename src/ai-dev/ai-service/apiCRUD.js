import supabase from "../../services/supabase"

export async function getData(key){
    let { data, error } = await supabase
    .from(key)
    .select('*')
  
    if(error){
        //console.error(error);
        throw new Error('Data could not be loaded')
    }
    return data;
}

export async function deleteData(id,key){
    const { error } = await supabase
  .from(key)
  .delete()
  .eq('id', id)

  if(error){
    //console.error(error);
    throw new Error('Data could not be loaded')
}
}

export async function createData(newData,key){
    const { data, error } = await supabase
  .from(key)
  .insert([newData])
  .select()

  if(error){
    //console.error(error);
    throw new Error('Data could not be Created')
}
return data;
}