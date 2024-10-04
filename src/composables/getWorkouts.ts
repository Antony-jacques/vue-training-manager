import { ref } from "vue";
import { projecFirestore } from "../firebase/config";

const getWorkouts = () => {
  const workouts = ref([]);
  const error = ref(null);

  const loadWorkouts = async () => {
    try {
      const res = await projecFirestore.collection("workouts").get();
      workouts.value = res.docs.map((doc) => {
        console.log("firebase", doc.data());
        return { ...doc.data(), id: doc.id }
      });
    } catch (error) {}
  };

  return { workouts, error, loadWorkouts };
};

export default getWorkouts;
