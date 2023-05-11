import os
import sys

from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def index():
  keyword = request.args.get("keyword")
  jobs = []
  if keyword:
    jobs = get_jobs(keyword)
  return render_template("index.html", jobs=jobs)

@app.route("/jobs/<int:job_id>")
def job(job_id):
  job = get_job(job_id)
  return render_template("job.html", job=job)

def get_jobs(keyword):
  """
  Gets a list of jobs that match the given keyword.

  Args:
    keyword: The keyword to search for.

  Returns:
    A list of jobs.
  """
  # TODO: Implement this function.
  return []

def get_job(job_id):
  """
  Gets a job by its ID.

  Args:
    job_id: The ID of the job to get.

  Returns:
    The job.
  """
  # TODO: Implement this function.
  return {}

if __name__ == "__main__":
  port = int(os.environ.get("PORT", 5000))
  app.run(host="0.0.0.0", port=port)
