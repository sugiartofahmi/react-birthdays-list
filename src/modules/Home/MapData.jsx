const MapData = ({ data }) => {
  return (
    <>
      {data.map((person) => (
        <div className="flex flex-row gap-x-5" key={person.id}>
          <img
            className="object-cover w-20 rounded-lg"
            src={person.image}
            alt="person image"
          />
          <div>
            <h1 className="font-bold text-lg">{person.name}</h1>
            <h1 className="text-base text-gray-900">{person.age}</h1>
          </div>
        </div>
      ))}
    </>
  );
};

export default MapData;
