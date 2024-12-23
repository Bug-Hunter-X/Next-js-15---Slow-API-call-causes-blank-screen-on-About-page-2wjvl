```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href="/about">
        <a>Go to About</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // Simulate a slow API call
  const data = await fetch('/api/data');
  const json = await data.json();
  console.log(json);
  return (
    <div>About page</div>
  );
}
```
```javascript
// pages/api/data.js

export default async function handler(req, res) {
  // Simulate a slow API call
  await new Promise((resolve) => setTimeout(resolve, 5000));
  res.status(200).json({ text: 'Data from API' });
}
```