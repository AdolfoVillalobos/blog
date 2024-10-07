import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
	path: {
		type: "string",
		resolve: (doc) => `/${doc._raw.flattenedPath}`,
	},
	slug: {
		type: "string",
		resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
	},
};

export const Project = defineDocumentType(() => ({
	name: "Project",
	filePathPattern: "./projects/**/*.mdx",
	contentType: "mdx",

	fields: {
		published: {
			type: "boolean",
		},
		title: {
			type: "string",
			required: true,
		},
		description: {
			type: "string",
			required: true,
		},
		date: {
			type: "date",
			required: true,
		},
		url: {
			type: "string",
		},
		repository: {
			type: "string",
		},
	},
	computedFields,
}));

export const Post = defineDocumentType(() => ({
	name: "Post",
	filePathPattern: "posts/**/*.mdx",
	contentType: "mdx",
	fields: {
		title: {
			type: "string",
			required: true,
		},
		date: {
			type: "date",
			required: true,
		},
		summary: {
			type: "string",
		},
		image: {
			type: "string",
		},
	},
	computedFields,
}));

export default makeSource({ contentDirPath: './content', documentTypes: [Post, Project], mdx: { remarkPlugins: [remarkGfm],
} })
