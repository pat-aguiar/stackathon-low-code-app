const router = require('express').Router();
const fs = require('fs');
const path = require('path')

module.exports = router;

// POST /api/create
// handles -create new directory
router.post('/', async (req, res, next) => {
  try {
    await fs.mkdir(path.join(__dirname, '..', '..', 'test'), null, (err) => { console.log(err)}) 
  }
  catch (error) {
    next(error);
  }
});

// POST /api/create
// handles -create new file
router.post('/file/:fileName', async (req, res, next) => {
    const { fileName } = req.params;
    try {
      await fs.writeFile(path.join(__dirname, '..', '..', 'test', `${fileName}.js`), 'trying to create a new file', (err) => { console.log(err)}) 
    }
    catch (error) {
      next(error);
    }
  });