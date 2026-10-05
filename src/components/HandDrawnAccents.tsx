import React from 'react';

/**
 * Trazos de crayón y recursos infantiles para fondos y acentos.
 * Trazos vivos, claramente visibles como dibujos auténticos con crayones de cera.
 */

export const CrayonScribble: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#ECAD05',
}) => (
  <svg
    viewBox="0 0 140 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M6 24C20 10 36 34 50 16C64 2 80 38 95 18C110 4 122 30 134 16"
      stroke={color}
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity="0.85"
    />
  </svg>
);

export const CrayonSun: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#ECAD05',
}) => (
  <svg
    viewBox="0 0 90 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle
      cx="45"
      cy="45"
      r="18"
      stroke={color}
      strokeWidth="4.5"
      strokeLinecap="round"
      strokeOpacity="0.9"
      strokeDasharray="6 3"
    />
    <path d="M45 8V18" stroke={color} strokeWidth="4.5" strokeLinecap="round" strokeOpacity="0.9" />
    <path d="M45 72V82" stroke={color} strokeWidth="4.5" strokeLinecap="round" strokeOpacity="0.9" />
    <path d="M8 45H18" stroke={color} strokeWidth="4.5" strokeLinecap="round" strokeOpacity="0.9" />
    <path d="M72 45H82" stroke={color} strokeWidth="4.5" strokeLinecap="round" strokeOpacity="0.9" />
    <path d="M19 19L27 27" stroke={color} strokeWidth="4.5" strokeLinecap="round" strokeOpacity="0.9" />
    <path d="M63 63L71 71" stroke={color} strokeWidth="4.5" strokeLinecap="round" strokeOpacity="0.9" />
    <path d="M19 71L27 63" stroke={color} strokeWidth="4.5" strokeLinecap="round" strokeOpacity="0.9" />
    <path d="M63 27L71 19" stroke={color} strokeWidth="4.5" strokeLinecap="round" strokeOpacity="0.9" />
  </svg>
);

export const CrayonSpiral: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#38BDF8',
}) => (
  <svg
    viewBox="0 0 70 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M35 35C32 31 28 37 32 40C38 45 44 32 37 26C27 18 16 32 24 43C33 55 52 52 57 37C62 19 43 6 24 11"
      stroke={color}
      strokeWidth="4.5"
      strokeLinecap="round"
      strokeOpacity="0.85"
    />
  </svg>
);

export const CrayonLoop: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#F97316',
}) => (
  <svg
    viewBox="0 0 180 55"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M8 42C32 8 48 8 60 38C72 8 88 8 100 38C112 8 128 8 140 38C152 14 164 20 172 32"
      stroke={color}
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity="0.85"
    />
  </svg>
);

export const CrayonSmudge: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#ECAD05',
}) => (
  <svg
    viewBox="0 0 110 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M6 18C22 10 44 26 66 14C82 5 96 22 104 16"
      stroke={color}
      strokeWidth="7"
      strokeLinecap="round"
      strokeOpacity="0.6"
    />
  </svg>
);
