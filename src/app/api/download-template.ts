import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import archiver from 'archiver';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { templateId } = req.query;

  if (!templateId) {
    return res.status(400).json({ error: 'Template ID is required' });
  }

  const templatePath = path.join(process.cwd(), 'public', 'templates', templateId as string);

  if (!fs.existsSync(templatePath)) {
    return res.status(404).json({ error: 'Template not found' });
  }

  const zipPath = path.join(process.cwd(), 'public', 'downloads', `${templateId}.zip`);

  // Create a file to stream archive data to.
  const output = fs.createWriteStream(zipPath);
  const archive = archiver('zip', {
    zlib: { level: 9 } // Sets the compression level.
  });

  output.on('close', function () {
    console.log(archive.pointer() + ' total bytes');
    console.log('archiver has been finalized and the output file descriptor has closed.');
    res.setHeader('Content-Type', 'application/zip');
    res.setHeader('Content-Disposition', `attachment; filename=${templateId}.zip`);
    res.setHeader('Content-Length', fs.statSync(zipPath).size);
    const fileStream = fs.createReadStream(zipPath);
    fileStream.pipe(res);
  });

  archive.on('error', function(err: Error){
    throw err;
  });

  // Pipe archive data to the file
  archive.pipe(output);

  // Append files from a directory
  archive.directory(templatePath, false);

  // Finalize the archive (i.e. we are done appending files but streams have to finish yet)
  archive.finalize();
}
