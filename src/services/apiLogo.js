import supabase, { supabaseUrl } from "./supabase";

export async function getLogo(){
    let {data,error} = await supabase.from('logo').select('*')

    if(error){
        throw new Error('logo could not be loaded')
    }
    return data;
}

export async function deleteLogo(id){
    const {error} = await supabase.from("logo").delete().eq('id',id)
    if(error){
        throw new Error('logo could not be deleted')
    }

}

export async function createLogo(newLogo,id){
    //https://wagjeiefbwdvtwfxduig.supabase.co/storage/v1/object/public/logo-image/cabin-005.jpg
    const imageName = `${Math.random()}-${newLogo.image.name}`.replaceAll("/","")
    const imagePath =`${supabaseUrl}/storage/v1/object/public/logo-image/${imageName}`

    // const {data,error} = await supabase.from("logo").insert([{...newLogo, image:imagePath}])
    let query = supabase.from('logo');
    if(!id)query = query.insert([{...newLogo, image:imagePath}])
    if(id)query = query.update({...newLogo, image:imagePath}).eq('id',id)
    const {data,error} = await query.select().single();


    if(error){
        throw new Error('logo could not be added')
    }

    const {  error:storeageError } = await supabase
        .storage
        .from('logo-image')
        .upload(imageName, newLogo.image)

    if(storeageError){
        await supabase.from("logo").delete().eq('id',data.id)
        throw new Error('image could not be uploaded')
    }
    return data;
}