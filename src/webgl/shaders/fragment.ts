export const fragmentShader = `
varying float vDistortion;
uniform float uOpacity;
vec3 cosPalette(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
  return a + b * cos(6.28318 * (c * t + d));
}   
void main() {
  float distort = vDistortion * uOpacity;
  vec3 brightness = vec3(0.5, 0.5, 0.5);
  vec3 contrast = vec3(0.5, 0.5, 0.5);
  vec3 oscilation = vec3(1.0, 1.0, 1.0);
  vec3 phase = vec3(0.3,0.9,0.8);
  vec3 color = cosPalette(distort, brightness, contrast, oscilation, phase);
  gl_FragColor = vec4(color, 0.12);
}
`;
