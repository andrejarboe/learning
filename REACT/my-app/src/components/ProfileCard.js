import profiles from './FakeData'

export default function ProfileCard({
  name,
  title,
  image,
  imageAlt,
  description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
}) {
  return (
    <div className="bg-teal-200 rounded md:max-w-xl">
      <div className="flex space-x-4">
        <img src={image} alt={imageAlt} className="max-h-[200px] rounded-xl" />
        <div className="w-full">
          <h2 className="text-4xl">{name}</h2>
          <h5 className="text-2xl">{title}</h5>
        </div>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
}
