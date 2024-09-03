[{"content":"import React, { useState } from 'react';\nimport { render, screen } from '@testing-library/react';\nimport user from '@testing-library/user-event';\n\nconst Counter = () => {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount((c) => c + 1)}>Count: {count}</button>;\n};\n\nrender(<Counter />);","type":"code","id":"az9bh"},{"content":"test('it shows a button', () => {\n  render(<Counter />);\n\n  const button = screen.getByRole('button');\n\n  expect(\n    button\n  ).toBeInTheDocument();\n});\n","type":"code","id":"ngyzj"}]