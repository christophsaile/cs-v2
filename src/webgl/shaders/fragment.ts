export const fragmentShader = `
uniform float uOpacity;
uniform float uDeepPurple;
varying float vDistortion;
vec3 cosPalette(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
  return a + b * cos(6.28318 * (c * t + d));
}
void main() {
  float distort = vDistortion * 3.;
  vec3 brightness = vec3(0.38,0.31,1.00);
  vec3 contrast = vec3(0.14,0.36,0.54);
  vec3 oscilation = vec3(0.01,0.65,0.65);
  vec3 phase = vec3(0.49,0.00,0.00);
  vec3 color = cosPalette(distort, brightness, contrast, oscilation, phase);
  gl_FragColor = vec4(color, vDistortion);
  gl_FragColor += vec4(0.0, 0.0, 0.0, min(uOpacity, 0.5));
}
`;
