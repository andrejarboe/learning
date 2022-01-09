export default function Button({title, color='teal'}) {
  return (
    <button
      class={`bg-${color}-600  hover:bg-${color}-500 transition duration-300 py-3 px-8 rounded text-red-100`}
    >
      {title}
    </button>
  );
}
