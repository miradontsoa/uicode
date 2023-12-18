import matter from "gray-matter";
import fs from "fs";
import path from "path";

export const CODE_PATH = path.join(process.cwd(), 'src', 'code');

export const getCode = async (codePath: string, language?: string): Promise<{
    markdown: string,
    content: string,
} | null | undefined> => {
    let fileContent = null;
    let lang = language;
    if (!language) {
        // lang = codePath.substring(codePath.lastIndexOf(".") + 1);
        lang = codePath.split('.').pop();
    }
    try {

        fileContent = await fs.promises.readFile(
            // path.join(CODE_PATH, `${codePath}.md`),
            path.join(CODE_PATH, `${codePath}`),
            // path
            //     .join(__dirname, "./content.md")
            //     .replace(".next\\server\\app", "src\\app"),
            { encoding: "utf8" }
        );
    } catch (error) {

    }
    if (!fileContent) {
        return null
    }
    return {
        markdown: "```" + `${lang} \n` + `${fileContent}` + "\n```",
        content: fileContent
    }
}

export const getMarkdown = async (codePath: string, language?: string): Promise<string> => {
    let fileContent = null;
    let lang = language;
    if (!language) {
        // lang = codePath.substring(codePath.lastIndexOf(".") + 1);
        lang = codePath.split('.').pop();
    }
    try {

        fileContent = await fs.promises.readFile(
            // path.join(CODE_PATH, `${codePath}.md`),
            path.join(CODE_PATH, `${codePath}`),
            // path
            //     .join(__dirname, "./content.md")
            //     .replace(".next\\server\\app", "src\\app"),
            { encoding: "utf8" }
        );
    } catch (error) {

    }
    if (!fileContent) {
        // return null
        return ""
    }
    return fileContent
}

