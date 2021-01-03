AFRAME.registerComponent('hit_points', {
    schema: {
      hp: {type: 'int', default: 1}
    },
});

AFRAME.registerComponent('ammo', {
  schema: {
    count: {type: 'int', default: 10}
  },
});