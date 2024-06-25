export default function Stats({ items }) {
  const numItems = items.length;
  if (numItems === 0)
    return (
      <footer className='stats'>
        <em>Start adding items to yuor packing list! 🚀</em>
      </footer>
    );

  const numPacked = items.filter(item => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className='stats'>
      <em>
        {percentage === 100
          ? `You're ready to go! ✈️`
          : `
        You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%) 🔥
      `}
      </em>
    </footer>
  );
}
