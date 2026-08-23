export default async function(eleventyConfig) {
    eleventyConfig.setInputDirectory("src")

	eleventyConfig.addPassthroughCopy("src/_assets")
};