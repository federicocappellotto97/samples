/**
 * Generates a function comment for the given function body.
 *
 * @param {Node} node - The node to apply the typewriter effect to
 * @param {object} options - The options for the typewriter effect
 * @param {number} [options.speed] - The speed of the typewriter effect (default: 1)
 * @returns {object} Returns an object with the duration and a tick function
 * @throws {Error} Throws an error if the node does not have a single text node child
 * @throws {Error} Throws an error if the node does not have any text content
 */ export function typewriter(node, { speed = 1 }) {
	const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

	if (!valid) {
		throw new Error(`This transition only works on elements with a single text node child`);
	}

	const text = node.textContent;
	if (text === null) {
		throw new Error(`Node does not have any text content`);
	}
	const duration = text.length / (speed * 0.01);

	return {
		duration,
		tick: (/** @type {number} */ t) => {
			const i = Math.trunc(text.length * t);
			node.textContent = text.slice(0, i);
		}
	};
}
