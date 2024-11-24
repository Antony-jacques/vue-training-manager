import { ref, Ref, UnwrapRef } from "vue";
import { projecFirestore } from "../firebase/config";
import { Workout } from "@/stores/bodyParts";
import { Exercise } from "@/stores/bodyParts";


const getWorkouts = () => {
  const workouts = ref<Workout[]>([]);
  const error = ref(null);

  const series = ref<{ weight: number; reps: number }[]>([
    { weight: 0, reps: 0 },
  ]);

  const addSeries = () => {
    series.value.push({ weight: 0, reps: 0 });
  };
  
  const removeSerie = (index: number) => {
    series.value.splice(index, 1);
  };

  const isSuccess: Ref<boolean> = ref(false);

  const triggerSuccess = () => {
    isSuccess.value = true;
  
    setTimeout(() => {
      isSuccess.value = false;
    }, 3000);
  };
  
  const saveWorkout = async (exercice: UnwrapRef<Exercise>) => {
    const newWorkout = {
      series: series.value,
    };
  
    try {
      const res = await projecFirestore
        .collection(exercice.name)
        .add(newWorkout);
      console.log(res);
  
      loadWorkouts(exercice.name);
      triggerSuccess();
    } catch (error) {
      console.log(error);
    }
  };

  const loadWorkouts = async (collection: string) => {
    try {
      const res = await projecFirestore.collection(collection).get();
      workouts.value = res.docs.map((doc) => {
        console.log("firebase", doc.data());
        return { ...doc.data(), id: doc.id }
      });
    } catch (error) {}
  };

  return { workouts, error, series, isSuccess, loadWorkouts, addSeries, removeSerie, saveWorkout };
};

export default getWorkouts;
