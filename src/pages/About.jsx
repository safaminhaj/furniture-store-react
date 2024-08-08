const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center mt-20">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-none">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl tracking-widest font-bold">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam unde
        nihil iure veritatis, autem ab! Nulla dignissimos tempora unde,
        obcaecati accusantium illo quisquam minima consequatur facilis corrupti
        asperiores eius ipsa. Neque repellat libero nulla, reprehenderit
        quibusdam architecto culpa magni doloribus!
      </p>
    </>
  );
};

export default About;
