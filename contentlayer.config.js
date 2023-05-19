import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { CATEGORIES } from "./src/lib/const";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
};

const postFields = {
  id: {
    type: "number",
    required: true,
  },
  title: {
    type: "string",
    required: true,
  },
  description: {
    type: "string",
  },
  date: {
    type: "date",
    required: true,
  },
  tags: {
    type: "list",
    of: { type: "string" },
  },
  published: {
    type: "boolean",
    default: true,
  },
};

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blogs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    ...postFields,
    image: {
      type: "string",
    },
  },
  computedFields,
}));

export const Experiment = defineDocumentType(() => ({
  name: "Experiment",
  filePathPattern: `experiments/**/*.mdx`,
  contentType: "mdx",
  fields: {
    ...postFields,
    published: {
      type: "boolean",
      default: true,
    },
  },
  computedFields,
}));

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/**/*.mdx`,
  contentType: "mdx",
  fields: {
    id: {
      type: "number",
      required: true,
    },
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    date: {
      type: "date",
      required: true,
    },
    spotlight: {
      type: "boolean",
      default: false,
    },
    published: {
      type: "boolean",
      default: true,
    },
    category: {
      type: "list",
      of: { type: "enum", options: CATEGORIES },
      required: true,
    },
    image: {
      type: "string",
      required: true,
    },
    repo: {
      type: "string",
    },
    href: {
      type: "string",
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "./src/content",
  documentTypes: [Blog, Experiment, Project],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
  },
});
