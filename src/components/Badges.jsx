const badges = [
  { id: 1, name: 'JavaScript Expert', img: 'https://via.placeholder.com/120?text=JS' },
  { id: 2, name: 'React Developer', img: 'https://via.placeholder.com/120?text=React' },
  { id: 3, name: 'UI/UX Fundamentals', img: 'https://via.placeholder.com/120?text=UX' },
];

export default function Badges() {
  return (
    <section id="badges" className="py-20 px-6 justify-items-center" style={{ padding: '0rem 1.5rem', marginBottom: '6rem' }}>
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-wider text-center mb-8 scroll-fade-in" style={{marginBottom: '5rem' }}>
          <span className="text-accent">BADGES</span>
        </h2>

        <div className="flex gap-6 justify-center items-center flex-wrap scroll-fade-in">
          {badges.map((b) => (
            <div key={b.id} className="flex flex-col items-center gap-2">
              <img src={b.img} alt={b.name} className="w-24 h-24 rounded-md object-cover" />
              <p className="text-white/90 text-sm font-medium">{b.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
