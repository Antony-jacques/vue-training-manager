import { onMounted, reactive } from "vue";

const fetchData = () => {

  const exercisesCategories = reactive({
    data: [],
  });

  const options = {
    method: "GET",
    url: "https://exercisedb.p.rapidapi.com/exercises",
    params: { limit: "10" },
    headers: {
      "X-RapidAPI-Key": process.env.VUE_APP_EXERCISESDB_API_KEY,
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };
  
  const getExercises = async () => {
    try {
      const request = await fetch(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        options
      );

      const response = await request.json();
      exercisesCategories.data = response;

    } catch (error) {
      console.error(error);
    }
  };

  onMounted(getExercises);

  return { exercisesCategories, getExercises };
};

export default fetchData;
