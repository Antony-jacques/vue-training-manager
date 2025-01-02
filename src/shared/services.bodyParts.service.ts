export async function fetchBodyPartsService(): Promise<string[]>  {

  const options = {
    method: "GET",
    url: "https://exercisedb.p.rapidapi.com/exercises",
    params: { limit: "10" },
    headers: {
      "X-RapidAPI-Key": process.env.VUE_APP_EXERCISESDB_API_KEY,
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  try {
    const request = await fetch(
      "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
      options
    );

    return await request.json();
  } catch (error) {
    throw(error);
  }
}

export async function fetchSingleBodyPartExercicesService(muscle: string){
  const options = {
    method: "GET",
    url: "https://exercisedb.p.rapidapi.com/exercises",
    params: { limit: "10" },
    headers: {
      "X-RapidAPI-Key": process.env.VUE_APP_EXERCISESDB_API_KEY,
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  try {
    const request = await fetch(
      `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${muscle}`,
      options
    );

    return await request.json();

  } catch (error) {
    throw(error);
  }
}