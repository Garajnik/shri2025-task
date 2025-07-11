
import { useRef, useEffect } from 'react';

export function Event({ icon, iconLabel, title, subtitle, slim, onSize }) {
  const ref = useRef();

  useEffect(() => {
    const width = ref.current.offsetWidth;
    const height = ref.current.offsetHeight;
    if (onSize) onSize({ width, height });
  }, [onSize]);

  return (
    <li ref={ref} className={`event${slim ? ' event_slim' : ''}`}>
      <button className="event__button">
        <span className={`event__icon event__icon_${icon}`} role="img" aria-label={iconLabel}></span>
        <h4 className="event__title">{title}</h4>
        {subtitle && <span className="event__subtitle">{subtitle}</span>}
      </button>
    </li>
  );
}
