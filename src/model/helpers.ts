import { FAKE_BRANDS, FAKE_BADGES } from './constants';
import { Badge } from './types';

export function getSomeBrand() {
  return FAKE_BRANDS[Math.floor(Math.random() * FAKE_BRANDS.length)];
}

export function getSomeBadge(): Badge {
  return FAKE_BADGES[Math.floor(Math.random() * FAKE_BADGES.length)];
}
