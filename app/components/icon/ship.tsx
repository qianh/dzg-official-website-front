import { IIcon } from "./common";

export default function Ship(props: IIcon) {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 18 18"
      fill="none"
      opacity={props.opacity}
    >
      <path
        d="M15.6645 13.275C15.552 12.9937 15.2145 12.8531 14.9333 12.9937L13.977 13.4156C13.6958 13.5281 13.3864 13.6406 13.077 13.725L14.9052 8.80313C15.102 8.2125 14.7927 7.56563 14.202 7.36875L12.9083 6.91875L12.9083 3.9375C12.9083 3.31875 12.402 2.8125 11.7833 2.8125L10.377 2.8125L10.377 1.6875C10.377 0.759375 9.61766 0 8.68954 0L7.00204 0C6.07391 0 5.31454 0.759375 5.31454 1.6875L5.31454 2.8125L3.90829 2.8125C3.28954 2.8125 2.78329 3.31875 2.78329 3.9375L2.78329 7.00313L1.71454 7.36875C1.43329 7.48125 1.20829 7.67812 1.09579 7.95937C0.983292 8.24063 0.955167 8.55 1.06767 8.83125L2.92391 13.8094C2.55829 13.725 2.19266 13.6406 1.85516 13.4719L0.786417 12.9937C0.505167 12.8531 0.167668 12.9937 0.0551679 13.275C-0.0854571 13.5562 0.0551679 13.8938 0.336417 14.0063L1.37704 14.4844C2.02391 14.7656 2.67079 14.9344 3.37391 14.9906L3.85204 14.9906C4.49891 14.9906 5.14579 14.8781 5.76453 14.6812C6.38329 14.4844 7.00204 14.3719 7.62079 14.3719L8.09891 14.3719C8.57703 14.4 9.02703 14.4844 9.50516 14.625L9.70203 14.6812C10.1802 14.8219 10.6302 14.9062 11.1083 14.9625L11.277 14.9625C11.3895 14.9625 11.502 14.9625 11.6145 14.9906L11.8958 14.9906C12.0364 14.9906 12.1489 14.9906 12.2895 14.9625L12.3177 14.9625L12.4864 14.9344C13.1614 14.85 13.8364 14.6812 14.4552 14.4L15.4114 13.9781C15.6645 13.8938 15.8052 13.5562 15.6645 13.275ZM6.43954 1.6875C6.43954 1.37812 6.69266 1.125 7.00204 1.125L8.68954 1.125C8.99891 1.125 9.25204 1.37812 9.25204 1.6875L9.25204 2.8125L6.43954 2.8125L6.43954 1.6875ZM11.8114 13.8938L11.4458 13.8938C11.3895 13.8938 11.3052 13.8938 11.2489 13.8656C10.9395 13.8375 10.602 13.7812 10.2927 13.6969L10.0958 13.6406C9.53329 13.4719 8.97079 13.3594 8.38016 13.3031L8.38016 6.55312L13.8364 8.4375L11.8114 13.8938ZM3.90829 3.9375L11.7833 3.9375L11.7833 6.46875L9.11141 5.54063C8.74578 5.42812 8.38016 5.34375 8.01453 5.34375C7.64891 5.34375 7.28329 5.4 6.91766 5.54063L3.90829 6.55312L3.90829 3.9375ZM7.28329 6.66563L7.28329 13.3031C6.52391 13.3313 5.76453 13.4719 5.03329 13.725C4.75204 13.8094 4.44266 13.8938 4.16141 13.8938L2.10829 8.4375L7.28329 6.66563Z"
        fill={props.fill}
      ></path>
    </svg>
  );
}
