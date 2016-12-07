import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('spin-kit', 'Integration | Component | spin kit', {
  integration: true
});

test('sk-rotating-plane is rendered by default', function(assert) {

  this.render(hbs`{{spin-kit}}`);
  assert.equal(this.$('.sk-rotating-plane').length, 1, 'it renders sk-rotating-plane');
});

test('rendering sk-rotating-plane', function(assert) {

  this.render(hbs`{{spin-kit animation="sk-rotating-plane"}}`);
  assert.equal(this.$('.sk-rotating-plane').length, 1, 'it renders sk-rotating-plane');
});

test('rendering sk-wave', function(assert) {

  this.render(hbs`{{spin-kit animation="sk-wave"}}`);
  assert.equal(this.$('.sk-wave').length, 1, 'it renders sk-wave');
  assert.equal(this.$('.sk-rect1').length, 1, 'it renders sk-rect1');
  assert.equal(this.$('.sk-rect2').length, 1, 'it renders sk-rect2');
  assert.equal(this.$('.sk-rect3').length, 1, 'it renders sk-rect3');
  assert.equal(this.$('.sk-rect4').length, 1, 'it renders sk-rect4');
  assert.equal(this.$('.sk-rect5').length, 1, 'it renders sk-rect5');
});

test('rendering sk-wandering-cubes', function(assert) {

  this.render(hbs`{{spin-kit animation="sk-wandering-cubes"}}`);
  assert.equal(this.$('.sk-wandering-cubes').length, 1, 'it renders sk-wandering-cubes');
  assert.equal(this.$('.sk-cube1').length, 1, 'it renders sk-cube1');
  assert.equal(this.$('.sk-cube2').length, 1, 'it renders sk-cube2');
});

test('rendering sk-spinner-pulse', function(assert) {

  this.render(hbs`{{spin-kit animation="sk-spinner-pulse"}}`);
  assert.equal(this.$('.sk-spinner').length, 1, 'it renders sk-spinner');
  assert.equal(this.$('.sk-spinner.sk-spinner-pulse').length, 1, 'it contains sk-spinner-pulse');
});

test('rendering sk-chasing-dots', function(assert) {

  this.render(hbs`{{spin-kit animation="sk-chasing-dots"}}`);
  assert.equal(this.$('.sk-chasing-dots').length, 1, 'it renders sk-chasing-dots');
  assert.equal(this.$('.sk-dot1').length, 1, 'it renders sk-dot1');
  assert.equal(this.$('.sk-dot2').length, 1, 'it renders sk-dot2');
});

test('rendering sk-three-bounce', function(assert) {

  this.render(hbs`{{spin-kit animation="sk-three-bounce"}}`);
  assert.equal(this.$('.sk-three-bounce').length, 1, 'it renders sk-three-bounce');
  assert.equal(this.$('.sk-bounce1').length, 1, 'it renders sk-bounce1');
  assert.equal(this.$('.sk-bounce2').length, 1, 'it renders sk-bounce2');
  assert.equal(this.$('.sk-bounce2').length, 1, 'it renders sk-bounce3');
});

test('rendering sk-circle', function(assert) {

  this.render(hbs`{{spin-kit animation="sk-circle"}}`);
  assert.equal(this.$('.sk-circle').length, 1, 'it renders sk-circle');
  assert.equal(this.$('.sk-circle1').length, 1, 'it renders sk-circle1');
  assert.equal(this.$('.sk-circle2').length, 1, 'it renders sk-circle2');
  assert.equal(this.$('.sk-circle3').length, 1, 'it renders sk-circle3');
  assert.equal(this.$('.sk-circle4').length, 1, 'it renders sk-circle4');
  assert.equal(this.$('.sk-circle5').length, 1, 'it renders sk-circle5');
  assert.equal(this.$('.sk-circle6').length, 1, 'it renders sk-circle6');
  assert.equal(this.$('.sk-circle7').length, 1, 'it renders sk-circle7');
  assert.equal(this.$('.sk-circle8').length, 1, 'it renders sk-circle8');
  assert.equal(this.$('.sk-circle9').length, 1, 'it renders sk-circle9');
  assert.equal(this.$('.sk-circle10').length, 1, 'it renders sk-circle10');
  assert.equal(this.$('.sk-circle11').length, 1, 'it renders sk-circle11');
  assert.equal(this.$('.sk-circle12').length, 1, 'it renders sk-circle12');
});

test('rendering sk-cube-grid', function(assert) {

  this.render(hbs`{{spin-kit animation="sk-cube-grid"}}`);
  assert.equal(this.$('.sk-cube-grid').length, 1, 'it renders sk-cube-grid');
  assert.equal(this.$('.sk-cube1').length, 1, 'it renders sk-cube1');
  assert.equal(this.$('.sk-cube2').length, 1, 'it renders sk-cube2');
  assert.equal(this.$('.sk-cube3').length, 1, 'it renders sk-cube3');
  assert.equal(this.$('.sk-cube4').length, 1, 'it renders sk-cube4');
  assert.equal(this.$('.sk-cube5').length, 1, 'it renders sk-cube5');
  assert.equal(this.$('.sk-cube6').length, 1, 'it renders sk-cube6');
  assert.equal(this.$('.sk-cube7').length, 1, 'it renders sk-cube7');
  assert.equal(this.$('.sk-cube8').length, 1, 'it renders sk-cube8');
  assert.equal(this.$('.sk-cube9').length, 1, 'it renders sk-cube9');
});

test('rendering sk-fading-circle', function(assert) {

  this.render(hbs`{{spin-kit animation="sk-fading-circle"}}`);
  assert.equal(this.$('.sk-fading-circle').length, 1, 'it renders sk-fading-circle');
  assert.equal(this.$('.sk-circle1').length, 1, 'it renders sk-circle1');
  assert.equal(this.$('.sk-circle2').length, 1, 'it renders sk-circle2');
  assert.equal(this.$('.sk-circle3').length, 1, 'it renders sk-circle3');
  assert.equal(this.$('.sk-circle4').length, 1, 'it renders sk-circle4');
  assert.equal(this.$('.sk-circle5').length, 1, 'it renders sk-circle5');
  assert.equal(this.$('.sk-circle6').length, 1, 'it renders sk-circle6');
  assert.equal(this.$('.sk-circle7').length, 1, 'it renders sk-circle7');
  assert.equal(this.$('.sk-circle8').length, 1, 'it renders sk-circle8');
  assert.equal(this.$('.sk-circle9').length, 1, 'it renders sk-circle9');
});

test('rendering sk-folding-cube', function(assert) {

  this.render(hbs`{{spin-kit animation="sk-folding-cube"}}`);
  assert.equal(this.$('.sk-folding-cube').length, 1, 'it renders sk-folding-cube');
  assert.equal(this.$('.sk-cube1').length, 1, 'it renders sk-cube1');
  assert.equal(this.$('.sk-cube2').length, 1, 'it renders sk-cube2');
  assert.equal(this.$('.sk-cube3').length, 1, 'it renders sk-cube3');
  assert.equal(this.$('.sk-cube4').length, 1, 'it renders sk-cube4');
});