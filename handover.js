import express from 'express';
const router = express.Router();

const dummyHandovers = [
  { id: 1, title: 'Morning Shift', summary: 'Checked all equipment' },
  { id: 2, title: 'Evening Shift', summary: 'Pending maintenance' }
];

router.get('/', (req, res) => {
  res.json(dummyHandovers);
});

export default router;