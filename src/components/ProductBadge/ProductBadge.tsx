import { Badge } from '@/model/types';
import styles from './ProductBadge.module.css';

export default function ProductBadge({ badge }: { badge: Badge }) {
  const badgeClass = [
    styles.badge,
    badge !== 'USUAL' ? styles[badge.toLowerCase()] : '',
  ].join(' ');

  return <p className={badgeClass}>{badge !== 'USUAL' ? badge : ''}</p>;
}
