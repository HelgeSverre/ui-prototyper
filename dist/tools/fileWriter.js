import { createTool } from '@voltagent/core';
import { z } from 'zod';
import { writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
export const fileWriterTool = createTool({
    name: 'write_file',
    description: 'Writes content to a file in the project output directory',
    parameters: z.object({
        filename: z.string().describe('The filename to write (e.g., PROJECT-BRIEF.md)'),
        content: z.string().describe('The content to write to the file'),
        format: z.enum(['md', 'json', 'svg', 'txt']).describe('The file format')
    }),
    execute: async ({ filename, content, format }) => {
        try {
            const outputDir = join(process.cwd(), 'output');
            mkdirSync(outputDir, { recursive: true });
            const filePath = join(outputDir, filename);
            mkdirSync(dirname(filePath), { recursive: true });
            if (format === 'json' && typeof content === 'string') {
                // Pretty print JSON
                try {
                    const parsed = JSON.parse(content);
                    writeFileSync(filePath, JSON.stringify(parsed, null, 2));
                }
                catch {
                    writeFileSync(filePath, content);
                }
            }
            else {
                writeFileSync(filePath, content);
            }
            return {
                success: true,
                path: filePath,
                message: `File written successfully to ${filePath}`
            };
        }
        catch (error) {
            return {
                success: false,
                error: error instanceof Error ? error.message : 'Unknown error'
            };
        }
    }
});
