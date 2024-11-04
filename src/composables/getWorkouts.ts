import { ref } from "vue";
import { projecFirestore } from "../firebase/config";
import { Workout } from "@/stores/bodyParts";

const getWorkouts = () => {
  const workouts = ref<Workout[]>([]);
  const error = ref(null);

  const loadWorkouts = async (collection: string) => {
    try {
      const res = await projecFirestore.collection(collection).get();
      workouts.value = res.docs.map((doc) => {
        console.log("firebase", doc.data());
        return { ...doc.data(), id: doc.id }
      });
    } catch (error) {}
  };

  return { workouts, error, loadWorkouts };
};

export default getWorkouts;
