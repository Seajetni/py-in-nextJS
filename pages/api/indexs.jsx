// api/run-python.js
import { spawn } from 'child_process';
import bodyParser from 'body-parser';



export const config = {
  api: {
    bodyParser: false,
  },
};

export default (req, res) => {
  // Enable JSON body parsing
  bodyParser.json()(req, res, async () => {
    const { code } = req.body;

    // Execute Python script
    const pythonProcess = spawn('python', ['in.py', code]);

    let output = 'ตกใจมั้ยสัส';
    let error = 'ไม่ได้';

    // Capture output
    pythonProcess.stdout.on('data', (data) => {
      output += data.toString();
    });

    // Capture errors
    pythonProcess.stderr.on('data', (data) => {
      error += data.toString();
    });

    // Handle process completion
    pythonProcess.on('close', (code) => {
      if (code === 0) {
        res.status(200).json({ output });
      } else {
        res.status(500).json({ error });
      }
    });
  });
};
