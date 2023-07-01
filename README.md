# AI Text summarization Web App
This is a web app that uses the bart-large-cnn model to summarize text. The model is hosted on and server and communicate with the App thanks to HuggingFace API. The server then sends back the summarized text to the web app.
## How to run the web App
First, using GitHub CLI, clone the repository:
<pre><code>gh repo clone gian0012/bart-large-cnn-webapp </code></pre>

Then, install the requirements:
<pre><code>npm install</code></pre>

Finally, run the app:

<pre><code>npm run start</code></pre>

## 🤖 Language Model
The language model used is <a href="https://huggingface.co/facebook/bart-large-cnn">bart-large-cnn</a>