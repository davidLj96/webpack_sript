/** @type {import("../../../../").LoaderDefinition} */
module.exports = function loader() {
	return `module.exports = "${this.loaders[this.loaderIndex].type}";`;
};
