import llama_index
from llama_index import GPTVectorStoreIndex, Document, SimpleDirectoryReader, LlamaIndex
import os
import openai

os.environ['OPENAI_API_KEY'] = 'sk-YOUR-API-KEY'

# Loading from a directory
documents = SimpleDirectoryReader('data').load_data()

index = LlamaIndex()
documents = [Document(text="What is the meaning of life?"), Document(text="How do I make a cup of coffee?")]
nodes = [service_context.node_parser.get_nodes_from_document(document) for document in documents]
index = GPTVectorStoreIndex.from_documents(nodes)


# Construct a simple vector index
#index = GPTVectorStoreIndex(documents)

# Save your index to a index.json file
index.save_to_disk('index.json')
# Load the index from your saved index.json file
index = GPTVectorStoreIndex.load_from_disk('index.json')

# Querying the index
response = index.query("What features do users want to see in the app?")
print(response)


