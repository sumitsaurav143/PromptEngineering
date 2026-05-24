# React + Vite
LIVE At: https://sumitsaurav143.github.io/PromptEngineering/


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## OpenAI Setup Guide

Follow these steps to set up a local Python environment in VS Code and test the OpenAI SDK.

1. Create a project folder

```bash
mkdir openai-test
cd openai-test
```

2. Open the folder in VS Code

```bash
code .
```

3. Create a virtual environment

```bash
python3 -m venv venv
```

4. Activate the virtual environment

- Mac/Linux:

```bash
source venv/bin/activate
```

- Windows:

```bash
venv\Scripts\activate
```

5. Install required packages

```bash
pip install openai python-dotenv
```

6. Create an environment file

```bash
touch .env
```

Add your OpenAI API key inside `.env`:

```env
OPENAI_API_KEY=your_openai_secret_key_here
```

7. Create the Python file

```bash
touch app.py
```

Add this code to `app.py`:

```python
import os
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY")
)

response = client.responses.create(
    model="gpt-4o-mini",
    input="Hi"
)

print(response.output_text)
```

8. Run the application

```bash
python app.py
```

Expected output:

```text
Hi! How can I help you today?
```

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
