import jurisdictions from '../data/geo/monroe-jurisdictions.json';

function pointInRing(point, ring) {
  const [x, y] = point;
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i];
    const [xj, yj] = ring[j];
    if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) {
      inside = !inside;
    }
  }
  return inside;
}

function pointInGeometry(point, geometry) {
  if (geometry.type === 'Polygon') {
    if (!pointInRing(point, geometry.coordinates[0])) return false;
    for (let i = 1; i < geometry.coordinates.length; i++) {
      if (pointInRing(point, geometry.coordinates[i])) return false;
    }
    return true;
  }
  if (geometry.type === 'MultiPolygon') {
    return geometry.coordinates.some(poly => {
      if (!pointInRing(point, poly[0])) return false;
      for (let i = 1; i < poly.length; i++) {
        if (pointInRing(point, poly[i])) return false;
      }
      return true;
    });
  }
  return false;
}

/**
 * Given { lat, lng }, returns all matching jurisdictions.
 * Result is sorted: villages first, then towns/city.
 *
 * Example return for a phone in Fairport:
 *   [{ name: 'Fairport', tier: 'village' }, { name: 'Perinton', tier: 'town' }]
 *
 * Example return for a phone in Greece (no village overlay):
 *   [{ name: 'Greece', tier: 'town' }]
 *
 * Returns [] if outside Monroe County.
 */
export function resolveJurisdiction({ lat, lng }) {
  const point = [lng, lat];
  const matches = [];
  for (const feature of jurisdictions.features) {
    if (pointInGeometry(point, feature.geometry)) {
      const tier = feature.properties.tier;
      const name = feature.properties.name;
      const prefix = tier === 'city' ? 'City of' : tier === 'village' ? 'Village of' : 'Town of';
      matches.push({ name, tier, displayName: prefix + ' ' + name });
    }
  }
  matches.sort((a, b) => {
    if (a.tier === 'village' && b.tier !== 'village') return -1;
    if (a.tier !== 'village' && b.tier === 'village') return 1;
    return 0;
  });
  return matches;
}