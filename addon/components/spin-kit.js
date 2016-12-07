import Ember from 'ember';
import layout from '../templates/components/spin-kit';
const {
  Component,
  computed: { equal }
} = Ember;

export default Component.extend({
  animation: 'sk-rotating-plane',
  classNameBindings: [
    'skRotatingPlane:sk-rotating-plane',
    'skWave:sk-wave',
    'skWanderingCubes:sk-wandering-cubes',
    'skSpinner:sk-spinner',
    'skSpinnerPulse:sk-spinner-pulse',
    'skChasingDots:sk-chasing-dots',
    'skThreeBounce:sk-three-bounce',
    'skCircle:sk-circle',
    'skCubeGrid:sk-cube-grid',
    'skFadingCircle:sk-fading-circle',
    'skFoldingCube:sk-folding-cube',
  ],

  layout,

  skRotatingPlane: equal('animation', 'sk-rotating-plane'),
  skDoubleBounce: equal('animation', 'sk-double-bounce'),
  skWave: equal('animation', 'sk-wave'),
  skWanderingCubes: equal('animation', 'sk-wandering-cubes'),
  skSpinner: equal('animation', 'sk-spinner-pulse'),
  skSpinnerPulse: equal('animation', 'sk-spinner-pulse'),
  skChasingDots: equal('animation', 'sk-chasing-dots'),
  skThreeBounce: equal('animation', 'sk-three-bounce'),
  skCircle: equal('animation', 'sk-circle'),
  skCubeGrid: equal('animation', 'sk-cube-grid'),
  skFadingCircle: equal('animation', 'sk-fading-circle'),
  skFoldingCube: equal('animation', 'sk-folding-cube')
});