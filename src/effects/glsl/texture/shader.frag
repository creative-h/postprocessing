uniform sampler2D texture;

#if defined(ASPECT_CORRECTION) || defined(UV_TRANSFORM)

	varying vec2 vUv2;

#endif

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {

	#if defined(ASPECT_CORRECTION) || defined(UV_TRANSFORM)

		outputColor = texelToLinear(texture2D(texture, vUv2));

	#else

		outputColor = texelToLinear(texture2D(texture, uv));

	#endif

}
