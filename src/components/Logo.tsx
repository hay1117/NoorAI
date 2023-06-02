import { useMantineTheme } from "@mantine/core";

//======================================
export const Logo = () => {
  const { colorScheme, colors } = useMantineTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="70"
      height="60"
      version="1.0"
      viewBox="0 0 390 300"
    >
      <path
        fill={colors.dark[colorScheme === "dark" ? 0 : 7]}
        d="M52.254 135.301c.238-.969.441-1.672.61-2.11.175-.437.562-.726 1.156-.874l11.375-2.688a3.711 3.711 0 0 1 1.14-.172c.383 0 .664.137.844.406.176.262.266.758.266 1.485-.18.71-.329 1.789-.454 3.234a108.24 108.24 0 0 0-.265 4.766c-.055 1.73-.094 3.469-.125 5.219-.031 1.742-.047 3.25-.047 4.53v2.423c0 1.812-.016 3.793-.047 5.937a534.536 534.536 0 0 1-.11 6.5 679.52 679.52 0 0 1-.156 6.516c-.054 2.137-.109 4.14-.171 6.015l-.25 7.5a2.124 2.124 0 0 0-.047.407v1c0 .5.004.922.015 1.265.02.336.032.633.032.891 0 .293-.028.559-.079.797a1.61 1.61 0 0 1-.328.687c-.18.22-.422.45-.734.688-.305.23-.715.515-1.234.86-.293.21-.778.51-1.454.905-.68.399-1.43.844-2.25 1.344-.812.5-1.664 1.012-2.546 1.531a92.149 92.149 0 0 1-2.422 1.422c-.73.426-1.325.77-1.782 1.032-.449.27-.671.406-.671.406l-20.391-31.375-1.844 25.703a5.585 5.585 0 0 1-.156.75c-.074.262-.274.465-.594.61a22.4 22.4 0 0 1-1.36.562l-2.265.844c-.867.32-1.777.648-2.734.984-.95.344-1.852.656-2.703.937-.844.282-1.594.504-2.25.672-.657.176-1.106.266-1.344.266-.438 0-.805-.121-1.094-.36-.293-.23-.437-.652-.437-1.265.289-3.656.625-7.645 1-11.969.382-4.32.75-8.754 1.093-13.297.352-4.539.688-9.07 1-13.593.313-4.532.567-8.832.766-12.907 0-.113-.184-.5-.547-1.156a86.923 86.923 0 0 0-1.234-2.156c-.45-.781-.86-1.516-1.235-2.203-.367-.688-.546-1.117-.546-1.297 0-.207.109-.395.328-.563.226-.175.586-.41 1.078-.703l11.734-6.64c.094 0 .219-.016.375-.047.164-.032.305-.047.422-.047.32 0 .578.039.766.11.187.073.382.304.593.687l21.313 38.453ZM93.956 164.223c0 2.105.223 4.219.672 6.344.457 2.125 1.21 4.039 2.265 5.734a12.769 12.769 0 0 0 4.172 4.14c1.727 1.055 3.868 1.579 6.422 1.579 1.969-.114 3.692-.516 5.172-1.203 1.477-.696 2.75-1.594 3.813-2.688a14.533 14.533 0 0 0 2.656-3.766 23.226 23.226 0 0 0 1.672-4.484c.414-1.57.703-3.176.86-4.812.163-1.645.25-3.227.25-4.75a21.7 21.7 0 0 0-.845-6.047c-.554-1.946-1.386-3.664-2.5-5.157a12.748 12.748 0 0 0-4.156-3.609c-1.656-.906-3.586-1.36-5.781-1.36-1.73 0-3.293.325-4.688.97a12.856 12.856 0 0 0-3.703 2.562 16.537 16.537 0 0 0-2.797 3.703 27.643 27.643 0 0 0-1.937 4.297c-.512 1.48-.89 2.96-1.14 4.437a30.21 30.21 0 0 0-.407 4.11Zm8.562 32.25c-4.398 0-8.324-.82-11.78-2.453-3.45-1.645-6.372-3.864-8.766-6.657-2.387-2.8-4.215-6.039-5.485-9.718-1.273-3.676-1.906-7.567-1.906-11.672 0-4.594.648-8.832 1.953-12.719 1.3-3.883 3.125-7.328 5.469-10.328 2.344-3 5.129-5.531 8.36-7.594 3.238-2.07 6.796-3.601 10.671-4.594.344 0 .61-.273.797-.828.195-.562.367-1.18.516-1.859.144-.676.316-1.29.515-1.844.207-.55.504-.828.89-.828 5.688.586 10.802 1.59 15.345 3.016 4.539 1.418 8.39 3.445 11.546 6.078 3.165 2.637 5.586 5.969 7.266 10 1.688 4.023 2.531 8.933 2.531 14.734 0 3.719-.453 7.219-1.359 10.5-.906 3.281-2.184 6.309-3.828 9.078a34.161 34.161 0 0 1-5.906 7.438 36.124 36.124 0 0 1-7.657 5.562c-2.812 1.524-5.84 2.68-9.078 3.485-3.242.8-6.605 1.203-10.094 1.203ZM164.962 164.223c0 2.105.223 4.219.672 6.344.457 2.125 1.211 4.039 2.266 5.734a12.769 12.769 0 0 0 4.172 4.14c1.726 1.055 3.867 1.579 6.422 1.579 1.968-.114 3.691-.516 5.171-1.203 1.477-.696 2.75-1.594 3.813-2.688a14.533 14.533 0 0 0 2.656-3.766 23.226 23.226 0 0 0 1.672-4.484c.414-1.57.703-3.176.86-4.812.164-1.645.25-3.227.25-4.75a21.7 21.7 0 0 0-.844-6.047c-.555-1.946-1.387-3.664-2.5-5.157a12.748 12.748 0 0 0-4.157-3.609c-1.656-.906-3.585-1.36-5.78-1.36-1.731 0-3.294.325-4.688.97a12.856 12.856 0 0 0-3.703 2.562 16.537 16.537 0 0 0-2.797 3.703 27.643 27.643 0 0 0-1.938 4.297c-.511 1.48-.89 2.96-1.14 4.437a30.21 30.21 0 0 0-.407 4.11Zm8.563 32.25c-4.399 0-8.324-.82-11.781-2.453-3.45-1.645-6.371-3.864-8.766-6.657-2.387-2.8-4.215-6.039-5.484-9.718-1.274-3.676-1.907-7.567-1.907-11.672 0-4.594.649-8.832 1.953-12.719 1.301-3.883 3.125-7.328 5.47-10.328 2.343-3 5.128-5.531 8.359-7.594 3.238-2.07 6.796-3.601 10.671-4.594.344 0 .61-.273.797-.828.196-.562.368-1.18.516-1.859.145-.676.316-1.29.516-1.844.207-.55.504-.828.89-.828 5.688.586 10.801 1.59 15.344 3.016 4.539 1.418 8.39 3.445 11.547 6.078 3.164 2.637 5.586 5.969 7.265 10 1.688 4.023 2.532 8.933 2.532 14.734 0 3.719-.453 7.219-1.36 10.5-.906 3.281-2.183 6.309-3.828 9.078a34.161 34.161 0 0 1-5.906 7.438 36.124 36.124 0 0 1-7.656 5.562c-2.813 1.524-5.84 2.68-9.078 3.485-3.243.8-6.606 1.203-10.094 1.203ZM240.234 190.676a5.019 5.019 0 0 1-.156.766c-.074.25-.273.449-.594.593-.117.063-.695.278-1.734.641a698.95 698.95 0 0 0-3.61 1.281c-1.367.477-2.714.957-4.046 1.438-1.336.488-2.352.863-3.047 1.125-.356.144-.79.297-1.297.453a4.945 4.945 0 0 1-1.516.25c-.406 0-.765-.106-1.078-.313-.312-.199-.469-.578-.469-1.14 0-1.293.036-2.469.11-3.532.082-1.07.18-2.19.297-3.359.113-1.176.234-2.473.36-3.89.132-1.426.265-3.118.39-5.079.144-2.582.3-5.066.468-7.453.176-2.383.352-4.867.532-7.453l.625-7.5c.082-1.238.164-2.492.25-3.766.093-1.27.18-2.582.265-3.937l.485-5.36c0-.05-.09-.078-.266-.078-.23 0-.625.055-1.187.157-.555.093-1.211.215-1.97.36-.76.148-1.605.304-2.53.468-.918.156-1.86.308-2.829.453-.242 0-.468-.047-.687-.14-.219-.102-.328-.227-.328-.376 0-.125.031-.21.094-.265l7.109-12.438c1.613-.351 3.348-.71 5.203-1.078 1.863-.363 3.863-.691 6-.984 2.145-.29 4.414-.532 6.813-.719a94.72 94.72 0 0 1 7.656-.297c3.039.063 6.004.367 8.89.906 2.883.543 5.446 1.45 7.688 2.72 2.25 1.273 4.05 3 5.406 5.187 1.364 2.18 2.047 4.937 2.047 8.28 0 1.845-.32 3.544-.953 5.095a17.21 17.21 0 0 1-2.406 4.203 21.028 21.028 0 0 1-3.235 3.297 34.986 34.986 0 0 1-3.359 2.437c-1.063.68-2.008 1.215-2.828 1.61-.824.398-1.383.652-1.672.765 0 .055.02.125.062.219.04.086.133.25.282.5.156.25.367.605.64 1.062.282.45.641 1.07 1.078 1.86.47.71 1.024 1.652 1.672 2.828a529.74 529.74 0 0 0 2.313 4.14 259.877 259.877 0 0 0 3.094 5.344c1.175 1.961 2.523 4.07 4.046 6.328.5.438 1.067.711 1.704.813.644.105 1.242.164 1.796.172.563.011 1.032.043 1.407.093.383.043.578.227.578.547 0 .23-.242.5-.719.813-.48.305-1.043.617-1.687.937a40.96 40.96 0 0 1-1.97.922 41.55 41.55 0 0 0-1.515.703c-.699.356-1.43.696-2.187 1.016-.762.324-1.586.684-2.469 1.078-.875.399-1.852.852-2.922 1.375a106.76 106.76 0 0 0-3.625 1.906 3.788 3.788 0 0 1-.984.407 3.98 3.98 0 0 1-.86.109c-.523 0-.976-.125-1.359-.375a3.645 3.645 0 0 1-.969-.906 5.49 5.49 0 0 1-.64-1.063 27.307 27.307 0 0 0-.407-.906l-13.109-27.594Zm2.672-29.75c1.5 0 3.051-.379 4.656-1.14a17.516 17.516 0 0 0 4.391-2.938 16.084 16.084 0 0 0 3.25-4.094c.852-1.52 1.281-3.062 1.281-4.625 0-4.238-2.547-6.36-7.64-6.36-.969 0-1.778.071-2.422.204-.649.125-1.23.219-1.75.281ZM278.973 190.988c.383-.757.781-1.613 1.188-2.562.414-.957.8-1.992 1.156-3.11l1.172-2.906a55.343 55.343 0 0 1-1.594-2.562 32.24 32.24 0 0 1-1.484-2.844 22.105 22.105 0 0 1-1.079-2.89 10.328 10.328 0 0 1-.406-2.813c0-.063.223-.113.672-.156.457-.04 1.031-.078 1.719-.11.687-.03 1.43-.05 2.234-.062.813-.02 1.563-.035 2.25-.047.688-.02 1.254-.035 1.703-.047.457-.008.688-.016.688-.016.676-1.757 1.336-3.43 1.984-5.015.645-1.582 1.29-3.176 1.938-4.781a275.658 275.658 0 0 0 1.922-4.954c.644-1.687 1.289-3.492 1.937-5.421 1.227-3.633 2.426-6.829 3.594-9.579 1.176-2.757 2.281-5.328 3.312-7.703.114-.289.305-.562.578-.812.282-.25.582-.457.907-.625.32-.176.632-.32.937-.438.313-.125.555-.218.735-.28.125-.02.57-.145 1.343-.376a72.821 72.821 0 0 1 2.657-.75c1-.27 1.988-.504 2.968-.703.977-.207 1.766-.313 2.36-.313h.78c.47 0 .915.11 1.345.329.425.218.71.652.859 1.296a925.689 925.689 0 0 1 4.5 11.797c1.594 4.262 3.156 8.953 4.688 14.078a315.31 315.31 0 0 0 2.406 7.829c.789 2.46 1.582 4.859 2.375 7.203.789 2.343 1.586 4.687 2.39 7.031.813 2.344 1.641 4.762 2.485 7.25.27 1.055.539 1.89.812 2.516.282.617.535 1.101.766 1.453.238.343.43.601.578.765.145.157.219.325.219.5 0 .18-.278.356-.828.532l-9.453 3.078c-.7.258-1.418.52-2.157.781-.73.27-1.418.504-2.062.703-.649.207-1.215.375-1.703.5-.48.133-.82.203-1.016.203h-.266c-.418 0-.714-.125-.89-.375a2.495 2.495 0 0 1-.344-.719 43.14 43.14 0 0 0-.875-2.609c-.293-.781-.578-1.555-.86-2.328a76.07 76.07 0 0 1-.843-2.484 36.983 36.983 0 0 1-.797-3.125c-.062-.145-.23-.27-.5-.375a4.433 4.433 0 0 0-.937-.235 8.412 8.412 0 0 0-1.172-.11c-.407-.019-.79-.03-1.141-.03-1.105 0-2.008.011-2.703.03a93.97 93.97 0 0 0-1.828.048c-.524.011-1.028.023-1.516.031-.48.012-1.07.016-1.765.016-.856 0-1.731-.004-2.625-.016-.887-.008-1.7-.031-2.438-.063l-2.5-.093a142.715 142.715 0 0 1-2.281 5.937 209.767 209.767 0 0 1-2.469 5.719.93.93 0 0 1-.406.562c-.219.145-.45.22-.688.22-.18 0-.281-.016-.312-.048-2.836-1.023-5.219-2.027-7.156-3.015-1.938-1-3.625-1.969-5.063-2.907Zm29.625-39.515c-.7 2.617-1.398 4.984-2.094 7.11a300.592 300.592 0 0 1-1.89 5.64 229.968 229.968 0 0 1-1.47 4.156c-.405 1.125-.698 1.996-.874 2.61v.39c0 .18-.016.297-.047.36h10.547a203.85 203.85 0 0 0-1.031-4.344 153.62 153.62 0 0 1-1.078-4.625 245.856 245.856 0 0 1-1.047-5.188 130.08 130.08 0 0 1-1.016-6.11ZM343.045 195.598l2.203-30.063c.727-10.07 1.266-17.468 1.61-22.187.351-4.719.53-7.063.53-7.031.032-.532.063-.97.095-1.313.03-.351.086-.644.172-.875.093-.238.21-.414.359-.531.144-.125.363-.211.656-.266l15.203-3.656a4.178 4.178 0 0 1 1.188-.172c.406 0 .68.125.828.375.156.25.234.758.234 1.516-.21 1.812-.375 3.511-.5 5.093-.117 1.586-.21 3.094-.281 4.532-.074 1.437-.14 2.824-.203 4.156a184.666 184.666 0 0 1-.203 3.969c-.18 1.437-.336 2.875-.469 4.312-.137 1.438-.262 2.93-.375 4.469a6649.58 6649.58 0 0 1-.375 4.875c-.125 1.71-.277 3.574-.453 5.594l-1.938 23.156a4.94 4.94 0 0 1-.156.781c-.074.242-.273.434-.594.578-.03 0-.21.063-.53.188-.325.117-.75.265-1.282.453a36.238 36.238 0 0 1-4.078 1.172c-1.313.289-2.465.582-3.453.875-.98.289-1.852.562-2.61.812-.761.25-1.465.446-2.11.594a8.877 8.877 0 0 1-1.937.219c-.437 0-.804-.121-1.093-.36-.293-.23-.438-.652-.438-1.265Zm0 0"
      />
    </svg>
  );
};
