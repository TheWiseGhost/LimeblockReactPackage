# @limeblock/react - Limeblock for React

## Installation

Run the following command:

```sh
npm install @limeblock/react
```

## Basic Usage

```sh
import React from 'react';
import { ChatWidget } from '@limeblock/react';

const MyApp = () => {
  const API_KEY = process.env.NEXT_PUBLIC_LIMEBLOCK_API_KEY || "lime_YOUR_API_KEY";

  const contextParams = {
    board_id: "679fdb26a14496f9423891fe",
    user_id: "user_2tFLPXZyEnTmNQsenlQXNU3Q5Z4",
  };

  return (
    <div>
      {/* Your application content */}
      <h1>Welcome to My App</h1>

      {/* Limeblock ChatWidget */}
      <ChatWidget
        apiKey={API_KEY}
        contextParams={contextParams}
      />
    </div>
  );
};

export default MyApp;
```

### Read more on about usage at https://limeblock.io/docs/
