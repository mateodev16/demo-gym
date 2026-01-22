export default function BenefitCard({ title, description, icon: Icon }) {
  return (
    <article className="border-2 p-4 hover:border-brand-secondary w-full h-64 rounded-xl transition-all duration-300 group bg-zinc-950 border-zinc-800 flex flex-col justify-around">
      <div className="h-16 w-16 bg-brand-primary/10 rounded-2xl p-3 flex items-center justify-center">
       
        <Icon className="text-brand-primary size-8" />
      </div>
      <h3 className="font-bold text-white text-lg">{title}</h3>
      <p className="text-zinc-400">{description}</p>
    </article>
  );
}

