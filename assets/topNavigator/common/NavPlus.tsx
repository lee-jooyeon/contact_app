export default function NavPlus({
  width = '30',
  height = '30',
  fill = 'none',
}) {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      viewBox='0 0 30 30'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M15 5V25M8.5 15H5M25 15H10' stroke='black'></path>
    </svg>
  );
}
