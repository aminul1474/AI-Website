import supabase from "../../services/supabase"

export async function getData(SBfield){
    let { data, error } = await supabase
    .from(SBfield)
    .select('*')
  
    if(error){
        //console.error(error);
        throw new Error('Data could not be loaded')
    }
    return data;
}

export async function deleteData(id,SBfield){
    const { error } = await supabase
  .from(SBfield)
  .delete()
  .eq('id', id)

  if(error){
    //console.error(error);
    throw new Error('Data could not be loaded')
  }
}

export async function createData(newData,SBfield){

  const { data, error } = await supabase
  .from(SBfield)
  .insert([newData])
  .select()

  if(error){
    //console.error(error);
    throw new Error('Data could not be Created')
  }


return data;
}