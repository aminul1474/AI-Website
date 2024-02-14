import supabase, { supabaseUrl } from "../../services/supabase";

export async function getImage(SBfield){
    let {data,error} = await supabase.from(SBfield).select('*')

    if(error){
        throw new Error(`${SBfield} could not be loaded`)
    }
    return data;
}

export async function deleteImage(id,SBfield){
    const {error} = await supabase.from(SBfield).delete().eq('id',id)
    if(error){
        throw new Error(`${SBfield} could not be deleted`)
    }
}

export async function createImage(newImage,id,SBfield,storageName){
    //https://wagjeiefbwdvtwfxduig.supabase.co/storage/v1/object/public/logo-image/cabin-005.jpg
    const imageName = `${Math.random()}-${newImage.image.name}`.replaceAll("/","")
    const imagePath =`${supabaseUrl}/storage/v1/object/public/${storageName}/${imageName}`

    // const {data,error} = await supabase.from("logo").insert([{...newImage, image:imagePath}])
    let query = supabase.from(SBfield);
    if(!id)query = query.insert([{...newImage, image:imagePath}])
    if(id)query = query.update({...newImage, image:imagePath}).eq('id',id)
    const {data,error} = await query.select().single();


    if(error){
        throw new Error(`${SBfield} could not be added`)
    }

    const {  error:storeageError } = await supabase
        .storage
        .from(storageName)
        .upload(imageName, newImage.image)

    if(storeageError){
        await supabase.from(SBfield).delete().eq('id',data.id)
        throw new Error(`${SBfield} could not be uploaded`)
    }
    return data;
}