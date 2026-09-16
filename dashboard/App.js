import './App.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const digitalHabitsData = [
  { item: 'Check social media ASAP', mean: 2.93 },
  { item: 'Surprised by time spent online', mean: 2.63 },
  { item: 'Avoid unpleasant info online', mean: 2.32 },
  { item: 'Avoid decisions about data privacy', mean: 2.38 },
  { item: 'Bookmark but never revisit', mean: 2.26 },
  { item: 'Unfollow people who disagree', mean: 2.05 },
  { item: 'Read news from aligned outlets', mean: 1.99 },
  { item: 'Avoid checking emails', mean: 1.24 },
];

function App() {
  return (
    <div className="App">
      <h1>Research Dashboard</h1>
      <p>Digital Loneliness Study - Data Visualization</p>

      <h2>Digital Habits Scale (Mean Scores, n=52)</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={digitalHabitsData} layout="vertical" margin={{ left: 150 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[0, 5]} />
          <YAxis type="category" dataKey="item" width={140} />
          <Tooltip />
          <Bar dataKey="mean" fill="#003366" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default App;
