const CalendarIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <g fill="#fff" clipPath="url(#a)">
      <path d="M.585 15.274h15.313c.138 0 .27-.048.376-.136.147-.123 3.502-3.01 3.706-9.24H3.534C3.331 11.554.241 14.212.21 14.238a.587.587 0 0 0 .376 1.036ZM19.414 2.383h-2.93v-.586a.58.58 0 0 0-.586-.586.58.58 0 0 0-.586.586v.586h-2.969v-.586a.58.58 0 0 0-.586-.586.58.58 0 0 0-.586.586v.586h-2.93v-.586a.58.58 0 0 0-.585-.586.58.58 0 0 0-.586.586v.586H4.14a.58.58 0 0 0-.586.586v1.758H20V2.969a.58.58 0 0 0-.586-.586Z" />
      <path d="M17.026 16.037c-.318.265-.717.41-1.128.41H3.554v1.757c0 .324.262.586.586.586h15.274a.586.586 0 0 0 .586-.586v-6.568c-1.13 2.771-2.706 4.177-2.974 4.401Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default CalendarIcon;
