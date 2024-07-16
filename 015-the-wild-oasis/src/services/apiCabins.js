import supabase, { supabaseUrl } from './supabase';

export async function getCabins() {
  const { data, error } = await supabase.from('cabins').select('*');
  if (error) {
    console.log(`!!! ${error} !!!`);
    throw new Error(`📛 Cabins could not be loaded`);
  }
  return data;
}

// https://tqlpeeginxvocmwxjcur.supabase.co/storage/v1/object/public/cabin-images/cabin_001.jpg
export async function createCabin(newCabin) {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll('/', '');
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  //--- 1. CREATE CABIN ---//
  const { data, error } = await supabase
    .from('cabins')
    .insert([{ ...newCabin, image: imagePath }])
    .select();
  if (error) {
    console.log(`!!! ${error} !!!`);
    throw new Error(`📛 Cabin could not be created`);
  }

  //--- 2. UPLOAD IMAGE ---//
  const { error: storageError } = await supabase.storage
    .from('cabin-images')
    .upload(imageName, newCabin.image);

  //--- 3. DELETE THE CABIN IF THERE WAS AN UPLOADING ERROR ---//
  if (storageError) {
    await supabase.from('cabins').delete().eq('id', data.id);
    console.log(`!!! ${storageError} !!!`);
    throw new Error(`📛 Cabin image could not be uploaded and cabin could not be created`);
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from('cabins').delete().eq('id', id);
  if (error) {
    console.log(`!!! ${error} !!!`);
    throw new Error(`📛 Cabin could not be deleted`);
  }
  return data;
}
