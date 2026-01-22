export default function ActivityCard({ title, description, image }) {
    return (
      <article className="relative h-80 w-full rounded-xl border-2 border-zinc-800 overflow-hidden group transition-all duration-300 hover:border-brand-secondary flex flex-col justify-end">
        <img 
          src={image} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent transition-opacity duration-300"></div>

        <div className="relative z-10 p-6 flex flex-col gap-2">
          <h3 className="text-white font-bold text-2xl">{title}</h3>
          <p className="text-zinc-300 text-sm">{description}</p>
          
          <div className="flex flex-row items-center gap-2">
            <span className="text-brand-primary font-medium text-sm">Incluido en tu plan</span>
            <div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div>
          </div>
        </div>
      </article>
    );
  }