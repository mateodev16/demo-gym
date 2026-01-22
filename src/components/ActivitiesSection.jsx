import { ACTIVITIES } from "../data/activities";
import ActivityCard from "./ActivityCard";

export default function ActivitiesSection() {
  return (
    <section id="activities" className="bg-zinc-950 w-full md:min-h-screen pt-12 px-4 pb-12">
      <h2 className="text-white text-center text-4xl sm:text-5xl font-bold">
        Nuestras actividades
      </h2>
      <p className="text-gray-400 text-xl mt-4 text-balance text-center">
        Más de 100 clases semanales incluidas en tu plan
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-6 w-full max-w-7xl mx-auto px-2">
        {ACTIVITIES.map((activity) => (
          <ActivityCard 
            key={activity.id} 
            {...activity} 
          />
        ))}
      </div>
    </section>
  );
}