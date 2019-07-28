export const ANGLE = {
  [45]: Math.PI / 4,
  [90]: Math.PI / 2,
  [180]: Math.PI,
  [360]: Math.PI * 2
}

export const HALL_RADIUS = 900

export const EXTRA_RADIUS = 380

export const SEAT_RADIUS_HALF = 20  // 座位的直线边长度

export const AREA = [
  'A', 'B', 'C', 'D'
]

export const SEAT_NUMBER_EVERY_ROW = Array.from({ length: 26 }).map((N, i) => 50 + 2 * i)

export const RENDER_CONFIG = {
  'A': {
    angle: 178,
    color: '#FFFF99'
  },
  'B': {
    angle: 224,
    color: '#FF6666'
  },
  'C': {
    angle: 270,
    color: '#99CCFF', 
  },
  'D': {
    angle: 316,
    color: '#FF99CC'
  }
}